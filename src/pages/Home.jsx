import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <main className="text-(--text)">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

