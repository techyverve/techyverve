"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Globe, Users, Smartphone, Database, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const stackedCardsRef = useRef(null);

  // Services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      icon: <Globe className="w-10 h-10" />,
      gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-10 h-10" />,
      gradient: "bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Backend Services",
      description: "Scalable server-side solutions and API development",
      icon: <Database className="w-10 h-10" />,
      gradient: "bg-gradient-to-r from-orange-400 via-red-500 to-pink-600",
    },
  ];

  return (
    <div className="services-page bg-white">
      {/* Hero Section */}
      <section
        className="hero min-h-screen flex items-center justify-between px-2 md:px-20"
        id="services"
      >
        <div className="hero-text flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-mono">
            Services done{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold">
              differently
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-sans">
            From cutting-edge web applications to mobile solutions and
            everything in between, you'll never need to look anywhere else for
            your development needs.
          </p>
          <div className="hero-cta">
            <a href="#servimain" className="button3 inline-block">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-img flex-1 flex justify-center">
          <div className="hero-container relative">
            <div className="circle-wrapper relative">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Code className="w-32 h-32 text-white" />
              </div>
              <div className="circular-text absolute -top-8 -right-8">
                <div className="w-48 h-48 border border-black rounded-full flex items-center justify-center">
                  <p className="circletext text-sm font-light uppercase tracking-wider">
                    &nbsp;&nbsp;&nbsp;development&nbsp;&nbsp;&nbsp;done&nbsp;&nbsp;&nbsp;differently&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative">
        {/* Services Introduction */}
        <section id="servimain" className="part1 px-8 md:px-16">
          <h2 className="text-3xl font-mono text-center mb-16 font-bold text-gray-800">
            Our Services
          </h2>

          {/* Stacked Fixed-Size Cards */}
          <div
            className="scroll-cards w-full flex flex-col items-center space-y-12"
            ref={stackedCardsRef}
          >
            {services.map((service) => (
              <article
                key={service.id}
                className={`scroll-cards__item ${service.gradient} text-white shadow-2xl rounded-2xl p-10 flex flex-col justify-center transition-transform transform hover:scale-105 hover:shadow-3xl`}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-md opacity-90">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        .button3 {
          position: relative;
          padding: 24px 34px 22px 34px;
          background-color: #eec01c;
          color: #000;
          font-size: 16px;
          font-weight: 400;
          line-height: 110%;
          letter-spacing: 2px;
          text-decoration: none;
          text-align: center;
          z-index: 1;
        }

        .button3:before {
          content: "";
          position: absolute;
          left: 7px;
          top: 7px;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          outline: 3px solid #000;
          display: block;
          z-index: -1;
          transition: all 0.3s ease-out;
        }

        .button3:hover:before {
          top: 2px;
          left: 2px;
          background: #eec01c;
        }

        .scroll-cards {
          counter-reset: card;
          position: relative;
          display: block;
          padding-bottom: 60vh;
        }

        .scroll-cards > .scroll-cards__item + .scroll-cards__item {
          margin-top: 40vh;
        }

        .scroll-cards__item {
          --offset: 1.25em;
          position: sticky;
          top: max(16vh, 10em);
          min-height: 22em;
          margin: 0 auto;
          width: 100%;
          max-width: 52em; /* Increased width */
        }

        .scroll-cards__item:nth-of-type(1) {
          --index: 0;
        }
        .scroll-cards__item:nth-of-type(2) {
          --index: 1;
        }
        .scroll-cards__item:nth-of-type(3) {
          --index: 2;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
          }

          .hero-text,
          .hero-img {
            flex: none;
          }

          .hero-container .w-96 {
            width: 250px;
            height: 250px;
          }

          .scroll-cards__item {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
