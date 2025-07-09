"use client";

import React from 'react';
import { CheckCircle, Users, Target, Zap, Shield, Award, Code, Palette } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality",
      description: "Every project is built with attention to detail and rigorous testing standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with clients to understand their vision and exceed expectations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "Fast delivery without compromising on quality or functionality."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      icon: <Code className="w-6 h-6" />,
      expertise: "Full-stack development, React, Node.js"
    },
    {
      name: "Mike Chen",
      role: "UI/UX Designer",
      icon: <Palette className="w-6 h-6" />,
      expertise: "User experience, Visual design, Prototyping"
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      icon: <Award className="w-6 h-6" />,
      expertise: "Agile methodology, Client relations"
    }
  ];

  return (
    <div id='about' className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TechyVerve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers and designers dedicated to creating exceptional digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            {/* <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Mission</h3> */}
            <p className="text-gray-600 mb-6">
              At TechyVerve, we believe in the power of technology to transform businesses. Our mission is to deliver 
              innovative, scalable, and user-friendly solutions that help our clients achieve their goals and stay 
              ahead in the competitive digital landscape.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Expert team with years of experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Cutting-edge technology stack</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Client-focused approach</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">24/7 support and maintenance</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented professionals bring diverse skills and expertise to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {member.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>   */}


      </div>
    </div>
  );
};

export default About;