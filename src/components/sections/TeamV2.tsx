import { teamMembers } from '@/data/team';

export function TeamV2() {
  return (
    <section id="team" className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-deep text-center mb-3">
          Quem está construindo
        </h2>
        <p className="text-lg text-graphite text-center mb-12">
          Três sócios com domínios complementares trabalhando em tempo integral na GiroB2B.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((m) => (
            <div key={m.name} className="bg-white rounded-lg p-6 text-center">
              <img
                src={m.photoUrl}
                alt={m.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-offwhite"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-teal-deep mb-1">{m.name}</h3>
              <p className="text-sm text-gold-burnt font-medium mb-3">{m.title}</p>
              <p className="text-sm text-graphite leading-relaxed mb-4">{m.bio}</p>
              {m.linkedinUrl && (
                <a
                  href={m.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-deep hover:text-teal-mid underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
