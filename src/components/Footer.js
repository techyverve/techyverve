"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#fbfbfd] overflow-hidden">
      {/* Top Section */}
      <div className="pt-20 pb-64 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact
              </h3>
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
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Kharadi, Pune</span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex space-x-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:bg-sky-400 hover:text-white hover:border-sky-400 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Moving Background */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png')] bg-no-repeat bg-center"></div>

        {/* Car */}
        <div className="absolute bottom-0 left-1/3 w-72 h-24 bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif')] bg-contain bg-no-repeat animate-[slide_22s_linear_infinite]"></div>

        {/* Cyclist */}
        <div className="absolute bottom-0 left-1/2 w-20 h-24 bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif')] bg-contain bg-no-repeat animate-[slide_30s_linear_infinite]"></div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-200 py-5 text-center text-gray-500">
        <p>
          © Made with ❤️ by TechyVerve
        </p>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            left: -25%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
