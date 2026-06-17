import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";
import FadeInDiv from "./FadeInDiv";

const previewClampStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden"
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <FadeInDiv>
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/60 bg-zinc-950/50 px-5 py-2.5 text-sm text-zinc-300 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Selected work
              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Projects built with a{" "}
                <span className="text-cyan-300">full-stack</span> mindset.
              </h2>

              <p className="text-lg leading-relaxed text-zinc-300">
                A few projects that reflect my work across frontend, backend, deployment, and database-driven applications.
              </p>
            </div>

            <p className="text-sm text-zinc-500">
              {portfolioData.projects.length} projects
            </p>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData.projects.map((project) => {
              const openProject = () => setActiveProject(project);

              return (
                <article
                  key={project.name}
                  role="button"
                  tabIndex={0}
                  onClick={openProject}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openProject();
                    }
                  }}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-950/55 shadow-2xl shadow-cyan-950/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  <div className="relative h-56 overflow-hidden border-b border-zinc-800/70 sm:h-60">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100">{project.name}</h3>

                      <p
                        className="mt-3 text-sm leading-relaxed text-zinc-300"
                        style={previewClampStyle}
                      >
                        {project.summary || project.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          openProject();
                        }}
                        className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" aria-hidden />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-950 shadow-2xl shadow-cyan-950/20"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid max-h-[85vh] overflow-y-auto lg:grid-cols-[1fr_1fr]">
              <div className="relative min-h-72 border-b border-zinc-800/70 lg:min-h-full lg:border-b-0 lg:border-r">
                <div className="flex h-full w-full items-center justify-center bg-zinc-950/40 p-1">
                  <img
                    src={activeProject.image}
                    alt={activeProject.imageAlt || activeProject.name}
                    className="max-h-[75vh] w-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                      Project Details
                    </p>
                    <h3 id="project-modal-title" className="mt-2 text-3xl font-bold text-zinc-100">
                      {activeProject.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    aria-label="Close modal"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800/70 bg-zinc-900/60 text-zinc-300 transition-colors hover:bg-zinc-800/50"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                <p className="mt-5 leading-relaxed text-zinc-300">
                  {activeProject.details || activeProject.description}
                </p>

                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Tech Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800/70 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                  {activeProject.links.live && activeProject.links.live !== "#" ? (
                    <a
                      href={activeProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
                    >
                      Open Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-lg border border-zinc-800/70 bg-zinc-950/40 px-4 py-2 text-sm font-semibold text-zinc-500 opacity-60">
                      No Live Demo
                    </span>
                  )}

                  {activeProject.links.repo && (
                    <a
                      href={activeProject.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-zinc-800/70 bg-zinc-950/40 px-4 py-2 text-sm font-semibold text-zinc-100 transition-colors hover:bg-zinc-800/30"
                    >
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </FadeInDiv>
  );
}
