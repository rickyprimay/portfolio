import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import me from "../../Assets/mesa.png";
import Toolstack from "./Toolstack";

const About: React.FC = () => {
  return (
    <div className="relative">
      <Particle />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 md:py-16 pt-20 md:pt-28">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Know Who <span className="text-primary">I'M</span>
            </h1>
            <AboutCard />
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <img
              src={me}
              alt="about"
              className="w-full max-w-md rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Techstack Section */}
        <div className="py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
            Professional <span className="text-primary">Skillset</span>
          </h2>
          <Techstack />
        </div>

        {/* Toolstack Section */}
        <div className="py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
            <span className="text-primary">Tools</span> I use
          </h2>
          <Toolstack />
        </div>

        {/* GitHub Calendar */}
        <Github />
      </div>
    </div>
  );
};

export default About;
