import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Globe,
  Star,
  Send,
  Youtube,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { TranslationType } from "../translations";

interface ContactProps {
  currentLang: "ar" | "en";
  t: TranslationType;
}

export default function Contact({ currentLang, t }: ContactProps) {
  const isRtl = currentLang === "ar";
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mailtoLink, setMailtoLink] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setLoading(true);
    
    const recipient = "amiraldeenalhammami@ab3adacademy.com";
    const subjectText = currentLang === "ar" 
      ? `استشارة وتواصل من الموقع الشخصي: ${formData.name}`
      : `Consultation from Personal Website: ${formData.name}`;
      
    const bodyText = currentLang === "ar"
      ? `مرحباً مهندس أمير الدين،\n\nتلقيت رسالة تواصل واستشارة جديدة من موقعك الشخصي:\n\nالاسم الكريم: ${formData.name}\nالبريد الإلكتروني للعميل: ${formData.email}\n\nنص ومضمون الرسالة:\n${formData.msg}\n\n---\nتم تجهيز هذه الرسالة تلقائياً وتأكيدها بواسطة العميل.`
      : `Dear Architect Amir Al-Deen,\n\nYou have received a new consultation inquiry through your portfolio contact form:\n\nClient Name: ${formData.name}\nClient Email Address: ${formData.email}\n\nMessage Body:\n${formData.msg}\n\n---\nPrepared automatically and authorized by the client.`;
      
    const url = `mailto:${recipient}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    setMailtoLink(url);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // Auto-trigger the mail application dispatch
      window.location.href = url;
    }, 1000);
  };

  const contactChannels = [
    {
      id: "channel-whatsapp",
      label: t.contactWhatsAppLabel,
      icon: <MessageCircle className="w-5 h-5 text-[#25D366]" />,
      href: "https://www.google.com/url?q=https%3A%2F%2Fwa.me%2F%2B963969558304&sa=D&sntz=1&usg=AOvVaw20mCYWuGiuuy6Bqjk7YQk8",
      bgColor: "hover:bg-[#25D366]/10 hover:border-[#25D366]/30",
    },
    {
      id: "channel-facebook",
      label: t.contactFacebookLabel,
      icon: <Facebook className="w-5 h-5 text-[#1877F2]" />,
      href: "https://www.facebook.com/amer.hamamy.9/",
      bgColor: "hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30",
    },
    {
      id: "channel-instagram",
      label: t.contactInstagramLabel,
      icon: <Instagram className="w-5 h-5 text-[#E1306C]" />,
      href: "https://www.instagram.com/amir.aldeen.alhammami/?hl=ar",
      bgColor: "hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30",
    },
    {
      id: "channel-telegram",
      label: t.contactTelegramLabel,
      icon: <Send className="w-5 h-5 text-[#24A1DE]" />,
      href: "https://t.me/AMIRALDINALHAMMAMI",
      bgColor: "hover:bg-[#24A1DE]/10 hover:border-[#24A1DE]/30",
    },
    {
      id: "channel-youtube",
      label: t.contactYoutubeLabel,
      icon: <Youtube className="w-5 h-5 text-[#FF0000]" />,
      href: "https://www.youtube.com/@abaadacademy",
      bgColor: "hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30",
    },
    {
      id: "channel-academy",
      label: t.contactAcademyLabel,
      icon: <Globe className="w-5 h-5 text-brand-orange" />,
      href: "https://www.ab3adacademy.com/",
      bgColor: "hover:bg-brand-orange/10 hover:border-brand-orange/30",
    },
    {
      id: "channel-expo",
      label: t.contactExpoLabel,
      icon: <Globe className="w-5 h-5 text-brand-orange" />,
      href: "https://exposyria.ab3adacademy.com/",
      bgColor: "hover:bg-brand-orange/10 hover:border-brand-orange/30",
    },
    {
      id: "channel-feedback",
      label: t.contactFeedbackLabel,
      icon: <Star className="w-5 h-5 text-brand-orange" />,
      href: "https://www.ab3adacademy.com/feedback",
      bgColor: "hover:bg-brand-orange/10 hover:border-brand-orange/30",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-transparent border-t border-white/5 overflow-hidden">
      {/* Corner lights */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase">
            {currentLang === "ar" ? "قنوات التواصل" : "Get In Touch"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            {t.contactTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            {t.contactSubtitle}
          </p>
          <div className="h-1 w-20 bg-brand-orange rounded mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Channels Left List Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className={`text-xl font-bold text-white font-display mb-6 ${isRtl ? "text-right" : "text-left"}`}>
              {currentLang === "ar" ? "الروابط والقنوات الرسمية" : "Official Direct Channels"}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactChannels.map((channel) => (
                <a
                  key={channel.id}
                  id={channel.id}
                  href={channel.href}
                  target={channel.href.startsWith("#") ? undefined : "_blank"}
                  referrerPolicy={channel.href.startsWith("#") ? undefined : "no-referrer"}
                  className={`flex items-center gap-x-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 ${channel.bgColor} group`}
                >
                  <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-xl group-hover:scale-110 transition-transform">
                    {channel.icon}
                  </div>
                  <span className={`text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug ${isRtl ? "text-right" : "text-left"}`}>
                    {channel.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Quick Consultation Prompt Box */}
            <div className={`p-6 rounded-2xl bg-brand-orange/5 border border-brand-orange/15 mt-6 text-right ${isRtl ? "text-right" : "text-left"}`}>
              <div className="flex items-center gap-x-2 text-brand-orange font-bold text-sm mb-2">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>{currentLang === "ar" ? "هل تبحث عن خدمات أكاديمية أبعاد؟" : "Looking for Abaad Academy Courses?"}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {currentLang === "ar"
                  ? "لأي استفسار يتعلق بالحقائب التدريبية أو التسجيل، يمكنك التواصل مباشرة عبر واتساب الأكاديمية للدعم السريع الفوري."
                  : "For course curriculums or enrollment support, direct WhatsApp messaging connects you immediately to our registration desk."}
              </p>
            </div>
          </div>

          {/* Form Right Column */}
          <div className="lg:col-span-6">
            <div className="glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 relative">
              <h3 className={`text-xl font-bold text-white font-display mb-6 ${isRtl ? "text-right" : "text-left"}`}>
                {currentLang === "ar" ? "أرسل رسالة سريعة" : "Dispatch a Direct Inquiry"}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-6 rounded-xl bg-brand-orange/10 border border-brand-orange/30 space-y-4 ${isRtl ? "text-right" : "text-left"}`}
                >
                  <div className={`flex items-center gap-x-3 text-brand-orange ${isRtl ? "flex-row-reverse" : "flex-row"}`}>
                    <CheckCircle className="w-8 h-8 animate-bounce shrink-0" />
                    <p className="text-base sm:text-lg font-bold text-white">
                      {currentLang === "ar" ? "تم تجهيز رسالتك بنجاح!" : "Email Prepared Successfully!"}
                    </p>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {currentLang === "ar"
                      ? "سيتم فتح تطبيق البريد الإلكتروني الخاص بك تلقائياً لإرسال الرسالة إلى البريد الرسمي amiraldeenalhammami@ab3adacademy.com بعد تأكيد دخولك. إذا لم تفتح النافذة، اضغط على الزر أدناه لإرسالها مباشرة:"
                      : "Your email application will open automatically to dispatch the message to amiraldeenalhammami@ab3adacademy.com. If it didn't open, please click the confirmation button below:"}
                  </p>

                  <a
                    href={mailtoLink}
                    className="w-full flex items-center justify-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-brand-orange hover:bg-brand-orange/90 orange-glow hover:orange-glow-lg transition-all duration-300 active:scale-95"
                  >
                    <span>{currentLang === "ar" ? "اضغط هنا لتأكيد الإرسال" : "Click to Confirm & Dispatch"}</span>
                    <Send className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                  </a>

                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {currentLang === "ar" ? "معلومات الإرسال اليدوي الاحتياطي" : "Manual Backup Details"}
                    </p>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5 space-y-1.5 text-left text-xs font-mono">
                      <div>
                        <span className="text-gray-500">To:</span> <span className="text-brand-orange">amiraldeenalhammami@ab3adacademy.com</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Subject:</span> <span className="text-white">Inquiry</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className={`block text-xs font-mono font-medium text-gray-400 ${isRtl ? "text-right" : "text-left"}`}>
                      {t.contactFormName}
                    </label>
                    <input
                      id="form-name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={currentLang === "ar" ? "مثال: م. أحمد الهاشمي" : "e.g. Architect Ahmad"}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className={`block text-xs font-mono font-medium text-gray-400 ${isRtl ? "text-right" : "text-left"}`}>
                      {t.contactFormEmail}
                    </label>
                    <input
                      id="form-email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className={`block text-xs font-mono font-medium text-gray-400 ${isRtl ? "text-right" : "text-left"}`}>
                      {t.contactFormMsg}
                    </label>
                    <textarea
                      id="form-msg-input"
                      required
                      rows={4}
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      placeholder={currentLang === "ar" ? "اكتب تفاصيل طلبك أو استشارتك هنا..." : "Type your inquiry details here..."}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all duration-300 ${isRtl ? "text-right" : "text-left"}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-brand-orange hover:bg-brand-orange/90 orange-glow hover:orange-glow-lg transition-all duration-300 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{t.contactFormSubmit}</span>
                    <Send className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
