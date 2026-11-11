import { skills, type Skill } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconAi,
  IconCode,
  IconExcel,
  IconProduct,
  IconPrompt,
  IconSaas,
  IconSql,
} from "@/components/icons";

const skillIcons = {
  excel: IconExcel,
  sql: IconSql,
  ai: IconAi,
  prompt: IconPrompt,
  product: IconProduct,
  saas: IconSaas,
  code: IconCode,
} as const;

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skillIcons[skill.icon];

  return (
    <Reveal delay={index * 70}>
      <article className="surface surface-interactive group flex h-full items-start gap-4 p-5 sm:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-purple/25 to-brand-cyan/20 text-brand-cyan transition-colors duration-300 group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-base font-semibold tracking-tight text-white">{skill.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{skill.detail}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title={
          <>
            The toolkit I <span className="text-gradient">build with</span>
          </>
        }
        description="A working combination of business fundamentals, data skills and modern AI tooling — used together to take an idea from problem statement to shipped product."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  );
}
