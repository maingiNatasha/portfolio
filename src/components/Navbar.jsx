import { useTheme } from "../theme/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-sm font-semibold text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-zinc-800 group-hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]">
            NM
          </span>
          <span className="text-base font-semibold text-zinc-100 transition-colors duration-300 group-hover:text-cyan-300">
            maingiNatasha
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-zinc-300 transition-all duration-300 hover:text-cyan-300 hover:-translate-y-0.5">
            About
          </a>
          <a href="#projects" className="text-zinc-300 transition-all duration-300 hover:text-cyan-300 hover:-translate-y-0.5">
            Projects
          </a>
          <a href="#contact" className="text-zinc-300 transition-all duration-300 hover:text-cyan-300 hover:-translate-y-0.5">
            Contact
          </a>
          
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 transition-all duration-300 hover:border-cyan-400/50 hover:bg-zinc-800 hover:text-cyan-300"
          >
            {isLight ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
