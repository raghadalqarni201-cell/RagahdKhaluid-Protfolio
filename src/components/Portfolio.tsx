import React, { useState } from 'react';
import { Project, TranslationSet } from '../types';
import { projectsData } from '../data/portfolioData';
import { Bot, FileSpreadsheet, Layers, ArrowRight, ArrowLeft } from 'lucide-react';

interface PortfolioProps {
  t: TranslationSet;
  lang: 'en' | 'ar';
  onSelectProject: (project: Project) => void;
}

type TabType = 'rpa' | 'excel' | 'digitization';

export const Portfolio: React.FC<PortfolioProps> = ({ t, lang, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<TabType>('rpa');
  const isRtl = lang === 'ar';

  const projects = projectsData[lang].filter((p) => p.category === activeTab);

  // Tabs configuration with icons and titles
  const tabs = [
    { id: 'rpa' as TabType, label: t.catRpa, icon: Bot },
    { id: 'excel' as TabType, label: t.catExcel, icon: FileSpreadsheet },
    { id: 'digitization' as TabType, label: t.catDigitization, icon: Layers },
  ];

  return (
    <section id="portfolio" className="bg-brand-bg py-20 sm:py-24 scroll-mt-20 border-y border-[#96B6C5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-4">
            {t.projectSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-brand-ice opacity-90 font-serif leading-relaxed">
            {t.projectSectionSubtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-stretch lg:items-center mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 border transition-all duration-300 font-serif font-bold text-sm tracking-wider uppercase text-left rounded-sm cursor-pointer shadow-sm focus:outline-none ${
                  isActive
                    ? 'bg-brand-ice text-[#4A0404] border-brand-ice'
                    : 'bg-brand-card/50 text-brand-ice border-brand-ice/20 hover:border-brand-ice/50'
                }`}
                id={`tab-${tab.id}`}
              >
                <IconComponent className={`w-5 h-5 ${isActive ? 'text-[#4A0404]' : 'text-brand-ice/70'}`} />
                <span className="flex-grow">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-brand-card border border-[#96B6C5]/15 hover:border-[#96B6C5]/40 shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-300"
                id={`project-card-${project.id}`}
              >
                <div>
                  {/* Category Indicator */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-rose/70">
                    {activeTab === 'rpa' && 'RPA SOLUTION'}
                    {activeTab === 'excel' && 'ANALYTICS ENGINE'}
                    {activeTab === 'digitization' && 'DIGITAL WORKFLOW'}
                  </span>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight mt-2 mb-6 italic">
                    {project.title}
                  </h3>

                  {/* Concise 3-Part Executive Summary */}
                  <div className="space-y-4 font-serif text-sm leading-relaxed mb-8">
                    <div>
                      <span className="block font-bold text-xs uppercase tracking-wider text-brand-ice mb-1 opacity-70">
                        {t.labelProblem}
                      </span>
                      <p className="text-brand-rose/90 italic">"{project.summary.problem}"</p>
                    </div>

                    <div>
                      <span className="block font-bold text-xs uppercase tracking-wider text-brand-ice mb-1 opacity-70">
                        {t.labelSolution}
                      </span>
                      <p className="text-brand-ice/90">{project.summary.solution}</p>
                    </div>

                    <div>
                      <span className="block font-bold text-xs uppercase tracking-wider text-brand-ice mb-1 opacity-70">
                        {t.labelImpact}
                      </span>
                      <p className="font-bold text-brand-rose">{project.summary.impact}</p>
                    </div>
                  </div>
                </div>

                {/* View Case Study Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-brand-ice/20 hover:bg-brand-ice hover:text-[#4A0404] text-white font-serif font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer rounded-sm group mt-4 shadow-sm"
                  id={`btn-case-study-${project.id}`}
                >
                  <span>{t.btnViewCaseStudy}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
