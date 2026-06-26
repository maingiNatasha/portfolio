import portfolioData from "../data/portfolioData";
import { FiMonitor, FiServer, FiCloud, FiDatabase } from "react-icons/fi";
import FadeInDiv from "./FadeInDiv";

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
    <FadeInDiv>
      <section id="about" className="px-6 py-24">
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2.5 text-sm text-(--color-text-secondary) backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-(--color-accent)" />
              About Natasha
            </div>

            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Building{" "}
                <span className="text-(--color-brand-gradient-start)">intuitive</span>,{" "}
                <span className="text-(--color-brand-gradient-end)">scalable</span>{" "}
                web applications.
              </h2>

              <p className="text-lg leading-relaxed text-(--color-text-secondary)">
                I build web applications with React, TypeScript, and Node.js, with a focus on clean interfaces, practical APIs, and reliable user experiences.
              </p>

              <p className="text-lg leading-relaxed text-(--color-text-secondary)">
                My experience includes full-stack web apps and a procurement and inventory mobile application, which strengthened my skills in system design, databases, and collaborative development.
              </p>

              <p className="text-lg leading-relaxed text-(--color-text-secondary)">
                I&apos;m currently growing in cloud technologies and AI-native workflows, with interest in how modern tools can improve building and deployment.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--color-shadow-accent) backdrop-blur">
            <div className="mb-6 flex items-center justify-between border-b border-(--color-border) pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-(--color-text-muted)">Skills</p>
                <p className="mt-1 text-xl font-semibold text-(--color-text-primary)">Tech stack</p>
              </div>
              <div className="rounded-full border border-(--color-badge-border) bg-(--color-badge-bg) px-3 py-1 text-sm text-(--color-badge-text)">
                Current
              </div>
            </div>

            <div className="grid gap-4">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.key} className="rounded-2xl border border-(--color-border) bg-(--color-surface-strong) p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--color-border-hover) hover:bg-(--color-surface-hover)">
                    <div className="flex items-center gap-2">
                      <Icon className="text-(--color-accent)" />
                      <p className="text-sm text-(--text-muted)">{group.label}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1 text-sm text-(--color-text-secondary)"
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
    </FadeInDiv>
  );
}
