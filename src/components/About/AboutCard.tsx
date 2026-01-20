import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="quote-card-view border-0 text-white bg-transparent p-6 rounded-lg">
      <div>
        <p style={{ textAlign: "justify" }} className="text-base leading-relaxed">
          Hi Everyone, I am <span className="purple-text">Ricky Primayuda Putra </span>
          from <span className="purple-text"> Semarang, Indonesia.</span>
          <br /> I am a Informatics Engineering Student at Dian Nuswantoro University.
          <br />
          Additionally, I am Serving as Lead on Google Developer Group on Campus Universitas Dian Nuswantoro and Himpunan Mahasiswa Teknik Informatika UDINUS as a Head of Software Departement
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="mt-4">
          <li className="about-activity flex items-center gap-2 mb-2">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity flex items-center gap-2 mb-2">
            <ImPointRight /> Write a Code
          </li>
          <li className="about-activity flex items-center gap-2 mb-2">
            <ImPointRight /> Travelling
          </li>
        </ul>

        <p style={{ color: "rgb(155 126 172)" }} className="mt-6 italic">
          "Everything I Do Breaks, But We Fix It Quickly"
        </p>
        <footer className="blockquote-footer text-[#a588c0]">
          Ricky Primayuda Putra
        </footer>
      </div>
    </div>
  );
};

export default AboutCard;
