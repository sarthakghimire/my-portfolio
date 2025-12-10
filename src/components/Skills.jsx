import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import HTML from "./../../src/assets/html.png";
import CSS from "./../../src/assets/css.png";
import JS from "./../../src/assets/js.png";
import TAILWIND from "./../../src/assets/tailwind.png";
import BOOTSTRAP from "./../../src/assets/bootstrap.png";
import REACT from "./../../src/assets/react.png";
import GITHUB from "../assets/github.png";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JS },
        { name: "React", icon: REACT },
        { name: "Bootstrap", icon: BOOTSTRAP },
        { name: "Tailwind CSS", icon: TAILWIND },
        { name: "GitHub", icon: GITHUB },
    ];

    // Duplicate skills to ensure seamless looping
    const marqueeSkills = [...skills, ...skills, ...skills];

    return (
        <section id="skills" className="py-20 bg-muted/50 overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">My Skills</h2>
                    <p className="text-muted-foreground text-lg">Technologies I work with</p>
                </motion.div>

                <div className="relative w-full flex">
                    <motion.div
                        className="flex flex-nowrap gap-6"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20 // Adjust duration for speed
                        }}
                        style={{ width: "max-content" }}
                    >
                         {/* Render duplicate sets for seamless loop */}
                         {[...marqueeSkills].map((skill, index) => (
                            <div key={index} className="flex-shrink-0 w-40 sm:w-48">
                                <Card className="hover:shadow-lg transition-all duration-300 bg-background border-none h-full">
                                    <CardContent className="flex flex-col items-center justify-center p-6">
                                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                                            <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="font-medium text-center text-sm sm:text-base">{skill.name}</p>
                                    </CardContent>
                                </Card>
                            </div>
                         ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
