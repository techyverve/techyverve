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
      <div>hello</div>
  );
}
