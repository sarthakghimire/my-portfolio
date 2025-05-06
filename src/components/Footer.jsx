import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-ghibli-fog text-white text-center py-10 px-6"
    >
      <h2 className="text-2xl font-ghibliHand mb-6">
        Remember me when you're having Biryani!
      </h2>

      <div className="flex justify-center items-center gap-8 text-2xl mb-6">
        <a
          href="mailto:sarthakghimire.sg@gmail.com"
          className="hover:text-ghibli-petal transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/sarthak-ghimire-a41b68231/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ghibli-petal transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sarthakghimire"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ghibli-petal transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-ghibli-ink text-sm">
        © {new Date().getFullYear()} Sarthak Ghimire • Inspired by Studio Ghibli
      </p>
    </footer>
  );
};

export default Footer;
