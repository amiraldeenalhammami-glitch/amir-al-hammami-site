import { MessageCircle, Facebook, Instagram, ArrowUp } from "lucide-react";
import { TranslationType } from "../translations";

interface FooterProps {
  currentLang: "ar" | "en";
  t: TranslationType;
}

export default function Footer({ currentLang, t }: FooterProps) {
  const isRtl = currentLang === "ar";

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="site-footer" className="bg-brand-dark/95 border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          {/* Logo Brand / Identity */}
          <div className={`md:col-span-5 flex flex-col items-center md:items-start space-y-3 ${isRtl ? "text-right md:text-right" : "text-left md:text-left"}`}>
            <div className={`flex items-center gap-x-3.5 ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
              <div className="w-10 h-10 border border-brand-orange rounded-full flex items-center justify-center overflow-hidden shrink-0 bg-transparent">
                <img
                  src="https://lh3.googleusercontent.com/d/1_41xeYYW4f425a2Ffpe2rVSln4TJVkUC"
                  alt={currentLang === "ar" ? "أمير الدين الحمامي" : "Amir Al Hammami"}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
                <span className="text-sm sm:text-base font-bold tracking-tight text-white font-display">
                  {currentLang === "ar" ? "أمير الدين الحمامي" : "Amir Al Hammami"}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-brand-orange uppercase">
                  Architect &amp; Director
                </span>
              </div>
            </div>
            <div className={`text-xs text-gray-400 space-y-1 font-light pt-1 ${isRtl ? "text-right" : "text-left"}`}>
              <p>{t.heroSub3}</p>
              <p>{t.heroSub4}</p>
            </div>
          </div>

          {/* Slogan / Accent text */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
            <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed max-w-xs italic font-display">
              {currentLang === "ar"
                ? "التدريب ليس مهنة ...... التدريب نمط حياة ..."
                : "«Training is not a profession... Training is a lifestyle...»"}
            </p>
          </div>

          {/* Socials & Scroll to Top Column */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center gap-y-4">
            <div className="flex gap-x-3">
              <a
                id="footer-social-whatsapp"
                href="https://www.google.com/url?q=https%3A%2F%2Fwa.me%2F%2B963969558304&sa=D&sntz=1&usg=AOvVaw20mCYWuGiuuy6Bqjk7YQk8"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white hover:border-brand-orange/30 hover:bg-brand-orange/10 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="footer-social-facebook"
                href="https://www.facebook.com/amir.aldeen.alhammami/"
                target="_blank"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white hover:border-brand-orange/30 hover:bg-brand-orange/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-instagram"
                href="https://www.instagram.com/amir.aldeen.alhammami/?hl=ar"
                target="_blank"
                className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white hover:border-brand-orange/30 hover:bg-brand-orange/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-scroll-top-btn"
              onClick={handleScrollToTop}
              className="flex items-center gap-x-1 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-gray-500 hover:text-brand-orange border border-white/5 hover:border-brand-orange/20 bg-white/[0.01] transition-all duration-300 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{currentLang === "ar" ? "أعلى الصفحة" : "TOP"}</span>
            </button>
          </div>
        </div>

        {/* Copyright notice row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-y-4">
          <p className="text-[11px] sm:text-xs text-gray-500 font-light text-center sm:text-left">
            {t.footerCopyright}
          </p>
          <p className="text-[10px] font-mono text-gray-600">
            Design &amp; Development © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
}
