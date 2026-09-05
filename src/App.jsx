import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Signals from "./components/Signals";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="light-shell">
          <Services />
          <About />
          <Process />
          <Signals />
        </div>
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
