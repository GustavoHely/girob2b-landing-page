import { supabase } from './supabase';
import { trackEvent } from './analytics';

export type WaitlistSupplierPayload = {
  email: string;
  cnpj: string;
  category: string;
  consent_marketing: boolean;
  source: 'landing_hero' | 'landing_pricing' | 'landing_final_cta' | 'landing_footer';
};

export type WaitlistEnterprisePayload = {
  name: string;
  email: string;
  company: string;
  estimated_volume?: string;
  message?: string;
};

function readUTMs() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
  };
}

export async function submitSupplier(payload: WaitlistSupplierPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('waitlist_suppliers')
      .insert({
        ...payload,
        ...readUTMs(),
        user_agent: navigator.userAgent,
      });

    if (error) {
      // Código 23505 = unique violation (email+cnpj já existe)
      if (error.code === '23505') {
        return { ok: false, error: 'Esse CNPJ+email já está na lista de espera. Tudo certo, vamos te avisar.' };
      }
      trackEvent('waitlist_supplier_error', { message: error.message });
      return { ok: false, error: 'Erro ao enviar. Tente novamente em alguns segundos.' };
    }

    trackEvent('waitlist_supplier_submit', { source: payload.source, category: payload.category });
    return { ok: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erro desconhecido';
    trackEvent('waitlist_supplier_error', { message: msg });
    return { ok: false, error: 'Erro de conexão. Verifique sua internet e tente novamente.' };
  }
}

export async function submitEnterprise(payload: WaitlistEnterprisePayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('waitlist_enterprise').insert(payload);
    if (error) {
      trackEvent('enterprise_contact_submit', { status: 'error' });
      return { ok: false, error: 'Erro ao enviar. Tente novamente em alguns segundos.' };
    }
    trackEvent('enterprise_contact_submit', { status: 'success' });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: 'Erro de conexão. Verifique sua internet e tente novamente.' };
  }
}
