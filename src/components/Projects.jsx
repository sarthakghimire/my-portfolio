import React from "react";
import meme from "./../assets/meme.png";
import chat from "./../assets/chat.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-ghibli-leaf min-h-screen py-16 px-6 text-ghibli-ink"
    >
      <h2 className="text-4xl font-ghibliHand text-center mb-12">Projects</h2>

      <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="bg-white rounded-ghibli shadow-lg p-6 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300">
          <img
            src={chat}
            alt="Chatroom App"
            className="w-full h-48 object-cover rounded-ghibli mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Chatroom App</h3>
          <p className="mb-4 text-center">
            A real-time chatroom built with ReactJS and Appwrite.
          </p>
          <a
            href="https://github.com/sarthakghimire/chat-app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-ghibli-ink border-2 border-ghibli-ink rounded-ghibli hover:bg-ghibli-fog transition duration-300 hover:text-white"
          >
            View on GitHub
          </a>
        </div>

        <div className="bg-white rounded-ghibli shadow-lg p-6 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300">
          <img
            src={meme}
            alt="Meme Generator"
            className="w-full h-48 object-cover rounded-ghibli mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Meme Generator</h3>
          <p className="mb-4 text-center">
            A fun meme generator built using ReactJS and Bootstrap.
          </p>
          <a
            href="https://memesbysarthak.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-ghibli-ink border-2 border-ghibli-ink rounded-ghibli hover:bg-ghibli-fog transition duration-300 hover:text-white"
          >
            View Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
