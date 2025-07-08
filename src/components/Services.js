"use client";

import React from 'react';
import { Code, Globe, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Web Development",
      description: "Responsive, fast, and SEO-optimized websites that drive results"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that enhance user experience"
    }
  ];

  return (
    <div id='services' className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;