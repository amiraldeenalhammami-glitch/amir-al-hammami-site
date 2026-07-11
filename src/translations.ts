export interface TranslationType {
  navAbout: string;
  navTimeline: string;
  navServices: string;
  navAcademy: string;
  navExpo: string;
  navContact: string;
  navFeedback: string;
  langSwitch: string;

  // Hero Section
  heroName: string;
  heroTitle: string;
  heroSub1: string;
  heroSub2: string;
  heroSub3: string;
  heroSub4: string;
  heroDescription: string;
  btnWhatsApp: string;
  btnAboutMe: string;
  btnOurWork: string;
  btnFeedback: string;

  // About Section
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  aboutP4: string;

  // Counters
  counterStudents: string;
  counterStudentsSub: string;
  counterSince: string;
  counterSinceSub: string;
  counterYears: string;
  counterYearsSub: string;
  counterProjects: string;
  counterProjectsSub: string;
  counterHours: string;
  counterHoursSub: string;

  // Experience Timeline
  timelineTitle: string;
  timelineSubtitle: string;
  expArchTitle: string;
  expArchDesc: string;
  expTrainTitle: string;
  expTrainDesc: string;
  expExhibDesignTitle: string;
  expExhibDesignDesc: string;
  expExhibExecTitle: string;
  expExhibExecDesc: string;
  expBimTitle: string;
  expBimDesc: string;
  expInteriorTitle: string;
  expInteriorDesc: string;
  expProjectMgmtTitle: string;
  expProjectMgmtDesc: string;
  expConsultingTitle: string;
  expConsultingDesc: string;
  expPlanningTitle: string;
  expPlanningDesc: string;
  expSyndicateTrainerTitle: string;
  expSyndicateTrainerDesc: string;
  expCivilizationTrainerTitle: string;
  expCivilizationTrainerDesc: string;
  expKollBenahmTitle: string;
  expKollBenahmDesc: string;
  expMastersTitle: string;
  expMastersDesc: string;
  expInfoEngTitle: string;
  expInfoEngDesc: string;

  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  srvArchDesignTitle: string;
  srvArchDesignDesc: string;
  srvInteriorDesignTitle: string;
  srvInteriorDesignDesc: string;
  srvExhibDesignTitle: string;
  srvExhibDesignDesc: string;
  srvExhibExecTitle: string;
  srvExhibExecDesc: string;
  srvTrainingTitle: string;
  srvTrainingDesc: string;
  srvBimTrainingTitle: string;
  srvBimTrainingDesc: string;
  srvConsultingTitle: string;
  srvConsultingDesc: string;

  // Academy & Expo Sections
  academySectionTitle: string;
  academyTitle: string;
  academyDesc: string;
  btnVisitAcademy: string;
  expoTitle: string;
  expoDesc: string;
  btnVisitExpo: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactWhatsAppLabel: string;
  contactFacebookLabel: string;
  contactInstagramLabel: string;
  contactAcademyLabel: string;
  contactExpoLabel: string;
  contactTelegramLabel: string;
  contactYoutubeLabel: string;
  contactFeedbackLabel: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormMsg: string;
  contactFormSubmit: string;
  contactFormSuccess: string;

  // Footer
  footerCopyright: string;
}

export const translations: Record<"ar" | "en", TranslationType> = {
  ar: {
    navAbout: "من أنا؟",
    navTimeline: "مسيرتي المهنية",
    navServices: "الخدمات",
    navAcademy: "أكاديمية أبعاد",
    navExpo: "أبعاد إكسبو",
    navContact: "تواصل معي",
    navFeedback: "آراء الطلاب",
    langSwitch: "English",

    // Hero Section
    heroName: "أمير الدين الحمامي",
    heroTitle: "مهندس معماري ومستشار تدريب وتصميم معارض",
    heroSub1: "Architect",
    heroSub2: "Engineering Software Trainer",
    heroSub3: "Founder of Abaad Architectural Academy",
    heroSub4: "Founder of Abaad Expo Syria",
    heroDescription: "مهندس معماري، ومدرب برامج هندسية منذ عام 2014، ومؤسس أكاديمية أبعاد الهندسية المعمارية، ومؤسس شركة أبعاد إكسبو سوريا لتصميم وتنفيذ المعارض، بخبرة طويلة في التعليم الهندسي، وإدارة المشاريع، وتصميم المعارض، وتطوير المهارات المهنية.",
    btnWhatsApp: "تواصل عبر واتساب",
    btnAboutMe: "تعرف عليّ",
    btnOurWork: "أعمالنا والمنصات",
    btnFeedback: "آراء الطلاب",

    // About Section
    aboutTitle: "من أنا؟",
    aboutP1: "أنا أمير الدين الحمامي، مهندس معماري ومدرب متخصص في البرامج الهندسية منذ عام 2014.",
    aboutP2: "مؤسس أكاديمية أبعاد الهندسية المعمارية أونلاين، والتي قامت بتدريب أكثر من 4650 طالب من مختلف المحافظات السورية، بالإضافة إلى متدربين من مختلف الدول العربية.",
    aboutP3: "كما أنني مؤسس شركة أبعاد إكسبو سوريا المتخصصة في تصميم وتنفيذ المعارض، وأسعى إلى تقديم حلول احترافية تجمع بين الإبداع الهندسي والخبرة العملية.",
    aboutP4: "المؤهلات الأكاديمية: خريج كلية الهندسة المعمارية بجامعة دمشق عام 2019، وماجستير أكاديمي قسم التخطيط والبيئة (مرحلة إعداد الرسالة) منذ عام 2024، وطالب في كلية الهندسة المعلوماتية بالجامعة الافتراضية السورية، مما ساهم في تطوير رؤية متكاملة تجمع بين الإدارة، والتخطيط، والهندسة، والتعليم.",

    // Counters
    counterStudents: "+4650",
    counterStudentsSub: "طالب تم تدريبه",
    counterSince: "2014",
    counterSinceSub: "انطلاق مسيرة التدريب",
    counterYears: "+11",
    counterYearsSub: "سنة من الخبرة والإبداع",
    counterProjects: "عشرات",
    counterProjectsSub: "المشاريع الهندسية والمعارض المنفذة",
    counterHours: "آلاف",
    counterHoursSub: "ساعات التدريب العملي والمحاضرات",

    // Experience Timeline
    timelineTitle: "المسيرة المهنية والخبرات",
    timelineSubtitle: "محطات تراكمت فيها الخبرة العلمية والعملية لصناعة الفارق في مجالات متعددة",
    expArchTitle: "الهندسة المعمارية",
    expArchDesc: "تصميم وإخراج الفراغات المعمارية برؤى هندسية حديثة تحقق التوازن الأمثل بين الجمالية والوظيفة والاستدامة.",
    expTrainTitle: "التدريب الهندسي",
    expTrainDesc: "شغف بمشاركة المعرفة منذ 2014، حيث قمت بتدريب آلاف المهندسين والطلاب لتمكينهم من أدواتهم الاحترافية.",
    expExhibDesignTitle: "تصميم المعارض",
    expExhibDesignDesc: "خلق هويات بصرية مدهشة وفراغات تفاعلية فريدة في كبرى المعارض والفعاليات التجارية.",
    expExhibExecTitle: "تنفيذ المعارض",
    expExhibExecDesc: "إشراف ميداني وتنفيذي دقيق لضمان تحويل المخططات الهندسية إلى واقع ملموس وبأعلى معايير الجودة.",
    expBimTitle: "نمذجة معلومات البناء (BIM)",
    expBimDesc: "تطبيق وتبني أحدث منهجيات العمل الهندسي المتكامل لتقليل الأخطاء وتحسين كفاءة إدارة المشاريع.",
    expInteriorTitle: "التصميم الداخلي",
    expInteriorDesc: "الاهتمام بأدق التفاصيل والارتكاز على توزيع الإنارة واختيار المواد الفاخرة لخلق بيئات مريحة وعصرية.",
    expProjectMgmtTitle: "إدارة المشاريع",
    expProjectMgmtDesc: "تنسيق وإدارة الجداول الزمنية والموارد والميزانيات للمشاريع الهندسية والمعارض باحترافية تامة.",
    expConsultingTitle: "الاستشارات الهندسية",
    expConsultingDesc: "تقديم نصائح وحلول هندسية واستراتيجية متكاملة للمؤسسات والأفراد لتجاوز التحديات التصميمية والتنفيذية.",
    expPlanningTitle: "التخطيط والبيئة",
    expPlanningDesc: "تطبيق المعارف الاقتصادية والتخطيطية (جامعة دمشق) لدراسة الأثر البيئي والجدوى الاقتصادية للمشاريع الكبرى.",
    expSyndicateTrainerTitle: "مدرب في نقابة المهندسين بدمشق",
    expSyndicateTrainerDesc: "تقديم ورش عمل ودورات تخصصية متقدمة لتأهيل وتدريب المهندسين والطلاب على أحدث الممارسات والبرمجيات الهندسية.",
    expCivilizationTrainerTitle: "مدرب في مركز الحضارة بدمشق",
    expCivilizationTrainerDesc: "قيادة برامج تدريبية ومحاضرات مكثفة في مجالات التصميم المعماري والبرمجيات الهندسية المتقدمة.",
    expKollBenahmTitle: "مؤسس سلسلة مطاعم كلّ بنهم بدمشق",
    expKollBenahmDesc: "مؤسس سلسلة مطاعم \"كلّ بنهم\" الشهيرة في دمشق (تم إغلاق السلسلة بسبب أزمة كورونا)، مما عزز مهارات القيادة، التخطيط الاستراتيجي، وإدارة الأصول والفرق.",
    expMastersTitle: "ماجستير أكاديمي قسم التخطيط والبيئة (مرحلة إعداد الرسالة)",
    expMastersDesc: "ماجستير أكاديمي قسم التخطيط والبيئة منذ عام 2024 (بمرحلة إعداد الرسالة)، لتعزيز القدرات الإدارية والتخطيطية وربطها بالبيئة والتنفيذ الهندسي.",
    expInfoEngTitle: "دراسة الهندسة المعلوماتية",
    expInfoEngDesc: "طالب في كلية الهندسة المعلوماتية بالجامعة الافتراضية السورية، لدمج تكنولوجيا المعلومات والحلول البرمجية الذكية بالمنظومات الهندسية.",

    // Services
    servicesTitle: "الخدمات الاحترافية",
    servicesSubtitle: "خدمات هندسية وتدريبية متكاملة مصممة بأعلى معايير الدقة والابتكار",
    srvArchDesignTitle: "التصميم المعماري",
    srvArchDesignDesc: "تقديم حلول ومخططات معمارية مبتكرة ومتكاملة للمباني السكنية والتجارية.",
    srvInteriorDesignTitle: "التصميم الداخلي",
    srvInteriorDesignDesc: "تصميم فراغات داخلية راقية تلبي تطلعات العميل وتجسد الفخامة بأسلوب عصري.",
    srvExhibDesignTitle: "تصميم أجنحة المعارض",
    srvExhibDesignDesc: "ابتكار هويات بصرية ثلاثية الأبعاد لأجنحة المعارض بطرق تبرز قوة العلامات التجارية.",
    srvExhibExecTitle: "تنفيذ وتجهيز أجنحة المعارض",
    srvExhibExecDesc: "تصنيع وتركيب أجنحة المعارض بأحدث الخامات والمعدات وبإشراف هندسي صارم.",
    srvTrainingTitle: "تدريب البرامج الهندسية",
    srvTrainingDesc: "كورس ومناهج تدريبية مكثفة واحترافية للطلاب والمهندسين لضمان التميز في سوق العمل.",
    srvBimTrainingTitle: "التدريب على منهجية BIM",
    srvBimTrainingDesc: "تأهيل المهندسين لاستخدام برامج الـ BIM (مثل Revit) وربطها بالإنتاجية الفعلية.",
    srvConsultingTitle: "الاستشارات الهندسية والتقنية",
    srvConsultingDesc: "مراجعة التصاميم وتقديم التوصيات التقنية والفنية لتحسين كفاءة وجودة المشاريع.",

    // Academy & Expo Sections
    academySectionTitle: "معرض الأعمال",
    academyTitle: "أكاديمية أبعاد الهندسية المعمارية",
    academyDesc: "الأكاديمية الهندسية الرائدة أونلاين، المتخصصة في تقديم برامج تدريبية تخصصية متقدمة في البرامج والمفاهيم المعمارية والإنشائية، وتأهيل الطلاب والمهندسين من سوريا ومختلف أرجاء الوطن العربي لسوق العمل بجدارة ومهارة عالية.",
    btnVisitAcademy: "زيارة الأكاديمية",
    expoTitle: "أبعاد إكسبو سوريا (Abaad Expo Syria)",
    expoDesc: "الشركة الرائدة والمتخصصة في مجالات تصميم وتنفيذ وتجهيز المعارض والمؤتمرات الدولية والمحلية في سوريا، بتقديم تصاميم أجنحة مذهلة وحلول تنفيذية متكاملة تضمن تجربة عرض استثنائية وأداءً يشهد له كبار العارضين.",
    btnVisitExpo: "زيارة الشركة والدخول للموقع",

    // Contact
    contactTitle: "تواصل معي مباشرة",
    contactSubtitle: "هل لديك مشروع، رغبة في التدريب، أو استشارة؟ دعنا نتعاون معاً لتحويل رؤيتك إلى واقع مبهر.",
    contactWhatsAppLabel: "راسلني مباشرة عبر واتساب",
    contactFacebookLabel: "تابع الحساب الشخصي على فيسبوك",
    contactInstagramLabel: "تابعني عبر انستغرام",
    contactAcademyLabel: "موقع أكاديمية أبعاد الرسمي",
    contactExpoLabel: "موقع أبعاد إكسبو سوريا الرسمي",
    contactTelegramLabel: "تابع قناة التلغرام الرسمية",
    contactYoutubeLabel: "تابع القناة الرسمية على يوتيوب",
    contactFeedbackLabel: "آراء الطلاب (Feedback)",
    contactFormName: "الاسم الكريم",
    contactFormEmail: "البريد الإلكتروني",
    contactFormMsg: "تفاصيل رسالتك أو استشارتك",
    contactFormSubmit: "إرسال الرسالة",
    contactFormSuccess: "شكراً لتواصلك! سيتم الرد عليك في أقرب وقت ممكن.",

    // Footer
    footerCopyright: "جميع الحقوق محفوظة © المهندس المعماري أمير الدين الحمامي"
  },
  en: {
    navAbout: "About Me",
    navTimeline: "Career Timeline",
    navServices: "Services",
    navAcademy: "Abaad Academy",
    navExpo: "Abaad Expo",
    navContact: "Contact",
    navFeedback: "Student Feedback",
    langSwitch: "العربية",

    // Hero Section
    heroName: "Amir Al-Deen Al Hammami",
    heroTitle: "Architect, Engineering Software Trainer & Exhibition Consultant",
    heroSub1: "Architect",
    heroSub2: "Engineering Software Trainer",
    heroSub3: "Founder of Abaad Architectural Academy",
    heroSub4: "Founder of Abaad Expo Syria",
    heroDescription: "An architect, specialized engineering software trainer since 2014, founder of Abaad Architectural Academy, and founder of Abaad Expo Syria for exhibition design and execution, with a rich track record in engineering education, project management, exhibition architecture, and professional skills development.",
    btnWhatsApp: "Chat via WhatsApp",
    btnAboutMe: "Discover My Story",
    btnOurWork: "Our Platforms & Work",
    btnFeedback: "Student Feedback",

    // About Section
    aboutTitle: "Who Am I?",
    aboutP1: "I am Amir Al-Deen Al Hammami, a professional architect and engineering software trainer with a passionate career starting in 2014.",
    aboutP2: "I am the founder of Abaad Architectural Academy Online, which has successfully trained over 4,650 students across Syrian cities and multiple Arab countries, bridging academic knowledge with practical mastery.",
    aboutP3: "I am also the founder of Abaad Expo Syria, a specialized firm in designing and executing exhibition pavilions, focused on delivering world-class creative engineering solutions coupled with executive precision.",
    aboutP4: "Academic Qualifications: Graduate of the Faculty of Architectural Engineering, Damascus University (2019); pursuing an Academic Master's degree in the Department of Planning & Environment since 2024 (thesis stage); and a student of Information Technology Engineering at the Syrian Virtual University (SVU), contributing to developing an integrated vision combining management, planning, engineering, and education.",

    // Counters
    counterStudents: "+4650",
    counterStudentsSub: "Students Trained",
    counterSince: "2014",
    counterSinceSub: "Educational Journey Started",
    counterYears: "+11",
    counterYearsSub: "Years of Professional Expertise",
    counterProjects: "Tens",
    counterProjectsSub: "Executed Architectural & Expo Projects",
    counterHours: "Thousands",
    counterHoursSub: "Hours of Practical Lectures & Training",

    // Experience Timeline
    timelineTitle: "Career & Expertise",
    timelineSubtitle: "Milestones of architectural design, leadership, and knowledge sharing",
    expArchTitle: "Architectural Design",
    expArchDesc: "Designing and elevating architectural spaces with contemporary visions that maximize the fine balance between aesthetics, utility, and sustainability.",
    expTrainTitle: "Engineering Training",
    expTrainDesc: "A lifelong passion for engineering software instruction since 2014, coaching thousands of engineers and students to master modern tools.",
    expExhibDesignTitle: "Exhibition Design",
    expExhibDesignDesc: "Crafting remarkable interactive spaces and outstanding 3D identities for prestigious trade exhibitions and public events.",
    expExhibExecTitle: "Exhibition Execution",
    expExhibExecDesc: "On-site supervision and fabrication, ensuring that blueprints and complex architectures are brought to life perfectly.",
    expBimTitle: "BIM Methodology",
    expBimDesc: "Applying state-of-the-art building information modeling (Revit, Navisworks) to optimize schedules, costs, and collaborative processes.",
    expInteriorTitle: "Interior Design",
    expInteriorDesc: "A relentless focus on spatial detailing, fine material selections, and creative lighting layouts to construct immersive luxury environments.",
    expProjectMgmtTitle: "Project Management",
    expProjectMgmtDesc: "Flawless coordination of timelines, human resources, and budgets for high-profile architectural projects and expo construction.",
    expConsultingTitle: "Engineering Consulting",
    expConsultingDesc: "Delivering structural, technical, and strategic advisory services to individuals and developers to surpass creative obstacles.",
    expPlanningTitle: "Planning & Environment",
    expPlanningDesc: "Harnessing an economics background (Damascus University) to analyze project viability, scheduling structures, and ecological impact.",
    expSyndicateTrainerTitle: "Trainer at Damascus Engineers Syndicate",
    expSyndicateTrainerDesc: "Delivering advanced specialized workshops and training programs to prepare engineers and students for the professional industry.",
    expCivilizationTrainerTitle: "Trainer at Damascus Civilization Center",
    expCivilizationTrainerDesc: "Leading training programs and intensive courses in architectural design and advanced engineering software.",
    expKollBenahmTitle: "Founder of Koll Benahm Restaurants Chain",
    expKollBenahmDesc: "Founded and managed the renowned \"Koll Benahm\" restaurant chain in Damascus (closed due to the COVID-19 crisis), strengthening executive leadership, business development, and team coordination.",
    expMastersTitle: "Academic Master's - Planning & Environment (Thesis Stage)",
    expMastersDesc: "Academic Master's in the Department of Planning & Environment since 2024 (thesis stage), focusing on advanced research, spatial planning, and sustainable environmental systems.",
    expInfoEngTitle: "Information Technology Engineering",
    expInfoEngDesc: "Student of IT Engineering at the Syrian Virtual University (SVU), integrating software engineering with advanced spatial and structural systems.",

    // Services
    servicesTitle: "Professional Services",
    servicesSubtitle: "Tailored engineering, training, and event execution solutions delivered to world-class standards",
    srvArchDesignTitle: "Architectural Design",
    srvArchDesignDesc: "High-end blueprints and spatial design solutions for outstanding residential, corporate, and public projects.",
    srvInteriorDesignTitle: "Interior Architecture",
    srvInteriorDesignDesc: "Luxurious spatial details, bespoke furnishing layouts, and lightning plans that redefine modern premium spaces.",
    srvExhibDesignTitle: "Exhibition Pavilion Design",
    srvExhibDesignDesc: "Cutting-edge 3D branding and spatial design concepts that highlight brand presence in prestigious expos.",
    srvExhibExecTitle: "Exhibition Pavilions Execution",
    srvExhibExecDesc: "Impeccable structural manufacturing, installation, and engineering supervision of complex pavilion setups.",
    srvTrainingTitle: "Engineering Software Training",
    srvTrainingDesc: "Intensive courses with comprehensive curricula covering CAD/BIM tools for professional readiness.",
    srvBimTrainingTitle: "BIM Training (Revit & Beyond)",
    srvBimTrainingDesc: "Equipping architectural practices and individuals with robust BIM standards to enhance collaborative productivity.",
    srvConsultingTitle: "Technical & Design Consulting",
    srvConsultingDesc: "In-depth plan reviews, material advising, and technical consultations to streamline and upgrade engineering workflows.",

    // Academy & Expo Sections
    academySectionTitle: "Portfolio & Platforms",
    academyTitle: "Abaad Architectural Academy",
    academyDesc: "The premier online engineering and architectural academy. We provide advanced specialized instruction in professional CAD/BIM programs and architectural theory, preparing Syrian and Arab students to excel in top-tier global workspaces.",
    btnVisitAcademy: "Visit the Academy Website",
    expoTitle: "Abaad Expo Syria",
    expoDesc: "A premier firm in Syria specializing in the complete design, fabrication, and execution of bespoke exhibition pavilions and state conferences. We provide breathtaking temporary structures and logistics that guarantee massive visibility and commercial success.",
    btnVisitExpo: "Visit Abaad Expo Website",

    // Contact
    contactTitle: "Get In Touch Directly",
    contactSubtitle: "Have an ambitious project, a training goal, or require premium consulting? Let's connect and design the future.",
    contactWhatsAppLabel: "Chat on WhatsApp directly",
    contactFacebookLabel: "Follow my personal Facebook account",
    contactInstagramLabel: "Follow me on Instagram",
    contactAcademyLabel: "Abaad Academy Official Website",
    contactExpoLabel: "Abaad Expo Syria Official Website",
    contactTelegramLabel: "Follow my Telegram Channel",
    contactYoutubeLabel: "Follow our Official YouTube Channel",
    contactFeedbackLabel: "Student Feedback (Reviews)",
    contactFormName: "Your Full Name",
    contactFormEmail: "Your Email Address",
    contactFormMsg: "Your message or project scope",
    contactFormSubmit: "Send Message",
    contactFormSuccess: "Thank you for reaching out! I will respond to your message as soon as possible.",

    // Footer
    footerCopyright: "All rights reserved © Architect Amir Al-Deen Al Hammami"
  }
};
