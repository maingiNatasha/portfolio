import portfolioData from "../data/portfolioData";
import doodle from "../assets/doodle.png";
import FadeInDiv from "./FadeInDiv";

export default function Hero() {
  return (
    <FadeInDiv>
      <section id="hero" className="min-h-screen flex items-center px-6 relative">
        <div className="relative w-full max-w-6xl mx-auto grid items-center gap-12 py-16 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-(--border) bg-(--surface) px-5 py-2.5 text-sm text-(--text-muted) backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance and full-time roles
            </div>

            <div className="max-w-3xl space-y-5">
              <h1 className="text-(--text-primary) text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Hi, I&apos;m{" "}
                <span className="bg-linear-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent">
                  Natasha
                </span>
              </h1>

              <p className="text-xl text-zinc-300 sm:text-2xl">
                A Full-Stack Developer building reliable web apps end-to-end.
              </p>

              <p className="max-w-2xl leading-relaxed text-zinc-400">
                I design clean React frontends and build practical backend logic, backed by real projects and hands-on work experience.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-800/70 bg-zinc-950/40 px-6 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-800/30"
              >
                Let&apos;s Talk
              </a>
            </div>

            <p className="max-w-2xl text-sm text-zinc-500">
              Scroll to learn more about my work, the tools I use, and how to reach me.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm lg:justify-self-end">
            <div className="group overflow-hidden rounded-[1.75rem] border border-zinc-800/70 bg-zinc-950/55 p-3 shadow-xl shadow-cyan-950/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-950/20">
              <div className="rounded-[1.25rem] border border-zinc-800/70 bg-linear-to-b from-zinc-900/80 to-zinc-950 p-3 transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Small detail</p>
                    <p className="mt-1 text-xs text-zinc-300">A little doodle for personality</p>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] text-cyan-200 transition-transform duration-300 group-hover:scale-105">
                    Fun
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.25rem] border border-zinc-800/70 bg-zinc-900/50">
                  <img
                    src={doodle}
                    alt="Hand-drawn doodle illustration"
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-88"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInDiv>
  );
}
