"use client";

import React, { useState } from "react";
import Image from "next/image";
import bill from "../resources/bill.png";
import pigmy from "../resources/pigmy.png";
import gym from "../resources/gym.png";
import snMastermind from "../resources/sn-mastermind.png";
import laptop from "../resources/laptop.png";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
  {
    title: "Billing Software",
    description: "Comprehensive billing and invoice management system with automated features",
    image: bill,
    technologies: ["React", "Node.js", "MongoDB","Redux"],
    category: "Software"
  },
  {
    title: "Pigmy Software",
    description: "Comprehensive billing and invoice management system with automated features",
    image: pigmy,
    technologies: ["Next", "Node.js", "MongoDB","Redux"],
    category: "Software"
  },
  {
    title: "Gym Management Software",
    description: "Complete gym management solution with member tracking and payment systems",
    image: gym,
    technologies: ["React.js", "Node.js", "Mongodb"],
    category: "Software"
  },
  {
    title: "SN Mastermind Website",
    description: "Professional corporate website with modern design and responsive layout",
    image: snMastermind,
    technologies: ["Next", "Tailwind CSS", "Framer Motion"],
    category: "Website"
  },
];


  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-white text-black py-20 mt- -m-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {["All", "Software", "Mobile App"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg ${
                filter === cat
                  ? "bg-blue-600 text-black"
                  : "bg-gray-700 text-black-300 hover:bg-gray-600"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects list */}
        <div className="space-y-20">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* LEFT: Laptop Mockup */}
              <div className="relative w-full h-96 flex items-center justify-center">
                <Image
                  src={laptop}
                  alt="Laptop Mockup"
                  className="z-10"
                  fill
                  style={{ objectFit: "contain" }}
                />

                {/* Sliding project screenshot */}
                <div className="absolute top-[18%] left-[12%] w-[76%] h-[60%] overflow-hidden rounded-md">
                  <div className="animate-slide">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-top"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Info (Always shown) */}
              <div>
                <h3 className="text-3xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-black-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 text-black text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind sliding animation */}
      <style jsx>{`
        .animate-slide {
          animation: slide 8s linear infinite alternate;
        }
        @keyframes slide {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-40%);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
