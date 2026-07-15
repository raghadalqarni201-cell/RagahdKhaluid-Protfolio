import React from 'react';
import { Project, TranslationSet } from '../types';
import { X, BookOpen, Cpu, Settings, Award, ArrowRight, ArrowLeft } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
  t: TranslationSet;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  lang,
  t,
}) => {
  if (!isOpen || !project) return null;

  const isRtl = lang === 'ar';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 transition-opacity duration-300"
      id="case-study-backdrop"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'case-study-backdrop') onClose();
      }}
    >
      <div
        className="w-full max-w-5xl bg-brand-card text-brand-ice rounded-sm shadow-2xl border border-brand-ice/20 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div className="bg-black/15 text-[#FDFBF7] px-6 py-5 flex items-center justify-between border-b border-brand-ice/20 sticky top-0 z-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-rose font-semibold opacity-90">
              {t.caseStudyTitle}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif mt-1 font-bold tracking-tight text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-brand-ice hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-ice/50"
            id="close-modal-btn"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-serif leading-relaxed text-brand-ice bg-brand-bg">
          {/* Executive Overview Card */}
          <div className="bg-brand-card border-l-4 border-brand-ice p-5 rounded-sm shadow-sm border border-brand-ice/10">
            <h3 className="text-lg font-bold text-white mb-3 border-b border-brand-ice/15 pb-1">
              Executive Context
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <span className="block font-bold uppercase text-brand-rose/90 text-xs tracking-wider mb-1">
                  {t.labelProblem}
                </span>
                <p className="text-brand-ice/90 italic">"{project.summary.problem}"</p>
              </div>
              <div>
                <span className="block font-bold uppercase text-brand-rose/90 text-xs tracking-wider mb-1">
                  {t.labelSolution}
                </span>
                <p className="text-brand-ice/95">{project.summary.solution}</p>
              </div>
              <div>
                <span className="block font-bold uppercase text-brand-rose/90 text-xs tracking-wider mb-1">
                  {t.labelImpact}
                </span>
                <p className="font-bold text-white">{project.summary.impact}</p>
              </div>
            </div>
          </div>

          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Methodologies & Stack */}
            <div className="space-y-6">
              {/* Methodologies */}
              <div className="bg-brand-card p-6 rounded-sm border border-brand-ice/15 shadow-sm hover:border-brand-ice/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-brand-ice">
                  <BookOpen className="w-5 h-5 text-brand-ice" />
                  <h4 className="text-lg font-bold text-white border-b border-brand-ice/15 pb-1 w-full">
                    {t.methodologyHeading}
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-brand-ice/90 list-disc list-inside">
                  {project.caseStudy.methodologies.map((item, idx) => (
                    <li key={idx} className="hover:text-white transition-colors pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Tools */}
              <div className="bg-brand-card p-6 rounded-sm border border-brand-ice/15 shadow-sm hover:border-brand-ice/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-brand-ice">
                  <Cpu className="w-5 h-5 text-brand-ice" />
                  <h4 className="text-lg font-bold text-white border-b border-brand-ice/15 pb-1 w-full">
                    {t.technicalToolsHeading}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.tools.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/20 text-brand-rose text-xs font-bold rounded-sm border border-brand-ice/20 transition-all hover:bg-brand-ice hover:text-[#4A0404]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Formulas/Workflows & Handovers */}
            <div className="space-y-6">
              {/* Formulas & Workflows */}
              <div className="bg-brand-card p-6 rounded-sm border border-brand-ice/15 shadow-sm hover:border-brand-ice/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-brand-ice">
                  <Settings className="w-5 h-5 text-brand-ice" />
                  <h4 className="text-lg font-bold text-white border-b border-brand-ice/15 pb-1 w-full">
                    {t.formulasWorkflowHeading}
                  </h4>
                </div>
                <ul className="space-y-2.5 text-sm text-brand-ice/90">
                  {project.caseStudy.formulas.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-brand-rose font-bold">»</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Handover & Training */}
              <div className="bg-brand-card p-6 rounded-sm border border-brand-ice/15 shadow-sm hover:border-brand-ice/30 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-brand-ice">
                  <Award className="w-5 h-5 text-brand-ice" />
                  <h4 className="text-lg font-bold text-white border-b border-brand-ice/15 pb-1 w-full">
                    {t.userTrainingHeading}
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-brand-ice/90 list-decimal list-inside">
                  {project.caseStudy.training.map((item, idx) => (
                    <li key={idx} className="hover:text-white transition-colors pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Process Diagram / Narrative Flow */}
          <div className="bg-brand-card p-6 sm:p-8 rounded-sm border border-brand-ice/15 shadow-sm">
            <h4 className="text-lg font-bold text-white mb-5 border-b border-brand-ice/15 pb-2">
              {t.processHeading}
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {project.caseStudy.detailedProcess.map((step, idx) => {
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-ice text-[#4A0404] flex items-center justify-center font-bold text-sm shadow">
                      {idx + 1}
                    </div>
                    <div className="flex-grow pt-1 text-sm text-white/95">
                      {step}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-black/15 px-6 py-4 flex items-center justify-end border-t border-brand-ice/20 sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-brand-ice hover:bg-white text-[#4A0404] font-bold rounded-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-ice/50 cursor-pointer text-sm"
            id="close-modal-bottom-btn"
          >
            {t.btnClose}
          </button>
        </div>
      </div>
    </div>
  );
};
