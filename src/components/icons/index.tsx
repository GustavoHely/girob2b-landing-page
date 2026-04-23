export type IconProps = { className?: string; size?: number; strokeWidth?: number };

const defaults = (size = 24, strokeWidth = 1.5) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

/** Lupa editorial: círculo + linha diagonal com terminação engrossada */
export function IconSearch({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      {/* Main lens circle */}
      <circle cx="10.5" cy="10.5" r="6.5" />
      {/* Diagonal handle — thickened toward tip via widening cap */}
      <line x1="15.5" y1="15.5" x2="21" y2="21" strokeWidth={strokeWidth * 1.8} strokeLinecap="round" />
      {/* Tiny inner cross — editorial detail */}
      <line x1="8.5" y1="10.5" x2="12.5" y2="10.5" strokeWidth={strokeWidth * 0.8} />
      <line x1="10.5" y1="8.5" x2="10.5" y2="12.5" strokeWidth={strokeWidth * 0.8} />
    </svg>
  );
}

/** Telefone com 2 arcos de ring sutis saindo do bocal */
export function IconPhone({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      {/* Handset body */}
      <path d="M6 3C6 3 4 3 4 5v3.5c0 6.5 7 11.5 10 12.5h1.5c2 0 2-2 2-2v-2.5L15 14l-2 1s-3-1-5-5l1-2-2.5-3.5L6 3Z" />
      {/* Ring arc 1 */}
      <path d="M15.5 4a5.5 5.5 0 0 1 4.5 4.5" strokeOpacity="0.6" />
      {/* Ring arc 2 — tighter */}
      <path d="M15.5 7a2.5 2.5 0 0 1 2 2" strokeOpacity="0.4" />
    </svg>
  );
}

/** Documento com 3 linhas de conteúdo + check pequeno no canto inferior direito */
export function IconListStructured({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      {/* Document outline */}
      <path d="M6 2h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
      {/* Folded corner */}
      <path d="M14 2v4h4" strokeOpacity="0.5" />
      {/* Content lines */}
      <line x1="8" y1="9" x2="15" y2="9" />
      <line x1="8" y1="12.5" x2="13" y2="12.5" />
      <line x1="8" y1="16" x2="11" y2="16" />
      {/* Check mark badge — bottom right */}
      <path d="M14 15.5l1.5 1.5 2.5-2.5" strokeWidth={strokeWidth * 0.85} />
    </svg>
  );
}

/** Escudo com check editorial dentro */
export function IconShieldCheck({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      {/* Shield — slightly asymmetric bottom for character */}
      <path d="M12 2L4 5.5v6c0 5 3.5 8.5 8 10.5C16.5 19.5 20 16 20 11.5v-6L12 2Z" />
      {/* Check */}
      <path d="M8.5 12l2.5 2.5 4.5-5" strokeWidth={strokeWidth * 1.1} />
    </svg>
  );
}

/** Check refinado — sem serrilha, com leve overshooting no final */
export function IconCheck({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      <path d="M4.5 12.5l5 5 9.5-10" />
    </svg>
  );
}

/** Chevron editorial — leve, inclinado */
export function IconChevronDown({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Raio com ponta inferior afiada e detalhe de spark no topo */
export function IconBolt({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      {/* Main bolt */}
      <path d="M13 2L5 13h7l-1 9 8-11h-7l1-9Z" />
      {/* Tiny spark detail */}
      <line x1="17" y1="3" x2="18.5" y2="1.5" strokeWidth={strokeWidth * 0.7} strokeOpacity="0.6" />
    </svg>
  );
}

/** Asterisco de 4 pontas — elegante, rotation 45° gives diamond feel */
export function IconSparkle({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      {/* 4 arms */}
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      {/* Center dot — editorial touch */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** X discreto — duas linhas cruzadas, pair visual do IconCheck */
export function IconX({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg {...defaults(size, strokeWidth)} className={className} aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

/** YouTube logo — filled pill + play triangle. Excecao ao padrao stroke (marca oficial). */
export function IconYouTube({ className, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M21.582 7.186a2.506 2.506 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418A2.506 2.506 0 0 0 2.418 7.186C2 8.746 2 12 2 12s0 3.254.418 4.814a2.506 2.506 0 0 0 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"
        fill="currentColor"
      />
      <path d="M10 15.464V8.536L16 12l-6 3.464z" fill="#F4F1EA" />
    </svg>
  );
}

/** Instagram logo — rounded square + ring + dot. Excecao ao padrao stroke (marca oficial). */
export function IconInstagram({ className, size = 24, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
