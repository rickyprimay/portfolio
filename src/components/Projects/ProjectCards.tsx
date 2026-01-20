import React, { useState, useRef, useEffect } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClampedText, setIsClampedText] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Check if text is actually clamped
    const element = descRef.current;
    if (element) {
      setIsClampedText(element.scrollHeight > element.clientHeight);
    }
  }, [description]);

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="project-card-view bg-transparent rounded-lg p-5 h-full">
        <img
          src={imgPath}
          alt="project"
          className="w-full h-[350px] rounded-lg object-cover mb-4"
        />
        <div>
          <h3 className="text-2xl font-bold text-primary mb-3 text-center">
            {title}
          </h3>
          <div className="relative">
            <p
              ref={descRef}
              className={`text-sm leading-6 text-justify text-gray-300 mb-4 transition-all duration-300 ${
                isExpanded ? "" : "line-clamp-6"
              }`}
            >
              {description}
            </p>
            {isClampedText && !isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-primary hover:text-accent-purple font-semibold text-sm transition-colors duration-300 ml-1"
              >
                Show More
              </button>
            )}
            {isExpanded && isClampedText && (
              <button
                onClick={() => setIsExpanded(false)}
                className="text-primary hover:text-accent-purple font-semibold text-sm transition-colors duration-300 ml-1"
              >
                Show Less
              </button>
            )}
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            {ghLink && (
              <a
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg border-2 border-[#cd5ff8] text-[#cd5ff8] font-semibold hover:bg-[#cd5ff8] hover:text-bg-dark transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:scale-105"
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
                className="px-6 py-2.5 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-bg-dark transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:scale-105"
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
