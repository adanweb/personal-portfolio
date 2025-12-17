import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { PROJECTS } from '../constants'; 
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNext: (project: Project) => void;
}

const isVideo = (url: string) => {
  return url.match(/\.(mp4|webm|ogg|mov)$/i);
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Calculate Next Project Logic
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextIndex = (currentIndex + 1) % PROJECTS.length; 
  const nextProject = PROJECTS[nextIndex];

  // Combine thumbnail + gallery for the full lightbox list
  const allImages = [project.thumbnail, ...project.gallery];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  // Handle Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const navigateLightbox = useCallback((direction: number) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const newIndex = prev + direction;
      // Loop functionality
      if (newIndex < 0) return allImages.length - 1;
      if (newIndex >= allImages.length) return 0;
      return newIndex;
    });
  }, [allImages.length]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="bg-[#0f0f0f] min-h-screen pt-32 pb-24 overflow-x-hidden"
      >
        <div className="px-6 md:px-12 lg:px-24 mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-[#ccff00] transition-colors uppercase text-sm tracking-widest mb-8"
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>

          <h1 className="text-[clamp(2.5rem,7vw,8rem)] leading-[0.9] font-black text-white uppercase tracking-tighter mb-6 break-words">{project.title}</h1>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 border-t border-white/10 pt-8">
             <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Client</span>
                <span className="text-white font-medium">{project.client}</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Category</span>
                <span className="text-white font-medium capitalize">{project.category}</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Year</span>
                <span className="text-white font-medium">{project.year}</span>
             </div>
          </div>
        </div>

        {/* Hero Image/Video (Clickable for Lightbox - Index 0) */}
        <div 
          className="w-full h-[50vh] md:h-[80vh] overflow-hidden mb-24 cursor-zoom-in group relative"
          onClick={() => setLightboxIndex(0)}
        >
          {isVideo(project.thumbnail) ? (
            <video 
              src={project.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <img 
              src={project.thumbnail} 
              alt="Hero" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 drop-shadow-lg" />
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
             <h2 className="text-2xl text-[#ccff00] font-bold uppercase mb-8">The Overview</h2>
          </div>
          <div className="lg:col-span-8">
             <p className="text-[clamp(1.25rem,2vw,2rem)] text-gray-300 leading-relaxed font-light mb-12">
               {project.description}
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-white font-bold uppercase tracking-widest mb-4 border-b border-white/20 pb-2">The Challenge</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{project.challenge}</p>
               </div>
               <div>
                  <h3 className="text-white font-bold uppercase tracking-widest mb-4 border-b border-white/20 pb-2">The Solution</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{project.solution}</p>
                  {project.link && (
  <a
    href={project.link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    {project.link.label}
  </a>
)}

               </div>
             </div>
          </div>
        </div>

        {/* Gallery (Clickable for Lightbox - Indices 1+) */}

{project.videoId && !play && (
  <button className="video-poster" onClick={() => setPlay(true)} type="button">
    <img src={project.videoPoster} alt="Play video" loading="lazy" />
    <span className="play-btn">▶</span>
  </button>
)}

{project.videoId && play && (
  <iframe
    width="100%"
    height="520"
    src={`https://www.youtube-nocookie.com/embed/${project.videoId}?rel=0`}
    title={project.title}
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
)}

        <div className="px-6 md:px-12 lg:px-24 flex flex-col gap-8 md:gap-16 mb-24">
           {project.gallery.map((mediaUrl, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 // Note: idx + 1 because index 0 is the thumbnail
                 onClick={() => setLightboxIndex(idx + 1)}
                 className={`w-full overflow-hidden cursor-zoom-in relative group ${idx % 2 === 0 ? '' : 'md:w-3/4 md:ml-auto'}`}
              >
                 {isVideo(mediaUrl) ? (
                    <video 
                      src={mediaUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
                    />
                 ) : (
                    <img src={mediaUrl} alt={`Gallery ${idx}`} className="w-full h-auto object-cover rounded-sm transition-transform duration-700 group-hover:scale-105" />
                 )}
                 
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                     <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 drop-shadow-lg" />
                 </div>
              </motion.div>
           ))}
        </div>

        {/* Next Project Section */}
        <div className="border-t border-white/10 pt-24 pb-12 bg-[#0a0a0a]">
           <div className="px-6 md:px-12 lg:px-24">
              <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                 
                 <div className="flex flex-col gap-4 w-full md:w-2/3 cursor-pointer group" onClick={() => onNext(nextProject)}>
                    <span className="text-[#ccff00] font-mono text-sm uppercase tracking-widest">Next Case Study</span>
                    <h2 className="text-[clamp(2.5rem,5vw,5rem)] text-white font-black uppercase leading-[0.85] group-hover:text-gray-400 transition-colors duration-300 break-words">
                       {nextProject.title}
                    </h2>
                 </div>

                 <div className="flex gap-4 shrink-0">
                    <Button variant="outline" onClick={onBack} icon={false}>All Work</Button>
                    <button 
                      onClick={() => onNext(nextProject)}
                      className="bg-[#ccff00] text-black px-8 py-4 font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-4 text-sm hover:bg-white"
                    >
                      Next Project <ArrowRight className="w-4 h-4" />
                    </button>
                 </div>

              </div>
           </div>
        </div>
      </motion.div>

      {/* LIGHTBOX COMPONENT */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 rounded-full hover:bg-[#ccff00] hover:text-black text-white transition-all"
            >
              <X size={24} />
            </button>

            {/* Navigation Left */}
            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 md:left-8 z-50 p-4 hover:bg-white/10 rounded-full text-white transition-all group"
            >
              <ChevronLeft size={48} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Main Content (Image or Video) */}
            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center w-full h-full justify-center"
            >
              {isVideo(allImages[lightboxIndex]) ? (
                 <video 
                   src={allImages[lightboxIndex]}
                   controls
                   autoPlay
                   className="max-w-full max-h-[85vh] shadow-2xl outline-none"
                 />
              ) : (
                <img 
                  src={allImages[lightboxIndex]} 
                  alt="Lightbox View" 
                  className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                />
              )}
              
              <div className="mt-4 text-gray-500 font-mono text-sm tracking-widest">
                {lightboxIndex + 1} / {allImages.length}
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 md:right-8 z-50 p-4 hover:bg-white/10 rounded-full text-white transition-all group"
            >
              <ChevronRight size={48} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};