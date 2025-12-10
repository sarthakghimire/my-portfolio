import React from "react";
import Type from "./Type";
import DP from "./../assets/me.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDownCircle, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-primary">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Sarthak Ghimire
            </span>
          </h1>
          
          <div className="text-xl lg:text-2xl text-muted-foreground font-medium h-20 lg:h-auto">
             <Type />
          </div>
          
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
            A passionate developer crafting beautiful, user-friendly digital experiences. I turn ideas into code and build things that live on the web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
             <Button size="lg" className="rounded-full" asChild>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
                    View My Work <ArrowDownCircle className="ml-2 h-4 w-4" />
                </Link>
             </Button>
             <Button variant="outline" size="lg" className="rounded-full" asChild>
                <a href="/CV_Sarthak.pdf" download="CV_Sarthak_Ghimire.pdf">
                    Download CV <Download className="ml-2 h-4 w-4" />
                </a>
             </Button>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-40"></div>
            <img
              src={DP}
              alt="Sarthak Ghimire"
              className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
