import React from "react";
import me from "../../Assets/me-home.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const Home: React.FC = () => {
  return (
    <section>
      <div className="home-section" id="home">
        <Particle />
        <div className="container mx-auto">
          <div className="home-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Text */}
              <div className="home-header">
                <h1 className="heading mb-4">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Ricky Primayuda Putra</strong>
                </h1>

                <div className="p-12 text-left">
                  <Type />
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center items-center pb-5 md:pb-0">
                <img
                  src={me}
                  alt="home pic"
                  className="w-full h-auto max-w-md md:max-w-full md:max-h-[500px] rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
};

export default Home;
