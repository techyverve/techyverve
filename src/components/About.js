"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, Users, Target, Zap, Shield, Award, Code, Palette, Cpu, Rocket, Heart, Globe, Database, Cloud } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Every project is built with robust security measures and industry best practices.",
      gradient: "from-gray-800 to-black"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with clients to understand their vision and exceed expectations.",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Lightning-fast solutions optimized for speed, scalability, and efficiency.",
      gradient: "from-gray-900 to-black"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      icon: <Code className="w-6 h-6" />,
      expertise: "Full-stack development, React, Node.js",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "UI/UX Designer", 
      icon: <Palette className="w-6 h-6" />,
      expertise: "User experience, Visual design, Prototyping",
      avatar: "MC"
    },
    {
      name: "Alex Rodriguez",
      role: "Project Manager",
      icon: <Award className="w-6 h-6" />,
      expertise: "Agile methodology, Client relations",
      avatar: "AR"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: <Rocket className="w-6 h-6" /> },
    { number: "100%", label: "Client Retention", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Technical Support", icon: <Shield className="w-6 h-6" /> },
    { number: "3+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> }
  ];

  const TechIcon = ({ delay, icon: Icon, size = "w-6 h-6" }) => (
    <div 
      className={`absolute ${size} text-gray-400/20 animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    >
      <Icon />
    </div>
  );

  return (
    <div id="about" className="relative min-h-screen bg-gradient-to-br from-gray-500  to-gray-300 py-20 overflow-hidden">
      {/* Tech-themed Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <TechIcon 
            key={i} 
            delay={i * 0.5} 
            icon={[Code, Database, Cloud, Globe, Cpu][i % 5]}
            size="w-8 h-8"
          />
        ))}
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-px h-32 bg-gray-400"></div>
        <div className="absolute top-10 left-20 w-32 h-px bg-gray-400"></div>
        <div className="absolute top-42 right-32 w-px h-24 bg-gray-500"></div>
        <div className="absolute bottom-32 left-40 w-40 h-px bg-gray-600"></div>
        <div className="absolute bottom-20 right-20 w-px h-40 bg-gray-400"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-800 to-black rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 animate-pulse shadow-lg shadow-gray-900/50 border border-gray-600">
            <Cpu className="w-4 h-4" />
            About TechyVerve
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white  to-white  bg-clip-text text-transparent mb-6">
            Pioneering Digital
            <br />
            <span className="text-transparent bg-gradient-to-r from-white  to-gray bg-clip-text">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a cutting-edge technology company specializing in innovative software solutions, 
            cloud infrastructure, and digital transformation services for modern enterprises.
          </p>
        </div>
        
        {/* Mission & Stats Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-pulse"></div>
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At TechyVerve, we harness the power of emerging technologies to build scalable, 
                secure, and intelligent solutions. Our mission is to empower businesses with 
                robust digital infrastructure and innovative software that drives growth and efficiency.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Enterprise-grade development expertise",
                "Modern tech stack & cloud solutions", 
                "Agile development methodology",
                "Comprehensive DevOps & maintenance"
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 delay-${(index + 1) * 100}`}
                  style={{
                    animation: `slideInLeft 0.6s ease-out ${(index + 1) * 0.1}s both`
                  }}
                >
                  <CheckCircle className="w-6 h-6 text-gray-400 animate-pulse" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Animated Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/50">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100}`}
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                    }}
                  >
                    <div className="flex justify-center mb-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`mb-24 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 px-6 py-2 rounded-full text-sm font-medium mb-6 border border-gray-600/50">
              <Database className="w-4 h-4" />
              Core Values
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">What Drives Us</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              These principles form the foundation of our technology solutions and client partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-gray-500/70 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer`}
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`
                }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Tech Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute inset-2 border border-gray-500/20 rounded-xl"></div>
                  <div className="absolute inset-4 border border-gray-400/20 rounded-lg"></div>
                </div>
                
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className={`relative z-10 text-center`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${value.gradient} mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-black/50 border border-gray-600/30`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Animated Circuit Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;