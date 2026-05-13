"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-500 bg-indigo-500/10 rounded-full mb-4">
                Projects
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Featured work
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl">
                A selection of projects I&apos;ve built — from SaaS platforms to open-source tools.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition-colors group shrink-0"
            >
              View all projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium text-sm transition-all"
            >
              See all {projects.length} projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
