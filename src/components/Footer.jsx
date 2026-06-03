export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} Natasha. All rights reserved.</p>
      </div>
    </footer>
  );
}

