import React from 'react';
import { TranslationSet } from '../types';
import { Globe, Award } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  t: TranslationSet;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const isRtl = lang === 'ar';

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-md text-[#FDFBF7] border-b border-[#96B6C5]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand/Monogram */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="brand-logo"
          >
            <div className="w-11 h-11 bg-[#FDFBF7] text-[#4A0404] rounded-sm flex items-center justify-center font-serif font-extrabold text-lg border border-[#96B6C5]/30 shadow-inner group-hover:scale-105 transition-all duration-300">
              {isRtl ? 'رق' : 'RA'}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wide group-hover:text-[#96B6C5] transition-colors">
                {t.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#96B6C5] font-semibold">
                {isRtl ? 'أخصائية نظم رقمية' : 'Systems Architect'}
              </span>
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-serif text-sm tracking-wider">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#96B6C5] text-[#FDFBF7]/90 font-medium transition-colors cursor-pointer"
              id="nav-link-about"
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-[#96B6C5] text-[#FDFBF7]/90 font-medium transition-colors cursor-pointer"
              id="nav-link-projects"
            >
              {t.navProjects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#96B6C5] text-[#FDFBF7]/90 font-medium transition-colors cursor-pointer"
              id="nav-link-contact"
            >
              {t.navContact}
            </button>
          </nav>

          {/* Right Side: Language Toggle button */}
          <div className="flex items-center gap-4">
            {/* Elegant luxury toggle button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-[#96B6C5] hover:bg-white text-[#4A0404] border border-[#96B6C5]/40 px-4 py-2 rounded-sm font-serif text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
              id="language-toggle"
              aria-label="Switch Language"
            >
              <Globe className="w-4 h-4 text-[#4A0404]" />
              <span>{lang === 'en' ? 'العربية (AR)' : 'English (EN)'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
