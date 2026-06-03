export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-zinc-300 hover:text-zinc-100">
            About
          </a>
          <a href="#projects" className="text-zinc-300 hover:text-zinc-100">
            Projects
          </a>
          <a href="#contact" className="text-zinc-300 hover:text-zinc-100">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

