import { PAIN_POINTS, MARKET_STATS } from '@/data/painPoints';

const ICONS: Record<string, string> = {
  search: '🔍',
  phone: '📞',
  list: '📋',
  shield: '🛡️',
};
// Nota: emojis usados como placeholder. Substituir por SVG custom em tarefa futura de polish.

export function PainPoints() {
  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-deep text-center mb-4">
          Encontrar fornecedores B2B no Brasil hoje é manual e caro
        </h2>
        <p className="text-lg text-graphite text-center max-w-3xl mx-auto mb-12">
          O B2B brasileiro movimenta R$ 2,4 trilhões por ano. Menos de 5% acontece em plataformas digitais transacionais.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PAIN_POINTS.map((pp) => (
            <div key={pp.title} className="bg-white rounded-lg p-6 border border-graphite-soft/20">
              <div className="text-3xl mb-3">{ICONS[pp.icon]}</div>
              <h3 className="text-lg font-bold text-gold-burnt mb-2">{pp.title}</h3>
              <p className="text-sm text-graphite leading-relaxed">{pp.body}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-center text-graphite-soft">{MARKET_STATS}</p>
      </div>
    </section>
  );
}
