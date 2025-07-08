"use client";

import {
  Users,
  Code,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Code className="w-7 h-7" />,
      title: "Code Excellence",
      description:
        "We write clean, maintainable code and follow best practices in everything we build.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Team Collaboration",
      description:
        "Cross-functional teams working together to solve complex problems and ship great products.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Innovation First",
      description:
        "We embrace new technologies and methodologies to stay ahead of the curve.",
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Work-Life Balance",
      description:
        "Flexible schedules, remote work options, and comprehensive benefits for all team members.",
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  const benefits = [
    { icon: <Globe className="w-5 h-5" />, text: "Remote-first culture" },
    {
      icon: <Award className="w-5 h-5" />,
      text: "Competitive compensation + equity",
    },
    { icon: <Sparkles className="w-5 h-5" />, text: "Unlimited PTO policy" },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Learning & development budget",
    },
  ];

  const stats = [
    { label: "Team Size", value: "4+ engineers" },
    { label: "Founded", value: "2025" },
    { label: "Locations", value: "Pune" },
    { label: "Projects", value: "10+ delivered" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 font-sans overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200/50 backdrop-blur-sm bg-white/70 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Careers at TechyVerve
            </h1>
            <p className="text-gray-600 text-base md:text-base font-light">
              Join our team of innovators and builders
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                We&apos;re building the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  future
                </span>
              </h2>
              <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
                Our mission is to create technology that empowers people and
                transforms industries. We&apos;re looking for passionate individuals
                who share our vision and want to make an impact.
              </p>

              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 transform transition-all duration-700 ease-out ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full text-white">
                      {benefit.icon}
                    </div>
                    <span className="text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push("/")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Explore Technologies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Quick Stats
                  </h3>
                </div>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors duration-300 rounded-lg px-2"
                    >
                      <span className="text-gray-600 font-medium">
                        {stat.label}:
                      </span>
                      <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${value.gradient} rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  {value.description}
                </p>
                <div
                  className={`mt-4 h-1 bg-gradient-to-r ${value.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
              We&apos;re always looking for exceptional talent to join our innovative
              team. Share your vision and let&apos;s build something amazing
              together.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=techyverve@gmail.com&su=General%20Application&body=Hi,%20I&apos;m%20interested%20in%20joining%20your%20team.%20Please%20find%20my%20resume%20attached."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50"
            >
              Send General Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 text-gray-800 py-12 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >

            <div className="border-t border-gray-300/50 pt-8">
              <p className="text-gray-500">
                © 2025 TechyVerve Software Private Limited. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}