import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Pricing from "../sections/Pricing";
import Visit from "../sections/Visit";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();

    useEffect(() => {
      // Check if we arrived here with a "scrollTo" instruction
      if (location.state && location.state.scrollTo) {
        const sectionId = location.state.scrollTo;
        const section = document.getElementById(sectionId);
        
        if (section) {
          // Timeout ensures the page has finished rendering before scrolling
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
        
        // Clear the state so it doesn't scroll again on refresh
        window.history.replaceState({}, document.title);
      }
    }, [location]);
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Visit />
    </>
  );
}

export default Home;