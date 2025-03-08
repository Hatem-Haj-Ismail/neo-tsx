import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Uitily/Navbar/Navbar";
import UpButton from "./Components/Uitily/UpButton/UpButton";
import Footer from "./Components/Uitily/Footer/Footer";
import Reveal from "./Components/Uitily/Reveal"; // Animation importieren

// Seiten-Importe
import Home from "./Components/Pages/Home/Homepage";
import Features from "./Components/Pages/Features/Features";
import FAQ from "./Components/Pages/FAQ/FAQ";
import Contact from "./Components/Pages/Contact/Contact";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
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

const App = () => (
  <Router>
    <div className="App">
      <Reveal> {/* Navbar langsam erscheinen lassen */}
        <Navbar />
      </Reveal>

      <AnimatedRoutes />

      <Reveal> {/* Footer auch animieren */}
        <UpButton />
        <Footer />
      </Reveal>
    </div>
  </Router>
);

export default App;