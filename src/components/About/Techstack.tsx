import React from "react";
import {
  TbBrandBootstrap,
  TbBrandFlutter,
  TbBrandLaravel,
  TbBrandSvelte,
  TbBrandTailwind,
} from "react-icons/tb";
import { DiDart, DiPhp } from "react-icons/di";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiSwift,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql, SiBun } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const Techstack: React.FC = () => {
  const techIcons = [
    DiSwift,
    TbBrandFlutter,
    DiJavascript1,
    TbBrandGolang,
    DiNodejs,
    SiBun,
    DiReact,
    TbBrandSvelte,
    DiMongodb,
    SiNextdotjs,
    DiGit,
    SiFirebase,
    DiDart,
    SiPostgresql,
    DiPython,
    DiPhp,
    TbBrandLaravel,
    TbBrandTailwind,
    TbBrandBootstrap,
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 pb-12 px-4">
        {techIcons.map((Icon, index) => (
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

export default Techstack;
