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
          <br /> I am a passionate{" "}
          <span className="text-primary font-semibold">
            Native Mobile Developer
          </span>{" "}
          with deep expertise in{" "}
          <span className="text-primary font-semibold">iOS & Android</span>{" "}
          development. I'm deeply passionate about writing clean, maintainable
          code using architectural patterns like{" "}
          <span className="text-primary font-semibold">MVVM</span>, clean
          architecture principles, and proper{" "}
          <span className="text-primary font-semibold">
            dependency injection
          </span>
          .
          <br />
          Currently working as a{" "}
          <span className="text-primary font-semibold">
            Flutter Developer
          </span>{" "}
          at YouApp Pte. Ltd, leveraging my mobile expertise to build
          production ready, cross platform applications with robust architecture
          and best practices.
          <br />
          <br />
          Core Competencies:
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-3 text-gray-300">
            <ImPointRight className="text-primary flex-shrink-0" /> Native iOS
            (Swift) & Android (Kotlin) Development
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <ImPointRight className="text-primary flex-shrink-0" /> MVVM
            Architecture & Clean Architecture Principles
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <ImPointRight className="text-primary flex-shrink-0" /> Dependency
            Injection & Advanced State Management Patterns
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <ImPointRight className="text-primary flex-shrink-0" />{" "}
            Cross-platform Development with Flutter & Dart
          </li>
        </ul>

        <p className="mt-8 italic text-primary/80 text-sm leading-relaxed">
          "Build with Clean Architecture, Scale with Confidence"
        </p>
        <footer className="text-primary/60 text-sm mt-2 font-medium">
          — Ricky Primayuda Putra
        </footer>
      </div>
    </div>
  );
};

export default AboutCard;
