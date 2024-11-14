import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/NewsLetter";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -6 * 16; // 6rem to pixels
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <CardsContainer />
      <Footer />
    </>
  );
}

export default App;
