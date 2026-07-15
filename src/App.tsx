import { useState, useEffect } from 'react';
import { Project } from './types';
import { translations } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ContactFooter } from './components/ContactFooter';
import { AIAssistant } from './components/AIAssistant';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  // Synchronize document direction with active language
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsCaseStudyOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsCaseStudyOpen(false);
    // Timeout to prevent visual snapping during exit animation
    setTimeout(() => {
      setSelectedProject(null);
    }, 200);
  };

  return (
    <div 
      className="min-h-screen bg-brand-bg text-[#96B6C5] transition-colors duration-300 antialiased"
      style={{ fontFamily: isRtl ? '"Amiri", "Times New Roman", serif' : '"Times New Roman", Times, serif' }}
    >
      {/* Luxury Multilingual Header */}
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main>
        {/* Cinematic Tagline and Executive Statement */}
        <Hero t={t} lang={lang} />

        {/* Dynamic Categorized Project Portfolio */}
        <Portfolio t={t} lang={lang} onSelectProject={handleOpenCaseStudy} />
      </main>

      {/* Professional Contacts, Download CV & Footer */}
      <ContactFooter t={t} lang={lang} />

      {/* Floating Gemini AI Chat Assistant */}
      <AIAssistant t={t} lang={lang} />

      {/* Fullscreen Technical Case Study Overlay */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isCaseStudyOpen}
        onClose={handleCloseCaseStudy}
        lang={lang}
        t={t}
      />
    </div>
  );
}
