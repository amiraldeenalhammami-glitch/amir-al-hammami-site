import { motion } from "motion/react";
import {
  Building2,
  Palette,
  Sparkles,
  Wrench,
  MonitorPlay,
  Database,
  Briefcase,
} from "lucide-react";
import { TranslationType } from "../translations";

interface ServicesProps {
  currentLang: "ar" | "en";
  t: TranslationType;
}

export default function Services({ currentLang, t }: ServicesProps) {
  const isRtl = currentLang === "ar";

  const services = [
    {
      id: "srv-arch",
      title: t.srvArchDesignTitle,
      description: t.srvArchDesignDesc,
      icon: <Building2 className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "srv-interior",
      title: t.srvInteriorDesignTitle,
      description: t.srvInteriorDesignDesc,
      icon: <Palette className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "srv-exhib-design",
      title: t.srvExhibDesignTitle,
      description: t.srvExhibDesignDesc,
      icon: <Sparkles className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "srv-exhib-exec",
      title: t.srvExhibExecTitle,
      description: t.srvExhibExecDesc,
      icon: <Wrench className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "srv-training",
      title: t.srvTrainingTitle,
      description: t.srvTrainingDesc,
      icon: <MonitorPlay className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "srv-bim-training",
      title: t.srvBimTrainingTitle,
      description: t.srvBimTrainingDesc,
      icon: <Database className="w-6 h-6 text-brand-orange" />,
    },
    {
      id: "srv-consulting",
      title: t.srvConsultingTitle,
      description: t.srvConsultingDesc,
      icon: <Briefcase className="w-6 h-6 text-brand-orange" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-transparent border-t border-white/5">
      {/* Decorative luxury abstract glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            {currentLang === "ar" ? "حلول متكاملة" : "Tailored Deliverables"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            {t.servicesTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            {t.servicesSubtitle}
          </p>
          <div className="h-1 w-20 bg-brand-orange rounded mx-auto mt-4" />
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            // Give the middle card or software-training card special border glow to make the bento hierarchy rich
            const isSpecial = srv.id === "srv-training" || srv.id === "srv-arch";
            
            return (
              <motion.div
                key={srv.id}
                id={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glassmorphism rounded-2xl p-8 border hover:bg-white/[0.03] transition-all duration-300 group flex flex-col justify-between h-[250px] relative ${
                  isSpecial 
                    ? "border-brand-orange/30 bg-brand-orange/[0.02] shadow-[0_0_30px_rgba(255,122,0,0.05)]" 
                    : "border-white/5"
                } ${isRtl ? "text-right" : "text-left"}`}
              >
                {/* Floating ambient glow corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl pointer-events-none" />

                {/* Icon Wrapper */}
                <div className="flex justify-between items-start">
                  <div className="p-3.5 bg-brand-orange/10 rounded-2xl border border-brand-orange/20 group-hover:bg-brand-orange group-hover:text-black transition-colors duration-500 text-brand-orange">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-600 group-hover:text-brand-orange transition-colors">
                    SRV 0{idx + 1}
                  </span>
                </div>

                {/* Description details */}
                <div className="space-y-3 mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-brand-orange transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light group-hover:text-gray-300 transition-colors leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
