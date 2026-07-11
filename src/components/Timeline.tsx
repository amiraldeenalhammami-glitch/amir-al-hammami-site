import { motion } from "motion/react";
import {
  Compass,
  GraduationCap,
  Presentation,
  CheckCircle,
  Cpu,
  Layers,
  Settings,
  HelpCircle,
  TrendingUp,
  Award,
  Utensils,
  BookOpen,
} from "lucide-react";
import { TranslationType } from "../translations";

interface TimelineProps {
  currentLang: "ar" | "en";
  t: TranslationType;
}

export default function Timeline({ currentLang, t }: TimelineProps) {
  const isRtl = currentLang === "ar";

  const timelineEvents = [
    {
      id: "event-arch",
      title: t.expArchTitle,
      description: t.expArchDesc,
      icon: <Compass className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-train",
      title: t.expTrainTitle,
      description: t.expTrainDesc,
      icon: <GraduationCap className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-syndicate-trainer",
      title: t.expSyndicateTrainerTitle,
      description: t.expSyndicateTrainerDesc,
      icon: <Award className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-civilization-trainer",
      title: t.expCivilizationTrainerTitle,
      description: t.expCivilizationTrainerDesc,
      icon: <Award className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-ex-design",
      title: t.expExhibDesignTitle,
      description: t.expExhibDesignDesc,
      icon: <Presentation className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-ex-exec",
      title: t.expExhibExecTitle,
      description: t.expExhibExecDesc,
      icon: <CheckCircle className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-bim",
      title: t.expBimTitle,
      description: t.expBimDesc,
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-interior",
      title: t.expInteriorTitle,
      description: t.expInteriorDesc,
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-koll-benahm",
      title: t.expKollBenahmTitle,
      description: t.expKollBenahmDesc,
      icon: <Utensils className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-mgmt",
      title: t.expProjectMgmtTitle,
      description: t.expProjectMgmtDesc,
      icon: <Settings className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-consulting",
      title: t.expConsultingTitle,
      description: t.expConsultingDesc,
      icon: <HelpCircle className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-planning",
      title: t.expPlanningTitle,
      description: t.expPlanningDesc,
      icon: <TrendingUp className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-masters",
      title: t.expMastersTitle,
      description: t.expMastersDesc,
      icon: <BookOpen className="w-5 h-5 text-brand-orange" />,
    },
    {
      id: "event-info-eng",
      title: t.expInfoEngTitle,
      description: t.expInfoEngDesc,
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <section id="timeline" className="py-24 relative bg-transparent overflow-hidden border-t border-white/5">
      {/* Glow highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            {currentLang === "ar" ? "خبرات متراكمة" : "Years of Dedication"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            {t.timelineTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            {t.timelineSubtitle}
          </p>
          <div className="h-1 w-20 bg-brand-orange rounded mx-auto mt-4" />
        </div>

        {/* Timeline Structure (Full-width for a shorter, more spread out list) */}
        <div className="relative mt-12">
          
          {/* Vertical Line aligned to the starting side */}
          <div
            id="timeline-line"
            className={`absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-orange via-white/10 to-transparent ${
              isRtl
                ? "right-4 sm:right-6"
                : "left-4 sm:left-6"
            }`}
          />

          {/* Timeline Nodes */}
          <div className="space-y-6 relative">
            {timelineEvents.map((event, idx) => {
              return (
                <div
                  key={event.id}
                  id={event.id}
                  className={`flex items-stretch relative ${
                    isRtl ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Bullet Node Indicator on Side Line */}
                  <div
                    className={`absolute top-6 z-20 flex items-center justify-center w-10 h-10 rounded-full border border-brand-orange/40 bg-brand-dark group ${
                      isRtl
                        ? "right-0 -mr-1 sm:-mr-2.5"
                        : "left-0 -ml-1 sm:-ml-2.5"
                    }`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(224,93,35,0.8)]" />
                  </div>

                  {/* Content Card container - stretches FULL WIDTH! */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-full rounded-2xl glassmorphism p-6 sm:p-8 border border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.03] transition-all duration-300 relative ${
                      isRtl
                        ? "mr-12 sm:mr-16 text-right"
                        : "ml-12 sm:ml-16 text-left"
                    }`}
                  >
                    {/* Floating Step Tag */}
                    <div className={`absolute top-6 ${isRtl ? "left-6" : "right-6"} text-[10px] font-mono tracking-widest text-brand-orange/60 font-bold uppercase`}>
                      EXP {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>

                    {/* Content Body */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-x-3">
                        <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange shrink-0">
                          {event.icon}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
