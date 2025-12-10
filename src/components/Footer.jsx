import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6 tracking-tight text-foreground">
          Let's Connect!
        </h2>
        <p className="text-muted-foreground mb-8">
            Remember me when you're having Biryani!
        </p>

        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="mailto:sarthakghimire.sg@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/sarthak-ghimire-a41b68231/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/sarthakghimire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground border-t border-border/50 pt-8 w-full max-w-md mx-auto">
          <p>© {new Date().getFullYear()} Sarthak Ghimire.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
