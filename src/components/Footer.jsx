import portfolioData from "../data/portfolioData";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BiArrowToTop } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg)">
      <div className="max-w-6xl mx-auto px-6 py-10 text-(--color-text-muted) text-sm">
        <div className="grid sm:grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 mb-4 items-start">
          <div>
            <span className="text-base font-semibold text-(--color-accent)">Natasha Maingi</span><br/>
            <span>Full Stack Developer</span>
          </div>
          <div className="flex gap-3 md:gap-6 text-(--color-text-muted) md:justify-center">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-text-muted) transition-all duration-300 hover:text-(--color-accent) hover:border-(--color-accent) hover:bg-(--color-surface-hover) hover:-translate-y-0.5"
            >
              <MdOutlineEmail size={21} className="transition-colors duration-300 group-hover:text-(--color-accent)" />
            </a>
            <a
              href={portfolioData.contact.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-text-muted) transition-all duration-300 hover:text-(--color-accent) hover:border-(--color-accent) hover:bg-(--color-surface-hover) hover:-translate-y-0.5"
            >
              <FiGithub size={21} className="transition-colors duration-300 group-hover:text-(--color-accent)" />
            </a>
            <a
              href={portfolioData.contact.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-text-muted) transition-all duration-300 hover:text-(--color-accent) hover:border-(--color-accent) hover:bg-(--color-surface-hover) hover:-translate-y-0.5"
            >
              <FiLinkedin size={21} className="transition-colors duration-300 group-hover:text-(--color-accent)" />
            </a>
          </div>
          <div className="md:flex md: justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-4 py-2 border border-(--color-text-muted) rounded-lg cursor-pointer transition-all duration-300 hover:text-(--color-accent) hover:border-(--color-accent) hover:bg-(--color-surface-hover) hover:-translate-y-0.5"
            >
              <BiArrowToTop size={22} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
        <div className="border-t text-center">
          <p className="mt-4">© {new Date().getFullYear()} Natasha - Built with React and curiosity.</p>
        </div>
      </div>
    </footer>
  );
}

