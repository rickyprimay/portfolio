import React from "react";
import me from "../../Assets/me.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const Home: React.FC = () => {
  return (
    <section className="relative">
      <div className="pt-32 md:pt-40 lg:pt-48" id="home">
        <Particle />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Hi There!{" "}
                <span
                  role="img"
                  aria-label="wave"
                  className="inline-block ml-2 animate-wave origin-center"
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                I'M
                <span className="block text-primary">
                  {" "}
                  Ricky Primayuda Putra
                </span>
              </h1>

              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary py-6">
                <Type />
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center items-center">
              <img
                src={me}
                alt="home pic"
                className="w-full h-auto max-w-md md:max-w-full md:max-h-[500px] rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
};

export default Home;
