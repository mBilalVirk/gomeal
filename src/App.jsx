import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import AuthModal from "./components/Auth/AuthModal";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const openAuth = (mode = "login") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <>
      <Navbar onOpenAuth={openAuth} />
      <main>
        <Hero onOpenAuth={openAuth} />
        <div className="pt-[170px] md:pt-[60px]" aria-hidden="true" />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Feedback />
      </main>
      <Footer />
      <AuthModal
        isOpen={authOpen}
        initialMode={authMode}
        onClose={() => setAuthOpen(false)}
      />
    </>
  );
}

export default App;
