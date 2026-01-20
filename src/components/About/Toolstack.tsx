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
            className="tech-icons flex items-center justify-center"
          >
            <Icon className="text-5xl md:text-6xl lg:text-7xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolstack;
