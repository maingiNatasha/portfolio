import portfolioData from "../data/portfolioData";
import { FiMonitor, FiServer, FiCloud, FiDatabase } from "react-icons/fi";

export default function About() {
  const skillGroups = [
    {
      key: "frontend",
      label: "Frontend",
      icon: FiMonitor,
      items: portfolioData.skills.frontend
    },
    {
      key: "backend",
      label: "Backend",
      icon: FiServer,
      items: portfolioData.skills.backend
    },
    {
      key: "cloudDeployment",
      label: "Cloud & Deployment",
      icon: FiCloud,
      items: portfolioData.skills.cloudDeployment
    },
    {
      key: "databases",
      label: "Databases",
      icon: FiDatabase,
      items: portfolioData.skills.databases
    }
  ];

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
              Building{" "}
              <span className="text-cyan-300">intuitive</span>,{" "}
              <span className="text-sky-300">scalable</span>{" "}
              web applications.
            </h2>

            <p className="text-lg leading-relaxed text-zinc-300">
              I build web applications with React, TypeScript, and Node.js, with a focus on clean interfaces, practical APIs, and reliable user experiences.
            </p>

            <p className="text-lg leading-relaxed text-zinc-300">
              My experience includes full-stack web apps and a procurement and inventory mobile application, which strengthened my skills in system design, databases, and collaborative development.
            </p>

            <p className="text-lg leading-relaxed text-zinc-300">
              I&apos;m currently growing in cloud technologies and AI-native workflows, with interest in how modern tools can improve building and deployment.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/55 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur">
          <div className="mb-6 flex items-center justify-between border-b border-zinc-800/70 pb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Skills</p>
              <p className="mt-1 text-xl font-semibold text-zinc-100">Tech stack</p>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              Current
            </div>
          </div>

          <div className="grid gap-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div key={group.key} className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-zinc-900/70">
                  <div className="flex items-center gap-2">
                    <Icon className="text-cyan-300" />
                    <p className="text-sm text-zinc-500">{group.label}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-800/70 bg-zinc-950/50 px-3 py-1 text-sm text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
