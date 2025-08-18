"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white mt-5 text-gray-800 flex flex-col justify-between overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">TechyVerve</h3>
            <p className="text-gray-600 mb-6">
              Creating innovative digital solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                <Facebook className="text-white w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-400 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                <Twitter className="text-white w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                <Linkedin className="text-white w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://example.com/software"
                  className="hover:text-blue-600"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/web"
                  className="hover:text-blue-600"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/uiux"
                  className="hover:text-blue-600"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/consulting"
                  className="hover:text-blue-600"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://example.com/about"
                  className="hover:text-blue-600"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/team"
                  className="hover:text-blue-600"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/careers"
                  className="hover:text-blue-600"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/contact"
                  className="hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:techyverve@gmail.com"
                  className="hover:text-blue-600"
                >
                  techyverve@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-blue-600"
                >
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Kharadi, Pune</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-200 py-6 text-center text-gray-500">
        <p>&copy; 2025 TechyVerve. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
