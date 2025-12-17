import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ViewState } from '../types';
import { Button } from '../components/Button';
import { ArrowDownRight, ArrowDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const sectionVars: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col overflow-x-hidden bg-[#0a0a0a]">
      
      {/* 1. NEW HERO SECTION: Technical / Brutalist Style */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-12 pt-24 pb-12 border-b border-white/10 overflow-hidden">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* Top Indicators */}
        <div className="absolute top-24 md:top-32 left-6 md:left-12 flex items-center gap-2 z-20">
           <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse"></div>
           <span className="text-xs font-mono text-[#ccff00] tracking-widest uppercase">System Online</span>
        </div>
        
        <div className="absolute top-24 md:top-32 right-6 md:right-12 hidden md:block z-20">
           <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">Lat: 43.8563° N</span>
        </div>

        {/* Main Typography Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-full">
          
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="flex flex-col items-center leading-none select-none w-full"
          >
             {/* 
                RESPONSIVE FIXES:
                1. whitespace-nowrap: Prevents word breaking (hyphenation).
                2. clamp(3rem, 13vw, ...): Reduced vw multiplier from 18 to 13. 
                   Why? Syne is wide. 13vw * 6 chars approx fits inside 100vw with padding.
                3. w-full text-center: Ensures alignment.
             */}
             
             {/* Word 1: VISUAL (Outline -> Solid White on Hover) */}
             <h1 className="text-[clamp(3.5rem,14vw,14rem)] font-black tracking-tighter stroke-text cursor-default whitespace-nowrap w-full text-center px-2">
               VISUAL
             </h1>
             
             {/* Word 2: IMPACT (Solid Green) */}
             {/* -mt-[0.2em] pulls it up proportionally based on font size */}
             <h1 className="text-[clamp(3.5rem,14vw,14rem)] font-black tracking-tighter text-[#ccff00] mix-blend-screen -mt-[0.15em] md:-mt-[0.1em] whitespace-nowrap w-full text-center px-2">
               IMPACT
             </h1>
          </motion.div>

          {/* Subtext & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4"
          >
             <p className="text-gray-400 text-center md:text-right max-w-[280px] md:max-w-xs text-sm md:text-base font-light leading-relaxed">
               Engineering digital dominance. <br/>
               Strategy driven by raw aesthetics.
             </p>
             
             <div className="h-12 w-[1px] bg-white/20 hidden md:block"></div>

             <Button onClick={() => onNavigate('projects')}>
               Start Project
             </Button>
          </motion.div>

        </div>

        {/* Decorative Corners */}
        <div className="absolute bottom-12 left-6 md:left-12 w-8 h-8 border-b border-l border-white/30"></div>
        <div className="absolute bottom-12 right-6 md:right-12 w-8 h-8 border-b border-r border-white/30"></div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-2 opacity-50 z-20"
        >
           <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
           <ArrowDown size={16} className="text-[#ccff00]" />
        </motion.div>

      </section>

      {/* 2. Infinite Marquee */}
      <div className="w-full bg-[#ccff00] overflow-hidden py-4 md:py-6 -rotate-1 scale-105 mb-24 md:mb-32 relative z-10 border-y-4 border-black">
        <motion.div 
          className="whitespace-nowrap flex gap-12"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
             <span key={i} className="text-[clamp(2rem,5vh,5rem)] text-black font-black uppercase tracking-tighter">
                Strategy — Design — Culture — Future —
             </span>
          ))}
        </motion.div>
      </div>

      {/* 3. Manifesto / Philosophy */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
         <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={sectionVars}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
         >
            <div className="lg:col-span-4">
               <span className="text-[#ccff00] font-bold tracking-widest uppercase text-sm block mb-4">The Philosophy</span>
               <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-white leading-tight uppercase">
                  Not for <br/> Everyone.
               </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8">
               <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-gray-300 font-light leading-snug">
                  Mediocrity is invisible. In the noise of the digital age, only the distinct survive. 
               </p>
               <div className="h-[1px] w-full bg-white/20"></div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="text-gray-400 text-lg leading-relaxed">
                     Stripping away the unnecessary to reveal the raw core of your brand, then amplifying it through rigorous typography, motion, and color.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                     Your audience doesn't want another safe choice. They want a leader. I design for the limbic system - where decisions are actually made.
                  </p>
               </div>
               <Button variant="outline" onClick={() => onNavigate('about')}>Read Full Story</Button>
            </div>
         </motion.div>
      </section>

      {/* 4. Featured Case Study (Immersive) */}
      <section className="w-full mb-32 md:mb-48 px-6 md:px-12 lg:px-24">
         <div className="mb-8 flex justify-between items-end">
            <h3 className="text-white text-xl uppercase tracking-widest font-bold">Featured Case</h3>
            <span className="text-[#ccff00] text-sm font-mono">2024</span>
         </div>
         <div 
            className="w-full h-[50vh] md:h-[80vh] relative group cursor-pointer overflow-hidden rounded-sm"
            onClick={() => onNavigate('projects')}
         >
            <img 
               src="/projtects/graphic/personal-branding/PBCover.jpg" 
               alt="Featured Project" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
               <h2 className="text-[clamp(3rem,8vw,9rem)] font-black text-white uppercase tracking-tighter mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 leading-[0.85]">
                  Personal <br/> Branding
               </h2>
               <div className="flex items-center gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-[#ccff00] text-lg font-bold uppercase tracking-widest">View Case Study</span>
                  <ArrowDownRight className="text-[#ccff00]" />
               </div>
            </div>
         </div>
      </section>

      {/* 5. The Process (Methodology) */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
         {/* FIX: Reduced min clamp from 3.5rem to 2.5rem to fit 'METHOD' on mobile. Added break-words. */}
         <h2 className="text-[clamp(2.5rem,10vw,12rem)] font-black text-[#1a1a1a] stroke-text uppercase leading-none mb-16 text-center lg:text-left break-words w-full">
            The Method
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {[
               { num: '01', title: 'Distortion', desc: 'Breaking down your current perception to find the flaws, the cracks, and the opportunities.' },
               { num: '02', title: 'Definition', desc: 'Rebuilding using a new visual language that is specific, ownable, and impossible to ignore.' },
               { num: '03', title: 'Domination', desc: 'Deploying the system across all touchpoints, ensuring consistency and maximum impact.' }
            ].map((step, i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="border-t border-white/20 pt-8"
               >
                  <span className="text-[#ccff00] font-mono text-xl mb-4 block">{step.num}</span>
                  <h3 className="text-3xl text-white font-bold uppercase mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{step.desc}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 6. Capabilities / Services */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 flex flex-col gap-12">
         <div className="flex justify-between items-end border-b border-white/20 pb-4">
            <h3 className="text-2xl text-white font-light tracking-wide">CAPABILITIES</h3>
            <span className="text-[#ccff00]">GLOBAL SERVICE</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Art Direction', 'Brand Strategy', 'Digital Design', 'Motion Graphics', 'Web Development', 'Editorial Design'].map((service, index) => (
               <div key={index} className="group cursor-pointer border-b border-white/10 py-8 flex justify-between items-center hover:pl-8 transition-all duration-300">
                  <h4 className="text-[clamp(1.5rem,3.5vw,4rem)] text-gray-500 group-hover:text-white transition-colors uppercase font-bold tracking-tight whitespace-nowrap">{service}</h4>
                  <ArrowDownRight className="text-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
               </div>
            ))}
         </div>
      </section>

      {/* 7. Client List / Trust */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
         <div className="bg-[#111] p-12 md:p-24 rounded-lg">
            <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-12 text-center">Trusted By Visionaries</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {['MANFACTURING', 'CREATIVE AGENCIES', 'CULTURAL INITIATIVES', 'FESTIVALS', 'SMALL BUSINESSES'].map((client) => (
                  <span key={client} className="text-[clamp(1.5rem,3vw,3rem)] font-bold text-white font-serif whitespace-nowrap">{client}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 8. CTA */}
      <section className="bg-[#ccff00] py-32 md:py-48 px-6 flex flex-col items-center text-center gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        {/* Adjusted clamp minimum from 3.5rem to 3rem to ensure fit with new padding */}
        <h2 className="text-[clamp(3rem,11vw,12rem)] font-black text-black uppercase tracking-tighter z-10 leading-[0.85] w-full break-words">
           Ready to<br/>Ascend?
        </h2>
        <p className="text-black/70 text-xl max-w-lg z-10 font-medium">
           Stop competing. Start dominating. Let's build your legacy.
        </p>
        <div className="z-10 mt-8">
           <button 
             onClick={() => onNavigate('contact')}
             className="bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300"
           >
              Start Project
           </button>
        </div>
      </section>

    </div>
  );
};