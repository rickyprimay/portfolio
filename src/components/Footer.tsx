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
    <footer className="footer w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Left Section */}
          <div className="footer-copywright">
            <h3 className="text-white font-semibold">
              Designed and Developed by Ricky Primayuda Putra
            </h3>
          </div>

          {/* Center Section */}
          <div className="footer-copywright">
            <h3 className="text-white font-semibold">
              Copyright © {currentYear} rickyprimay
            </h3>
          </div>

          {/* Right Section - Social Icons */}
          <div className="footer-body">
            <ul className="footer-icons flex justify-center gap-4">
              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/RickyPrima30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-purple-400 transition-colors"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* Twitter */}
              <li className="social-icons">
                <a
                  href="https://twitter.com/rickyprimay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-purple-400 transition-colors"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ricky-primayuda-putra-735220259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Instagram */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rickyprimay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-purple-400 transition-colors"
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
