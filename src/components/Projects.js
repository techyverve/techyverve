"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import bill from "../resources/bill.png";
import pigmy from "../resources/pigmy.png";
import gym from "../resources/gym.png";
import snMastermind from "../resources/sn-mastermind.png";
import laptop from "../resources/laptop.png";

const projects = [
  {
    title: "Billing Software",
    description: "Comprehensive billing & invoice system with automated features and analytics.",
    details:
      "This project supports GST billing, invoice tracking, customer database management, and financial reporting. It also includes role-based authentication and data visualization dashboards for admins.",
    image: bill,
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    liveUrl: "https://mybillingapp.example.com",
    github: "https://github.com/yourname/billing-app",
  },
  {
    title: "Pigmy Software",
    description: "Automated recurring deposit collection & real-time reporting for finance sectors.",
    details:
      "Designed for financial agents and institutions to simplify RD collections. Features include automated notifications, secure transactions, and advanced analytics with export options.",
    image: pigmy,
    technologies: ["Next.js", "Node.js", "MongoDB", "Redux"],
  },
  {
    title: "Gym Management Software",
    description: "Membership, attendance, payments & trainer management in one platform.",
    details:
      "Helps gym owners manage memberships, workout schedules, trainer assignments, and payment collections. Includes attendance tracking and real-time performance analytics.",
    image: gym,
    technologies: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "SN Mastermind Website",
    description: "Corporate website featuring modern animations and responsive design.",
    details:
      "Built for a corporate business with modern UI/UX, responsive layouts, SEO optimization, and smooth animations using Framer Motion.",
    image: snMastermind,
    technologies: ["Next", "Tailwind CSS", "Framer Motion"],
  },
];

function useScrollLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef();

  useEffect(() => setMounted(true), []);

  useScrollLock(Boolean(selectedProject));
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e) => e.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  return (
    <section className="bg-gradient-to-tr from-blue-200 via-white to-purple-100 min-h-screen py-16 px-2 relative">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 to-fuchsia-600 text-transparent bg-clip-text"
      >
        Projects Gallery
      </motion.h2>

      {/* Horizontal scroll cards */}
      <div
        ref={scrollRef}
        className="flex gap-10 snap-x snap-mandatory overflow-x-auto pb-8 px-2 hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.96, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.06 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(80,80,200,0.18)",
            }}
            className="snap-center min-w-[340px] md:min-w-[420px] xl:min-w-[500px] rounded-3xl overflow-hidden bg-white/80
             shadow-2xl ring-1 ring-blue-100 relative cursor-pointer transition-all flex flex-col group h-[520px]" // ⬅️ Increased card height
            onClick={() => setSelectedProject(p)}
          >
            <div className="relative h-80 overflow-hidden w-full"> {/* ⬅️ increased height from h-64 to h-80 */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.08, y: -16 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-400"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  animate={{ opacity: [0.38, 0.52, 0.38] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
              </motion.div>
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-lg text-gray-800 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full bg-gradient-to-tr from-blue-600 to-fuchsia-500 text-white text-xs font-medium shadow-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Snap indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className="inline-block w-3 h-3 rounded-full bg-blue-300 opacity-70"
          />
        ))}
      </div>

      {/* Popup modal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                key="overlay"
                className="fixed inset-0 z-[99999] bg-black/55 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                aria-modal="true"
                role="dialog"
              >
                <motion.div
                  key="dialog"
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="relative w-[95%] max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-[100000]" // ⬅️ wider popup
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-6 text-neutral-500 hover:text-red-500 text-2xl font-bold z-[100001]"
                    aria-label="Close"
                  >
                    ✖
                  </button>

                  {/* LEFT : Bigger Laptop */}
                  <div className="relative flex-1 min-h-[420px] bg-gray-100 flex items-center justify-center"> {/* ⬅️ taller laptop area */}
                    <Image
                      src={laptop}
                      alt="Laptop"
                      fill
                      style={{ objectFit: "contain" }}
                      className="z-10 select-none pointer-events-none"
                    />
                    <div className="absolute top-[15%] left-[10%] w-[80%] h-[68%] rounded-lg overflow-hidden shadow-xl border-2 border-blue-200 bg-black"> {/* ⬅️ bigger screen */}
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        style={{ objectFit: "contain" }}
                        className="!static"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>

                  {/* RIGHT : Details */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-blue-800 mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="mb-4 text-gray-700 text-lg">
                      {selectedProject.description}
                    </p>
                    <p className="mb-4 text-gray-600">
                      {selectedProject.details}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {selectedProject.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-tr from-blue-600 to-fuchsia-500 text-white text-sm px-3 py-[4px] rounded shadow"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 mt-2">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener"
                          className="text-blue-700 underline font-semibold"
                        >
                          Live Demo
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener"
                          className="text-fuchsia-700 underline font-semibold"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        body.modal-open { overflow: hidden !important; }
        body.modal-open #navbar { display: none !important; }
      `}</style>
    </section>
  );
}
