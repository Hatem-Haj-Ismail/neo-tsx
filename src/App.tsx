import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Location } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Uitily/Navbar/Navbar";
import UpButton from "./Components/Uitily/UpButton/UpButton";
import Footer from "./Components/Uitily/Footer/Footer";
import Reveal from "./Components/Uitily/Reveal"; // Animation import

// Page imports
import Home from "./Components/Pages/Home/Homepage";
import Features from "./Components/Pages/Features/Features";
import FAQ from "./Components/Pages/FAQ/FAQ";
import Contact from "./Components/Pages/Contact/Contact";

// Animation variables
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

// AnimatedRoutes component
const AnimatedRoutes: React.FC = () => {
  const location: Location = useLocation();  // Specify the type for location

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

// Main App component
const App: React.FC = () => (
  <Router>
    <div className="App">
      <Reveal> {/* Navbar fade in */}
        <Navbar />
      </Reveal>

      <AnimatedRoutes />

      <Reveal> {/* Footer also animate */}
        <UpButton />
        <Footer />
      </Reveal>
    </div>
  </Router>
);

export default App;