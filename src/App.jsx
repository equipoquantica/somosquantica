import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Audience from "./components/Audience";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
