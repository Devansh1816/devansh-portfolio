import { journey } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Journey() {
  return (
    <Section id="journey" labelledBy="journey-title">
      <SectionHeading
        id="journey-title"
        eyebrow="My journey"
        title={
          <>
            A self-directed path into <span className="text-gradient">AI products</span>
          </>
        }
        description="Stages of learning and independent product building — from business fundamentals to shipping my own AI-powered products."
      />

      <ol className="mt-12 max-w-3xl">
        {journey.map((step, index) => {
          const isLast = index === journey.length - 1;

          return (
            <li
              key={step.stage}
              className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-5 sm:gap-x-6"
            >
              {/* Marker column: keeps the rail and the numbered marker clear of the text */}
              <div className="relative flex justify-center">
                {isLast ? null : (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/10"
                  />
                )}
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-abyss text-[10px] font-semibold tracking-wider text-brand-cyan shadow-[0_0_22px_rgba(34,211,238,0.25)]">
                  {step.stage}
                </span>
              </div>

              {/* Content column */}
              <Reveal delay={index * 90} className={isLast ? "min-w-0" : "min-w-0 pb-12"}>
                <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem]">
                  {step.description}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
