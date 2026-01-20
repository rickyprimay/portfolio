import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiXcode,
  SiGithub,
} from "react-icons/si";

const Toolstack: React.FC = () => {
  const toolIcons = [SiMacos, SiVisualstudiocode, SiXcode, SiPostman, SiGithub];

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 pb-12 px-4">
        {toolIcons.map((Icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-32 w-32 bg-bg-card border border-primary/30 rounded-xl p-6 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <Icon className="text-5xl md:text-6xl lg:text-7xl text-primary hover:text-accent-purple transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolstack;
