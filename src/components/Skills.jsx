import React from "react";
import HTML from "./../../src/assets/html.png";
import CSS from "./../../src/assets/css.png";
import JS from "./../../src/assets/js.png";
import SASS from "./../../src/assets/sass.png";
import TAILWIND from "./../../src/assets/tailwind.png";
import BOOTSTRAP from "./../../src/assets/bootstrap.png";
import REACT from "./../../src/assets/react.png";

const Skills = () => {
  const skills = [HTML, CSS, JS, REACT, SASS, BOOTSTRAP, TAILWIND];

  return (
    <div
      id="skills"
      className="bg-ghibli-ink flex flex-col items-center justify-around min-h-screen px-6 py-12 text-center text-white"
    >
      <h2 className="text-4xl font-ghibliHand mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {skills.map((icon, index) => (
          <div
            key={index}
            className="bg-white rounded-full w-24 h-24 p-4 flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
          >
            <img
              src={icon}
              alt={`Skill ${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
