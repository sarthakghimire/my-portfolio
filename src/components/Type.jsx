import React from "react";
import { ReactTyped } from "react-typed";

const Type = () => (
  <div className="space-y-2">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
      Namaste! I am Sarthak Ghimire.
    </h1>
    <ReactTyped
      strings={[
        "I am a student...",
        "I am a frontend learner...",
        "I am a Biryani connoisseur...",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
      className="text-lg sm:text-xl text-primary font-medium"
    />
  </div>
);

export default Type;
