import { teamMembers } from '../../data/team';
import styles from '../../styles/LandingPage.module.css';

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section
      id="sobre"
      className="border-y border-emerald-100/80 bg-[#f4fbf6] py-20 md:py-24 xl:py-28"
    >
      <div className={styles.container}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-accent">
            Quem constrói a GiroB2B
          </span>
          <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl xl:text-5xl">
            Um time pequeno, dedicado a resolver um problema real do B2B brasileiro.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            A GiroB2B é construída por pessoas que viveram de perto a dificuldade de comprar e
            vender entre empresas no Brasil.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => {
            const cleanName = member.name.replace(/\s*\[PENDENTE:.*?\]/g, '').trim();
            const hasLinkedIn = !member.linkedinUrl.startsWith('[PENDENTE');

            return (
              <article
                key={member.name}
                className={`${styles.cardPremium} flex h-full flex-col items-center text-center`}
              >
                <div className="h-28 w-28 overflow-hidden rounded-full border border-brand-accent/30 bg-emerald-50">
                  <img
                    src={member.photoUrl}
                    alt={'Foto de ' + cleanName}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent">
                  {member.role}
                </span>
                <h3 className="mt-2 text-xl font-black text-slate-900">{cleanName}</h3>
                <div className="mt-1 text-sm font-bold text-slate-700">{member.title}</div>
                <p className="mt-4 mb-6 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                {hasLinkedIn && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-emerald-700 transition-colors"
                  >
                    <LinkedInIcon />
                    Ver no LinkedIn
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
