const GUSTAVO_LINKEDIN = 'https://www.linkedin.com/in/gustavo-hely/';

export function FooterV2() {
  return (
    <footer className="bg-graphite text-offwhite pt-12 pb-6">
      <div className="max-w-container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <img src="/logo-v3-flat-mono.png" alt="GiroB2B" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm text-offwhite/80">
            Marketplace B2B brasileiro que conecta empresas entre si.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Produto</h4>
          <ul className="space-y-2 text-sm text-offwhite/80">
            <li><a href="#how" className="hover:text-gold-soft">Como funciona</a></li>
            <li><a href="#pricing" className="hover:text-gold-soft">Planos</a></li>
            <li><a href="#faq" className="hover:text-gold-soft">FAQ</a></li>
            <li><a href="mailto:comercial@girob2b.com.br" className="hover:text-gold-soft">comercial@girob2b.com.br</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Empresa</h4>
          <ul className="space-y-2 text-sm text-offwhite/80">
            <li><a href="#team" className="hover:text-gold-soft">Sobre</a></li>
            <li><span className="text-offwhite/50">Termos de uso (em breve)</span></li>
            <li><span className="text-offwhite/50">Política de privacidade (em breve)</span></li>
            <li><span className="text-offwhite/50">LGPD (em breve)</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Investidores e parcerias</h4>
          <p className="text-sm text-offwhite/80 mb-2">
            Interesse em investimento ou parceria estratégica?
          </p>
          <a
            href={GUSTAVO_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold-soft hover:text-gold-burnt underline"
          >
            Conecte-se pelo LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 mt-12 pt-6 border-t border-offwhite/20 text-xs text-offwhite/60">
        GiroB2B Plataforma de Negócios Digitais · CNPJ 65.542.877/0001-50 · Inova Simples · © 2026
      </div>
    </footer>
  );
}
