import React from 'react';
import { motion } from 'framer-motion';
import { Project, Category } from '../types';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const isVideo = (url: string) => {
  return url.match(/\.(mp4|webm|ogg|mov)$/i);
};

export const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  
  // Group projects by category
  const categories: Category[] = ['graphic', 'photography', 'video', 'web'];
  
  const getProjectsByCategory = (cat: Category) => 
    PROJECTS.filter(p => p.category === cat);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 md:pt-48 pb-20 px-4 md:px-12 lg:px-24 min-h-screen overflow-x-hidden w-full max-w-full"
    >
      <div className="mb-24 w-full">
         <h1 className="font-black tracking-tighter uppercase leading-[0.85] w-full break-words">
           <span className="block text-white whitespace-nowrap text-[clamp(2rem,8.5vw,8rem)]">
             Selected
           </span>
           <span className="block text-[#ccff00] whitespace-nowrap text-[clamp(2rem,8.5vw,8rem)]">
             Index
           </span>
         </h1>
         <p className="mt-8 text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400 max-w-xl leading-relaxed">
           A curated archive of visual experiments, commercial works, and strategic interventions.
         </p>
      </div>

      <div className="flex flex-col gap-32 md:gap-48">
        {categories.map((cat, index) => {
          const catProjects = getProjectsByCategory(cat);
          if (catProjects.length === 0) return null;

          return (
            <section key={cat} className="relative w-full">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8 mb-12 border-b border-white/20 pb-4 sticky top-24 z-10 bg-[#0a0a0a]/90 backdrop-blur-md">
                 <span className="text-[#ccff00] font-mono text-sm">0{index + 1}</span>
                 <h2 className="text-[clamp(2rem,5vw,5rem)] font-bold text-white uppercase tracking-tight leading-none">{cat}</h2>
                 <span className="text-gray-500 text-sm uppercase tracking-widest ml-auto">{catProjects.length} Projects</span>
              </div>

              {/* Grid */}
              <div className={`grid grid-cols-1 ${cat === 'photography' ? 'lg:grid-cols-3 md:grid-cols-2' : 'md:grid-cols-2'} gap-8 md:gap-12`}>
                {catProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6 }}
                    className="group cursor-pointer flex flex-col gap-4 w-full"
                    onClick={() => onProjectSelect(project)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 w-full">
                      {isVideo(project.thumbnail) ? (
                        <video 
                          src={project.thumbnail}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                        />
                      ) : (
                        <img 
                          src={project.thumbnail} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                        />
                      )}
                      
                      {/* Color Overlay on Hover (subtle tint) */}
                      <div className="absolute inset-0 bg-[#ccff00] opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
                      
                      {/* View Button Overlay */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                         <div className="bg-white text-black px-4 py-2 font-bold uppercase text-xs tracking-widest">
                            View Case
                         </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                       <div className="flex flex-col max-w-[80%]">
                          <h3 className="text-[clamp(1.25rem,2vw,2rem)] font-bold text-white uppercase leading-tight mb-2 group-hover:text-[#ccff00] transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs md:text-sm text-gray-500 font-mono uppercase">
                             {project.client}
                          </span>
                       </div>
                       <span className="text-xs text-gray-600 border border-gray-800 px-2 py-1 rounded-full whitespace-nowrap">{project.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
};