"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../resources/logo.png";

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
      const sectionElements = sections.map((id) =>
        document.getElementById(id)
      );

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
      setTextColor(currentSection === "home" ? "white" : "black");
    };

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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[70vw]">
      <div
        className={`rounded-4xl transition-all p-1 duration-300 ease-in-out shadow-md backdrop-blur-sm bg-transparent`}
      >
        {/* Content container */}
        <div className="px-4 md:px-6 py-1">
          <div className="flex items-center justify-between h-13">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={logo}
                alt="TechyVerve Logo"
                className={`object-contain transition-all duration-300 ${
                  textColor === "white"
                    ? "filter brightness-0 invert"
                    : "filter brightness-0"
                }`}
                width={34}
                priority
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-6 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-1 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 group ${
                      textColor === "white"
                        ? "text-white hover:bg-white/10"
                        : "text-black hover:bg-black/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
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
        </div>

        {/* Mobile Menu (only visible when open) */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)} // close after click
                  className={`block px-3 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
                    textColor === "white"
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-black/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
