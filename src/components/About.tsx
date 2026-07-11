import { motion } from "motion/react";
import { Award, Clock, GraduationCap, Users, Layout } from "lucide-react";
import { TranslationType } from "../translations";

interface AboutProps {
  currentLang: "ar" | "en";
  t: TranslationType;
}

export default function About({ currentLang, t }: AboutProps) {
  const isRtl = currentLang === "ar";

  const stats = [
    {
      id: "stat-students",
      value: t.counterStudents,
      label: t.counterStudentsSub,
      icon: <Users className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "stat-since",
      value: t.counterSince,
      label: t.counterSinceSub,
      icon: <Clock className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "stat-years",
      value: t.counterYears,
      label: t.counterYearsSub,
      icon: <Award className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "stat-projects",
      value: t.counterProjects,
      label: t.counterProjectsSub,
      icon: <Layout className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "stat-hours",
      value: t.counterHours,
      label: t.counterHoursSub,
      icon: <GraduationCap className="w-6 h-6 text-brand-orange" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-transparent border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-orange/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start ${isRtl ? "text-right" : "text-left"}`}>
          
          {/* Biography Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
                {currentLang === "ar" ? "الهوية البصرية والذاتية" : "Identity & Vision"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                {t.aboutTitle}
              </h2>
              <div className={`h-1.5 w-16 bg-brand-orange rounded ${isRtl ? "mr-0" : "ml-0"}`} />
            </div>

            <div className="space-y-6 text-gray-300 font-light text-base sm:text-lg leading-relaxed">
              <p className={`border-brand-orange py-2 px-4 bg-white/[0.01] ${isRtl ? "border-r-2" : "border-l-2"}`}>
                {t.aboutP1}
              </p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
              <p className="bg-brand-orange/5 p-4 rounded-xl border border-brand-orange/10 font-medium text-gray-200">
                {t.aboutP4}
              </p>
            </div>
          </div>

          {/* Stats Metrics Bento Grid Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2 mb-8">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
                {currentLang === "ar" ? "الأرقام المهنية" : "Impact by the Numbers"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {currentLang === "ar" ? "أبرز الإنجازات والنجاحات" : "Key Achievements & Milestones"}
              </h3>
            </div>

            {/* Bento styled Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  id={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-brand-orange/20 hover:bg-white/[0.03] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between h-44"
                >
                  {/* Glowing background bubble */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-orange/[0.03] group-hover:bg-brand-orange/[0.08] rounded-full blur-xl transition-all duration-500" />
                  
                  {/* Icon and label row */}
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 bg-brand-orange/10 rounded-xl border border-brand-orange/15 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-brand-orange transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Value and Title details */}
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight group-hover:text-brand-orange transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 font-light transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
