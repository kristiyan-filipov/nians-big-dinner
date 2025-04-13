import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import About from './components/sections/About';
import AboutTwo from './components/sections/AboutTwo';
import ConceptArt from './components/sections/ConceptArt';
import ConceptArtTwo from './components/sections/ConceptArtTwo';
import ConceptArtThree from './components/sections/ConceptArtThree';
import Contact from './components/sections/Contact';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      easing: (t) => 2.1 * t - 1.2 * t * t + 0.1 * t * t * t,
      duration: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (

        <div className="overflow-hidden relative w-screen">
          <Navbar />
          <main>
          <Hero />
          <div id='about-section'/>
          <About />
          <AboutTwo />
          <div id='concept-art-section'/>
          <ConceptArt />
          <ConceptArtTwo />
          <ConceptArtThree />
          </main>
          <Contact />
        </div>
  );
};

export default App;
