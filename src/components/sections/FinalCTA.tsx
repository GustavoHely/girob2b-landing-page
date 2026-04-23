import { useState } from 'react';
import { WaitlistModal } from '@/components/modals/WaitlistModal';

export function FinalCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="py-20 md:py-28 text-offwhite relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(192,138,46,0.14), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(42,122,122,0.35), transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(22,102,102,0.5), transparent 55%),
          linear-gradient(160deg, #0A5C5C 0%, #07393A 100%)
        `,
      }}
    >
      {/* Gold blur accent — top right */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(192,138,46,0.12)', filter: 'blur(70px)' }}
      />
      {/* Teal blob — bottom left */}
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'rgba(10,92,92,0.6)', filter: 'blur(60px)' }}
      />

      {/* Noise texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          mixBlendMode: 'overlay',
        }}
      />

      <div className="relative max-w-container mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="font-sans font-bold uppercase tracking-widest text-gold-soft text-xs mb-6">Pronto para começar?</p>

        {/* Headline — mix display + sans */}
        <h2 className="font-sans font-black text-4xl md:text-5xl text-offwhite mb-8 max-w-3xl mx-auto leading-tight">
          Pronto para{' '}
          <span className="font-sans font-black" style={{ color: '#D4A04A' }}>conectar sua empresa</span>
          {' '}a compradores qualificados?
        </h2>

        {/* CTA button */}
        <button
          onClick={() => setOpen(true)}
          className="font-sans font-bold text-base px-10 py-4 rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #C08A2E 0%, #D4A04A 100%)',
            color: '#1A1F1F',
            boxShadow: '0 6px 32px rgba(192, 138, 46, 0.40)',
          }}
        >
          Entrar na lista de espera
        </button>

        <p className="text-sm mt-5" style={{ color: 'rgba(244,241,234,0.55)' }}>
          Sem compromisso. Zero cobrança antes do lançamento.
        </p>
      </div>

      <WaitlistModal open={open} onClose={() => setOpen(false)} source="landing_final_cta" />
    </section>
  );
}
