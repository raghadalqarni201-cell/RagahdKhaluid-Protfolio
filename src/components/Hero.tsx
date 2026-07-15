import React from 'react';
import { TranslationSet } from '../types';
import { Cpu, ChevronDown, Award, HelpCircle } from 'lucide-react';

interface HeroProps {
  t: TranslationSet;
  lang: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-brand-bg text-[#96B6C5] py-20 sm:py-28 overflow-hidden border-b border-[#96B6C5]/20">
      {/* Editorial Decorative Background Trims */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#96B6C5]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -z-10" />
 
      {/* Decorative vertical lines representing clean, analytical systems structure */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[#96B6C5]/10 hidden lg:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[#96B6C5]/10 hidden lg:block" />
 
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Specialization Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#96B6C5] text-[#4A0404] rounded-sm border border-[#96B6C5]/40 text-xs font-serif uppercase tracking-widest mb-8 animate-fade-in shadow-md font-bold"
          id="hero-badge"
        >
          <Cpu className="w-3.5 h-3.5 text-[#4A0404]" />
          <span>{t.heroBadge}</span>
        </div>
 
        {/* Dynamic Tagline */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-[1.15] text-white max-w-4xl mx-auto mb-8"
          id="hero-tagline"
        >
          {t.heroTitle}
        </h1>
 
        {/* Professional Sub-introduction */}
        <p 
          className="text-base sm:text-lg text-[#96B6C5] opacity-90 max-w-3xl mx-auto font-serif leading-relaxed mb-10"
          id="hero-intro"
        >
          {t.heroSub}
        </p>
 
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto px-8 py-4 bg-[#96B6C5] hover:bg-white text-[#4A0404] font-serif font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer rounded-sm"
            id="explore-portfolio-btn"
          >
            {t.viewProjectsBtn}
          </button>
        </div>
 
        {/* Executive Profile Statement (About Section integrated smoothly) */}
        <div 
          id="about" 
          className="text-left bg-brand-card border border-[#96B6C5]/20 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto scroll-mt-24 rounded-sm"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-[#96B6C5]" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white border-b border-[#96B6C5]/20 pb-2 w-full">
              {t.aboutRaghadHeading}
            </h2>
          </div>
          <p className="text-[#96B6C5]/90 font-serif leading-relaxed text-sm sm:text-base text-justify whitespace-pre-line">
            {t.aboutRaghadText}
          </p>
 
          {/* Mini Competency Badges */}
          <div className="mt-8 pt-6 border-t border-[#96B6C5]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-black/20 border border-[#96B6C5]/10 rounded-sm">
              <span className="block font-bold text-xs uppercase tracking-wider text-[#96B6C5]">
                {isRtl ? 'تحليل النظم' : 'Systems Analysis'}
              </span>
            </div>
            <div className="p-3 bg-black/20 border border-[#96B6C5]/10 rounded-sm">
              <span className="block font-bold text-xs uppercase tracking-wider text-[#96B6C5]">
                {isRtl ? 'أتمتة العمليات RPA' : 'Robotic Automation'}
              </span>
            </div>
            <div className="p-3 bg-black/20 border border-[#96B6C5]/10 rounded-sm">
              <span className="block font-bold text-xs uppercase tracking-wider text-[#96B6C5]">
                {isRtl ? 'إكسل المتقدم' : 'Advanced Excel'}
              </span>
            </div>
            <div className="p-3 bg-black/20 border border-[#96B6C5]/10 rounded-sm">
              <span className="block font-bold text-xs uppercase tracking-wider text-[#96B6C5]">
                {isRtl ? 'صياغة العمليات' : 'ERP Customization'}
              </span>
            </div>
          </div>
        </div>
 
        {/* Clean bounce separator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToPortfolio}
            className="text-[#96B6C5]/55 hover:text-white animate-bounce transition-colors cursor-pointer"
            aria-label="Scroll Down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};
