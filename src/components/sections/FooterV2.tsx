const GUSTAVO_LINKEDIN = 'https://www.linkedin.com/in/gustavo-hely/';

export function FooterV2() {
  return (
    <footer className="bg-graphite text-offwhite pt-14 pb-0">
      {/* Main grid — brand column is wider */}
      <div className="max-w-container mx-auto px-6 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-12">

        {/* Col 1 — Brand (2× width) */}
        <div>
          <img
            src="/logo-v3-g-isolated.png"
            alt="GiroB2B"
            className="h-12 w-12 mb-4 object-contain"
          />
          <p className="font-sans text-offwhite/70 text-sm leading-relaxed max-w-xs">
            Conecte sua empresa a compradores B2B qualificados. Sem intermediários.
          </p>
          <a
            href={GUSTAVO_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm text-gold-soft hover:text-gold-burnt transition-colors"
          >
            {/* LinkedIn icon inline */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Col 2 — Produto */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-offwhite/40 mb-4">
            Produto
          </h4>
          <ul className="space-y-2.5 text-sm text-offwhite/70">
            <li><a href="#how" className="hover:text-gold-soft transition-colors">Como funciona</a></li>
            <li><a href="#pricing" className="hover:text-gold-soft transition-colors">Planos</a></li>
            <li><a href="#faq" className="hover:text-gold-soft transition-colors">FAQ</a></li>
            <li>
              <a href="mailto:comercial@girob2b.com.br" className="hover:text-gold-soft transition-colors">
                comercial@girob2b.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 — Empresa */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-offwhite/40 mb-4">
            Empresa
          </h4>
          <ul className="space-y-2.5 text-sm text-offwhite/70">
            <li><a href="#team" className="hover:text-gold-soft transition-colors">Sobre</a></li>
            <li><span className="text-offwhite/30">Termos de uso</span></li>
            <li><span className="text-offwhite/30">Privacidade</span></li>
            <li><span className="text-offwhite/30">LGPD</span></li>
          </ul>
        </div>

        {/* Col 4 — Investidores */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-offwhite/40 mb-4">
            Investidores
          </h4>
          <p className="text-sm text-offwhite/60 leading-relaxed mb-3">
            Interesse em investimento ou parceria estratégica?
          </p>
          <a
            href={GUSTAVO_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold-soft hover:text-gold-burnt transition-colors underline underline-offset-2"
          >
            Conecte-se pelo LinkedIn
          </a>
        </div>
      </div>

      {/* Hairline divider — gold tint */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(192,138,46,0.4) 30%, rgba(192,138,46,0.4) 70%, transparent)',
        }}
      />

      {/* Bottom bar */}
      <div className="max-w-container mx-auto px-6 py-4">
        <p className="text-xs tracking-wider text-offwhite/30 font-sans">
          GiroB2B Plataforma de Negócios Digitais · CNPJ 65.542.877/0001-50 · Inova Simples · © 2026
        </p>
      </div>
    </footer>
  );
}
