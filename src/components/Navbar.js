"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Check which section is currently in view
      const sections = ["home", "about", "services", "projects", "contact"];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact Us", href: "#contact", id: "contact" },
    { name: "Career", href: "/career", id: "career" },
  ];

  const isActive = (itemId) => {
    if (itemId === "career") return false; // Career is external link
    return activeSection === itemId;
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/0 backdrop-blur-sm border-b border-white/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl pt- -m-4 mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="bg-none text-center py-8">
              <h1 className="font-logo text-sm sm:text-lg lg:text-xl tracking-widest bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent uppercase">
                TechyVerve
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 hover:scale-105 group ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:bg-white/10"
                        : "text-black hover:bg-white/10 hover:text-black"
                    }`}
                  >
                    {item.name}
                    
                    {/* Bottom border animation */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 transform transition-transform duration-300 ease-out ${
                        isActive(item.id)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                    
                    {/* Hover glow effect */}
                    <span
                      className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isScrolled
                          ? "bg-gradient-to-r from-emerald-500/10 via-teal-600/10 to-cyan-600/10"
                          : "bg-gradient-to-r from-emerald-500/10 via-teal-600/10 to-cyan-600/10"
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
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-gray-900 hover:bg-white/10"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-sm border-t border-white/20 rounded-b-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 group ${
                    isScrolled
                      ? "text-gray-900 hover:bg-gray-100 hover:text-purple-600"
                      : "text-gray-900 hover:bg-white/20 hover:text-blue-300"
                  } ${
                    isActive(item.id) ? "bg-white/20" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  
                  {/* Mobile bottom border animation */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 transform transition-transform duration-300 ease-out ${
                      isActive(item.id)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;