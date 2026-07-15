import { Project, TranslationDictionary } from '../types';

export const projectsData: { en: Project[]; ar: Project[] } = {
  en: [
    {
      id: 'rpa-1',
      category: 'rpa',
      title: 'Multi-System Supply Chain Invoice Reconciliation Bot',
      summary: {
        problem: 'Invoice verification from 12 global vendors required 18 manual hours weekly across SAP and Excel portals, leading to processing bottlenecks and late payment fees.',
        solution: 'Designed an unattended UiPath Bot that extracts PDF invoice details via OCR, validates them against purchase orders, and flags anomalies dynamically.',
        impact: 'Reduced weekly processing time by 85% and achieved 100% data audit compliance with zero manual errors.'
      },
      caseStudy: {
        methodologies: [
          'Agile Automation SDLC (Software Development Life Cycle)',
          'PDD (Process Definition Document) & SDD (Solution Design Document) Design',
          'Enterprise Exception Handling Framework',
          'User Acceptance Testing (UAT)'
        ],
        tools: [
          'UiPath Studio & Orchestrator',
          'ABBYY FineReader OCR Engine',
          'SAP Scripting & UI Automation',
          'Microsoft Excel Enterprise Integration',
          'Windows Task Scheduler & Logs'
        ],
        formulas: [
          'Dispatcher-Performer Transactional Queue Architecture',
          'System Exception (SE) vs. Business Rule Exception (BRE) separation logic',
          'Regular Expressions (RegEx) for unstructured PDF text scraping',
          'Secure Credential Assets Retrieval (AES-256 decrypted in-memory)'
        ],
        training: [
          'Comprehensive Standard Operating Procedure (SOP) documentation',
          'Finance & Accounting Team Walkthrough Workshop',
          'Screencast tutorial library for asynchronous future-hire onboarding'
        ],
        detailedProcess: [
          '1. The Dispatcher Bot checks incoming corporate mail, extracts attached invoice PDFs, and uploads data payloads as transaction items into the Orchestrator Queue.',
          '2. The Performer Bot claims items from the queue, logs into SAP via secure credentials, and navigates to the financial ledger.',
          '3. Raw PDF values are scraped using OCR and regular expressions, then validated against CRM purchase order records.',
          '4. If values match, the invoice is auto-approved. Discrepancies are marked as Business Rule Exceptions and logged in an Excel exception dashboard for audit.',
          '5. Auto-recovery handles unexpected web page timeouts, while error screenshots are securely emailed to administrators.'
        ]
      }
    },
    {
      id: 'rpa-2',
      category: 'rpa',
      title: 'Legacy Government Portal Data Extraction & Synchronization',
      summary: {
        problem: 'Daily extraction of compliance and license records from a legacy municipal portal lacked APIs, forcing manual transcription and introducing input errors.',
        solution: 'Developed a UiPath web automation workflow leveraging dynamic CSS/xPath selectors, intelligent wait intervals, and secure browser sessions.',
        impact: 'Saved 120 operational hours monthly while reducing system data-entry errors from 4.2% to 0%.'
      },
      caseStudy: {
        methodologies: [
          'Requirements Analysis & System Flow Mapping',
          'Robotic Target Object Identification & Anchoring',
          'Data Integrity Validation Framework',
          'Fail-Safe Automated Rollbacks'
        ],
        tools: [
          'UiPath Web Automation',
          'Dynamic Selectors & Anchor-Based Scrapers',
          'SQL Server Database Integration',
          'HTML5 / CSS Selector Scrapers'
        ],
        formulas: [
          'Multi-Anchor selector logic to counter legacy UI shifts',
          'Timeout-tolerant retry mechanisms for legacy server lags',
          'Encrypted connection string models inside Orchestrator',
          'Incremental data writing strategies to prevent double-insertions'
        ],
        training: [
          'Operations Team troubleshooting playbook for edge cases',
          'Administrator guide for managing robot runtime licenses and schedules',
          'Live simulation training for IT administrators'
        ],
        detailedProcess: [
          '1. The robot initiates a secure virtual session, navigates to the legacy governmental portal, and executes multi-factor authentication.',
          '2. The bot parses table grids page-by-page, dynamically adjusting delays to match server speed.',
          '3. Scraping queries capture record keys, verifying their structural syntax (dates, registry numbers) on the fly.',
          '4. Records are appended directly to the database. Upon completion, the robot outputs an executive runtime audit log summary to management.'
        ]
      }
    },
    {
      id: 'excel-1',
      category: 'excel',
      title: 'Monthly Report: Rejection Reasons & Medical Insurance Reconciliation',
      modalTitle: 'Case Study: Automated Insurance Claims Reconciliation & Rejection Analytics',
      summary: {
        problem: 'The finance team faced a high administrative burden, spending 2 weeks monthly manually filtering, reconciling, and classifying insurance rejection reasons for 7 medical centers across 10+ insurance companies, leading to manual reporting delays and billing errors.',
        solution: 'Engineered a dynamic 4-sheet financial model utilizing an automated Reason Dictionary, dynamic Array Formulas (INDEX/MATCH with search filters), and nested XLOOKUPs to automatically map multi-vendor rejection reasons, consolidate records, and build a real-time analytics dashboard.',
        impact: 'Reduced the entire reconciliation and monthly reporting cycle from 2 weeks of manual effort down to less than 1 minute of data entry, achieving 100% calculation accuracy and zero manual processing errors.'
      },
      caseStudy: {
        methodologies: [
          'Multi-Sheet Relational Database Architecture in Excel',
          'Non-Standardized Text Processing & Standardization Algorithms',
          'Real-Time Financial Reconciliation and Summation',
          'Financial BI Dashboard Architecture & Visualization'
        ],
        tools: [
          'Excel Advanced Models',
          'Multi-Table Mapping',
          'Conditional Logic Engines',
          'Financial Analytics Dashboards',
          'Data Dictionaries'
        ],
        formulas: [
          'Unique identifier extraction matrix and noise-word filtering using INDEX, MATCH, COUNTIF, and SEARCH',
          'Nested XLOOKUP search engine with wildcard matching to seamlessly resolve inconsistent manual text entries',
          'Double-conditional COUNTIFS & SUMIFS calculation engines to extract denial counts and aggregate total financial exposure'
        ],
        training: [
          'Deployed the scalable 4-sheet financial template to the accounting department for live operations.',
          'Provided step-by-step guidance on updating the Reason Dictionary and adding new clinics or insurance entities.',
          'Executed user acceptance and validation sessions to verify the 100% accuracy of the reconciled outcomes.'
        ],
        detailedProcess: [
          "1. Raw Data Input: Copy and paste raw insurance claims and rejection reports into the 'Mapping' sheet.",
          "2. Automated Mapping: The system applies array formulas and nested XLOOKUPs to automatically map vendor rejection codes against the 'Reason Dictionary'.",
          "3. Dynamic Aggregation: The 'Dashboard' computes total denial counts and financial exposure across 14 tables dynamically.",
          "4. Final Reporting: The 'Sum' sheet aggregates overall performance of the 7 clinics into a unified monthly report."
        ]
      }
    },
    {
      id: 'excel-2',
      category: 'excel',
      title: 'Interactive HR Performance & Capacity Analytics Dashboard',
      summary: {
        problem: 'Human Resources lacked visibility into employee utilization, training hours, and performance index correlations across multiple business units.',
        solution: 'Built a high-fidelity interactive dashboard driven by data models, custom KPI formulas, elegant Pivot tables, and interactive slicers.',
        impact: 'Provided leadership with clean, real-time analytics, leading to a 15% increase in operational capacity reallocation.'
      },
      caseStudy: {
        methodologies: [
          'Human-Centered UX Dashboard Design',
          'Data Cleansing & ETL Pipeline Engineering',
          'Key Performance Indicator (KPI) Formulation',
          'Executive Readability & Contrast Audits'
        ],
        tools: [
          'Microsoft Excel Power Pivot',
          'Power Query ETL',
          'DAX (Data Analysis Expressions) Models',
          'Excel Slicers & Custom Conditional Formatting'
        ],
        formulas: [
          'DAX Measures: CALCULATE, DIVIDE, and RELATED for cross-table evaluation',
          'Rolling average algorithms and capacity utilization percentage formulas',
          'Conditional rating thresholds using dynamic text formatting and icon sets',
          'Pivot Table grouping indexes for demographic capacity mapping'
        ],
        training: [
          'Operational walkthrough delivered to the Chief Human Resources Officer (CHRO)',
          'Step-by-step documentation on updating the underlying raw active employee rosters',
          'Interactive visual tutorial embedded directly onto the dashboard cover page'
        ],
        detailedProcess: [
          '1. Raw HR payroll and training logs are imported into Excel via a direct database query or local file upload.',
          '2. Power Query extracts, cleans, and builds relationships between different employee records.',
          '3. DAX formulas calculate capacity indices, weighting performance against training history and hours worked.',
          '4. Elegant, minimal pivot charts and slicers organize the data by department, tier, and region, and display the metrics cleanly with premium corporate colors.'
        ]
      }
    },
    {
      id: 'digitization-1',
      category: 'digitization',
      title: 'Custom Procurement Approval Workflow System',
      summary: {
        problem: 'Purchase request approvals relied on physical signatures, causing average delays of 9 business days per request and an incomplete audit trail.',
        solution: 'Structured a fully digitized cloud workflow within the corporate ERP system, mapping complex role hierarchies and dynamic signature logic.',
        impact: 'Slashed average approval cycle time to 4 hours with 100% permanent digital audit traceability.'
      },
      caseStudy: {
        methodologies: [
          'Systems Analysis & Business Process Model and Notation (BPMN 2.0)',
          'Requirements Gathering & Stakeholder Mapping',
          'User Acceptance Testing (UAT) Scenario Scripting',
          'Information Security & Access Controls Configuration'
        ],
        tools: [
          'ERP System Platform Workflow Engine',
          'BPMN 2.0 Flowchart Modeler',
          'UAT Automation Logs & Test Cases',
          'Role-Based Access Control (RBAC) Matrices'
        ],
        formulas: [
          'Multi-tier approval routing matrix (Dynamic paths mapped by cost thresholds: <$1K, $1K-$10K, >$10K)',
          'Conditional email alerts & automated escalation loops (auto-alerts after 24 hours of inactivity)',
          'Digital Signature cryptographic verification protocols',
          'Database lookup formulas mapped to department cost-center codes'
        ],
        training: [
          'Department-wide live simulation training sessions for 120 employees',
          'Created highly illustrated PDF quick guides for requisition initiators & approvers',
          'Set up a support ticketing workflow with pre-formulated response patterns for launch week'
        ],
        detailedProcess: [
          '1. A user logs into the digital portal and initiates a procurement request; forms are strictly validated based on their user profile.',
          '2. The ERP system lookup engine determines cost centers and immediately routes the request to the correct manager.',
          '3. If approval is delayed, the system triggers escalation protocols, notifying higher management based on strict SLA policies.',
          '4. Once signed, the workflow auto-generates a PO number and synchronizes the digital transaction records with the inventory ledger.'
        ]
      }
    },
    {
      id: 'digitization-2',
      category: 'digitization',
      title: 'ERP Customer Database Migration & Cleanse Campaign',
      summary: {
        problem: 'Critical ERP system migration was threatened by 45,000 legacy customer records containing duplicate, incomplete, and incorrectly formatted parameters.',
        solution: 'Executed a data cleansing campaign, designing data schemas, writing automated matching scripts, and configuring standard database constraints.',
        impact: 'Cleaned and migrated 100% of customer accounts ahead of schedule, preventing service interruptions during go-live.'
      },
      caseStudy: {
        methodologies: [
          'ETL (Extract, Transform, Load) Pipeline Design',
          'Data Schema Alignment & Field Mapping',
          'Fuzzy Match Deduplication Logic',
          'Data Governance & Quality Control Audits'
        ],
        tools: [
          'ERP Migration Workbench',
          'Power Query Advanced Editor',
          'Regex Syntax Parsing Engines',
          'Database Schema Profiling Tools'
        ],
        formulas: [
          'Levenshtein Distance fuzzy-matching string logic to detect closely spelled customer names',
          'Regular Expression models for global telephone/mobile number normalization',
          'Data mapping schemas mapping legacy fields to ERP target structures',
          'SQL script checks mapping database keys and foreign integrity'
        ],
        training: [
          'Staff training on database-hygiene standard operating procedures',
          'Data Entry Manual explaining dynamic validation rules of the new ERP system',
          'Administrative dashboard training for database managers'
        ],
        detailedProcess: [
          '1. Extracted legacy records into a secure staging environment to profile data gaps.',
          '2. Run automated regex cleanups to normalize telephone numbers, emails, and address fields.',
          '3. Executed fuzzy matching algorithms to isolate and merge redundant accounts while preserving order histories.',
          '4. Migrated clean customer matrices into the ERP system, and activated schema-level field constraints to prevent future drift.'
        ]
      }
    }
  ],
  ar: [
    {
      id: 'rpa-1',
      category: 'rpa',
      title: 'روبوت مطابقة فواتير سلاسل الإمداد عبر الأنظمة المتعددة',
      summary: {
        problem: 'تطلبت عملية التحقق من فواتير 12 مورداً عالمياً 18 ساعة عمل يدوي أسبوعياً عبر بوابات SAP وملفات Excel، مما تسبب في اختناقات تشغيلية ورسوم دفع متأخرة.',
        solution: 'تصميم وبرمجة روبوت UiPath (غير موجه) لاستخراج بيانات الفواتير من ملفات PDF بواسطة تقنيات التعرف الضوئي على الحروف (OCR)، ومطابقتها ديناميكياً مع أوامر الشراء.',
        impact: 'تقليص وقت المعالجة الأسبوعي بنسبة 85% وتحقيق امتثال بنسبة 100% لتدقيق البيانات مع صفر أخطاء يدوية.'
      },
      caseStudy: {
        methodologies: [
          'دورة حياة تطوير أتمتة البرمجيات الرشيقة (Agile SDLC)',
          'إعداد مستندات تعريف العمليات (PDD) والتصميم الحلولي (SDD)',
          'إطار عمل متطور لإدارة الاستثناءات والأخطاء',
          'اختبار قبول المستخدم (UAT)'
        ],
        tools: [
          'برنامج UiPath Studio و Orchestrator',
          'محرك التعرف الضوئي ABBYY FineReader OCR',
          'أدوات كشط وتفاعل نظام SAP',
          'تكامل واجهات Microsoft Excel للمؤسسات',
          'مجدول المهام في ويندوز وسجلات التتبع'
        ],
        formulas: [
          'معمارية موزع المهام ومنفذها (Dispatcher-Performer)',
          'الفصل الهيكلي بين استثناءات النظام (SE) واستثناءات قواعد العمل (BRE)',
          'التعبيرات النمطية (RegEx) لكشط البيانات غير المنظمة من مستندات PDF',
          'استرجاع آمن لمعلومات الدخول المشفرة بـ AES-256'
        ],
        training: [
          'تسليم دليل الإجراءات القياسي (SOP) المفصل للقسم المالي',
          'ورشة عمل تفاعلية وشاملة للموظفين الماليين لشرح واجهة التحكم',
          'مكتبة مرئية لتسهيل تدريب الموظفين الجدد مستقبلاً بشكل ذاتي'
        ],
        detailedProcess: [
          '1. يقوم روبوت التوزيع بقراءة رسائل البريد الواردة، واستخلاص ملفات الفواتير المرفقة ورفعها كمهام في طابور Orchestrator المخصص.',
          '2. يبدأ روبوت التنفيذ بسحب المهام، وتسجيل الدخول الآمن لنظام SAP والانتقال التلقائي لحساب الأستاذ المالي المعني.',
          '3. يتم فحص ومطابقة المتغيرات المستخلصة مع سجلات قاعدة بيانات أوامر الشراء في نظام إدارة علاقات العملاء (CRM).',
          '4. في حال تطابق البيانات، تتم الموافقة الفورية والآلية على الفاتورة، وإلا فيتم نقلها لطابور المراجعة اليدوية للمدقق المالي.',
          '5. تفعيل آليات التعافي التلقائي والتقاط صور للأخطاء وإرسالها تقنياً للمشرف لضمان استمرارية العملية.'
        ]
      }
    },
    {
      id: 'rpa-2',
      category: 'rpa',
      title: 'أتمتة استخراج وتزامن البيانات من البوابات الحكومية القديمة',
      summary: {
        problem: 'الافتقار لوجود واجهات برمجة تطبيقات (APIs) بالبوابة البلدية فرض عملية استخراج وتفريغ يومية يدوية لبيانات التراخيص، مما نتج عنه أخطاء متكررة.',
        solution: 'تطوير سيناريو أتمتة ويب متكامل عبر UiPath يعتمد على محددات CSS/xPath الديناميكية، فترات الانتظار الذكية، وجلسات التصفح الآمنة.',
        impact: 'توفير 120 ساعة عمل تشغيلية شهرياً مع خفض نسبة أخطاء إدخال البيانات من 4.2% إلى 0% تماماً.'
      },
      caseStudy: {
        methodologies: [
          'تحليل المتطلبات وتخطيط تدفقات النظام الفنية',
          'تحديد الكائنات المستهدفة وتثبيتها برمجياً (Anchor-Based)',
          'إطار فحص سلامة وتكامل البيانات المستخرجة',
          'تفعيل ميكانيكية التراجع التلقائي الآمن في حالات الفشل'
        ],
        tools: [
          'أدوات أتمتة صفحات الويب في UiPath',
          'المحددات الديناميكية (Dynamic Selectors)',
          'تكامل قواعد بيانات SQL Server',
          'كاشطات لغات الويب HTML5 / CSS'
        ],
        formulas: [
          'منطق محددات الويب المتعددة لمواجهة تغيرات واجهة المستخدم',
          'آليات إعادة المحاولة المرنة للتكيف مع بطء الخوادم القديمة',
          'تشفير سلاسل الاتصال وتأمينها داخل Orchestrator',
          'استراتيجيات الكتابة التراكمية في قاعدة البيانات لمنع تكرار الإدخال'
        ],
        training: [
          'كتيب إرشادي لفريق العمليات للتعامل الفوري مع الحالات الاستثنائية',
          'دليل المسؤولين لإدارة الرخص التشغيلية وجدول الأوقات للروبوتات',
          'جلسات محاكاة حية واختبارات فنية لمهندسي الدعم التقني'
        ],
        detailedProcess: [
          '1. يفتح الروبوت جلسة افتراضية آمنة، ويتجه للبوابة الحكومية ويقوم بعملية التحقق الثنائي.',
          '2. يحلل الروبوت الجداول صفحة تلو الأخرى مع تعديل تلقائي لفترات الانتظار لتلائم سرعة استجابة الخادم.',
          '3. تصفية البيانات واستخلاصها مع التحقق الفوري من التنسيقات (تواريخ، أرقام السجلات).',
          '4. تصدير البيانات لقواعد البيانات المركزية، وإرسال تقرير فني موجز بالعملية اليومية للإدارة.'
        ]
      }
    },
    {
      id: 'excel-1',
      category: 'excel',
      title: 'Monthly Report: Rejection Reasons & Medical Insurance Reconciliation',
      modalTitle: 'دراسة الحالة: أتمتة تسوية ومطابقة مطالبات التأمين الطبي وتصنيف المرفوضات',
      summary: {
        problem: 'يواجه قسم المالية عبئاً تشغيلياً شهرياً مجهداً يستغرق أسبوعين من العمل اليدوي لفرز وتسوية مطالبات التأمين الطبي وتصنيف أسباب الرفض لـ 7 عيادات مختلفة وأكثر من 10 شركات تأمين، مما يؤدي لتأخير التقارير واحتمالية وجود أخطاء بشرية في الحسابات.',
        solution: 'تطوير نموذج مالي مؤتمت بالكامل يتكون من 4 صفحات مترابطة؛ يرتكز على قاموس معالجة الأسباب (Reason Dictionary) ومصفوفات برمجية ذكية (INDEX/MATCH مع فلاتر البحث) ومعادلات XLOOKUP المتداخلة لمطابقة وتوحيد أسباب الرفض المتعددة آلياً وتجميعها فورياً.',
        impact: 'تقليص دورة التسوية المالية وإعداد التقارير الشهرية من أسبوعين كاملين إلى دقيقة واحدة فقط بمجرد نسخ ولصق البيانات الخام، مع ضمان دقة حسابية كاملة بنسبة 100% وصفر أخطاء بشرية.'
      },
      caseStudy: {
        methodologies: [
          'بنية قواعد البيانات العلائقية المترابطة (Multi-Sheet Relational Architecture)',
          'معالجة وهندسة سلاسل البيانات النصية غير المنظمة (Text Analytics & Standardization)',
          'الحساب الفوري ومطابقة الفروقات المالية (Real-Time Financial Reconciliation)',
          'تصميم لوحات التحليل الإحصائي المالي (Financial Dashboard Architecture)'
        ],
        tools: [
          'Excel Advanced Models',
          'Multi-Table Mapping',
          'Conditional Logic Engines',
          'Financial Analytics Dashboards',
          'Data Dictionaries'
        ],
        formulas: [
          'مصفوفة استخراج المعرفات الفريدة وتصفية الكلمات المستثناة باستخدام INDEX, MATCH, COUNTIF, SEARCH',
          'دالة البحث المتداخل XLOOKUP مع التعبيرات التقريبية لمطابقة النصوص غير المطابقة يدوياً بمرونة',
          'محركات الحساب والجمع الشرطي المزدوج COUNTIFS & SUMIFS لاستخراج أعداد الرفض وتجميع المبالغ المالية المعرضة للخطر'
        ],
        training: [
          'تسليم القالب المالي المكون من 4 صفحات لقسم المحاسبة والمالية واعتماده في دورة العمل الحقيقية.',
          'تقديم دليل إرشادي خطوة بخطوة للموظفين حول كيفية تحديث قاموس الأسباب (Reason Dictionary) وإضافة عيادات جديدة.',
          'إجراء جلسات التحقق من صحة وقبول البيانات للتأكد من مطابقة وتسوية المخرجات بنسبة 100%.'
        ],
        detailedProcess: [
          '1. إدخال البيانات الخام: نسخ ولصق تقارير مطالبات التأمين الطبي والمرفوضات الخام مباشرة داخل شيت \'Mapping\'.',
          '2. المطابقة التلقائية: يطبق النظام مصفوفات برمجية ومعادلات XLOOKUP المتداخلة لترجمة وتوحيد أكواد الرفض آلياً بناءً على شيت \'Reason Dictionary\'.',
          '3. التجميع الديناميكي: تقوم لوحة التحكم \'Dashboard\' بحساب تكرار الحالات والمبالغ المعرضة للخطر آلياً عبر 14 جدولاً إحصائياً.',
          '4. التقرير الختامي: تجمع صفحة \'Sum\' الأداء العام والتسويات المالية لـ 7 عيادات في تقرير شهري موحد وجاهز للتقديم.'
        ]
      }
    },
    {
      id: 'excel-2',
      category: 'excel',
      title: 'لوحة قيادة تفاعلية لتحليلات أداء الموارد البشرية والطاقة الاستيعابية',
      summary: {
        problem: 'افتقر قسم الموارد البشرية لآلية موحدة لمراقبة كفاءة الموظفين وساعات التدريب ومدى استغلال الطاقات الاستيعابية لمختلف الإدارات.',
        solution: 'تطوير لوحة قيادة تفاعلية بالكامل مبنية على نمذجة البيانات، دوال المؤشرات الرقمية المخصصة (KPIs)، والجداول المحورية مع أدوات تصفية ذكية.',
        impact: 'تمكين الإدارة من اتخاذ قرارات استباقية مبنية على الحقائق، مما ساهم في إعادة توزيع واستغلال 15% من الطاقات المهدرة.'
      },
      caseStudy: {
        methodologies: [
          'تصميم لوحات القيادة التفاعلية وفق معايير تجربة المستخدم (UX)',
          'إعداد خطوط معالجة وتطهير البيانات المتقدمة (ETL Pipeline)',
          'صياغة مؤشرات الأداء الوظيفي والإنتاجي',
          'مراجعة مستويات التباين والألوان لراحة العرض والتمثيل'
        ],
        tools: [
          'إكسل Power Pivot',
          'برمجيات Power Query لتطهير البيانات',
          'نمذجة نماذج علاقات البيانات بلغة DAX',
          'شرائح التصفية (Slicers) والتنسيق الشرطي المخصص في إكسل'
        ],
        formulas: [
          'معادلات DAX: CALCULATE و DIVIDE و RELATED للربط بين الجداول المختلفة',
          'خوارزميات احتساب المتوسطات المتحركة ونسب استغلال القوى العاملة',
          'التنسيق الشرطي الذكي مع مجموعات الأيقونات لعرض الأداء',
          'تجميع وتصنيف الفئات الديموغرافية ومخططات المقارنة'
        ],
        training: [
          'جلسة شرح تشغيلية مفصلة للمدير التنفيذي للموارد البشرية',
          'إعداد وثيقة تعليمية سهلة لتحديث السجلات وتغذيتها بالبيانات الجديدة',
          'فيديو مدمج باللوحة يوضح طريقة عمل الفلاتر ومؤشرات الأداء'
        ],
        detailedProcess: [
          '1. يتم استيراد سجلات الرواتب والتدريب الخام للشركة عن طريق اتصال مباشر أو ملفات موحدة.',
          '2. يقوم برنامج Power Query بتنظيف وعقد العلاقات المنطقية والروابط بين الأقسام المختلفة والموظفين.',
          '3. تقوم دوال DAX بحساب الطاقات الإنتاجية ونسب الغياب وربطها بمدى جودة وحجم الساعات التدريبية.',
          '4. يتم عرض النتائج في لوحة قيادة أنيقة بألوان الشركة تعبر بدقة عن مواطن الضعف والقوة بلمسة واحدة.'
        ]
      }
    },
    {
      id: 'digitization-1',
      category: 'digitization',
      title: 'نظام إدارة تدفق الموافقات على المشتريات والطلبات الرقمية',
      summary: {
        problem: 'الاعتماد على التواقيع الورقية لاعتماد طلبات الشراء أدى لهدر الوقت حيث بلغ معدل التأخير 9 أيام عمل للطلب مع صعوبة تتبع الحالات.',
        solution: 'هيكلة وبناء مسار عمل رقمي بالكامل داخل نظام إدارة موارد المؤسسة (ERP) يربط الهياكل الإدارية ويفعل التواقيع الإلكترونية تلقائياً.',
        impact: 'تقليص معدل زمن الموافقة والاعتماد لـ 4 ساعات فقط مع إمكانية التتبع والتدقيق الفوري وبشكل دائم.'
      },
      caseStudy: {
        methodologies: [
          'تحليل النظم ونمذجة إجراءات الأعمال (BPMN 2.0)',
          'جمع المتطلبات التقنية ورسم خريطة أصحاب المصلحة',
          'صياغة سيناريوهات اختبارات قبول المستخدم (UAT Testing)',
          'هيكلة صلاحيات الوصول والتحكم الأمني بالأدوار والمسؤوليات'
        ],
        tools: [
          'محرك مسارات العمل لنظام ERP المؤسسي',
          'برامج نمذجة وتخطيط إجراءات العمل BPMN 2.0',
          'سجلات تتبع اختبارات القبول UAT وحالات الاختبار',
          'مصفوفات التحكم بالوصول المستند على الأدوار (RBAC)'
        ],
        formulas: [
          'مصفوفة توجيه الموافقات المتعددة (مسارات ديناميكية حسب قيمة الشراء: أقل من 1000، من 1000 إلى 10000، وأعلى)',
          'منطق التنبيهات المؤتمتة وحلقات التصعيد (إرسال إشعار للمستوى الأعلى بعد 24 ساعة من عدم الاستجابة)',
          'بروتوكولات التحقق الرقمي المشفر للتواقيع',
          'مصفوفات ربط وتدقيق مراكز التكلفة المحاسبية مع رموز الأقسام'
        ],
        training: [
          'ورش تدريبية تفاعلية حية لأكثر من 120 موظفاً بمختلف الأقسام للتدريب على المسار الجديد',
          'تصميم أدلة سريعة بصيغة PDF توضح طريقة تقديم الطلب وكيفية المراجعة للمسؤولين',
          'بناء نظام دعم فني داخلي للتعامل الفوري مع أي صعوبات تقنية تواجه المستخدمين أثناء الإطلاق'
        ],
        detailedProcess: [
          '1. يرفع المستخدم الطلب من خلال واجهة النظام، ويقوم النظام بالتحقق التلقائي من الحقول بناء على صلاحياته.',
          '2. يقوم محرك نظام ERP بفحص مركز التكلفة ويوجه الطلب فوراً للمسؤول الإداري والمالي المناسب للموافقة.',
          '3. في حال تأخر الاعتماد، يتولى النظام تصعيد الطلب للمستوى الأعلى بشكل مبرمج التزاماً باتفاقيات مستوى الخدمة (SLA).',
          '4. بعد التوقيع الرقمي النهائي، يصدر النظام رمز رقم أمر الشراء تلقائياً ويزامن المعاملة المالية مع المستودع.'
        ]
      }
    },
    {
      id: 'digitization-2',
      category: 'digitization',
      title: 'حملة ترحيل وتطهير قواعد بيانات عملاء نظام ERP',
      summary: {
        problem: 'واجه مشروع الانتقال لنظام ERP الجديد تهديداً حقيقياً لوجود 45,000 سجل عميل قديم مليء بالبيانات المكررة، غير المكتملة وعشوائية التنسيق.',
        solution: 'تنفيذ استراتيجية شاملة لتطهير وتأمين جودة البيانات، تصميم جداول النمذجة ومطابقة الحقول وإرساء قيود السلامة داخل النظام الجديد.',
        impact: 'ترحيل نظيف لجميع الحسابات والعملاء بنسبة 100% قبل الموعد المحدد وضمان استمرارية الخدمات دون أي توقف للمبيعات.'
      },
      caseStudy: {
        methodologies: [
          'تصميم خطوط ترحيل واستخلاص البيانات (ETL)',
          'تنسيق ومطابقة حقول قواعد البيانات القديمة والحديثة',
          'منطق فحص المطابقات التقريبية واستبعاد المكرر (Fuzzy Match)',
          'حوكمة البيانات وتطبيق معايير مراقبة الجودة الصارمة'
        ],
        tools: [
          'منصة ترحيل وتجهيز بيانات ERP الجديد',
          'محرر Power Query المتقدم لصياغة الأكواد',
          'محركات معالجة النصوص والتعبيرات القياسية Regex',
          'برامج فحص تكامل وتوصيف جداول قواعد البيانات'
        ],
        formulas: [
          'خوارزميات Levenshtein Distance للكشف عن الأسماء المتشابهة والمكررة بدقة',
          'تعبيرات نمطية Regex متطورة لتوحيد وتنسيق أرقام الهواتف والبريد الإلكتروني عالمياً',
          'مصفوفات ترحيل وهيكلة البيانات للحقول المختلفة لتطابق النظام المستهدف',
          'برمجيات SQL للتحقق من سلامة المفاتيح الأساسية والروابط الخارجية لقاعدة البيانات'
        ],
        training: [
          'تدريب الموظفين والمدخلين على بروتوكولات الحفاظ على نظافة وجودة قواعد البيانات',
          'إعداد دليل مستخدم إرشادي يوضح شروط وقواعد التحقق الإجباري المدمجة بالنظام الجديد',
          'تنصيب لوحة تحكم مخصصة للمشرفين لمراقبة جودة المدخلات ومنع أي تشوه مستقبلي'
        ],
        detailedProcess: [
          '1. تصدير كافة البيانات القديمة لبيئة عمل افتراضية معزولة لدراسة وتحليل فجوات الجودة والأخطاء بدقة.',
          '2. تشغيل سيناريوهات معالجة النصوص الآلية لتصحيح وتنسيق أرقام الهواتف، العناوين وصياغة رسائل البريد.',
          '3. تشغيل خوارزميات المطابقة الذكية للتعرف على الحسابات المكررة والعملاء المشتركين ودمجهم مع الحفاظ على تاريخ الطلبات.',
          '4. ترحيل البيانات وتأمينها بنجاح داخل خوادم الـ ERP الجديد مع إطلاق قيود الفحص والتحقق لمنع تراكم المدخلات الخاطئة مجدداً.'
        ]
      }
    }
  ]
};

export const translations: TranslationDictionary = {
  en: {
    brandName: 'Raghad Alqarni',
    navProjects: 'Portfolio',
    navAbout: 'About',
    navAI: "Raghad's AI",
    navContact: 'Contact',

    heroBadge: 'Systems Analyst & Digital Solutions Specialist',
    heroTitle: 'Transforming Operational Challenges into Automated Digital Solutions',
    heroSub: 'Bridging the gap between technical complexity and optimal business workflows. Graduate of Computer Science specializing in Systems Analysis, RPA, and Enterprise Digitization.',
    viewProjectsBtn: 'Explore Portfolio Case Studies',
    aboutRaghadHeading: 'Executive Summary & Philosophy',
    aboutRaghadText: 'I specialize in identifying operational friction and designing programmatic remedies that drive enterprise efficiency. Leveraging modern Robotic Process Automation (RPA), sophisticated analytical architectures in Excel, and customized enterprise resource software configurations, I bridge the divide between legacy procedures and fluid digital operations. My goal is to build secure, modular, and audit-ready digital solutions that save valuable resources, secure data integrity, and enable corporate teams to focus on high-impact strategic initiatives.',

    catRpa: 'Robotic Process Automation (RPA)',
    catExcel: 'Smart Excel Templates & Analytics',
    catDigitization: 'Digitization & ERP System Features',
    projectSectionTitle: 'Dynamic Project Portfolio',
    projectSectionSubtitle: 'Select a domain to review executive summaries and launch deep-dive case studies.',

    labelProblem: 'Problem Context',
    labelSolution: 'Programmatic Solution',
    labelImpact: 'Verifiable Business Impact',
    btnViewCaseStudy: 'View Full Case Study',

    caseStudyTitle: 'EXECUTIVE CASE STUDY & METHODOLOGIES',
    methodologyHeading: 'Methodologies & Frameworks',
    technicalToolsHeading: 'Technical Stack & Tools Used',
    formulasWorkflowHeading: 'Formulas, Workflows & Architecture',
    userTrainingHeading: 'User Acceptance & Handover Training',
    processHeading: 'Technical Implementation Process Flow',
    btnClose: 'Return to Portfolio',

    aiTitle: "Ask Raghad's AI Assistant",
    aiPlaceholder: 'Inquire about skills, projects, or background...',
    aiWelcome: "Welcome. I am Raghad's executive digital assistant, powered by Gemini. You can ask me about her technical skills in RPA, Advanced Excel, Systems Analysis, or her career aspirations.",
    aiError: 'An error occurred while communicating with the server. Please ensure your backend is active.',
    aiSend: 'Send Enquiry',
    aiClose: 'Close',
    aiSuggestedPrompt1: 'What are Raghad\'s core RPA technical tools?',
    aiSuggestedPrompt2: 'How did she optimize corporate Excel workflows?',
    aiSuggestedPrompt3: 'Explain her systems analysis methodology.',

    contactHeading: 'Initiate Digital Transformation',
    contactSubtitle: 'Available for consultations regarding Robotic Process Automation, digital workflows, and systems engineering.',
    downloadCvBtn: 'Download Executive CV (PDF)',
    emailLabel: 'Professional Inbox',
    linkedinLabel: 'LinkedIn Network',
    specializationLabel: 'Primary Focus Areas',
    rightsReserved: 'All Rights Reserved.',
    executiveFooterNote: 'Designed and built to premium executive standards. Copyright 2026.'
  },
  ar: {
    brandName: 'رغد القرني',
    navProjects: 'المشاريع والحلول',
    navAbout: 'من أنا',
    navAI: 'مستشار رغد الذكي',
    navContact: 'اتصل بي',

    heroBadge: 'أخصائية تحليل النظم والحلول الرقمية والأتمتة',
    heroTitle: 'تحويل التحديات التشغيلية إلى حلول رقمية مؤتمتة ذكية',
    heroSub: 'سد الفجوة بين الأنظمة التقنية وسير أعمال المؤسسات. خريجة علوم الحاسب بمهارات متخصصة في تحليل النظم، هندسة العمليات الروبوتية (RPA) والتحول الرقمي للمؤسسات.',
    viewProjectsBtn: 'تصفح دراسات الحالة التفصيلية',
    aboutRaghadHeading: 'الملخص التنفيذي وفلسفة العمل',
    aboutRaghadText: 'متخصصة في تحديد مواضع الهدر التشغيلي وتصميم وبناء الحلول البرمجية الفعالة التي تدفع بعجلة الكفاءة داخل المؤسسات. من خلال توظيف أحدث أدوات أتمتة العمليات الروبوتية (RPA)، الهياكل التحليلية المتقدمة في إكسل، وتخصيص مسارات عمل أنظمة إدارة موارد المؤسسات، أسعى لإلغاء العمليات اليدوية وتحرير طاقات الفرق التشغيلية. أعمل على تقديم حلول فنية آمنة، معيارية، ومستعدة للتدقيق المالي والتنظيمي، لتمكين قادة الأعمال من التركيز على المبادرات الاستراتيجية ذات الأثر العالي.',

    catRpa: 'أتمتة العمليات الروبوتية (RPA)',
    catExcel: 'نماذج إكسل الذكية وتحليل البيانات',
    catDigitization: 'الرقمنة وخصائص أنظمة الـ ERP',
    projectSectionTitle: 'المعرض الديناميكي للمشاريع والحلول',
    projectSectionSubtitle: 'اختر مجالاً للاطلاع على الملخصات التنفيذية وإطلاق دراسات الحالة التفصيلية.',

    labelProblem: 'التحدي والسياق التشغيلي',
    labelSolution: 'الحل البرمجي المطبق',
    labelImpact: 'الأثر التجاري القابل للقياس',
    btnViewCaseStudy: 'عرض دراسة الحالة كاملة',

    caseStudyTitle: 'دراسة الحالة التنفيذية والمنهجيات المتبعة',
    methodologyHeading: 'المنهجيات وأطر العمل',
    technicalToolsHeading: 'الأدوات والتقنيات المستخدمة',
    formulasWorkflowHeading: 'المعادلات، مسارات العمل والمعمارية',
    userTrainingHeading: 'اختبارات القبول وتسليم التدريب',
    processHeading: 'الخطوات التشغيلية لعملية التنفيذ الفني',
    btnClose: 'العودة لمعرض المشاريع',

    aiTitle: 'اسأل مستشار رغد الذكي',
    aiPlaceholder: 'استفسر عن المهارات، المشاريع، أو السيرة المهنية...',
    aiWelcome: 'أهلاً بك. أنا المستشار الرقمي لرغد، مدعوم بتقنيات الذكاء الاصطناعي من Gemini. يمكنك سؤالي عن مهاراتها الفنية في أتمتة RPA، إكسل المتقدم، تحليل النظم، أو طموحاتها المهنية والعملية.',
    aiError: 'حدث خطأ أثناء الاتصال بالخادم الداخلي. يرجى التحقق من تفعيل خادم التطبيق.',
    aiSend: 'إرسال الاستفسار',
    aiClose: 'إغلاق',
    aiSuggestedPrompt1: 'ما هي أدوات الأتمتة الـ RPA الرئيسية التي تتقنها رغد؟',
    aiSuggestedPrompt2: 'كيف قامت بتحسين وتسهيل سير العمل المالي عبر إكسل؟',
    aiSuggestedPrompt3: 'اشرح لي منهجية تحليل النظم المتبعة لديها.',

    contactHeading: 'لنبدأ التحول الرقمي اليوم',
    contactSubtitle: 'متاحة للاستشارات والمشاريع المتعلقة بأتمتة العمليات الروبوتية، رقمنة سلاسل الأعمال وتحليل النظم والبرمجيات.',
    downloadCvBtn: 'تحميل السيرة الذاتية الفاخرة (PDF)',
    emailLabel: 'البريد الإلكتروني المهني',
    linkedinLabel: 'شبكة لينكد إن',
    specializationLabel: 'مجالات التركيز الرئيسية',
    rightsReserved: 'جميع الحقوق محفوظة.',
    executiveFooterNote: 'صمم ونفذ وفقاً لأعلى معايير الجودة والاحترافية والرفاهية التنفيذية. حقوق الطبع ٢٠٢٦.'
  }
};
