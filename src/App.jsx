import { useEffect, useState } from "react";
import { useTheme } from "./theme/useTheme.js";
import Home from "./pages/Home.jsx";

export default function App() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className="relative isolate min-h-screen overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)"
      }}
    >
      <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "var(--color-bg)" }} />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          backgroundColor: isLight ? "rgba(8, 145, 178, 0.10)" : "rgba(34, 211, 238, 0.10)"
        }}
      />
      <div
        aria-hidden
        className="absolute top-24 -left-20 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor: isLight ? "rgba(14, 165, 233, 0.08)" : "rgba(14, 165, 233, 0.10)"
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-10 -right-16 h-96 w-96 rounded-full blur-3xl"
        style={{
          backgroundColor: isLight ? "rgba(168, 85, 247, 0.07)" : "rgba(168, 85, 247, 0.10)"
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            isLight
              ? "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)"
              : "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: isLight
            ? "radial-gradient(circle_at_top,rgba(8,145,178,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.05),transparent_40%)"
            : "radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.06),transparent_40%)"
        }}
      />

      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
}
