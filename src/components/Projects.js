"use client";

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Billing Software",
      description: "Comprehensive billing and invoice management system with automated features",
      image: "../resources/bill.png",
      technologies: ["React", "Node.js", "MongoDB","Redux"],
      category: "Software"
    },
    {
      title: "Pigmy Software",
      description: "Comprehensive billing and invoice management system with automated features",
      image: "./resources/pigmy.png",
      technologies: ["Next", "Node.js", "MongoDB","Redux"],
      category: "Software"
    },
    {
      title: "Gym Management Software",
      description: "Complete gym management solution with member tracking and payment systems",
      image: "./resources/gym.png",
      technologies: ["React.js", "Node.js", "Mongodb"],
      category: "Software"
    },
    {
      title: "SN Mastermind Website",
      description: "Professional corporate website with modern design and responsive layout",
      image: "./resources/sn-mastermind.png",
      technologies: ["Next", "Tailwind CSS", "Framer Motion"],
      category: "Website"
    },
    {
      title: "TechyVerve Website",
      description: "Our own company website showcasing our capabilities and services",
      image: "./resources/techyverve.png",
      technologies: ["Next", "Tailwind CSS", "Framer Motion"],
      category: "Website"
    },
    {
      title: "Portfolio Websites",
      description: "Custom portfolio websites for professionals and creatives",
      image: "./resources/portfolio.png",
      technologies: ["HTML", "CSS3", "JS"],
      category: "Website"
    }
  ];

  return (
    <div id='projects' className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;