import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ProjectItem } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);

  const categories = [
    { id: 'all', label: 'Alle Projecten' },
    { id: 'Beeldgeneratie & Mode', label: 'Beeldgeneratie & Mode' },
    { id: 'AI Video & Motion', label: 'AI Video & Motion' },
    { id: 'Concept & LLM Interactie', label: 'Concept & LLM Interactie' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#050505] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Anchor for backward compatibility */}
      <div id="create" className="absolute -top-10" />

      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header with Scroll Kinetic Typography */}
        <div className="mb-20 sm:mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.06]">
            <div>
              <div className="section-label mb-3">
                <span>Wat Ik Maak</span>
              </div>
              
              <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f0ece4] leading-[1.05]">
                Geselecteerd Werk
              </h2>
              
              <motion.div
                style={{ x: headingX }}
                className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight stroked-text flex items-center gap-4 sm:gap-6 mt-1 will-change-transform"
              >
                <span className="w-12 sm:w-20 h-[1px] bg-[#b8860b] shrink-0" />
                <span>& synthetische expressies</span>
              </motion.div>
            </div>

            {/* Filter Pills in Dutch */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#b8860b] text-[#050505] font-bold'
                      : 'border border-white/10 text-[#8a8a8a] hover:text-[#f0ece4] hover:border-white/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Staggered Borderless Works List with Scroll Easing */}
        <div className="space-y-28 sm:space-y-40">
          {filteredProjects.map((project, index) => {
            const isRight = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col ${
                  isRight ? 'lg:items-end' : 'lg:items-start'
                }`}
              >
                {/* Visual Card (Width 72% on desktop, naturally staggered without box borders) */}
                <div className="w-full lg:w-[72%]">
                  
                  {/* Clean Image Container */}
                  <div
                    onClick={() => setActiveProject(project)}
                    className="relative cursor-pointer aspect-[16/10] overflow-hidden rounded-[3px] shadow-[0_20px_70px_rgba(0,0,0,0.85)] group border border-white/[0.04]"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter contrast-[1.04] brightness-95 group-hover:scale-105 transition-transform duration-900 ease-out"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

                    {/* Hover Floating Details Overlay in Dutch */}
                    <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="flex justify-between items-start">
                        <span className="px-3.5 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-md text-[10px] font-mono text-[#f0ece4] tracking-widest uppercase border border-white/15">
                          {project.number} · {project.year}
                        </span>
                        <div className="flex gap-1.5">
                          {project.aiTools.slice(0, 2).map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md text-[10px] font-mono text-[#b8860b] border border-[#b8860b]/30"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-end justify-between">
                        <div className="max-w-md">
                          <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#b8860b] block mb-1">
                            {project.category}
                          </span>
                          <h4 className="font-editorial text-2xl sm:text-3xl text-white font-bold">
                            {project.title}
                          </h4>
                          <p className="text-xs text-[#c0b8ac] font-light line-clamp-2 mt-1">
                            {project.shortDescription}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
                          <span>BEKIJKEN</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean Minimalist Metadata Bar Under Image in Dutch */}
                  <div
                    onClick={() => setActiveProject(project)}
                    className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 cursor-pointer pt-2"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs sm:text-sm text-[#b8860b] font-bold">
                        {project.number}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f0ece4] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <span className="hidden md:inline text-xs font-serif-editorial italic text-[#8a8a8a]">
                        — {project.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#8a8a8a] uppercase tracking-wider">
                      <span className="text-[#555]">{project.category}</span>
                      <span className="text-[#b8860b] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                        <span>Casestudy</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

    </section>
  );
};
