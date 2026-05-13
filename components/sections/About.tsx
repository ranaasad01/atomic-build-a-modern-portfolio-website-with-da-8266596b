"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Code2 as Github, Briefcase as Linkedin, Download } from 'lucide-react';
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Open Source Stars", value: "1.2k" },
  { label: "Happy Clients", value: "25+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-500 bg-indigo-500/10 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Crafting digital experiences
              <br />
              <span className="gradient-text">with purpose</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative border */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-xl" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Open to work
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="space-y-4">
                {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Info */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin size={16} className="text-indigo-500" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Mail size={16} className="text-indigo-500" />
                  {personalInfo.email}
                </div>
              </div>

              {/* Social + Resume */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all text-sm font-medium"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all text-sm font-medium"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all text-sm font-medium"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all group">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
