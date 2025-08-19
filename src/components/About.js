"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CheckCircle, Users, Target, Zap, Shield, Award, Code, Palette, Cpu, Rocket, Heart, Globe, Database, Cloud } from "lucide-react";
import Aboutus from "../resources/aboutas.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Every project is built with robust security measures and industry best practices.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with clients to understand their vision and exceed expectations.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Lightning-fast solutions optimized for speed, scalability, and efficiency.",
      gradient: "from-blue-700 to-blue-900"
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
      className={`absolute ${size} text-blue-100/30 animate-pulse`}
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
    <div id="about" className="relative min-h-screen bg-white py-20 overflow-hidden" style={{fontFamily: 'Inter, system-ui, -apple-system, sans-serif'}}>
      {/* Tech-themed Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <TechIcon 
            key={i} 
            delay={i * 0.5} 
            icon={[Code, Database, Cloud, Globe, Cpu][i % 5]}
            size="w-8 h-8"
          />
        ))}
      </div>



      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 font-sans">
        {/* Main Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-3xl text-gray-900 mb-6 font-mono">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">TechyVerve</span>
          </h1>
        </div>

        {/* About Us Content Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* About Us Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  alt="About TechyVerve"
                  src={Aboutus}
                  className="w-auto h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
                At TechyVerve, we are a passionate team of technology experts dedicated to transforming 
                businesses through innovative digital solutions. With years of experience in software 
                development, we specialize in creating robust, scalable applications that drive growth 
                and efficiency.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-sans">
                We harness the power of emerging technologies to build secure, intelligent solutions 
                that meet the unique needs of our clients. Our commitment to excellence and innovation 
                sets us apart in the competitive technology landscape.
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
                  className={`flex font-sans items-center gap-3 transition-all duration-500 delay-${(index + 1) * 100}`}
                  style={{
                    animation: `slideInLeft 0.6s ease-out ${(index + 1) * 0.1}s both`
                  }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
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