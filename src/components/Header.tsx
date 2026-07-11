import { useState, useEffect } from "react";
import { Languages, Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { TranslationType } from "../translations";

interface HeaderProps {
  currentLang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
  t: TranslationType;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

export default function Header({ currentLang, setLang, t, theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.navAbout, href: "#about" },
    { label: t.navTimeline, href: "#timeline" },
    { label: t.navServices, href: "#services" },
    { label: t.navAcademy, href: "#academy" },
    { label: t.navExpo, href: "#expo" },
    { label: t.navContact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLang(currentLang === "ar" ? "en" : "ar");
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-dark/85 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="logo-link"
            href="#hero"
            className="group flex items-center gap-x-3.5 focus:outline-none"
          >
            <div className="w-10 h-10 border border-brand-orange rounded-full flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105 bg-transparent">
              <img
                src="https://lh3.googleusercontent.com/d/1_41xeYYW4f425a2Ffpe2rVSln4TJVkUC"
                alt={currentLang === "ar" ? "أمير الدين الحمامي" : "Amir Al Hammami"}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white font-display group-hover:text-brand-orange transition-colors">
                {currentLang === "ar" ? "أمير الدين الحمامي" : "Amir Al Hammami"}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-brand-orange uppercase">
                Architect &amp; Director
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                id={`nav-item-${index}`}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-orange after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Language Toggle + Feedback Link + Theme Toggle) */}
          <div className="hidden lg:flex items-center gap-x-4">
            {/* Feedback Button */}
            <a
              id="header-feedback-btn"
              href="https://www.ab3adacademy.com/feedback"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white border border-brand-orange/20 hover:border-brand-orange bg-brand-orange/5 hover:bg-brand-orange/20 transition-all duration-300"
            >
              {t.btnFeedback} <ArrowUpRight className="w-3 h-3 text-brand-orange" />
            </a>

            {/* Language Switch */}
            <button
              id="lang-toggle-btn-desktop"
              onClick={toggleLanguage}
              className="flex items-center gap-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-gray-300 border border-white/10 hover:border-brand-orange/50 hover:text-white bg-white/5 transition-all duration-300 cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-brand-orange" />
              {t.langSwitch}
            </button>

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn-desktop"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-white/10 hover:border-brand-orange/50 text-gray-300 hover:text-white bg-white/5 transition-all duration-300 cursor-pointer hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-brand-orange" />
              ) : (
                <Moon className="w-4 h-4 text-brand-orange" />
              )}
            </button>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex items-center gap-x-3 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              id="theme-toggle-btn-mobile"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-brand-orange" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-brand-orange" />
              )}
            </button>

            {/* Mobile Lang Button */}
            <button
              id="lang-toggle-btn-mobile"
              onClick={toggleLanguage}
              className="flex items-center gap-x-1 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-gray-300 border border-white/10 bg-white/5"
            >
              <Languages className="w-3 h-3 text-brand-orange" />
              {currentLang === "ar" ? "EN" : "عربي"}
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 animate-fadeIn"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                id={`mobile-nav-item-${index}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-brand-orange hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5 px-4 flex flex-col gap-y-3">
              <a
                id="mobile-feedback-btn"
                href="https://www.ab3adacademy.com/feedback"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-x-2 w-full py-3 rounded-lg text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange/95 transition-all text-center"
              >
                {t.btnFeedback}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
