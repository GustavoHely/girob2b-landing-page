import { useState } from 'react';
import { WaitlistModal } from '@/components/modals/WaitlistModal';

export function FinalCTA() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-teal-deep text-offwhite py-16 md:py-20">
      <div className="max-w-container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para conectar sua empresa a compradores qualificados?
        </h2>
        <button
          onClick={() => setOpen(true)}
          className="bg-gold-burnt hover:bg-gold-soft text-white font-bold text-lg px-10 py-4 rounded transition"
        >
          Entrar na lista de espera
        </button>
        <p className="text-sm text-offwhite/70 mt-4">
          Sem compromisso. Zero cobrança antes do lançamento.
        </p>
      </div>
      <WaitlistModal open={open} onClose={() => setOpen(false)} source="landing_final_cta" />
    </section>
  );
}
