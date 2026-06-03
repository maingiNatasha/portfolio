import Home from "./pages/Home";

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div aria-hidden className="absolute inset-0 bg-zinc-950" />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-24 -left-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-10 -right-16 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.06),transparent_40%)]"
      />

      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}
