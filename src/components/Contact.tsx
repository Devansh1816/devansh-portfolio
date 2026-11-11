import { site } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconGitHub, IconLinkedIn, IconMail } from "@/components/icons";

export function Contact() {
  const { email, linkedin, github } = site.contact;

  const channels = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: IconMail,
      external: false,
    },
    {
      label: "LinkedIn",
      value: linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: linkedin,
      icon: IconLinkedIn,
      external: true,
    },
    {
      label: "GitHub",
      value: github.replace(/^https?:\/\/(www\.)?/, ""),
      href: github,
      icon: IconGitHub,
      external: true,
    },
  ];

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy/80 via-abyss to-void px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-purple/25 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-[100px]"
        />

        <div className="relative">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title={
              <>
                Let&apos;s build something <span className="text-gradient">useful</span>
              </>
            }
            description="I'm open to conversations about AI products, product management and early-stage ideas. Reach out through whichever channel works best for you."
          />

          <Reveal delay={120}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={`mailto:${email}`}>
                <IconMail className="h-4 w-4" />
                Send an email
              </Button>
              <Button href={linkedin} variant="ghost" external>
                <IconLinkedIn className="h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {channels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <Reveal key={channel.label} delay={160 + index * 80}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="surface surface-interactive flex h-full min-w-0 flex-col gap-3 p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {channel.label}
                    </span>
                    <span className="break-all text-sm text-slate-300">
                      {channel.value}
                      {channel.external ? (
                        <span className="sr-only"> (opens in a new tab)</span>
                      ) : null}
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
