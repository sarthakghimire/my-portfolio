import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-ghibli-fog text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-ghibliHand tracking-wide">
          Sarthak Ghimire
        </h1>

        <nav className="space-x-6 hidden sm:block">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-ghibli-leaf transition-colors"
          >
            Projects
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-ghibli-leaf transition-colors"
          >
            Education
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-ghibli-leaf transition-colors"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-ghibli-leaf transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
