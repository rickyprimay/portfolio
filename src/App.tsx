import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import SEO from "./components/SEO";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

type AppProps = unknown;

const App: React.FC<AppProps> = () => {
  const [load, upadateLoad] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <SEO
        title="Ricky Primayuda Putra - Mobile Developer | iOS, Android & Full-Stack Developer"
        description="Expert Mobile Developer specializing in iOS (SwiftUI), Android (Kotlin/Dart/Flutter), and Full-Stack Development. Experienced in React, Node.js, NestJS, and backend technologies."
        keywords="Ricky Primayuda, mobile developer, iOS developer, Android developer, Flutter developer, full-stack developer, Swift, Kotlin, React Native"
      />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
