import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/HeroVisual";
import { IconArrowRight, IconMail } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative scroll-mt-24 overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-widest text-slate-300 backdrop-blur-md sm:text-sm sm:tracking-[0.2em]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(34,211,238,0.9)]"
              />
              {site.greeting}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="hero-title"
              className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building Ideas Into <span className="text-gradient">AI-Powered Products.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-base sm:tracking-[0.22em]">
              {site.role}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {site.intro}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#projects">
                Explore Projects
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="ghost">
                <IconMail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
