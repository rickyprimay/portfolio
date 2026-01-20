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
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-8 pb-12 px-2 md:px-4">
        {toolIcons.map((Icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 bg-bg-card border border-primary/30 rounded-lg md:rounded-xl p-3 md:p-6 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <Icon className="text-3xl md:text-5xl lg:text-6xl text-primary hover:text-accent-purple transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolstack;
