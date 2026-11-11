import { aboutHighlights, aboutParagraphs } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeading
        id="about-title"
        eyebrow="About me"
        title={
          <>
            From commerce to <span className="text-gradient">building with AI</span>
          </>
        }
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div className="space-y-5">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 90}>
              <p className="text-base leading-relaxed text-slate-400 sm:text-[1.0625rem]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="surface h-full p-6 sm:p-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-cyan">
              What I bring
            </h3>
            <ul className="mt-5 space-y-4">
              {aboutHighlights.map((highlight) => {
                const [lead, ...rest] = highlight.split(" — ");

                return (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan"
                    />
                    <p className="text-sm leading-relaxed text-slate-400">
                      <span className="font-medium text-slate-200">{lead}</span>
                      {rest.length ? ` — ${rest.join(" — ")}` : ""}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
