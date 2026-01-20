import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hitech from "../../Assets/Projects/hitech.jpeg";
import ppko from "../../Assets/Projects/ppko.png";
import codejam from "../../Assets/Projects/cja.png";
import lms from "../../Assets/Projects/lms.png";
import tf from "../../Assets/Projects/tf-sense.png";
import ticketify from "../../Assets/Projects/ticketify.png";
import sirekam from "../../Assets/Projects/sirekam.png";
import arch from "../../Assets/Projects/arch.png";
import movie from "../../Assets/Projects/movie.png";
import expense from "../../Assets/Projects/expense.png";
import madura from "../../Assets/Projects/madura.png";
import sevensummit from "../../Assets/Projects/sevensummit.png";
import vehiloc from "../../Assets/Projects/vehiloc.png";
import itc from "../../Assets/Projects/itc.jpg";
import hitechs from "../../Assets/Projects/hitech.jpg";
import semnasti from "../../Assets/Projects/semnasti.jpg";
import senikita from "../../Assets/Projects/senikita.png";
import cooksmart from "../../Assets/Projects/cooksmart.png";
import weatherFlutter from "../../Assets/Projects/weather-flutter.png";
import youApp from "../../Assets/Projects/youapp.png";
import maharbote from "../../Assets/Projects/maharbote.png";

interface Project {
  imgPath: string;
  title: string;
  description: string;
  category: string;
  ghLink?: string;
  demoLink?: string;
}

type FilterCategory = "All" | "Web" | "iOS" | "Android" | "Flutter" | "Mobile Development" | "Full-Stack Development";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>("All");

  const projects: Project[] = [
    {
      imgPath: senikita,
      title: "Seni Kita",
      description: "Developed a Seni Kita Web with Laravel and React.js(with bun js for runtime javascript). The app features a list of popular art, art details, and search functionality, payment gatewat using Xendit, Check Ongkir price with Raja Ongkir, Realtime Tracking.",
      category: "Web",
      demoLink: "https://senikita.my.id",
    },
    {
      imgPath: youApp,
      title: "YouApp Social",
      description: "Contributed as a Mobile Developer to YouApp, an interest-based social networking application. Focused on building and optimizing mobile features, handling API integration, improving app performance, and collaborating closely with cross-functional teams to deliver a stable and scalable product. The application has been successfully released on both the Apple App Store and Google Play Store.",
      category: "Mobile Development",
      demoLink: "https://apps.apple.com/id/app/youapp-sosial-sesuai-minat/id6444595490?l=id"
    },
    {
      imgPath: maharbote,
      title: "Maharbote Social",
      description: "Worked as a Mobile Developer (Flutter for Android & iOS) and Backend Developer (NestJS) on Maharbote Social, a personality-based social application. Implemented real-time chat features, personality scoring systems including MBTI, Maharbote Score (based on Myanmar mythology), compatibility analysis, zodiac, horoscope, and numerology. Focused on scalable architecture, API design, and seamless cross-platform user experience. The application has been released on both the Apple App Store and Google Play Store.",
      category: "Full-Stack Development",
      demoLink: "https://apps.apple.com/us/app/maharbote-social/id6753066582"
    },
    {
      imgPath: cooksmart,
      title: "Cook Smart",
      description: "Developed a Cook Smart app iOS using SwiftUI, SQLite, Firebase, and alamofire. The app features a list of popular recipes, recipe details, and search functionality. The app uses the Spoonacular API for recipe data and this app can control management eat on day/week/month.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/CookSmart"
    },
    {
      imgPath: movie,
      title: "Movie App",
      description: "Developed a movie app iOS with SwiftUI and alamofire. The app features a list of popular movies, movie details, and search functionality. The app uses the TMDB API for movie data. and this app i using package SDWebImage for image caching.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/MovieApp"
    },
    {
      imgPath: sevensummit,
      title: "Seven Summit Central Java Guide App",
      description: "Developed a Seven Summit Central Java Guide App with SwiftUI. The app features a list of mountains, mountain details, and the ability to create custom hiking itineraries. The app uses MapKit for displaying interactive maps, route planning, and providing users with geolocation-based guidance.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/MVVMSevenSummitApp"
    },
    {
      imgPath: expense,
      title: "Expense Tracker App",
      description: "Developed an expense tracker app with SwiftUI. The app features a list of transactions, transaction details, and the ability to add and delete transactions. The app uses Core Data for data persistence, Data Visualization Using Swift Charts, Advance Filters and Search, Device Biometric App Lock, App Widget.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/ExpenseApp"
    },
    {
      imgPath: madura,
      title: "Warung Madura App",
      description: "Developed an online food ordering app with SwiftUI. The app features a list of cigarattes, cigarattes details, and the ability to add and delete cigarattes. The app uses Core Data for data persistence.",
      category: "iOS",
      ghLink: "https://github.com/rickyprimay/WarungMaduraApp"
    },
    {
      imgPath: vehiloc,
      title: "Vehiloc App",
      description: "Developed and published app on App Store, Google Play Store and modernize web vehiloc.id, this app using Google Maps API for rendering map and track vehicle client, using websocket for realtime get data from vehicle. this app i created when i intern on PT. Buana Online Sejahtera as a Full Stack App Developer i handle web and Flutter, migrate from Legacy app using felgo to Flutter.",
      category: "Flutter",
      demoLink: "https://apps.apple.com/id/app/vehiloc/id6478942877",
    },
    {
      imgPath: hitech,
      title: "Online Presence With Face Recognition and Geolocation",
      description: "I'm building a website for the Hi-Technology 2023 Software Fair. The tech stack I used includes SvelteKit, Supabase, and PostgreSQL. For face recognition, I utilized the face-api.js API, and for geolocation, I implemented Mozilla Web API.",
      category: "Web",
      ghLink: "https://github.com/RickyPrima30/presensi-facerecognition-geolocation",
      demoLink: "https://presensi-mhs.netlify.app/",
    },
    {
      imgPath: weatherFlutter,
      title: "Weather App",
      description: "Developed a Weather app with Flutter. The app uses the OpenWeatherMap API for weather data. and using package Block for state management, Dio for HTTP request, and geo_locator for get location user.",
      category: "Flutter",
      ghLink: "https://github.com/rickyprimay/WeatherAppFlutter"
    },
    {
      imgPath: lms,
      title: "Learning Management System",
      description: "Developed a learning management system website for a mini project organized by an association. Integrated OAuth, email verification link, and email verification code. The platform allows users to engage with structured learning materials in video format. The tech stack includes Next.js, PostgreSQL, Supabase, Prisma, and Shadcnui.",
      category: "Web",
      ghLink: "https://github.com/rickyprimay/lms",
      demoLink: "https://rickieslearn.vercel.app/",
    },
    {
      imgPath: semnasti,
      title: "Website Registration Event Seminar Nasional Teknik Informatika",
      description: "Developed a website for the registration of the National Seminar on Informatics Engineering. The website features a listing ticket pricing, directly to Form. The tech stack includes Laravel, TailwindCSS, and MySQL.",
      category: "Web",
      demoLink: "https://semnasti.hmtiudinus.org/",
    },
    {
      imgPath: itc,
      title: "Website Lomba Cerdas Cermat IT Competition",
      description: "Developed a website for the IT Competition quiz event. The website features a quiz and leaderboard. The tech stack includes PHP, BootStrap, and MySQL.",
      category: "Web",
      demoLink: "https://lcc.hmtiudinus.org/",
    },
    {
      imgPath: hitechs,
      title: "Website Hi-Technology Software & Hardware Fair",
      description: "Developed a website for the Hi-Technology 2024 Software & Hardware Fair. The website features a list of events, registration, and a countdown timer. The tech stack includes Laravel, TailwindCSS, and MySQL.",
      category: "Web",
      demoLink: "https://hitech.hmtiudinus.org/",
    },
    {
      imgPath: codejam,
      title: "Website Code Jam Academy",
      description: "I'm building a website for Code Jam Academy 2023. The project is an internal training website by Himpunan Mahasiswa Teknik Informatika. The theme of the project is Laravel 10 CRUD with Authentication. Tech stack: HTML5 and TailwindCSS.",
      category: "Web",
      ghLink: "https://github.com/codejamacademy/codejamacademy.github.io",
      demoLink: "https://codejamacademy.github.io",
    },
    {
      imgPath: ppko,
      title: "jARictku",
      description: "I'm building this website for the Program Penguatan Kapasitas Ormawa (PPK-O). I served as a developer on the team. This project features augmented reality technology using Laravel, TailwindCSS, MySQL, and AR.js.",
      category: "Web",
      demoLink: "https://jaricktu.com",
    },
    {
      imgPath: ticketify,
      title: "Ticketify",
      description: "Working on the development of Ticketify, an event ticketing website similar to Tiket.com and YesPlis. The website is still in the development phase. Tech stack includes Laravel for backend, React for frontend, and Midtrans as the payment gateway service.",
      category: "Web",
      demoLink: "https://ticketify.id",
    },
    {
      imgPath: sirekam,
      title: "Sirekampolkesyogya",
      description: "Developed a website, sirekampolkesyogya.com, as a freelance project for students at Poltekkes Yogyakarta to participate in PKM competitions. The website helps record and manage student activity scores.",
      category: "Web",
      demoLink: "https://sirekampolkesyogya.com",
    },
    {
      imgPath: arch,
      title: "Sumberdaya Fakultas Rekaya Industri",
      description: "Developed a website, sumberdayafri.my.id, as a freelance project for students at Telkom University to complete their Thesis. The website serves as an information and resource platform for faculty students.",
      category: "Web",
      demoLink: "https://sumberdayafri.my.id",
    },
    {
      imgPath: tf,
      title: "Traffic Sense",
      description: "Participated in the DINACOM software competition by creating Traffic Sense, an app designed to find routes with minimal pollution. It uses Graphhopper API for maps and IoT with ESP-32 and MQ-135 sensors to monitor air quality. I developed the API for the mobile application.",
      category: "Android",
      demoLink: "https://smart-traffic.my.id/",
    },
  ];

  const categories: FilterCategory[] = ["All", "Web", "iOS", "Android", "Flutter", "Mobile Development", "Full-Stack Development"];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <div className="project-section">
      <Particle />
      <div className="container mx-auto px-4">
        <motion.h1
          className="project-heading text-center font-bold text-yellow-400 mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Recent <strong className="purple-text">Projects</strong>
        </motion.h1>

        <motion.p
          className="text-center mb-7.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Here are a few projects I've worked on recently and in production.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 py-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded border-2 font-semibold transition-all ${
                filter === category
                  ? "bg-[#a24dd386] text-white border-[#a24dd386]"
                  : "bg-transparent text-[#a24dd386] border-[#a24dd386] hover:bg-[#a24dd386] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
