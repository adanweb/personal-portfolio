import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Brief received. We will analyze your request and respond within 24 hours.");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-x-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2">
           <h1 className="text-[clamp(4rem,9.5vw,11rem)] font-black text-white uppercase tracking-tighter mb-4 leading-[0.85]">
             <span className="block">Let's</span>
             <span className="block">Talk</span>
           </h1>
           <p className="text-gray-400 text-lg mb-12 max-w-md">
             Ready to elevate your brand? Tell me about your project. Be specific.
           </p>

           <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="group">
                 <label className="block text-xs font-bold text-[#ccff00] uppercase tracking-widest mb-2">Name</label>
                 <input 
                   type="text" 
                   required
                   className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl focus:outline-none focus:border-[#ccff00] transition-colors rounded-none"
                   placeholder="John Doe"
                 />
              </div>
              <div className="group">
                 <label className="block text-xs font-bold text-[#ccff00] uppercase tracking-widest mb-2">Email</label>
                 <input 
                   type="email" 
                   required
                   className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl focus:outline-none focus:border-[#ccff00] transition-colors rounded-none"
                   placeholder="john@company.com"
                 />
              </div>
              <div className="group">
                 <label className="block text-xs font-bold text-[#ccff00] uppercase tracking-widest mb-2">Service Required</label>
                 <select className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl focus:outline-none focus:border-[#ccff00] transition-colors rounded-none">
                    <option className="bg-black text-white">Brand Identity</option>
                    <option className="bg-black text-white">Web Design & Dev</option>
                    <option className="bg-black text-white">Art Direction</option>
                    <option className="bg-black text-white">Motion Graphics</option>
                    <option className="bg-black text-white">Other</option>
                 </select>
              </div>
              <div className="group">
                 <label className="block text-xs font-bold text-[#ccff00] uppercase tracking-widest mb-2">Project Brief</label>
                 <textarea 
                   rows={4}
                   required
                   className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl focus:outline-none focus:border-[#ccff00] transition-colors resize-none rounded-none"
                   placeholder="Describe your goals, timeline, and current pain points."
                 />
              </div>
              <div className="mt-8">
                <Button type="submit">Submit Brief</Button>
              </div>
           </form>

           <div className="mt-24 pt-12 border-t border-white/10">
              <h3 className="text-white font-bold uppercase tracking-widest mb-4">Contact Info</h3>
              <p className="text-gray-400 text-lg">design.adanzukancic@gmail.com</p>
              <p className="text-gray-400 text-lg">+387 62 360 700</p>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-1/2 pt-12 lg:pt-32">
           <h2 className="text-2xl text-white font-bold uppercase tracking-widest mb-12">Common Questions</h2>
           <div className="flex flex-col">
              {FAQ_ITEMS.map((item, index) => (
                 <div key={index} className="border-b border-white/10">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full py-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors px-4 -mx-4"
                    >
                       <span className="text-xl text-white font-medium">{item.q}</span>
                       <span className="text-[#ccff00]">
                          {openFaq === index ? <Minus /> : <Plus />}
                       </span>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <p className="text-gray-400 pb-8 leading-relaxed max-w-xl">
                              {item.a}
                           </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </motion.div>
  );
};
