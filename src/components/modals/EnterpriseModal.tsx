import { useState } from 'react';
import { validateEmail } from '@/lib/validators';
import { submitEnterprise } from '@/lib/waitlist';

type Props = { open: boolean; onClose: () => void };

export function EnterpriseModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', company: '', estimated_volume: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; error?: string } | null>(null);

  if (!open) return null;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(form.email) || !form.name.trim() || !form.company.trim()) {
      setResult({ ok: false, error: 'Preencha os campos obrigatórios corretamente.' });
      return;
    }
    setSubmitting(true);
    const res = await submitEnterprise(form);
    setResult(res);
    setSubmitting(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-graphite/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg max-w-md w-full p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        {result?.ok ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-teal-deep mb-3">Recebemos seu contato</h2>
            <p className="text-graphite mb-6">Responderemos em até 2 dias úteis no email informado.</p>
            <button onClick={onClose} className="px-6 py-2 bg-gold-burnt text-white rounded hover:bg-gold-soft font-medium">
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <h2 className="text-2xl font-bold text-teal-deep mb-2">Falar com o time — Enterprise</h2>
            <p className="text-sm text-graphite-soft mb-6">Volume alto? SLA customizado? Preencha e entraremos em contato.</p>
            <div className="space-y-3">
              {(['name', 'email', 'company'] as const).map((field) => (
                <div key={field}>
                  <label htmlFor={`e-${field}`} className="block text-sm font-medium mb-1">
                    {field === 'name' ? 'Nome' : field === 'email' ? 'Email' : 'Empresa'}{' '}
                    <span className="text-gold-burnt">*</span>
                  </label>
                  <input
                    id={`e-${field}`}
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-graphite-soft rounded focus:outline-none focus:ring-2 focus:ring-teal-deep"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="e-volume" className="block text-sm font-medium mb-1">Volume estimado (leads/mês)</label>
                <select
                  id="e-volume"
                  value={form.estimated_volume}
                  onChange={(e) => setForm({ ...form, estimated_volume: e.target.value })}
                  className="w-full px-3 py-2 border border-graphite-soft rounded focus:outline-none focus:ring-2 focus:ring-teal-deep"
                >
                  <option value="">Selecione</option>
                  <option value="300-1000">300 a 1.000</option>
                  <option value="1000-5000">1.000 a 5.000</option>
                  <option value="5000+">Mais de 5.000</option>
                </select>
              </div>
              <div>
                <label htmlFor="e-msg" className="block text-sm font-medium mb-1">Mensagem (opcional)</label>
                <textarea
                  id="e-msg"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-graphite-soft rounded focus:outline-none focus:ring-2 focus:ring-teal-deep"
                />
              </div>
              {result?.error && <p className="text-sm text-red-600">{result.error}</p>}
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={onClose} className="flex-1 px-4 py-2 border border-graphite-soft rounded">
                  Cancelar
                </button>
                <button type="submit" disabled={submitting} className="flex-1 px-4 py-2 bg-gold-burnt text-white rounded hover:bg-gold-soft font-medium disabled:opacity-50">
                  {submitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
