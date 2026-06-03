import portfolioData from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950" />

      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-24 -left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-8 -right-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(9,9,11,0.55)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-zinc-950" />

      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-8 py-16">
        <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/60 bg-zinc-950/40 px-5 py-2.5 text-sm text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for freelance and full-time roles
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-cyan-300">{portfolioData.profile.name}</span>
        </h1>

        <p className="text-zinc-300 text-xl max-w-2xl">{portfolioData.profile.headline}</p>
        <p className="text-zinc-400 max-w-3xl leading-relaxed">
          {portfolioData.profile.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-zinc-950 font-semibold hover:bg-cyan-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-800/60 bg-zinc-950/40 px-6 py-3 text-zinc-100 font-semibold hover:bg-zinc-800/30 transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-zinc-500 max-w-2xl">
          Scroll to learn more about my work, the tools I use, and how to reach me.
        </p>
      </div>
    </section>
  );
}

