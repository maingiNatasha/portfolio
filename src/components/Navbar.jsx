import { useTheme } from "../theme/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg) backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-sm font-semibold text-(--accent) transition-all duration-300 group-hover:border-(--accent-hover) group-hover:bg-(--surface-hover) group-hover:shadow-[0_0_18px_(--accent-soft)]">
            NM
          </span>
          <span className="text-base font-semibold text-(--text-primary) transition-colors duration-300 group-hover:text-(--accent)">
            maingiNatasha
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-(--text-secondary) transition-all duration-300 hover:text-(--accent) hover:-translate-y-0.5">
            About
          </a>
          <a href="#projects" className="text-(--text-secondary) transition-all duration-300 hover:text-(--accent) hover:-translate-y-0.5">
            Projects
          </a>
          <a href="#contact" className="text-(--text-secondary) transition-all duration-300 hover:text-(--accent) hover:-translate-y-0.5">
            Contact
          </a>
          
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--text-primary) transition-all duration-300 hover:border-(--accent-hover) hover:bg-(--surface-hover) hover:text-(--accent)"
          >
            {isLight ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
