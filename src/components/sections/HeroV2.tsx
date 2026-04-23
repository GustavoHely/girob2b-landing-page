import { useState } from 'react';
import { WaitlistModal } from '@/components/modals/WaitlistModal';

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none" aria-hidden="true">
      {/* Glow radial behind the card */}
      <div className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle at 50% 50%, #C08A2E, transparent 70%)' }} />

      {/* Main card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(10, 92, 92, 0.45)',
          border: '1px solid rgba(192, 138, 46, 0.25)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        {/* Card header bar */}
        <div
          className="flex items-center gap-2 px-5 py-3"
          style={{ borderBottom: '1px solid rgba(192, 138, 46, 0.15)' }}
        >
          <div className="flex gap-1.5">
            <span className="block w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(192,138,46,0.4)' }} />
            <span className="block w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(192,138,46,0.25)' }} />
            <span className="block w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(192,138,46,0.15)' }} />
          </div>
          <span className="text-xs font-sans text-offwhite/40 ml-2 tracking-wide">GiroB2B — Painel do Fornecedor</span>
        </div>

        <div className="p-5 space-y-4">
          {/* Leads row */}
          <div
            className="rounded-xl p-4"
            style={{
              background: 'rgba(244, 241, 234, 0.05)',
              border: '1px solid rgba(192, 138, 46, 0.2)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-sans font-medium tracking-wide uppercase text-offwhite/50">
                Leads do mês
              </span>
              <span
                className="text-xs font-sans px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(192, 138, 46, 0.15)',
                  color: '#D4A04A',
                  border: '1px solid rgba(192, 138, 46, 0.3)',
                }}
              >
                Plano Pro
              </span>
            </div>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-sans font-black text-offwhite leading-none">47</span>
              <span className="text-sm font-sans text-offwhite/40 mb-0.5">/ 100 disponíveis</span>
            </div>
            {/* Progress bar */}
            <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(244,241,234,0.1)' }}>
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: '47%',
                  background: 'linear-gradient(90deg, #C08A2E, #D4A04A)',
                }}
              />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3">
            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(244, 241, 234, 0.05)',
                border: '1px solid rgba(192, 138, 46, 0.15)',
              }}
            >
              <p className="text-xs font-sans text-offwhite/40 uppercase tracking-wide mb-2">SKUs ativos</p>
              <p className="text-2xl font-sans font-black text-offwhite leading-none">342</p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(244, 241, 234, 0.05)',
                border: '1px solid rgba(192, 138, 46, 0.15)',
              }}
            >
              <p className="text-xs font-sans text-offwhite/40 uppercase tracking-wide mb-2">Taxa de resposta</p>
              <p className="text-2xl font-sans font-black text-offwhite leading-none">94%</p>
            </div>
          </div>

          {/* Verified badge row */}
          <div
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{
              background: 'rgba(192, 138, 46, 0.08)',
              border: '1px solid rgba(192, 138, 46, 0.3)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M9 1.5L10.854 3.708L13.7 3.5L14.5 6.3L17 7.5L16 10.15L17 12.75L14.5 13.95L13.7 16.5L10.854 16.292L9 18.5L7.146 16.292L4.3 16.5L3.5 13.95L1 12.75L2 10.15L1 7.5L3.5 6.3L4.3 3.5L7.146 3.708L9 1.5Z"
                fill="#C08A2E"
                fillOpacity="0.3"
              />
              <path
                d="M6 9L8 11L12 7"
                stroke="#D4A04A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-sans font-medium" style={{ color: '#D4A04A' }}>
              Fornecedor Verificado
            </span>
            <span className="ml-auto text-xs font-sans text-offwhite/30">CNPJ ativo</span>
          </div>
        </div>
      </div>

      {/* Floating small accent card — offset to break grid */}
      <div
        className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 w-40"
        style={{
          background: 'rgba(10, 92, 92, 0.7)',
          border: '1px solid rgba(192, 138, 46, 0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <p className="text-xs font-sans text-offwhite/50 uppercase tracking-wide">Buscas hoje</p>
        <p className="text-xl font-sans font-black text-offwhite mt-0.5">1.283</p>
        <p className="text-xs font-sans mt-1" style={{ color: '#D4A04A' }}>+12% vs ontem</p>
      </div>
    </div>
  );
}

export function HeroV2() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden text-offwhite"
      style={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(192,138,46,0.12), transparent 35%),
          radial-gradient(circle at 85% 80%, rgba(10,92,92,0.95), transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(42,122,122,0.4), transparent 50%),
          linear-gradient(180deg, #0A5C5C 0%, #103838 100%)
        `,
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* Decorative floating blobs */}
      <div
        className="absolute -top-32 -right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(192,138,46,0.12)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(42,122,122,0.2)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'rgba(192,138,46,0.07)', filter: 'blur(50px)' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative max-w-container mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <p
              className="font-sans font-bold uppercase tracking-widest text-xs"
              style={{ color: '#D4A04A' }}
            >
              Marketplace B2B brasileiro
            </p>

            {/* Headline */}
            <h1
              className="font-sans font-black text-5xl md:text-6xl lg:text-7xl text-offwhite"
              style={{ lineHeight: '1.05' }}
            >
              Encontre fornecedores B2B qualificados sem perder semanas ligando
            </h1>

            {/* Subheadline — narrower for editorial breathing room (Gemini pairing feedback) */}
            <p
              className="font-sans font-normal text-lg md:text-xl leading-relaxed max-w-[30rem]"
              style={{ color: 'rgba(244, 241, 234, 0.82)', lineHeight: '1.65' }}
            >
              A GiroB2B conecta compradores e fornecedores com busca técnica real: cada produto cadastrado tem atributos estruturados (material, dimensão, certificação) e quota mensal de leads garantida por plano.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #C08A2E 0%, #D4A04A 100%)',
                  color: '#1A1F1F',
                  boxShadow: '0 4px 24px rgba(192, 138, 46, 0.35)',
                }}
              >
                Entrar na lista de espera
              </button>

              {/* Secondary text */}
              <p
                className="font-sans text-sm mt-4"
                style={{ color: 'rgba(244, 241, 234, 0.65)' }}
              >
                Lançamento previsto para maio/2026 — quem entra na lista é avisado antes.
              </p>
            </div>
          </div>

          {/* Right column — dashboard mockup */}
          <div className="flex items-center justify-center lg:justify-end pt-8 lg:pt-0 pb-8 lg:pb-0">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Section separator — SVG diagonal cut */}
      <div className="relative w-full overflow-hidden leading-none" style={{ height: '60px', marginTop: '-1px' }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          aria-hidden="true"
        >
          <path d="M0,60 L1440,0 L1440,60 Z" fill="#F4F1EA" />
        </svg>
      </div>

      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} source="landing_hero" />
    </section>
  );
}
