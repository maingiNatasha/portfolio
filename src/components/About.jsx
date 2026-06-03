import portfolioData from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/60 bg-zinc-950/50 px-5 py-2.5 text-sm text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            About Natasha
          </div>

          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Turning ideas into{" "}
              <span className="text-cyan-300">intuitive</span> and{" "}
              <span className="text-sky-300">scalable</span>{" "}
              web applications.
            </h2>

            <p className="text-lg leading-relaxed text-zinc-300">
              I'm a software developer focused on building web applications using React, TypeScript, and Node.js. I enjoy working across both frontend and backend development, building APIs, managing databases, and creating responsive user interfaces.
            </p>

            <p className="text-lg leading-relaxed text-zinc-300">
              I've worked on projects such as a procurement and inventory mobile application, along with several full-stack web applications. These projects have helped me gain practical experience in system design, database management, and collaborative development using Git and GitHub.
            </p>

            <p className="text-lg leading-relaxed text-zinc-300">
              I'm currently expanding my skills in cloud technologies and exploring AI-native development, with an interest in how modern tools can improve software building and deployment workflows.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/55 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur">
          <div className="mb-6 flex items-center justify-between border-b border-zinc-800/70 pb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Focus</p>
              <p className="mt-1 text-xl font-semibold text-zinc-100">End-to-end delivery</p>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              Available
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
              <p className="text-sm text-zinc-500">Experience</p>
              <p className="mt-1 text-md font-semibold text-zinc-100">Mobile and full-stack projects built hands-on</p>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
              <p className="text-sm text-zinc-500">Frontend</p>
              <p className="mt-1 text-md font-semibold text-zinc-100">Interfaces that feel sharp and responsive</p>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
              <p className="text-sm text-zinc-500">Backend</p>
              <p className="mt-1 text-md font-semibold text-zinc-100">APIs, databases, and practical system design</p>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4">
              <p className="text-sm text-zinc-500">Growth</p>
              <p className="mt-1 text-md font-semibold text-zinc-100">Cloud, AI-native tools, and deployment workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

