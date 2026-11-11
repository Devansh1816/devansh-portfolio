import { projects, type Project } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconDesktop, IconExternal, IconSupport, IconVideo } from "@/components/icons";

const projectIcons = {
  support: IconSupport,
  desktop: IconDesktop,
  video: IconVideo,
} as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.icon];

  return (
    <Reveal delay={index * 110}>
      <article className="surface surface-interactive group flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-[0_14px_35px_-16px_rgba(139,92,246,0.95)]`}
          >
            <Icon className="h-6 w-6" />
          </span>

          {project.status ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-brand-cyan">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan"
              />
              {project.status}
            </span>
          ) : null}
        </div>

        <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-brand-violet/90">{project.summary}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 border-t border-white/5 pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Focus
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300 transition-colors duration-300 group-hover:border-brand-purple/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-[0_16px_36px_-20px_rgba(139,92,246,1)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Visit Live Website
            <IconExternal className="h-3.5 w-3.5" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="Featured projects"
        title={
          <>
            Products I&apos;m <span className="text-gradient">designing and building</span>
          </>
        }
        description="Each project starts from a real problem and is built independently, using AI tooling and AI-assisted coding to move from idea to working product."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
