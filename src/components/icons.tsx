type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* ---------------------------------------------------------------
   Navigation & contact
   --------------------------------------------------------------- */

export function IconMenu({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconMail({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7.5 12 13l8.5-5.5" />
    </svg>
  );
}

export function IconLinkedIn({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.5v.01M11.5 17v-3.5a2.5 2.5 0 0 1 5 0V17" />
    </svg>
  );
}

export function IconGitHub({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 20.5v-2.7c-3 .5-3.6-1.4-3.6-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.6 0-.6 0-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.2.7-1.5-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.2 1-3-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.7 1a6.6 6.6 0 0 1 3.6 0c1.9-1.3 2.7-1 2.7-1 .5 1.2.2 2.2.1 2.4.6.8 1 1.8 1 3 0 4.2-2.5 5.1-4.9 5.4.4.4.7 1.1.7 2.1v3.3" />
    </svg>
  );
}

export function IconExternal({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18.5 14.5V19a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19V7.5A1.5 1.5 0 0 1 6 6h4.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Project icons
   --------------------------------------------------------------- */

export function IconSupport({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 12a8 8 0 1 0-3.3 6.5L21 20l-.6-3.3A7.9 7.9 0 0 0 20 12Z" />
      <path d="M9 11h6M9 14.5h3.5" />
    </svg>
  );
}

export function IconDesktop({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M9 20h6M12 16.5V20" />
      <path d="M12 7.5v3M12 10.5c0 1.4 1.4 1.6 2.3 2.3" />
    </svg>
  );
}

export function IconVideo({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="5.5" width="13" height="13" rx="2.5" />
      <path d="M15.5 11l6-3.2v8.4l-6-3.2z" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Skill icons
   --------------------------------------------------------------- */

export function IconExcel({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M3.5 15h17M10 9.5V20" />
    </svg>
  );
}

export function IconSql({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <ellipse cx="12" cy="6.5" rx="7.5" ry="3" />
      <path d="M4.5 6.5v11c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-11" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </svg>
  );
}

export function IconAi({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5l1.7 4.3 4.3 1.7-4.3 1.7L12 15.5l-1.7-4.3L6 9.5l4.3-1.7z" />
      <path d="M18 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
    </svg>
  );
}

export function IconPrompt({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M7 10l2.5 2.5L7 15M12.5 15.5h4.5" />
    </svg>
  );
}

export function IconProduct({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function IconSaas({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17.5h9.2a4.3 4.3 0 0 0 .4-8.6 6 6 0 0 0-11.4 1.4A3.6 3.6 0 0 0 7 17.5Z" />
    </svg>
  );
}

export function IconCode({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.5 5.5l-3 13" />
    </svg>
  );
}
