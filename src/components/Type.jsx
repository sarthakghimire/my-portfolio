import { ReactTyped } from "react-typed";

const Type = () => (
  <div className="font-ghibli space-y-3">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-ghibli-ink font-ghibli-hand">
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
      className="text-xl sm:text-2xl text-ghibli-fog font-ghibli"
    />
  </div>
);

export default Type;
