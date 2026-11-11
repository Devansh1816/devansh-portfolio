/**
 * Single source of truth for every piece of content on the site.
 * Update values here instead of editing the section components.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  description: string;
  /** Only set when the status is confirmed. */
  status?: string;
  /** Live product URL, when the product is publicly available. */
  website?: string;
  /** Product focus areas derived from the product description. */
  focus: string[];
  icon: "support" | "desktop" | "video";
  /** Tailwind gradient classes used for the card accent. */
  accent: string;
};

export type Skill = {
  name: string;
  detail: string;
  icon: "excel" | "sql" | "ai" | "prompt" | "product" | "saas" | "code";
};

export type JourneyStep = {
  stage: string;
  title: string;
  description: string;
};

export const site = {
  /** Logo text shown in the navbar and footer. */
  logo: "DEVANSH",
  name: "Devansh Tripathi",
  role: "AI Product Builder | Aspiring AI Product Manager",
  greeting: "Hello, I'm Devansh.",
  headline: "Building Ideas Into AI-Powered Products.",
  intro:
    "I'm an AI product builder with a commerce background, focused on turning everyday problems into practical, AI-powered products. Right now I'm building HelpPilot AI — a multilingual customer support SaaS for small Indian e-commerce businesses.",
  /**
   * Contact details — email opens the default mail client (mailto:),
   * LinkedIn and GitHub open in a new tab.
   */
  contact: {
    email: "devanshtripathi784@gmail.com",
    linkedin: "https://www.linkedin.com/in/devansh-tripathi-05202a447/",
    github: "https://github.com/Devansh1816",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs: string[] = [
  "My journey into AI did not start in a computer science classroom. It started with a commerce background, where I learned how businesses actually operate — how customers decide, how small teams are stretched thin, and where the operational friction really sits.",
  "That background is what pulled me towards products. I kept noticing the same pattern: small businesses carrying problems large enough to hurt them, but with no affordable tool built for their scale. AI is what makes those tools possible to build without a large engineering team.",
  "So I started learning by building — AI tools and prompt engineering, spreadsheets and SQL to keep decisions grounded in data, and AI-assisted coding to turn ideas into working interfaces. My goal is to grow into an AI Product Manager who understands both the product and the technical constraints behind it.",
];

export const aboutHighlights: string[] = [
  "Commerce background — a working understanding of customers, margins and how small businesses run.",
  "Problem-first thinking — starting from the real user pain, not from the technology.",
  "AI tooling — prompt engineering and AI-assisted workflows as everyday building blocks.",
  "Data basics — Excel and SQL for analysis, reporting and decision support.",
];

export const projects: Project[] = [
  {
    id: "helppilot-ai",
    name: "HelpPilot AI",
    summary: "Multilingual AI customer support SaaS for small Indian e-commerce businesses.",
    description:
      "A support product for small Indian e-commerce sellers who handle customer queries in multiple languages across limited staff. It is built around the idea that reliable multilingual support should be affordable for teams of one or two people.",
    status: "Live Website",
    website: "https://helppilotai.vercel.app/",
    focus: ["Multilingual support", "Customer support", "SaaS for small sellers"],
    icon: "support",
    accent: "from-brand-purple to-brand-blue",
  },
  {
    id: "goya-ai",
    name: "GoYa AI",
    summary: "AI-powered desktop assistant designed to help users interact with their PC.",
    description:
      "A desktop assistant concept built around natural interaction with a computer — so routine tasks on a PC can be handled through conversation instead of hunting through menus and settings.",
    focus: ["Desktop assistant", "Conversational interaction", "Everyday productivity"],
    icon: "desktop",
    accent: "from-brand-blue to-brand-cyan",
  },
  {
    id: "ai-video-creator-kit",
    name: "AI Video Creator Kit",
    summary:
      "Digital toolkit designed to help beginner Hindi YouTube creators create AI-powered videos.",
    description:
      "A toolkit for beginner Hindi YouTube creators who want to use AI in their video workflow. The goal is to lower the barrier for creators starting out — turning scattered AI know-how into a step-by-step, usable kit.",
    focus: ["Creative toolkit", "Hindi creators", "AI-powered video workflow"],
    icon: "video",
    accent: "from-brand-violet to-brand-purple",
  },
];

export const skills: Skill[] = [
  {
    name: "Excel",
    detail: "Spreadsheet analysis, modelling and reporting",
    icon: "excel",
  },
  {
    name: "SQL",
    detail: "Querying and exploring structured data",
    icon: "sql",
  },
  {
    name: "AI Tools",
    detail: "Working fluently with modern AI models and tools",
    icon: "ai",
  },
  {
    name: "Prompt Engineering",
    detail: "Designing prompts that produce reliable output",
    icon: "prompt",
  },
  {
    name: "Product Thinking",
    detail: "Framing problems, scoping solutions, prioritising",
    icon: "product",
  },
  {
    name: "SaaS Development",
    detail: "Turning concepts into working web product experiences",
    icon: "saas",
  },
  {
    name: "AI-assisted Coding",
    detail: "Using AI to move from idea to working software",
    icon: "code",
  },
];

export const journey: JourneyStep[] = [
  {
    stage: "01",
    title: "Commerce foundations",
    description:
      "Started out with a commerce background — building an understanding of how businesses operate, how customers make decisions, and where real operational pain lives.",
  },
  {
    stage: "02",
    title: "Learning the building blocks",
    description:
      "Moved into self-directed learning: Excel and SQL for working with data, alongside the fundamentals of how software products are put together.",
  },
  {
    stage: "03",
    title: "Into AI",
    description:
      "Went deep on AI tools and prompt engineering, exploring how language models can be shaped into products that solve specific, everyday problems.",
  },
  {
    stage: "04",
    title: "Building independently",
    description:
      "Began designing and building my own product concepts end to end, using AI-assisted coding to move from an idea to a working prototype.",
  },
  {
    stage: "05",
    title: "Now — HelpPilot AI",
    description:
      "Currently developing HelpPilot AI, a multilingual AI customer support SaaS for small Indian e-commerce businesses. The next step: growing into an AI Product Manager role.",
  },
];
