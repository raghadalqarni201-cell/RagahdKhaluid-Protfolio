export interface CaseStudy {
  methodologies: string[];
  tools: string[];
  formulas: string[];
  training: string[];
  detailedProcess: string[];
}

export interface Project {
  id: string;
  category: 'rpa' | 'excel' | 'digitization';
  title: string;
  modalTitle?: string;
  summary: {
    problem: string;
    solution: string;
    impact: string;
  };
  caseStudy: CaseStudy;
}

export interface TranslationSet {
  // Navigation
  brandName: string;
  navProjects: string;
  navAbout: string;
  navAI: string;
  navContact: string;

  // Hero Section
  heroTitle: string;
  heroSub: string;
  heroBadge: string;
  viewProjectsBtn: string;
  aboutRaghadHeading: string;
  aboutRaghadText: string;

  // Categories
  catRpa: string;
  catExcel: string;
  catDigitization: string;
  projectSectionTitle: string;
  projectSectionSubtitle: string;

  // Project Card Labels
  labelProblem: string;
  labelSolution: string;
  labelImpact: string;
  btnViewCaseStudy: string;

  // Case Study Overlay
  caseStudyTitle: string;
  methodologyHeading: string;
  technicalToolsHeading: string;
  formulasWorkflowHeading: string;
  userTrainingHeading: string;
  processHeading: string;
  btnClose: string;

  // AI Assistant Widget
  aiTitle: string;
  aiPlaceholder: string;
  aiWelcome: string;
  aiError: string;
  aiSend: string;
  aiClose: string;
  aiSuggestedPrompt1: string;
  aiSuggestedPrompt2: string;
  aiSuggestedPrompt3: string;

  // Contact & Footer
  contactHeading: string;
  contactSubtitle: string;
  downloadCvBtn: string;
  emailLabel: string;
  linkedinLabel: string;
  specializationLabel: string;
  rightsReserved: string;
  executiveFooterNote: string;
}

export interface TranslationDictionary {
  en: TranslationSet;
  ar: TranslationSet;
}
