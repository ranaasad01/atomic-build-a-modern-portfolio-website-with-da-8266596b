"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grid-pattern">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 backdrop-blur-sm">
              <Sparkles size={14} className="text-indigo-400" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-indigo-500/10 backdrop-blur-sm"
            >
              Get In Touch
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 font-semibold text-sm transition-all duration-200"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:bg-indigo-500/10"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:bg-indigo-500/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={"mailto:" + personalInfo.email}
              className="p-3 rounded-xl border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:bg-indigo-500/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => {
                const el = document.querySelector("#about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
              <ArrowDown size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
