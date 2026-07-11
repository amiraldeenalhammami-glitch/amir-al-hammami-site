import { motion } from "motion/react";
import { Phone, ArrowUpRight, ArrowDown, Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import { TranslationType } from "../translations";

interface HeroProps {
  currentLang: "ar" | "en";
  t: TranslationType;
}

export default function Hero({ currentLang, t }: HeroProps) {
  const isRtl = currentLang === "ar";

  // Google Drive raw image stream URL for the personal portrait photo
  const portraitUrl = "https://lh3.googleusercontent.com/d/1_41xeYYW4f425a2Ffpe2rVSln4TJVkUC";

  // Robust fallback pattern using an premium vector outline of a modern architect if the image fails or loads slowly
  const fallbackIcon = (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent text-gray-500 font-mono text-center p-6 border border-white/5 rounded-full">
      <div className="relative w-16 h-16 mb-2 border border-brand-orange/30 rounded-full flex items-center justify-center animate-pulse">
        <Award className="w-8 h-8 text-brand-orange" />
      </div>
      <span className="text-xs font-semibold tracking-wider text-white uppercase font-display">
        {currentLang === "ar" ? "أمير الدين" : "Amir Al Hammami"}
      </span>
    </div>
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Decorative luxury abstract glowing backdrops */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-brand-orange/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid line accent backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? "text-right" : "text-left"}`}>
          
          {/* Visual Side: Portrait Image with Luxury Glow and Framed Borders */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              id="hero-portrait-container"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square group"
            >
              {/* Soft professional outer glow (انارة خفيفة احترافية حول الدائرة) */}
              <div className="absolute -inset-3 bg-brand-orange/25 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-2 bg-gradient-to-tr from-brand-orange/40 to-white/5 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-700 pointer-events-none" />

              {/* Sophisticated dual-layered architectural geometric frame */}
              <div className="absolute inset-0 border-2 border-brand-orange/25 rounded-full pointer-events-none transition-all duration-500 group-hover:border-brand-orange/45" />
              <div className="absolute -inset-2 border border-brand-orange/10 rounded-full pointer-events-none transition-all duration-500 group-hover:scale-[1.02]" />

              {/* Inner wrapper - perfectly circular container with shadow */}
              <div className="relative w-full h-full overflow-hidden rounded-full bg-[#121214] border-4 border-white/5 shadow-[0_0_25px_rgba(224,93,35,0.35)] group-hover:shadow-[0_0_40px_rgba(224,93,35,0.55)] transition-all duration-500">
                {/* Fallback component rendering first, image overlays on load */}
                {fallbackIcon}

                <img
                  id="hero-portrait-img"
                  src={portraitUrl}
                  alt={t.heroName}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="absolute transition-opacity duration-500 opacity-0 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  style={{
                    width: "124.333%",
                    height: "108.5%",
                    left: "-7.333%",
                    top: "-5.667%",
                    maxWidth: "none",
                  }}
                  onLoad={(e) => {
                    (e.currentTarget as HTMLImageElement).classList.remove('opacity-0');
                    (e.currentTarget as HTMLImageElement).classList.add('opacity-100');
                  }}
                  onError={(e) => {
                    console.log("Drive portrait load fallback activated");
                  }}
                />
                
                {/* Subtle overlay vignette for perfect integration */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Tiny floating info badges for a professional look */}
              <div className={`absolute bottom-4 ${isRtl ? "-left-2" : "-right-2"} glassmorphism px-4 py-2.5 rounded-lg shadow-lg border border-brand-orange/30 flex items-center gap-x-2 animate-bounce duration-1000`}>
                <div className="w-2.5 h-2.5 bg-brand-orange rounded-full animate-ping" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                  {currentLang === "ar" ? "متاح للاستشارات" : "Available for Consultancy"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text/Details Side */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Heartbeat Quote Badge */}
              <motion.div
                id="hero-quote-badge"
                animate={{
                  scale: [1, 1.03, 0.98, 1.03, 1],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-x-3.5 py-3 px-6 rounded-2xl bg-brand-orange/10 border border-brand-orange/35 shadow-[0_0_20px_rgba(255,122,0,0.2)] w-fit"
              >
                <div className="flex items-center gap-x-2.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange leading-none select-none">•</span>
                  <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-brand-orange leading-tight">
                    {currentLang === "ar" 
                      ? "التدريب ليس مهنة ...... التدريب نمط حياة ..."
                      : "Training is not a job... training is a way of life..."}
                  </span>
                </div>
                {/* Pulsing heart */}
                <motion.div
                  animate={{
                    scale: [1, 1.25, 0.95, 1.25, 1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-brand-orange flex-shrink-0"
                >
                  <Heart className="w-6 h-6 fill-brand-orange text-brand-orange" />
                </motion.div>
              </motion.div>

              {/* Main Name Heading with brand orange details */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-tight">
                {t.heroName}
              </h1>

              {/* Sub-Roles Showcase Cards (The 4 Titles) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-x-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/20 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{t.heroSub1}</span>
                </div>
                <div className="flex items-center gap-x-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/20 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{t.heroSub2}</span>
                </div>
                <div className="flex items-center gap-x-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/20 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{t.heroSub3}</span>
                </div>
                <div className="flex items-center gap-x-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/20 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{t.heroSub4}</span>
                </div>
              </div>

              {/* Short Bio Description */}
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl font-light">
                {t.heroDescription}
              </p>

              {/* Action Buttons Panel */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Contact WhatsApp */}
                <a
                  id="hero-whatsapp-btn"
                  href="https://www.google.com/url?q=https%3A%2F%2Fwa.me%2F%2B963969558304&sa=D&sntz=1&usg=AOvVaw20mCYWuGiuuy6Bqjk7YQk8"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-brand-orange hover:bg-brand-orange/90 orange-glow hover:orange-glow-lg transition-all duration-300 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  {t.btnWhatsApp}
                </a>

                {/* About Me Scroll link */}
                <a
                  id="hero-about-btn"
                  href="#about"
                  className="flex items-center justify-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/30 transition-all duration-300 active:scale-95"
                >
                  {t.btnAboutMe}
                </a>

                {/* Our Work Scroll link */}
                <a
                  id="hero-work-btn"
                  href="#academy"
                  className="flex items-center justify-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 active:scale-95"
                >
                  {t.btnOurWork}
                </a>

                {/* Feedback Section link */}
                <a
                  id="hero-feedback-btn"
                  href="https://www.ab3adacademy.com/feedback"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-brand-orange bg-brand-orange/5 hover:bg-brand-orange/15 border border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 active:scale-95"
                >
                  {t.btnFeedback}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex items-center gap-x-2 text-xs font-mono text-gray-500 mt-16 animate-pulse">
              <span>{currentLang === "ar" ? "اسحب للأسفل للاستكشاف" : "Scroll down to explore"}</span>
              <ArrowDown className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
