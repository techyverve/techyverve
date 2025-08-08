"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../resources/logo.png"; // Correct import for local image

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ["home", "about", "services", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      // Default to home if we're at the top
      let currentSection = "home";
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
      
      // Set text color based on current section
      // White for home section, black for all other sections
      setTextColor(currentSection === "home" ? "white" : "black");
    };

    // Call initially to set correct state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact Us", href: "#contact", id: "contact" },
    { name: "Career", href: "/career", id: "career" },
  ];

  const isActive = (itemId) => {
    if (itemId === "career") return false;
    return activeSection === itemId;
  };

  return (
    <nav className="fixed top-4 left-50 right-50 z-50">
      <div
        className={`transition-all duration-300 ease-in-out rounded-4xl ${
          isScrolled
            ? "bg-white/0 backdrop-blur-sm border-b border-white/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-3 py-1 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="TechyVerve Logo"
                className="object-contain"
                width={40}
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-6 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-2 py-1 rounded-xl text-xs lg:text-sm font-medium transition-all duration-200 hover:scale-105 group ${
                      textColor === "white"
                        ? "text-white hover:bg-white/10 hover:text-white"
                        : "text-black hover:bg-black/10 hover:text-black"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 ease-out rounded-full ${
                        isActive(item.id)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ${
                        textColor === "white" 
                          ? "bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300"
                          : "bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors duration-200 ${
                  textColor === "white"
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm border-t rounded-b-xl ${
              textColor === "white" 
                ? "bg-white/10 border-white/20" 
                : "bg-black/10 border-black/20"
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative block px-3 py-2 rounded-xl text-base font-medium transition-all duration-200 group ${
                    textColor === "white"
                      ? "text-white hover:bg-white/20 hover:text-white"
                      : "text-black hover:bg-black/20 hover:text-black"
                  } ${isActive(item.id) ? (textColor === "white" ? "bg-white/20" : "bg-black/20") : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 transform transition-transform duration-300 ease-out rounded-full ${
                      isActive(item.id)
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ${
                      textColor === "white"
                        ? "bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300"
                        : "bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;