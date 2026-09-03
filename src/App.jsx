import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Journey from "./components/sections/Journey";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
