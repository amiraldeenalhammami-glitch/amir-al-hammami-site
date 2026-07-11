import { useState, useEffect } from "react";
import { translations } from "./translations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import AcademyExpo from "./components/AcademyExpo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Default to Arabic as requested by the primary language specifications
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = translations[lang];

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("theme") as "dark" | "light") || "light";
  });

  // Toggle light/dark classes on html
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  // Dynamically update document properties on language switch
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.title = lang === "ar"
      ? "المهندس أمير الدين الحمامي"
      : "Arch. Amir Al-Deen Al Hammami";
  }, [lang]);

  return (
    <div className="min-h-screen bg-brand-dark text-[#F3F4F6] font-sans antialiased selection:bg-brand-orange selection:text-black">
      {/* Premium Luxury Background Accent Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle top amber glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,122,0,0.06),transparent_60%)]" />
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Main Structural Elements */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header/Navbar */}
        <Header currentLang={lang} setLang={setLang} t={t} theme={theme} setTheme={setTheme} />

        {/* Content sections */}
        <main className="flex-grow">
          {/* Hero section */}
          <Hero currentLang={lang} t={t} />

          {/* About section with stats bento */}
          <About currentLang={lang} t={t} />

          {/* Experience timeline */}
          <Timeline currentLang={lang} t={t} />

          {/* Core Services */}
          <Services currentLang={lang} t={t} />

          {/* Business Showcase: Academy & Expo Syria */}
          <AcademyExpo currentLang={lang} t={t} />

          {/* Direct channels & Form Dispatcher */}
          <Contact currentLang={lang} t={t} />
        </main>

        {/* Footer */}
        <Footer currentLang={lang} t={t} />
      </div>
    </div>
  );
}
