import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem, ViewState } from '../types';
import { APP_NAME, NAV_ITEMS } from '../constants';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Don't hide if menu is open or at the very top of the page
    if (isOpen || latest < 50) {
       setIsHidden(false);
       return;
    }

    if (latest > previous && latest > 150) {
      // Scrolling down and past 150px
      setIsHidden(true);
    } else {
      // Scrolling up
      setIsHidden(false);
    }
  });

  const handleNav = (id: ViewState) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white bg-transparent"
      >
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:opacity-70 transition-opacity"
        >
          {/* Replace src with your actual logo.png path */}
          <img 
            src="public/AdanZukancicLogo.png" 
            alt={APP_NAME} 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-sm font-medium tracking-widest uppercase relative hover:text-[#ccff00] transition-colors ${currentView === item.id ? 'text-[#ccff00]' : 'text-white'}`}
            >
              {item.label}
              {currentView === item.id && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#ccff00]" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-[#ccff00] transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#1a1a1a] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#ccff00]"
            >
              <X size={32} />
            </button>

            <ul className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="overflow-hidden">
                  <motion.button
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onClick={() => handleNav(item.id)}
                    className="text-5xl font-bold uppercase tracking-tighter text-white hover:text-[#ccff00] transition-colors"
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};