import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Parse JSON request bodies
app.use(express.json());

// Lazy-initialization of Gemini client for security and startup resilience
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null; // Missing or placeholder key
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Structured professional fallback content for Raghad Alqarni based on her Comprehensive Profile Database
const fallbacks = {
  en: {
    rpa: "• **RPA Specialty**: Deployed unattended RPA bots using UiPath Studio & Orchestrator (Dispatcher-Performer) at Armed Forces Hospital (Jan 2025 - May 2025) to eliminate manual data entry delays in CSSD and HR workflows.\n• **Projects**:\n  - *Medical Instruments ERP Data Automation & Validation Bot*: Achieves 100% accuracy, checks duplicates, and enters new items.\n  - *Automated Classification & Bulk Upload System for Medical Sets*: Automated sterile service sets' sterile inventory registration.\n  - *Identity Imaging & High-Volume Signature Deployment*: Automated parsing and bulk migrating of signature assets into ERP profiles.",
    excel: "• **Data Analytics & Advanced Excel**: Master of advanced Excel (Pivot Tables, VLOOKUP, VBA Macros, Power Query, Power Pivot, and DAX formulas). Designed templates reducing manual labor by 95% at Royal Commission Hospital.\n• **Projects**:\n  - *Dynamic Financial Modeling for Medical Insurance Claims & Denial Analysis*: Unified 14 tables, mapped codes using array formulas and nested XLOOKUPs, analyzing rejection trends and financial exposure for 7 clinics & 10+ providers.",
    digitization: "• **Systems Analysis & ERP Digitization**: Deep expertise in BPMN 2.0 process mapping, requirements engineering, functional specifications, and UAT testing. Cut system modification requests by 60% and detected 15+ critical bugs during ERP COOP administration at Armed Forces Hospital.\n• **Key Projects**:\n  - *Support Services Digitization & Trip Request Portal*: Re-engineered manual trip requests to 100% digital, bilingual, and UAT-validated ERP workflows.\n  - *Intelligent IT Help Desk Ticketing*: Implemented SLA tracking, classification routing, and 24-hour auto-closure triggers.\n  - *CBAHI & JCI Employee Compliance Evidence Module*: Digital audit-ready HR tracking with dynamic 90-day pre-expiry alerts.\n  - *IT Asset Custody Loan Tracker*: Availability tracking, digital custody logs, and aging flags.\n  - *CQI Quality Risk Mitigation & Incident Reporting*: Portal for physical/operational hazard reporting with automatic severity scoring.",
    skills: "• **Systems Analysis & Requirements Engineering**: Business Process Mapping, Functional Specifications, Stakeholder Engagement, Workflow Configurations.\n• **ERP & System Administration**: Role-Based Access Control (RBAC) security matrices for over 1,000+ staff, System Testing, Validation, User Acceptance Testing (UAT).\n• **Data Analytics & Process Automation**: Advanced Excel (VBA, Pivot Tables, Power Query, Power Pivot, DAX), Power BI Dashboards, SQL, RPA Development with UiPath Studio.\n• **Medical Compliance & IT Operations**: Healthcare Information Systems (HIS), and aligning digital workflows with healthcare accreditation standards (CBAHI & JCI).",
    contact: "You can reach out to Raghad directly via her professional channels:\n• **Email**: raghadalqarni201@gmail.com\n• **LinkedIn**: https://www.linkedin.com/in/raghad-khalid-alqarni?utm_source=share_via&utm_content=profile&utm_medium=member_android\n• *Note*: Official, strong recommendation letters from Mr. Rashed Alkhaldi (Director of CIT), Dr. Ahmed Al Shahrani (Director of HR), Ms. Modhi Alshalawi (Director of CSSD), and Dr. Khawlah Al-Turkistani (Head of Patient Experience - PE) at Armed Forces Hospital are available upon request.",
    general: "Welcome. I am Raghad Alqarni's Executive AI Consultant. She is an officially classified Specialist Member of the Saudi Council of Engineers (SCE) with a Bachelor's in Computer Science. How can I assist you with details regarding her Systems Analysis, ERP Administration, IT Operations, or Business Analytics expertise?"
  },
  ar: {
    rpa: "• **أتمتة العمليات الروبوتية (RPA)**: قامت رغد بتصميم وتشغيل روبوتات برمجية غير موجهة باستخدام UiPath Studio & Orchestrator أثناء تدريبها بمستشفى القوات المسلحة (يناير 2025 - مايو 2025) للقضاء على تأخير إدخال البيانات يدوياً في أقسام التعقيم والموارد البشرية.\n• **المشاريع البارزة**:\n  - *روبوت فحص وأتمتة إدخال بيانات الأجهزة الطبية بنظام ERP*: يحقق دقة بنسبة 100٪ في مطابقة البيانات ومنع تكرار الإدخال.\n  - *نظام الأتمتة والتصنيف لمجموعات الأدوات الطبية للرفع الجماعي*: أتمتة الرفع للمستندات والترميز للأجهزة.\n  - *أتمتة معالجة ورفع صور التواقيع للموظفين*: مطابقة الأرقام الوظيفية ورفع التواقيع الممسوحة لملفات الموظفين بـ ERPNext تلقائياً.",
    excel: "• **تحليل البيانات وإكسل المتقدم**: تتقن رغد بناء النماذج التشغيلية وحماية البيانات في إكسل (Pivot Tables, VLOOKUP, VBA, Power Query, Power Pivot, DAX). قامت بتصميم قوالب إكسل متقدمة اختصرت 95٪ من الوقت المستهلك بمستشفى الهيئة الملكية.\n• **المشاريع البارزة**:\n  - *نموذج تسوية ومطابقة مطالبات التأمين الطبي ومرفوضاتها*: مطابقة وتصنيف أكواد الرفض آلياً باستخدام معادلات XLOOKUP المتداخلة وحساب المخاطر المالية لـ 7 عيادات عبر 14 جدولاً إحصائياً ديناميكياً.",
    digitization: "• **تحليل النظم ورقمنة الـ ERP**: خبرة استثنائية في هندسة المتطلبات، رسم العمليات بـ BPMN 2.0، وضمان جودة البرمجيات (UAT). نجحت في تقليص طلبات التعديل البرمجية بنسبة 60٪ واكتشاف أكثر من 15 ثغرة حرجة بمستشفى القوات المسلحة.\n• **المشاريع البارزة**:\n  - *نظام طلبات رحلات الخدمات المساندة*: تحويل كامل لطلبات المركبات الورقية إلى نظام ERPNext ثنائي اللغة ومجرب بالكامل عبر سيناريوهات UAT.\n  - *نظام تذاكر الدعم الفني لـ CIT*: تذاكر الدعم الفني مع آلية الإغلاق الذاتي خلال 24 ساعة ومتابعة مستويات الخدمة SLA.\n  - *أتمتة ملفات امتثال الموظفين لمعايير سباهي (CBAHI) و(JCI)*: مع تتبع تواريخ الصلاحية وإرسال تنبيهات استباقية قبل 90 يوماً.\n  - *نظام تتبع وإعارة الأصول التقنية (IT Assets)*: تتبع الأصول على مستوى الـ Serial Number وإصدار العهد وتحديد فترات التأخير.\n  - *نظام تقارير الحوادث لإدارة الجودة (Incident Reporting)*: رصد المخاطر والبيانات التشغيلية مع حساب فوري لمستوى الخطورة وتنبيه المسؤولين.",
    skills: "• **تحليل النظم وهندسة المتطلبات**: رسم خرائط العمليات، المواصفات الوظيفية، تفاعل أصحاب المصلحة، وإعداد مسارات العمل.\n• **إدارة الأنظمة والـ ERP**: مصفوفة الصلاحيات والأمان (RBAC) لأكثر من 1,000 موظف، فحص الأنظمة واختبارات القبول (UAT).\n• **تحليل البيانات والأتمتة**: إكسل المتقدم (VBA, Power Query, DAX)، لوحات تحكم Power BI، وقواعد البيانات SQL، وأتمتة UiPath.\n• **العمليات والامتثال الطبي**: خبرة عملية بنظم معلومات المستشفيات (HIS) ومواءمة مسارات العمل الفنية مع معايير سباهي (CBAHI) واللجنة الدولية المشتركة (JCI).",
    contact: "يمكنك التواصل مع رغد القرني مباشرة عبر قنواتها الرسمية:\n• **البريد الإلكتروني**: raghadalqarni201@gmail.com\n• **حساب لينكد إن**: https://www.linkedin.com/in/raghad-khalid-alqarni?utm_source=share_via&utm_content=profile&utm_medium=member_android\n• *ملاحظة*: خطابات توصية رسمية وقوية من مدير تقنية المعلومات والاتصالات (أ. راشد الخالدي)، ومدير الموارد البشرية (د. أحمد الشهراني)، ومديرة قسم التعقيم (أ. موضي الشلاوي)، ورئيسة تجربة المرضى (د. خولة التركستاني) بمستشفى القوات المسلحة متاحة عند الطلب.",
    general: "أهلاً بك. أنا المستشار الذكي لرغد القرني. رغد هي عضو أخصائي معتمد في الهيئة السعودية للمهندسين (SCE) وحاصلة على بكالوريوس علوم الحاسب. كيف يمكنني مساعدتك في استعراض خبراتها في تحليل النظم، إدارة الـ ERP، أو تحليلات الأعمال وأتمتة العمليات؟"
  }
};

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Interactive AI Assistant route
app.post("/api/chat", async (req, res) => {
  const { message, lang } = req.body;
  const currentLang: 'en' | 'ar' = lang === 'ar' ? 'ar' : 'en';

  const userQuery = (message || "").toLowerCase();

  try {
    const ai = getAIClient();

    if (ai) {
      // Prompt engineered background context on Raghad Alqarni
      const systemInstruction = `You are Raghad Alqarni's Executive AI Consultant. Your core mandate is to deliver ultra-concise, fact-based, and objective responses to recruiters and visitors.

CRITICAL BEHAVIORAL RULES:
1. NO FLUFF, NO HYPERBOLE (ممنوع المدح المبتذل تماماً): Do not use exaggerated praise or emotional words (e.g., avoid "exceptional", "outstanding", "brilliant leader", "بشكل مبهر", "متميزة للغاية"). State facts, roles, and achievements objectively as written in her resume.
2. CONCISENESS & SPEED (إجابات فائقة الاختصار): Limit all responses to a maximum of 2-3 bullet points or 2-3 short sentences. Keep it highly scannable and direct. The shorter the text, the faster the response time.
3. STRICT FACTUAL ACCURACY: Only answer using the database provided below. If a user asks something not in the database, politely say you don't have that information.
4. BILINGUAL ADAPTIVITY: Respond in professional, clean, direct Arabic if asked in Arabic, and professional, crisp English if asked in English.

---
### RAGHAD ALQARNI'S DIRECT DATABASE

- Name: Raghad Khalid Alqarni
- Education: Bachelor’s in Computer Science, Jubail Industrial College (Graduation: May 2025).
- Professional Classification: Specialist Membership, Saudi Council of Engineers (SCE), 2026.
- Recommendations: Official recommendation letters available from Armed Forces Hospital, signed by:
  * Mr. Rashed Alkhaldi (Director of CIT)
  * Dr. Ahmed Al Shahrani (Director of HR)
  * Ms. Modhi Alshalawi (Director of CSSD)
  * Dr. Khawlah Al-Turkistani (Head of Patient Experience - PE)

- Core Professional Experience:
  * Systems Analyst Specialist & IT Support (Tamheer) at Royal Commission Hospital (Feb 2026 - Present): Managed daily DHS/HIS operations; built Power BI dashboards; designed Excel templates reducing manual labor by 95%.
  * Systems Analyst & Administrator (COOP) at Armed Forces Hospital (Jan 2025 - May 2025): Managed RBAC access control for 1000+ staff; mapped ERP requirements for IT, HR, and Quality, cutting modification requests by 60%; handled ERP UAT testing and deployed 2 UiPath RPA bots for CSSD/HR workflows.

- Certificates: SCE Specialist (2026), Data Analysis with Power BI (2026), Business Analysis Fundamentals (Alison, 2026), Lean Six Sigma White Belt (2026), ERPNext Administration (2025), AI Fundamentals (SDAIA, 2025).

---
### RESPONSE EXAMPLES (FOR THE AI TO IMITATE)

Example 1 (Asking about Skills):
- User: "ما هي مهارات رغد في تحليل النظم؟"
- AI: "تمتلك رغد خبرة عملية في:
  * هندسة المتطلبات وربط الأقسام بنظام الـ ERP (قللت طلبات التعديل بنسبة 60%).
  * إدارة الصلاحيات ومصفوفات الأمان (RBAC) لأكثر من 1000 موظف.
  * تصميم وإجراء اختبارات القبول (UAT) وتطوير روبوتات الأتمتة (RPA)."

Example 2 (Asking about Recommendation):
- User: "Do you have recommendations?"
- AI: "Yes, Raghad has official recommendation letters from Armed Forces Hospital directors, including Mr. Rashed Alkhaldi (Director of CIT), Dr. Ahmed Al Shahrani (Director of HR), Ms. Modhi Alshalawi (Director of CSSD), and Dr. Khawlah Al-Turkistani (Head of Patient Experience - PE)."`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: userQuery,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text;
      if (text) {
        return res.json({ response: text.trim() });
      }
    }

    // Direct, ultra-precise fallback response system if AI is unconfigured
    const content = fallbacks[currentLang];
    let reply = content.general;

    if (userQuery.includes("rpa") || userQuery.includes("uipath") || userQuery.includes("bot") || userQuery.includes("أتمتة") || userQuery.includes("روبوت")) {
      reply = content.rpa;
    } else if (userQuery.includes("excel") || userQuery.includes("vba") || userQuery.includes("pivot") || userQuery.includes("إكسل") || userQuery.includes("مصفوفة")) {
      reply = content.excel;
    } else if (userQuery.includes("digitiz") || userQuery.includes("erp") || userQuery.includes("procure") || userQuery.includes("نظام") || userQuery.includes("رقمنة")) {
      reply = content.digitization;
    } else if (userQuery.includes("skill") || userQuery.includes("tool") || userQuery.includes("stack") || userQuery.includes("مهارات") || userQuery.includes("تقنيات")) {
      reply = content.skills;
    } else if (userQuery.includes("contact") || userQuery.includes("email") || userQuery.includes("linkedin") || userQuery.includes("تواصل") || userQuery.includes("اتصال")) {
      reply = content.contact;
    }

    return res.json({ response: reply });

  } catch (error) {
    console.error("Chat API error:", error);
    const content = fallbacks[currentLang];
    return res.json({ response: content.general });
  }
});

// Configure Vite or Static asset delivery based on environment
async function initializeApp() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode: Mount Vite dev server
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve pre-built static client files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started and running on port ${PORT}`);
  });
}

initializeApp().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});
