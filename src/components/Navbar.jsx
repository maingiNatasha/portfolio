import { useTheme } from "../theme/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg) backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-(--color-surface) text-sm font-semibold text-(--color-accent) transition-all duration-300 group-hover:border-(--color-accent-hover) group-hover:bg-(--color-surface-hover) group-hover:shadow-[0_0_18px_(--color-accent-soft)]">
            NM
          </span>
          <span className="text-base font-semibold text-(--color-text-primary) transition-colors duration-300 group-hover:text-(--color-accent)">
            maingiNatasha
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-(--color-text-secondary) transition-all duration-300 hover:text-(--color-accent) hover:-translate-y-0.5">
            About
          </a>
          <a href="#projects" className="text-(--color-text-secondary) transition-all duration-300 hover:text-(--color-accent) hover:-translate-y-0.5">
            Projects
          </a>
          <a href="#contact" className="text-(--color-text-secondary) transition-all duration-300 hover:text-(--color-accent) hover:-translate-y-0.5">
            Contact
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-(--color-surface) text-(--color-text-primary) cursor-pointer transition-all duration-300 hover:border-(--color-accent-hover) hover:bg-(--color-surface-hover) hover:text-(--color-accent)"
          >
            {isLight ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
