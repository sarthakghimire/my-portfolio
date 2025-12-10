import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import meme from "./../assets/meme.png";
import chat from "./../assets/chat.png";
import e_com from "./../assets/e_com.png";

const Projects = () => {
    const projects = [
        {
            title: "Chatroom App",
            description: "A real-time chatroom built with ReactJS and Appwrite. Features seamless messaging and user authentication.",
            image: chat,
            link: "https://github.com/sarthakghimire/chat-app",
            linkType: "github"
        },
        {
            title: "Meme Generator",
            description: "A fun meme generator built using ReactJS and Bootstrap. Create and share memes instantly.",
            image: meme,
            link: "https://memesbysarthak.netlify.app",
            linkType: "live"
        },
        {
            title: "Mock E-commerce",
            description: "An e-commerce site using Platzi FakeStore API. Includes customer login, admin panel, and AI cart summary.",
            image: e_com,
            link: "https://venerable-parfait-4347ed.netlify.app/",
            linkType: "live"
        }
    ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Check out some of my recent work</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 overflow-hidden bg-muted">
                             <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <CardDescription className="text-base">{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.linkType === 'github' ? (
                                        <>View on GitHub <Github className="ml-2 h-4 w-4"/></>
                                    ) : (
                                        <>View Live <ExternalLink className="ml-2 h-4 w-4"/></>
                                    )}
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
