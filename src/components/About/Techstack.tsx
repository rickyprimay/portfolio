import React from "react";
import {
  SiSwift,
  SiFlutter,
  SiJavascript,
  SiGo,
  SiNodedotjs,
  SiBun,
  SiReact,
  SiSvelte,
  SiMongodb,
  SiNextdotjs,
  SiGit,
  SiFirebase,
  SiDart,
  SiPostgresql,
  SiPython,
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const Techstack: React.FC = () => {
  const techIcons = [
    SiSwift,
    SiFlutter,
    SiJavascript,
    SiGo,
    SiNodedotjs,
    SiBun,
    SiReact,
    SiSvelte,
    SiMongodb,
    SiNextdotjs,
    SiGit,
    SiFirebase,
    SiDart,
    SiPostgresql,
    SiPython,
    SiPhp,
    SiLaravel,
    SiTailwindcss,
    SiBootstrap,
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 pb-12 px-4">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-32 w-32 bg-bg-card border border-primary/30 rounded-xl p-6 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <Icon className="text-5xl md:text-6xl lg:text-7xl hover:text-accent-purple transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
