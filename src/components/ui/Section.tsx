import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  /** id of the heading element that labels this section. */
  labelledBy?: string;
  className?: string;
};

/** Standard page section: consistent max width, padding and anchor offset. */
export function Section({ id, children, labelledBy, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-24 py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

/** Eyebrow + gradient title + optional description, with a reveal animation. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cyan">
        <span
          aria-hidden="true"
          className="h-px w-8 bg-gradient-to-r from-brand-cyan to-transparent"
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      ) : null}
    </Reveal>
  );
}
