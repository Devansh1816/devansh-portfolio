const nodes = [
  { x: 200, y: 60 },
  { x: 320, y: 120 },
  { x: 340, y: 240 },
  { x: 260, y: 330 },
  { x: 140, y: 330 },
  { x: 62, y: 240 },
  { x: 80, y: 120 },
  { x: 200, y: 200 },
  { x: 200, y: 320 },
  { x: 120, y: 200 },
  { x: 280, y: 200 },
];

const edges: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
  [0, 7],
  [1, 7],
  [2, 7],
  [5, 7],
  [6, 7],
  [3, 7],
  [4, 7],
  [2, 10],
  [6, 9],
  [3, 8],
  [4, 8],
];

const chips = [
  { label: "Prompt Engineering", className: "left-0 top-8", delay: "0s" },
  { label: "Product Thinking", className: "right-0 top-24", delay: "1.4s" },
  { label: "AI Tools", className: "bottom-16 left-2", delay: "2.6s" },
  { label: "SaaS Development", className: "bottom-6 right-4", delay: "3.8s" },
];

/** Abstract "AI system" visual built from layered SVG and CSS — no image assets. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[27rem]">
      <div
        aria-hidden="true"
        className="absolute inset-8 animate-glow rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(139,92,246,0.55),transparent_62%),radial-gradient(circle_at_72%_76%,rgba(59,130,246,0.5),transparent_62%)] blur-3xl"
      />

      {/* Rotating orbit rings */}
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <circle
          cx="200"
          cy="200"
          r="176"
          fill="none"
          stroke="rgba(168,85,247,0.28)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="rgba(34,211,238,0.18)"
          strokeWidth="1"
          strokeDasharray="40 14"
        />
      </svg>

      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slower"
      >
        <circle
          cx="200"
          cy="200"
          r="188"
          fill="none"
          stroke="rgba(59,130,246,0.22)"
          strokeWidth="1"
          strokeDasharray="1 6"
        />
      </svg>

      {/* Static node graph */}
      <svg viewBox="0 0 400 400" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hero-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="hero-core" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.25" />
          </radialGradient>
        </defs>

        {edges.map(([from, to]) => {
          const start = nodes[from];
          const end = nodes[to];

          return (
            <line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="url(#hero-edge)"
              strokeWidth="1"
            />
          );
        })}

        {nodes.map((node, index) => (
          <circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r={index === 7 ? 9 : 4}
            fill={index === 7 ? "url(#hero-core)" : "rgba(196,181,253,0.9)"}
          />
        ))}
      </svg>

      {/* Core */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-brand-violet/80 via-brand-blue/60 to-brand-cyan/50 text-sm font-semibold tracking-[0.3em] text-white shadow-[0_0_60px_rgba(139,92,246,0.65)] backdrop-blur-sm"
      >
        AI
      </div>

      {/* Floating focus chips */}
      {chips.map((chip) => (
        <span
          key={chip.label}
          style={{ animationDelay: chip.delay }}
          className={`absolute ${chip.className} animate-float rounded-full border border-white/10 bg-abyss/80 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-slate-300 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.9)] backdrop-blur-md sm:text-xs`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}
