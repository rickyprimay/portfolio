import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [navColour, setNavColour] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleNavClick = () => {
    setIsExpanded(false);
  };

  const navItems = [
    { label: "Home", icon: AiOutlineHome, to: "/" },
    { label: "About", icon: AiOutlineUser, to: "/about" },
    { label: "Projects", icon: AiOutlineFundProjectionScreen, to: "/project" },
    { label: "Resume", icon: CgFileDocument, to: "/resume" },
  ];

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navColour
          ? "bg-[rgba(12,5,19,0.85)] backdrop-blur-xl shadow-2xl border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary hover:text-accent-purple transition-colors duration-300">
              rickyprimay
            </h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 focus:outline-none relative w-6 h-6 justify-center"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-full h-0.5 bg-primary transition-all duration-300 origin-center ${
                isExpanded ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-primary transition-opacity duration-300 ${
                isExpanded ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-primary transition-all duration-300 origin-center ${
                isExpanded ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`nav-link transition-all duration-300 relative group flex items-center gap-2 text-base font-semibold ${
                    isActive
                      ? "text-primary"
                      : "text-gray-300 hover:text-primary"
                  }`}
                >
                  <IconComponent className="text-lg" />
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}

            {/* Fork Button */}
            <a
              href="https://github.com/RickyPrima30/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-primary/50 text-primary hover:bg-primary hover:text-bg-dark rounded-lg transition-all duration-300 hover:shadow-lg font-medium text-sm"
            >
              <CgGitFork className="text-lg" />
              <AiFillStar className="text-base" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isExpanded && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 md:hidden z-40"
              onClick={() => setIsExpanded(false)}
            ></div>

            {/* Mobile Menu */}
            <div className="md:hidden absolute top-full left-0 right-0 bg-bg-card shadow-lg z-50 border-b border-primary/10">
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={handleNavClick}
                      className={`nav-link transition-all duration-300 flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-base ${
                        isActive
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "text-gray-300 hover:text-primary hover:bg-primary/10"
                      }`}
                    >
                      <IconComponent className="text-lg" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}

                {/* Mobile Fork Button */}
                <a
                  href="https://github.com/RickyPrima30/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-bg-dark rounded-lg transition-all duration-300 w-full justify-center font-medium mt-2"
                >
                  <CgGitFork className="text-lg" />
                  <AiFillStar className="text-base" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
