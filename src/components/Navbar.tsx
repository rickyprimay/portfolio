import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          ? "sticky bg-[#1b1a2ea9] shadow-lg backdrop-blur-[15px]"
          : "navbar bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 md:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand */}
          <Link to="/" className="flex items-center">
            <h1 className="main-name text-2xl font-bold text-[#cd5ff8]">
              rickyprimay
            </h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-0.5 focus:outline-none"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-[27px] h-1 bg-[#be50f4] transition-transform duration-300 ${
                isExpanded ? "rotate-45 absolute left-3 top-2" : ""
              }`}
            ></span>
            <span
              className={`block w-[27px] h-1 bg-[#be50f4] transition-opacity duration-300 ${
                isExpanded ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-[27px] h-1 bg-[#be50f4] transition-transform duration-300 ${
                isExpanded ? "-rotate-45 absolute left-3 top-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="nav-link text-white hover:text-purple-300 transition-all duration-300 relative group flex items-center gap-2"
                >
                  <IconComponent className="text-lg" />
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#c95bf5] group-hover:w-full transition-all duration-300"></span>
                </Link>
              );
            })}

            {/* Fork Button */}
            <a
              href="https://github.com/RickyPrima30/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="fork-btn-inner flex items-center gap-2 px-4 py-2 bg-[#934cce5e] hover:bg-[#a24dd386] rounded transition-all duration-300 hover:-translate-y-0.5"
            >
              <CgGitFork className="text-lg" />
              <AiFillStar className="text-base" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isExpanded && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#181a27] shadow-lg">
            <div className="flex flex-col gap-2 p-3">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={handleNavClick}
                    className="nav-link text-white hover:text-purple-300 transition-all duration-300 flex items-center gap-2 px-4 py-2"
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
                className="fork-btn-inner flex items-center gap-2 px-4 py-2 bg-[#934cce5e] hover:bg-[#a24dd386] rounded transition-all duration-300 w-full justify-center"
              >
                <CgGitFork className="text-lg" />
                <AiFillStar className="text-base" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
