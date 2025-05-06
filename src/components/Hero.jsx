import React from "react";
import "./../../style.css";
import Type from "./Type";
import DP from "./../assets/me.png";
import { scroller } from "react-scroll";

const Hero = () => {
  return (
    <div className="bg-ghibli-sky flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center lg:text-left">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12">
        <div className="lg:w-1/2 space-y-6">
          <Type />
          <button
            onClick={() =>
              scroller.scrollTo("education", {
                smooth: true,
                duration: 500,
              })
            }
            className="btn-ghibli px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-transform duration-300"
          >
            Wohoo
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={DP}
            alt="Sarthak Ghimire"
            className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
