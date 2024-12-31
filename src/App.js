import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section title={"About Me"} content={<About />} style={{ backgroundColor: "#0E141A" }} />
      <Section title={"My Skills"} content={<Skills />} />
      <Section
        title={"My Projects"}
        content={<Projects />}
        style={{ backgroundColor: "#0E141A" }}
      />
      <Section title={"My Experience"} content={<Experience />} />
      <Section title={"Contact Me"} content={<Contact />} style={{ backgroundColor: "#0E141A" }} />
      <Footer />
    </>
  );
}

export default App;
