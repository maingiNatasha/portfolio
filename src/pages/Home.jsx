import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home({ theme, onToggleTheme }) {
  return (
    <main className="text-zinc-100">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

