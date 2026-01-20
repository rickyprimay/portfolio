import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import me from "../../Assets/mesa.png";
import Toolstack from "./Toolstack";

const About: React.FC = () => {
  return (
    <div className="about-section">
      <Particle />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Left Column - Text */}
          <div className="md:col-span-2 flex flex-col justify-center pt-7.5 pb-12">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple-text">I'M</strong>
            </h1>
            <AboutCard />
          </div>

          {/* Right Column - Image */}
          <div className="pt-12 pb-12 flex items-center justify-center about-img">
            <img src={me} alt="about" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Techstack Section */}
        <div className="text-center py-12">
          <h1 className="project-heading text-center">
            Professional <strong className="purple-text">Skillset </strong>
          </h1>
          <Techstack />
        </div>

        {/* Toolstack Section */}
        <div className="text-center py-12">
          <h1 className="project-heading text-center">
            <strong className="purple-text">Tools</strong> I use
          </h1>
          <Toolstack />
        </div>

        {/* GitHub Calendar */}
        <Github />
      </div>
    </div>
  );
};

export default About;
