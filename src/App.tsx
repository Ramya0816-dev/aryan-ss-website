import './App.css';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Products from './components/products';
import About from './components/about';
import WhyChooseUs from './components/whyChooseus'
import OurWork from './components/ourWork'
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Products />
        <About />
        <WhyChooseUs />
        <OurWork />
        <Contact />
      </main>

      <Footer />

      <a
        href="https://wa.me/919032728817"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="whatsapp-icon">☏</span>
        <span className="whatsapp-text">WhatsApp</span>
      </a>
    </>
  );
}

export default App;
