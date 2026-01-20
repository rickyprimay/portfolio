import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="bg-bg-card border border-primary/20 p-8 rounded-xl shadow-lg">
      <div>
        <p className="text-base leading-relaxed text-gray-300 text-justify mb-6">
          Hi Everyone, I am{" "}
          <span className="text-primary font-semibold">
            Ricky Primayuda Putra
          </span>{" "}
          from{" "}
          <span className="text-primary font-semibold">
            Semarang, Indonesia.
          </span>
          <br /> I am a Informatics Engineering Student at Dian Nuswantoro
          University.
          <br />
          Additionally, I am Serving as Lead on Google Developer Group on Campus
          Universitas Dian Nuswantoro and Himpunan Mahasiswa Teknik Informatika
          UDINUS as a Head of Software Departement
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-3 text-gray-300">
            <ImPointRight className="text-primary flex-shrink-0" /> Playing
            Games
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <ImPointRight className="text-primary flex-shrink-0" /> Write a Code
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <ImPointRight className="text-primary flex-shrink-0" /> Travelling
          </li>
        </ul>

        <p className="mt-8 italic text-primary/80 text-sm leading-relaxed">
          "Everything I Do Breaks, But We Fix It Quickly"
        </p>
        <footer className="text-primary/60 text-sm mt-2 font-medium">
          — Ricky Primayuda Putra
        </footer>
      </div>
    </div>
  );
};

export default AboutCard;
