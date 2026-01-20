import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgba(12,5,19,0.9)] border-t border-primary/20 py-12 md:py-16 backdrop-blur-lg shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-sm md:text-base leading-relaxed">
              Designed and Developed by Ricky Primayuda Putra
            </h3>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <h3 className="text-white font-semibold text-sm md:text-base">
              Copyright © {currentYear} rickyprimay
            </h3>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex justify-center md:justify-end">
            <ul className="flex justify-center gap-6">
              {/* GitHub */}
              <li>
                <a
                  href="https://github.com/RickyPrima30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-2xl hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* Twitter */}
              <li>
                <a
                  href="https://twitter.com/rickyprimay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-2xl hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/in/ricky-primayuda-putra-735220259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-2xl hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/rickyprimay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-2xl hover:text-primary transition-all duration-300 hover:scale-110 inline-block"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
