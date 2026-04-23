import { useState } from 'react';
import { WaitlistModal } from '@/components/modals/WaitlistModal';

export function HeroV2() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-teal-deep text-offwhite py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gold-soft text-sm font-medium tracking-wider uppercase mb-4">
            Marketplace B2B brasileiro
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Encontre fornecedores B2B qualificados sem perder semanas ligando
          </h1>
          <p className="text-lg md:text-xl text-offwhite/90 mb-8 leading-relaxed">
            A GiroB2B conecta compradores e fornecedores com busca técnica real: cada produto cadastrado tem atributos estruturados (material, dimensão, certificação) e quota mensal de leads garantida por plano.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-gold-burnt hover:bg-gold-soft text-white font-bold text-lg px-8 py-4 rounded transition"
          >
            Entrar na lista de espera
          </button>
          <p className="text-sm text-offwhite/70 mt-4">
            Lançamento previsto para maio/2026 — quem entra na lista é avisado antes.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/logo-v3-monograma.png"
            alt="GiroB2B — logo"
            className="max-w-sm w-full drop-shadow-xl"
            loading="eager"
          />
        </div>
      </div>

      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} source="landing_hero" />
    </section>
  );
}
