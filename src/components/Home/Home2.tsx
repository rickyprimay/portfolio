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
    <div className="home-about-section" id="about">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Text Column */}
          <div className="md:col-span-2 home-about-description">
            <h1 className="text-5xl mb-6">
              LET ME <span className="purple-text"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body text-base leading-8">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br /> I am fluent in programming languages like
              <i>
                <b className="purple-text">
                  {" "}
                  Javascript, Swift(I am Very Love IT!), Dart, PHP, and Go.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple-text">Web Technologies and Mobile Apps</b>{" "}
                and also in areas related to{" "}
                <b className="purple-text">Machine Learning.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple-text">Node.js</b> and
              <i>
                <b className="purple-text">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple-text"> React.js, Svelte and Next.js </b>
              </i>
              And now I am very love and interested with{" "}
              <b className="purple-text">SwiftUI and UIKit</b> for Native iOS.
            </p>
          </div>

          {/* Image Column */}
          <div className="myAvtar">
            <Tilt>
              <img src={myImg} className="w-full rounded-lg" alt="avatar" />
            </Tilt>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="home-about-social text-center">
          <h1 className="text-4xl mb-3">FIND ME ON</h1>
          <p className="mb-6">
            Feel free to <span className="purple-text">connect </span>with me
          </p>
          <ul className="home-about-social-links flex justify-center gap-4">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/rickyprima30"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons flex items-center justify-center"
              >
                <AiFillGithub className="text-xl" />
              </a>
            </li>

            {/* Twitter */}
            <li className="social-icons">
              <a
                href="https://twitter.com/rickyprimay"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons flex items-center justify-center"
              >
                <AiOutlineTwitter className="text-xl" />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ricky-primayuda-putra-735220259/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons flex items-center justify-center"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </li>

            {/* Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/rickyprimay"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons flex items-center justify-center"
              >
                <AiFillInstagram className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home2;
