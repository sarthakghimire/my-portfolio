import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Education = () => {
    const educationData = [
        {
            title: "Bachelor of Science in CSIT",
            period: "2022 - Present",
            institution: "Tribhuvan University, Bhaktapur Multiple Campus",
            description: "Surviving...",
            current: true,
        },
        {
            title: "High School (Science)",
            period: "2019 - 2021",
            institution: "St. Xavier’s College",
            description: "Survived the COVID pandemic.",
        },
        {
            title: "Secondary Education",
            period: "2006 - 2019",
            institution: "Dibya Deep Jyoti English Secondary School",
            description: "Learned the Pythagoras theorem.",
        },
    ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Education</h2>
          <p className="text-muted-foreground text-lg">My academic background</p>
        </motion.div>

        <div className="relative border-l border-muted-foreground/30 ml-4 md:ml-12 space-y-12">
            {educationData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                >
                    <span 
                        className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full border-2 border-background ${item.current ? 'bg-primary animate-pulse' : 'bg-muted-foreground'}`}
                    ></span>
                    
                    <Card className="border-none shadow-none bg-transparent sm:bg-card sm:border sm:shadow-sm">
                        <CardHeader className="pb-2">
                             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <CardTitle className="text-xl font-bold text-primary">{item.title}</CardTitle>
                                <span className="text-sm font-medium px-2 py-1 bg-secondary rounded-md w-fit">
                                    {item.period}
                                </span>
                             </div>
                             <h4 className="text-base font-semibold text-foreground/80">{item.institution}</h4>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
