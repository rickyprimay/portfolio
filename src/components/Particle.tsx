import React from "react";
import Particles from "react-tsparticles";

const Particle: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#0080ff", "#00ffff", "#00e5ff", "#0099ff"],
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1.2,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;
