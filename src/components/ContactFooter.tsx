import React from 'react';
import { TranslationSet } from '../types';
import { Mail, Linkedin, FileText, CheckCircle, ExternalLink } from 'lucide-react';

interface ContactFooterProps {
  t: TranslationSet;
  lang: 'en' | 'ar';
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';

  const triggerCvDownload = () => {
    // Elegant text-based executive CV document generated dynamically
    const cvContent = lang === 'ar' ? 
`رغد القرني - سيرة ذاتية تنفيذية
أخصائية تحليل النظم والحلول الرقمية وأتمتة العمليات (RPA)
البريد الإلكتروني المهني: raghadalqarni201@gmail.com
شبكة لينكد إن: https://www.linkedin.com/in/raghad-alqarni

==================================================
الملخص المهني والعملي:
خريجة علوم حاسب متميزة متخصصة في تحليل النظم التشغيلية، تصميم وهندسة مسارات الأتمتة الروبوتية (RPA) وإيجاد الحلول الرقمية الذكية للمؤسسات. أمتلك شغفاً حقيقياً لسد الفجوة بين الأنظمة التقنية وسير الأعمال لرفع كفاءة وموثوقية الأداء.

==================================================
المهارات الفنية والتقنية الرئيسية:
- تحليل النظم والعمليات وتصميم مسارات سير الأعمال (Systems Analysis & BPMN 2.0).
- أتمتة العمليات الروبوتية (RPA) عبر منصة UiPath (تصميم الاستثناءات والمعالجة الذاتية).
- نمذجة وتحليل البيانات المتقدمة في إكسل (VBA, Power Query, Power Pivot, DAX).
- تخصيص مسارات عمل أنظمة إدارة الموارد (ERP) واختبار قبول المستخدم (UAT).
- نمذجة قواعد البيانات وتصميم هياكل الجداول (SQL Server, MySQL).

==================================================
نماذج من المشاريع والحلول المنجزة:
١. روبوت مطابقة فواتير سلاسل الإمداد (RPA - UiPath):
   - المشكلة: مراجعة الفواتير كانت تستغرق ١٨ ساعة عمل أسبوعياً عبر منصة SAP وإكسل.
   - الحل: روبوت UiPath غير موجه لاستخراج البيانات بـ OCR ومطابقتها ديناميكياً.
   - الأثر: تقليص وقت المعالجة بنسبة ٨٥٪، ورفع دقة البيانات ومطابقتها لـ ١٠٠٪.

٢. محرك دمج وتجميع موازنات الشركات (إكسل المتقدم):
   - المشكلة: تشتت ملفات الميزانية للأقسام المختلفة تسبب في حدوث مراجع دائرية وتأخر الاعتمادات.
   - الحل: نموذج رئيسي موحد مبني على دوال مصفوفات ديناميكية حديثة وأكواد VBA للمطابقة.
   - الأثر: تقليص زمن الدمج والتجميع من ٥ أيام عمل إلى ١٠ دقائق فقط بدقة تامة.

٣. نظام الموافقات الرقمية على طلبات الشراء (رقمنة نظام ERP):
   - المشكلة: الاعتماد على التواقيع الورقية تسبب في تأخير الموافقات بمتوسط ٩ أيام للطلب.
   - الحل: مسار موافقة رقمي متكامل على نظام الـ ERP بصلاحيات مخصصة وتواقيع مشفرة وتصعيد آلي.
   - الأثر: تسريع دورة الموافقة لـ ٤ ساعات فقط مع تتبع دائم للمستندات.

==================================================
المؤهلات العلمية:
- بكالوريوس في علوم الحاسب الآلي (علوم الكمبيوتر)
- تخصص دقيق في تحليل النظم والحلول الرقمية للمؤسسات.

==================================================
الموقع والمبادئ:
مستعدة دائماً لتقديم أفضل وأحدث الحلول الرقمية بأعلى معايير الجودة والمهنية التشغيلية.`
: 
`RAGHAD ALQARNI - EXECUTIVE CV
Systems Analyst & Digital Solutions Specialist
Professional Email: raghadalqarni201@gmail.com
LinkedIn: https://www.linkedin.com/in/raghad-alqarni

==================================================
EXECUTIVE SUMMARY:
A highly motivated Computer Science graduate specializing in operational systems analysis, Robotic Process Automation (RPA) design, and smart enterprise digitization. Adept at bridging the gap between technical infrastructures and high-impact business workflows to reduce operational costs and maximize efficiency.

==================================================
CORE TECHNICAL COMPETENCIES:
- Systems Analysis & Business Process Modeling (BPMN 2.0)
- Robotic Process Automation (RPA): UiPath Studio & Orchestrator
- Advanced Microsoft Excel Modeling: VBA Macros, Power Query, Power Pivot, & DAX
- Enterprise Resource Planning (ERP) Custom Workflows & Configuration
- Database Engineering: SQL Server, MySQL (Data cleansing & Schema alignment)
- User Acceptance Testing (UAT) Scenario Design & Logging

==================================================
KEY DIGITAL PROJECTS & IMPACT:
1. Multi-System Supply Chain Invoice Reconciliation Bot (RPA)
   - Problem: Vendor invoice verification took 18 manual hours weekly across SAP and Excel portals.
   - Solution: Designed an unattended UiPath Bot to extract PDF data via OCR and validate entries dynamically.
   - Impact: Slashed processing time by 85% and secured 100% data audit compliance.

2. Corporate Operational Budget Forecasting & Consolidation Engine (Excel)
   - Problem: Departmental budget file circularity and structural fragmentation delayed executive approvals.
   - Solution: Engineered a master template utilizing dynamic array functions and VBA consolidation automation.
   - Impact: Reduced consolidation duration from 5 business days to 10 minutes with 100% mathematical integrity.

3. Custom Procurement Approval Workflow System (ERP Feature)
   - Problem: Physical signatures on purchase orders caused approval cycles of up to 9 days.
   - Solution: Configured a digitized, secure role-based workflow within ERP with automated escalations.
   - Impact: Reduced approval cycle to just 4 hours with comprehensive digital trace.

==================================================
EDUCATION:
- Bachelor of Science in Computer Science
- Focused Track: Enterprise Systems Analysis, Automated Workflows, and Digital Solutions.

==================================================
Available for consultations regarding digital transformation and enterprise أتمتة.`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', lang === 'ar' ? 'Raghad_Alqarni_CV_Arabic.txt' : 'Raghad_Alqarni_CV_English.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer id="contact" className="bg-brand-bg text-[#FDFBF7] py-20 scroll-mt-20 border-t border-[#96B6C5]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16" dir={isRtl ? 'rtl' : 'ltr'}>
          
          {/* Column 1: Executive Call to Action */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-ice font-bold">
              {isRtl ? 'بناء المستقبل الرقمي' : 'COLLABORATION & INQUIRIES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-tight text-white">
              {t.contactHeading}
            </h2>
            <p className="text-[#FDFBF7]/80 text-sm sm:text-base leading-relaxed font-serif">
              {t.contactSubtitle}
            </p>

            {/* Premium Download CV CTA */}
            <div className="pt-4">
              <button
                onClick={triggerCvDownload}
                className="inline-flex items-center gap-3 px-6 py-4 bg-brand-ice text-[#4A0404] hover:bg-white hover:text-[#4A0404] font-serif font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg active:scale-95 rounded-sm"
                id="download-cv-btn"
              >
                <FileText className="w-4.5 h-4.5" />
                <span>{t.downloadCvBtn}</span>
              </button>
            </div>
          </div>
 
          {/* Column 2: Digital Channels */}
          <div className="space-y-8 bg-brand-card border border-[#96B6C5]/20 p-6 sm:p-8 rounded-sm">
            <h3 className="text-lg font-serif font-bold text-white border-b border-[#96B6C5]/20 pb-2">
              {isRtl ? 'قنوات التواصل المباشرة' : 'Direct Channels'}
            </h3>

            {/* Email Channel */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FDFBF7]/5 border border-[#96B6C5]/20 rounded-full flex items-center justify-center text-[#96B6C5]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#96B6C5] font-bold">
                  {t.emailLabel}
                </span>
                <a
                  href="mailto:raghadalqarni201@gmail.com"
                  className="font-serif text-sm hover:text-[#96B6C5] transition-colors"
                  id="email-contact-link"
                >
                  raghadalqarni201@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FDFBF7]/5 border border-[#96B6C5]/20 rounded-full flex items-center justify-center text-[#96B6C5]">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#96B6C5] font-bold">
                  {t.linkedinLabel}
                </span>
                <a
                  href="https://www.linkedin.com/in/raghad-alqarni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-sm hover:text-[#96B6C5] flex items-center gap-1.5 transition-colors"
                  id="linkedin-contact-link"
                >
                  <span>linkedin.com/in/raghad-alqarni</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Focus area indicators */}
            <div className="pt-4 border-t border-[#96B6C5]/10 space-y-2 text-xs">
              <span className="block uppercase text-[10px] tracking-wider text-[#96B6C5] font-bold mb-2">
                {t.specializationLabel}
              </span>
              <div className="flex items-center gap-2 text-[#FDFBF7]/90 font-serif">
                <CheckCircle className="w-3.5 h-3.5 text-[#96B6C5] flex-shrink-0" />
                <span>UiPath Automation & Orchestration (RPA)</span>
              </div>
              <div className="flex items-center gap-2 text-[#FDFBF7]/90 font-serif">
                <CheckCircle className="w-3.5 h-3.5 text-[#96B6C5] flex-shrink-0" />
                <span>Enterprise Excel Modeling & Data Models (DAX)</span>
              </div>
              <div className="flex items-center gap-2 text-[#FDFBF7]/90 font-serif">
                <CheckCircle className="w-3.5 h-3.5 text-[#96B6C5] flex-shrink-0" />
                <span>System Flow Diagrams & Integration Engineering</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Base */}
        <div className="pt-8 border-t border-[#96B6C5]/15 flex flex-col md:flex-row justify-between items-center text-xs text-[#FDFBF7]/60 gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif">© 2026 {t.brandName}. {t.rightsReserved}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-serif italic text-[#96B6C5]/80">{t.executiveFooterNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
