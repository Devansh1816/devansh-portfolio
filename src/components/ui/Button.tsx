import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  /** Opens the link in a new tab with safe rel attributes. */
  external?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white shadow-[0_18px_45px_-18px_rgba(139,92,246,0.9)] hover:shadow-[0_22px_55px_-16px_rgba(59,130,246,0.95)]",
  ghost:
    "border border-white/15 bg-white/[0.03] text-slate-200 hover:border-brand-purple/60 hover:bg-white/[0.06] hover:text-white",
} as const;

/** Accessible link styled as a button. */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
