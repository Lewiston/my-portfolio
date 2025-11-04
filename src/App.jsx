import "./App.css";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Hero />
        <Clients />
        <About />
        {/* <Projects /> */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
