"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
  Backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  "Cloud & DevOps": "from-orange-500/20 to-amber-500/20 border-orange-500/30",
  "Tools & Design": "from-purple-500/20 to-violet-500/20 border-purple-500/30",
};

const categoryDots: Record<string, string> = {
  Frontend: "bg-blue-500",
  Backend: "bg-green-500",
  "Cloud & DevOps": "bg-orange-500",
  "Tools & Design": "bg-purple-500",
};

const levelLabels = ["", "Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-500 bg-indigo-500/10 rounded-full mb-4">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Technologies I work with
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              A curated set of tools and technologies I use to build modern, scalable applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.category} delay={catIdx * 0.1}>
              <div className={[
                "rounded-2xl p-6 border bg-gradient-to-br h-full",
                categoryColors[category.category] || "from-slate-500/10 to-slate-600/10 border-slate-500/20",
              ].join(" ")}>
                <div className="flex items-center gap-2 mb-6">
                  <div className={["w-2.5 h-2.5 rounded-full", categoryDots[category.category] || "bg-slate-500"].join(" ")} />
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + skillIdx * 0.05, duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: (skill.level / 5) * 100 + "%" }}
                          viewport={{ once: true }}
                          transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech badges */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-widest">
              Also familiar with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Rust", "Swift", "Kotlin", "Flutter", "Electron", "Three.js",
                "D3.js", "Webpack", "Vite", "Jest", "Cypress", "Playwright",
                "Supabase", "Firebase", "Cloudflare", "Nginx",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500/50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
