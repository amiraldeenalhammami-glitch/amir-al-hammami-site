import { motion } from "motion/react";
import { ArrowUpRight, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import { TranslationType } from "../translations";

interface AcademyExpoProps {
  currentLang: "ar" | "en";
  t: TranslationType;
}

export default function AcademyExpo({ currentLang, t }: AcademyExpoProps) {
  const isRtl = currentLang === "ar";

  // Transformed Google Drive direct image links
  const academyLogoUrl = "https://lh3.googleusercontent.com/d/1GrIhlLLoncIqfd5jb63kN3PFWpzAzh8e";
  const expoImageUrl = "https://lh3.googleusercontent.com/d/1BzHpOOlCJ56lqidzek6gC878V6iZWMiY";

  const academyHighlights = currentLang === "ar" ? [
    "تدريب أكثر من 3800 طالب وطالبة أونلاين.",
    "تغطية كاملة لجميع المحافظات السورية والدول العربية.",
    "مناهج تخصصية متطورة في برامج العمارة والـ BIM.",
    "تمكين الخريجين للالتحاق الفوري بسوق العمل الاحترافي."
  ] : [
    "Over 3,800 students successfully trained online.",
    "Comprehensive reach across Syria and multiple Arab countries.",
    "Advanced specialized curricula in architecture & BIM standard workflows.",
    "Empowering engineering graduates with job-ready skills."
  ];

  const expoHighlights = currentLang === "ar" ? [
    "تصميم وتنفيذ أجنحة معارض فريدة بمواصفات عالمية.",
    "تغطية كبرى المعارض والملتقيات الاقتصادية في سوريا.",
    "حلول هندسية متكاملة تشمل الإشراف والتنفيذ والتصنيع.",
    "استخدام أحدث الخامات والمعدات والتقنيات المعاصرة."
  ] : [
    "Designing & fabricating world-class bespoke exhibition pavilions.",
    "Key engineering partner for high-level trade expos in Syria.",
    "Turnkey engineering execution from drafts to on-site assembly.",
    "Utilizing premium contemporary materials and lighting standards."
  ];

  return (
    <section id="entities" className="py-24 relative bg-transparent border-t border-white/5 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-orange/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
              {currentLang === "ar" ? "المنصات والأعمال" : "The Core Portfolios"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              {t.academySectionTitle}
            </h2>
            <div className="h-1 w-20 bg-brand-orange rounded mx-auto mt-2" />
          </div>

          {/* Quick-Scroll Navigation Buttons below title */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              id="quick-scroll-academy"
              href="#academy"
              className="flex items-center gap-x-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-brand-orange/30 hover:border-brand-orange bg-brand-orange/5 hover:bg-brand-orange/20 transition-all duration-300"
            >
              <GraduationCap className="w-4 h-4 text-brand-orange" />
              <span>{currentLang === "ar" ? "أكاديمية أبعاد الهندسية" : "Abaad Architectural Academy"}</span>
            </a>
            <a
              id="quick-scroll-expo"
              href="#expo"
              className="flex items-center gap-x-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-brand-orange/30 hover:border-brand-orange bg-brand-orange/5 hover:bg-brand-orange/20 transition-all duration-300"
            >
              <Building2 className="w-4 h-4 text-brand-orange" />
              <span>{currentLang === "ar" ? "شركة أبعاد إكسبو سوريا" : "Abaad Expo Syria Company"}</span>
            </a>
          </div>
        </div>

        <div className="space-y-24">
          
          {/* Section 1: Abaad Architectural Academy */}
          <div id="academy" className="scroll-mt-28">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? "text-right" : "text-left"}`}>
              
              {/* Image Banner Container */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <a
                  href="https://www.ab3adacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center cursor-pointer group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-[420px] aspect-square rounded-2xl p-6 bg-transparent hover:bg-white/[0.02] border border-white/5 hover:border-brand-orange/20 transition-all duration-300 shadow-xl flex items-center justify-center overflow-hidden"
                  >
                    {/* Embedded Banner image */}
                    <img
                      id="academy-logo-img"
                      src={academyLogoUrl}
                      alt={t.academyTitle}
                      referrerPolicy="no-referrer"
                      className="max-w-[90%] max-h-[90%] object-contain filter drop-shadow-[0_0_20px_rgba(255,122,0,0.15)] group-hover:scale-105 transition-transform duration-500 opacity-0"
                      onLoad={(e) => {
                        (e.currentTarget as HTMLImageElement).classList.remove('opacity-0');
                        (e.currentTarget as HTMLImageElement).classList.add('opacity-100');
                      }}
                    />
                  </motion.div>
                </a>
              </div>

              {/* Text Description Container */}
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-x-2 py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono font-bold tracking-wider uppercase">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {currentLang === "ar" ? "أكاديمية تعليمية أونلاين" : "Online Academy"}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {t.academyTitle}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                  {t.academyDesc}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5">
                  {academyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-x-3 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    id="academy-visit-btn"
                    href="https://www.ab3adacademy.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-brand-orange hover:bg-brand-orange/90 orange-glow hover:orange-glow-lg transition-all duration-300"
                  >
                    {t.btnVisitAcademy}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

           {/* Section 2: Abaad Expo Syria */}
          <div id="expo" className="scroll-mt-28">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? "text-right" : "text-left"}`}>
              
              {/* Image Banner Container */}
              <div className="lg:col-span-5 flex justify-center">
                <a
                  href="https://exposyria.ab3adacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center cursor-pointer group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl border border-white/5 hover:border-brand-orange/20 bg-transparent hover:bg-white/[0.02] transition-all duration-300 shadow-xl overflow-hidden flex items-center justify-center p-6"
                  >
                    {/* Embedded Banner image (using object-contain to prevent any cropping, showing original colors) */}
                    <img
                      id="expo-banner-img"
                      src={expoImageUrl}
                      alt={t.expoTitle}
                      referrerPolicy="no-referrer"
                      className="max-w-[95%] max-h-[95%] object-contain group-hover:scale-105 transition-transform duration-700 opacity-0"
                      onLoad={(e) => {
                        (e.currentTarget as HTMLImageElement).classList.remove('opacity-0');
                        (e.currentTarget as HTMLImageElement).classList.add('opacity-100');
                      }}
                    />
                  </motion.div>
                </a>
              </div>

              {/* Text Description Container */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-x-2 py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono font-bold tracking-wider uppercase">
                    <Building2 className="w-3.5 h-3.5" />
                    {currentLang === "ar" ? "تصميم وتجهيز معارض" : "Exhibition Solutions"}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {t.expoTitle}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                  {t.expoDesc}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5">
                  {expoHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-x-3 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    id="expo-visit-btn"
                    href="https://exposyria.ab3adacademy.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/30 transition-all duration-300"
                  >
                    {t.btnVisitExpo}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
