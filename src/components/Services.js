"use client";

import React from 'react';
import { Code, Globe, Users, ArrowRight, Smartphone, Database, Shield, Zap, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(null);
  
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies",
      features: ["Custom Applications", "API Development", "System Integration"],
      color: "blue",
      details: {
        technologies: ["React", "Node.js", "Python", "Java", ".NET"],
        pricing: "Starting from $5,000",
        timeline: "4-12 weeks",
        benefits: ["Scalable Architecture", "Clean Code", "Documentation", "Testing"]
      }
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Web Development",
      description: "Responsive, fast, and SEO-optimized websites that drive results",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development"],
      color: "green",
      details: {
        technologies: ["React", "Next.js", "WordPress", "Shopify", "HTML/CSS"],
        pricing: "Starting from $2,500",
        timeline: "2-8 weeks",
        benefits: ["Mobile-First Design", "SEO Optimized", "Fast Loading", "Secure"]
      }
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that enhance user experience",
      features: ["User Research", "Wireframing", "Prototyping"],
      color: "purple",
      details: {
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
        pricing: "Starting from $1,500",
        timeline: "2-6 weeks",
        benefits: ["User-Centered Design", "Conversion Optimization", "Brand Consistency", "Accessibility"]
      }
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: ["React Native", "Flutter", "App Store Optimization"],
      color: "orange",
      details: {
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        pricing: "Starting from $8,000",
        timeline: "6-16 weeks",
        benefits: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"]
      }
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      title: "Database Solutions",
      description: "Robust database design and management for scalable applications",
      features: ["Database Design", "Migration Services", "Performance Optimization"],
      color: "indigo",
      details: {
        technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
        pricing: "Starting from $3,000",
        timeline: "3-10 weeks",
        benefits: ["High Performance", "Data Security", "Scalability", "Backup Solutions"]
      }
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Security & Maintenance",
      description: "Comprehensive security audits and ongoing maintenance services",
      features: ["Security Audits", "Bug Fixes", "Performance Monitoring"],
      color: "red",
      details: {
        technologies: ["SSL Certificates", "Firewall Setup", "Monitoring Tools", "Backup Systems"],
        pricing: "Starting from $500/month",
        timeline: "Ongoing",
        benefits: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Performance Reports"]
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design",
      description: "Our designers create stunning visuals and user experiences"
    },
    {
      step: "03",
      title: "Development",
      description: "Expert developers bring your vision to life with clean code"
    },
    {
      step: "04",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedService(service)}
                className={`text-${service.color}-600 font-semibold hover:text-${service.color}-700 transition-colors flex items-center gap-2`}
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {selectedService.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedService.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.details.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Info</h4>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium">Pricing:</span> {selectedService.details.pricing}</p>
                    <p className="text-sm"><span className="font-medium">Timeline:</span> {selectedService.details.timeline}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.details.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex-1"
                >
                  Get Quote
                </button>
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex-1"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose TechyVerve?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We combine technical expertise with creative solutions to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
              <p className="text-blue-100">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
              <p className="text-blue-100">High-quality solutions built to last</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="text-xl font-semibold mb-2">Reliable Support</h4>
              <p className="text-blue-100">24/7 support and maintenance services</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us discuss how we can help bring your ideas to life with our expert services
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 mx-auto">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;