import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
        <div className="lg:sticky lg:top-32 self-start">
           <h1 className="text-[clamp(3.5rem,8vw,9rem)] font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
             DE<br/>SIG<br/>NING <span className="text-[#ccff00]">ART</span>
           </h1>
           <p className="text-xl text-gray-400 max-w-md leading-relaxed">
             An independent design consultancy bridging the gap between art and utility.
           </p>
        </div>

        <div className="flex flex-col gap-20">
           <div>
              <h2 className="text-2xl text-white font-bold uppercase tracking-widest mb-6 border-l-2 border-[#ccff00] pl-6">The Approach</h2>
              <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-gray-200 font-light leading-snug">
                Design is not about making things look good. It is about making things work, emotionally and functionally.
              </p>
              <p className="text-lg text-gray-400 mt-8 leading-relaxed">
                I believe that in a saturated market, safety is the riskiest move you can make. Our process is rooted in strategic discomfort. We push boundaries to find the white space where your brand can own the conversation. We don't use templates. We don't follow trends. We set them.
              </p>
           </div>

           <div>
              <h2 className="text-2xl text-white font-bold uppercase tracking-widest mb-6 border-l-2 border-[#ccff00] pl-6">The Psychology</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Humans buy with emotion and justify with logic. I design for the limbic system - the part of the brain responsible for feelings and decision making. By combining rigorous typographic structures with fluid, organic motion, I create digital experiences that feel alive, establishing a deep subconscious connection with your user.
              </p>
           </div>

           <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="bg-[#1a1a1a] p-8 text-center rounded-sm">
                 <span className="block text-4xl md:text-6xl font-bold text-white mb-2">7+</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="bg-[#1a1a1a] p-8 text-center rounded-sm">
                 <span className="block text-4xl md:text-6xl font-bold text-white mb-2">10+</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Awards Won</span>
              </div>
           </div>
        </div>
      </div>

      {/* Team / Image */}
      <div className="w-full h-[50vh] md:h-[80vh] overflow-hidden relative rounded-sm">
         <img 
           src="public/Festina.jpg" 
           alt="Studio" 
           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
         />
         <div className="absolute bottom-0 left-0 p-6 md:p-12 bg-gradient-to-t from-black to-transparent w-full">
            <span className="text-white text-lg font-bold uppercase tracking-widest">Designing Art</span>
         </div>
      </div>
    </motion.div>
  );
};
