import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="project-card-view bg-transparent rounded-lg p-5 h-full">
        <img
          src={imgPath}
          alt="project"
          className="w-full h-[350px] rounded-lg object-cover mb-4"
        />
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-3 text-center">
            {title}
          </h3>
          <p className="text-sm leading-6 text-justify text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {ghLink && (
              <a
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 rounded border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all flex items-center gap-2"
              >
                <BsGithub />
                GitHub
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-[#a24dd386] text-[#a24dd386] font-semibold hover:bg-[#a24dd386] hover:text-white transition-all flex items-center gap-2"
              >
                <CgWebsite />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
