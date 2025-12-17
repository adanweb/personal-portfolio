import React from 'react';
import { NavItem, ViewState } from '../types';
import { APP_NAME, NAV_ITEMS } from '../constants';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/10 mt-auto">
      {/* Changed from max-w-7xl mx-auto to w-full to utilize full screen width on desktop */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-8 w-full md:w-auto">
          <h2 className="text-[15vw] md:text-[12vw] leading-none font-bold tracking-tighter text-[#1a1a1a] select-none hover:text-white/5 transition-colors duration-500 order-2 md:order-1">
            {APP_NAME}
          </h2>
          <div className="flex flex-wrap gap-6 md:gap-4 order-1 md:order-2">
            <a href="https://www.instagram.com/studionovaofficial/" className="text-sm text-gray-400 hover:text-[#ccff00] transition-colors uppercase tracking-widest">Instagram</a>
            <a href="https://www.behance.net/adanzukancic" className="text-sm text-gray-400 hover:text-[#ccff00] transition-colors uppercase tracking-widest">Behance</a>
          </div>
        </div>

        {/* Navigation & Info - Left aligned on mobile, Right on Desktop */}
        <div className="flex flex-col gap-8 w-full md:w-auto text-left md:text-right">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => onNavigate(item.id)}
                  className="text-3xl md:text-2xl font-light hover:text-[#ccff00] transition-colors uppercase tracking-widest w-full text-left md:text-right"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-600 mt-4 md:mt-8 uppercase tracking-wide leading-relaxed">
            © 2019 {APP_NAME} STUDIO. ALL RIGHTS RESERVED.<br/>
            DESIGNED FOR THE BOLD.
          </p>
        </div>
      </div>
    </footer>
  );
};