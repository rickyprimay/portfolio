import React from "react";
import myImg from "../../Assets/mes87876261.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2: React.FC = () => {
  return (
    <div className="relative pt-20 pb-12" id="about">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Text Column */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              LET ME <span className="text-primary">INTRODUCE</span> MYSELF
            </h1>
            <p className="text-base leading-8 text-gray-300 mb-6">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br /> I am fluent in programming languages like
              <span className="text-primary font-semibold">
                {" "}
                Javascript, Swift(I really love IT!), Dart, PHP, and Go.{" "}
              </span>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <span className="text-primary font-semibold">
                Web Technologies and Mobile Apps
              </span>{" "}
              and also in areas related to{" "}
              <span className="text-primary font-semibold">
                Machine Learning.
              </span>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <span className="text-primary font-semibold">
                Node.js
              </span>{" "}
              and
              <span className="text-primary font-semibold">
                {" "}
                Modern Javascript Library and Frameworks
              </span>
              &nbsp; like
              <span className="text-primary font-semibold">
                {" "}
                React.js, Svelte and Next.js
              </span>
              . And now I am very love and interested with{" "}
              <span className="text-primary font-semibold">
                SwiftUI and UIKit
              </span>{" "}
              for Native iOS.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <Tilt>
              <img
                src={myImg}
                className="w-full max-w-sm rounded-xl shadow-lg object-cover"
                alt="avatar"
              />
            </Tilt>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FIND ME ON</h2>
          <p className="text-gray-300 mb-8">
            Feel free to{" "}
            <span className="text-primary font-semibold">connect</span> with me
          </p>
          <ul className="flex justify-center gap-6 flex-wrap">
            {/* GitHub */}
            <li>
              <a
                href="https://github.com/rickyprima30"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 w-16 bg-bg-card border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg text-primary hover:text-accent-purple text-2xl"
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
                className="flex items-center justify-center h-16 w-16 bg-bg-card border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg text-primary hover:text-accent-purple text-2xl"
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
                className="flex items-center justify-center h-16 w-16 bg-bg-card border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg text-primary hover:text-accent-purple text-2xl"
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
                className="flex items-center justify-center h-16 w-16 bg-bg-card border-2 border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg text-primary hover:text-accent-purple text-2xl"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home2;
