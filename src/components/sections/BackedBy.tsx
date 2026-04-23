import { IconYouTube, IconInstagram } from '@/components/icons';

export function BackedBy() {
  return (
    <section id="apoiado-por" className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-sans font-bold uppercase tracking-widest text-gold-burnt text-xs mb-3">
            Apoiado por
          </p>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-graphite">
            Investidor-anjo
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start"
            style={{
              background: 'linear-gradient(135deg, rgba(10,92,92,0.04) 0%, rgba(192,138,46,0.04) 100%)',
              border: '1px solid rgba(10, 92, 92, 0.10)',
            }}
          >
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="/team/matheus.jpg"
                alt="Matheus Pucci"
                className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover shadow-md"
                style={{ border: '3px solid rgba(192, 138, 46, 0.3)' }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-sans font-bold text-2xl text-graphite mb-3">
                Matheus Pucci
              </h3>
              <p className="font-sans text-graphite/75 leading-relaxed mb-5 text-base">
                Criador do canal RessacaMotor — 323 mil inscritos na cobertura de Fórmula 1 no Brasil.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://www.youtube.com/@RessacaMotor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-gold-burnt transition-colors"
                >
                  <IconYouTube size={20} className="text-[#FF0000]" />
                  <span>RessacaMotor</span>
                </a>
                <a
                  href="https://www.instagram.com/ressacamotoroficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-gold-burnt transition-colors"
                >
                  <IconInstagram size={18} />
                  <span>@ressacamotoroficial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
