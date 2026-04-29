/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  Utensils, 
  ShoppingBag, 
  Briefcase,
  Zap,
  CheckCircle2,
  Rocket,
  Layout,
  Menu,
  X,
  Star
} from "lucide-react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const targetAudiences = [
    {
      title: "قطاع المطاعم والكافيهات",
      description: "نحول المنيو التقليدي لتجربة تفاعلية تزيد من متوسط طلب العميل بنسبة تصل لـ 20%.",
      icon: <Utensils className="w-8 h-8 text-[#00f2ff]" />,
      color: "from-[#00f2ff]/20 to-transparent",
      result: "زيادة مبيعات +20%"
    },
    {
      title: "المتاجر الإلكترونية النشطة",
      description: "واجهات شراء (Checkout) فائقة السرعة تنهي مشكلة 'السلال المهجورة' وتزيد إتمام الطلبات.",
      icon: <ShoppingBag className="w-8 h-8 text-[#7000ff]" />,
      color: "from-[#7000ff]/20 to-transparent",
      result: "تحويل مبيعات +35%"
    },
    {
      title: "الشركات والناشئة",
      description: "تصميم Landing Pages تخطف الأنظار في 3 ثوانٍ وتبني ثقة فورية في علامتك التجارية.",
      icon: <Briefcase className="w-8 h-8 text-[#ff00e5]" />,
      color: "from-[#ff00e5]/20 to-transparent",
      result: "ثقة مطلقة 100%"
    }
  ];

  const projects = [
    {
      title: "مطعم 'إيتالو' الإيطالي",
      category: "Restaurant & Booking System",
      problem: "المنيو القديم كان PDF غير متجاوب، والزوار يهربون لمنصات خارجية تأخذ عمولة 25%.",
      solution: "منيو تفاعلي 'Mobile-First' مع نظام حجز ذكي بلمسة واحدة وتجربة تصفح سريعة.",
      result: "زيادة 45% في الحجوزات المباشرة وتوفير آلاف الجنيهات من العمولات.",
      icon: <Utensils className="text-cyan-400" />,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "متجر 'لوسينت' للموضة",
      category: "E-commerce Excellence",
      problem: "نسبة التخلي عن الشراء (Cart Abandonment) كانت 80% بسبب تعقيد صفحة الدفع.",
      solution: "برمجة 'One-Step Checkout' وتحميل ذكي للصور لضمان تجربة تسوق سلسة تحت 2 ثانية.",
      result: "تقليل التخلي عن السلة لـ 30% وزيادة المبيعات الفعلية بنسبة 55%.",
      icon: <ShoppingBag className="text-purple-400" />,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "منصة 'فيوتشر تك'",
      category: "SaaS Landing Page",
      problem: "المنتج رائع لكن تصميم الموقع القديم لا يعكس التكنولوجيا، مما أدى لضعف الثقة.",
      solution: "تصميم 'Futuristic' مع أنيميشن تفاعلي يشرح المنتج ويبني سلطة العلامة التجارية فوراً.",
      result: "زيادة 120% في تسجيلات العملاء المحتملين (Leads) في أول شهر.",
      icon: <Rocket className="text-pink-400" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "أحمد منصور",
      role: "صاحب مطعم إيتالو",
      content: "معاذ مش مجرد مطور، هو شريك استراتيجي. المنيو التفاعلي اللي صممه زود مبيعاتنا المباشرة ووفر علينا عمولات كتير كنا بندفعها للمنصات التانية.",
      avatar: "أ"
    },
    {
      name: "سارة جلال",
      role: "مديرة متجر لوسينت",
      content: "سرعة الموقع اللي معاذ حققها خلت تجربة الشراء ممتعة جداً. نسبة إتمام الطلبات زادت بشكل ملحوظ من أول أسبوع شغل.",
      avatar: "س"
    },
    {
      name: "المهندس خالد",
      role: "مؤسس شركة فيوتشر تك",
      content: "الـ Landing Page اللي عملها معاذ كانت السبب الأساسي في جذب المستثمرين لشركتنا. التصميم بيعكس التكنولوجيا اللي بنقدمها بالظبط.",
      avatar: "خ"
    }
  ];

  const faqs = [
    {
      q: "هل السعر يشمل الاستضافة والدومين؟",
      a: "نقدم الاستضافة كخدمة منفصلة لضمان أعلى أداء، ولكن في باقة 'Premium' نوفر لك استضافة سحابية فائقة السرعة مجاناً لأول سنة."
    },
    {
      q: "كم يستغرق بناء الموقع العادي؟",
      a: "الصفحة الواحدة (Landing Page) تستغرق من 3-5 أيام عمل. المواقع المتكاملة تستغرق من 10-14 يوم عمل لضمان أعلى جودة في الكود والتصميم."
    },
    {
      q: "ماذا لو لم يعجبني التصميم؟",
      a: "نحن نعمل بنظام 'الدورات التكرارية'، يعني أننا لا ننتقل لخطوة البرمجة إلا بعد موافقتك الكاملة على نموذج التصميم (UX/UI Design)."
    },
    {
      q: "هل المواقع تدعم اللغة العربية والإنجليزية؟",
      a: "نعم، نحن خبراء في تطوير المواقع ثنائية اللغة (RTL/LTR) مع مراعاة قواعد تجربة المستخدم لكل لغة بشكل منفصل."
    }
  ];

  const roadmap = [
    {
      phase: "المرحلة الأولى: الهوية والأساس",
      days: "1 - 3",
      tasks: ["تحديد التخصص (Niche) - مطاعم مثلاً", "كتابة المحتوى البيعي (Copywriting)", "اختيار الألوان والخطوط الاحترافية"],
      icon: <Layout className="text-[#00f2ff]" />
    },
    {
      phase: "المرحلة الثانية: البناء والذكاء",
      days: "4 - 7",
      tasks: ["تطوير الـ Landing Page الأساسية", "ربط الـ WhatsApp والـ Lead Magnets", "تحسين الأداء لسرعة البرق (Score 95+)"],
      icon: <Zap className="text-yellow-400" />
    },
    {
      phase: "المرحلة الثالثة: الانتشار المغناطيسي",
      days: "8 - 11",
      tasks: ["نشر 3 قصص نجاح (Case Studies)", "حملة رسائل مباشرة للمستهدفين بدقة", "تقديم فحص مجاني لـ 10 مواقع منافسة"],
      icon: <Rocket className="text-[#ff00e5]" />
    },
    {
      phase: "المرحلة الرابعة: حصد الثمار",
      days: "12 - 14",
      tasks: ["كتابة عروض سعر (Proposals) لا تُرفض", "إغلاق أول صفقة (Success Deal)", "بدء التنفيذ والتحضير للعميل التالي"],
      icon: <CheckCircle2 className="text-[#7000ff]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-purple-500/30 overflow-x-hidden relative" dir="rtl">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#00f2ff] via-[#7000ff] to-[#ff00e5] z-[110] transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#7000ff]/20 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00f2ff]/10 blur-[130px] rounded-full" />
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-[#ff00e5]/10 blur-[110px] rounded-full" />
      </div>

      {/* Navigation Layer */}
      <nav className="fixed top-0 w-full z-[100] px-4 py-4 md:px-16 container mx-auto">
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-3xl px-6 py-3 md:px-8 md:py-4 shadow-2xl relative">
          <div className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-[#00f2ff] to-[#7000ff] rounded-lg md:rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.4)]" />
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-white to-gray-400">معاذ رمضان</span>
          </div>
          
          <div className="hidden lg:flex gap-10 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            <a href="#services" className="hover:text-[#00f2ff] transition-all">الخدمات</a>
            <a href="#portfolio" className="hover:text-[#7000ff] transition-all">المعرض</a>
            <a href="#pricing" className="hover:text-[#ff00e5] transition-all">الخطط</a>
            <a href="#faq" className="hover:text-cyan-400 transition-all">الأسئلة</a>
            <a href="#about" className="hover:text-white transition-all">عن معاذ</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-6 py-3 bg-white text-black rounded-xl font-black text-xs hover:bg-cyan-400 hover:text-black transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-95">
              استشارة مجانية
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-4 bg-[#0a0a15] border border-white/10 rounded-2xl p-6 lg:hidden shadow-3xl z-[101]"
            >
              <div className="flex flex-col gap-6 text-center font-bold">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#00f2ff]">الخدمات</a>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#7000ff]">المعرض</a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-[#ff00e5]">الخطط</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-cyan-400">الأسئلة</a>
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-white">الرئيسية</a>
                <button className="w-full py-4 bg-white text-black rounded-xl font-black">ابدأ الآن</button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201028682259?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D9%85%D8%B9%D8%A7%D8%B0%D8%8C%20%D8%B1%D8%A3%D9%8A%D8%AA%20%D8%A7%D9%84%D8%A8%D9%88%D8%B1%D8%AA%D9%81%D9%88%D9%84%D9%8A%D9%88%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%D8%A8%D9%83%20%D9%88%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-[100] p-5 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 group"
      >
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
           تحدث معي الآن!
        </span>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.248 2.248 3.488 5.236 3.488 8.413 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.991-.51-5.747-1.474l-6.253 1.682zm6.182-4.045l.443.263c1.558.927 3.336 1.417 5.163 1.417 5.454 0 9.891-4.437 9.891-9.891 0-2.64-1.028-5.123-2.894-6.991-1.867-1.868-4.351-2.896-6.991-2.896-5.454 0-9.891 4.437-9.891 9.891 0 1.89.524 3.731 1.515 5.348l.288.468-1.01 3.691 3.689-1.0zM16.924 14.15c-.244-.122-1.442-.712-1.666-.793-.223-.082-.387-.122-.549.123-.162.244-.633.793-.775.955-.141.162-.283.182-.527.06-.244-.122-1.03-.379-1.96-1.208-.724-.645-1.213-1.441-1.354-1.684-.141-.244-.015-.376.107-.497.11-.109.244-.284.366-.427.122-.142.162-.244.244-.406.082-.162.041-.305-.02-.426-.062-.122-.55-1.32-.752-1.81-.197-.478-.397-.414-.549-.422-.142-.007-.305-.008-.468-.008-.162 0-.426.061-.649.305-.224.244-.854.834-.854 2.035 0 1.201.874 2.36 1.004 2.503.111.142 1.7 2.597 4.12 3.64.576.248 1.025.396 1.375.508.579.184 1.107.158 1.524.096.465-.07 1.442-.589 1.646-1.157.203-.569.203-1.057.142-1.157-.061-.101-.224-.162-.468-.284z"/>
        </svg>
      </a>

      {/* Free Audit Section (Lead Magnet) */}
      <Section className="relative z-10 py-8 md:py-12">
        <div className="bg-gradient-to-r from-emerald-600/20 to-[#00f2ff]/10 border border-emerald-500/20 rounded-[30px] md:rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-2xl text-center lg:text-right">
             <div className="inline-block px-4 py-1 bg-emerald-500 text-white text-[8px] md:text-[10px] font-black rounded-lg mb-4 md:mb-6 uppercase tracking-widest">Free Value</div>
             <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight leading-tight">احصل على فحص مجاني لموقعك الحالي</h2>
             <p className="text-gray-400 text-base md:text-xl font-light">
                سأقوم بتحليل سرعة موقعك، وسهولة استخدامه، وأخبرك بالضبط بـ 3 تغييرات ستزيد من مبيعاتك فوراً. بدون أي التزام!
             </p>
          </div>
          <a 
            href="https://wa.me/201028682259?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D9%85%D8%B9%D8%A7%D8%B0%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%B7%D9%84%D8%A8%20%D9%81%D8%AD%D8%B5%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%20%D9%84%D9%85%D9%88%D9%82%D8%B9%D9%8A%20%D8%A7%D9%84%D8%AD%D8%A7%D9%84%D9%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-5 md:px-10 md:py-6 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-lg md:text-xl rounded-2xl transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 w-full lg:w-auto text-center"
          >
             اطلب فحص موقعك الآن
          </a>
        </div>
      </Section>

      {/* Hero Section */}
      <section id="home" className="relative z-10 pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-16 max-w-7xl mx-auto min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center w-full">
          {/* Persuasive Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00f2ff] text-[10px] font-bold mb-6 md:mb-8 uppercase tracking-[0.25em]">
              <Zap size={12} fill="currentColor" />
              <span>نحول الأكواد إلى أرباح حقيقية</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-[1] mb-6 md:mb-8">
              أنا <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00f2ff] via-[#7000ff] to-[#ff00e5]">معاذ رمضان إسماعيل</span>
            </h1>
            <h2 className="text-xl md:text-5xl font-light text-blue-400/80 md:text-gray-500 mb-8 md:mb-10 font-mono tracking-tighter">
               — Frontend Developer
            </h2>
            <p className="text-gray-400 text-lg md:text-2xl max-w-xl mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed border-r-0 lg:border-r-2 border-[#00f2ff]/30 pr-0 lg:pr-6">
              "موقعك الإلكتروني ليس مجرد واجهة، بل هو موظف مبيعاتك الأفضل الذي لا ينام. أنا هنا لأجعله الأكثر ذكاءً وجذباً للعملاء."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <button className="px-8 py-5 md:px-10 md:py-6 bg-gradient-to-r from-blue-600 to-[#7000ff] rounded-2xl font-black text-lg md:text-xl shadow-[0_15px_40px_rgba(112,0,255,0.4)] hover:shadow-[0_20px_50px_rgba(112,0,255,0.6)] transform hover:-translate-y-1 transition-all">
                ابدأ جني الثمار اليوم
              </button>
              <button className="px-8 py-5 md:px-10 md:py-6 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg md:text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-4 group">
                رؤية قصص النجاح
                <ArrowRight className="rotate-180 group-hover:translate-x-[-10px] transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Futuristic Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[600px] md:h-[600px]">
              <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse" />
              <div className="absolute inset-8 border border-[#00f2ff]/20 rounded-full animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-16 border border-[#7000ff]/20 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
              
              <div className="absolute inset-24 bg-gradient-to-tr from-[#00f2ff]/10 to-[#7000ff]/10 rounded-[80px] backdrop-blur-3xl overflow-hidden flex items-center justify-center border border-white/10 group shadow-[0_0_80px_rgba(0,242,255,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Future Tech"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                   animate={{ y: [0, -30, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute z-20"
                >
                   <Rocket size={120} className="text-[#00f2ff] drop-shadow-[0_0_30px_#00f2ff]" />
                </motion.div>
              </div>

              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[15%] left-[5%] p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] shadow-2xl"
              >
                <div className="text-[#00f2ff] font-black text-xl tracking-tighter">ROI +250%</div>
                <div className="text-[10px] text-gray-500 uppercase mt-1">Growth Index</div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, -25, 0] }} 
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[20%] right-[0%] p-5 bg-[#7000ff]/10 backdrop-blur-xl border border-[#7000ff]/30 rounded-[30px] shadow-2xl"
              >
                <div className="text-[#ff00e5] font-black text-xl tracking-tighter">Fast Loading</div>
                <div className="text-[10px] text-gray-400 uppercase mt-1">Optimization</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="relative z-10 py-10 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-12">
              <span className="text-2xl font-black text-gray-800 hover:text-white transition-colors cursor-default">REACT</span>
              <span className="text-2xl font-black text-gray-800 hover:text-[#7000ff] transition-colors cursor-default">TYPESCRIPT</span>
              <span className="text-2xl font-black text-gray-800 hover:text-[#00f2ff] transition-colors cursor-default">TAILWIND</span>
              <span className="text-2xl font-black text-gray-800 hover:text-emerald-400 transition-colors cursor-default">NEXT.JS</span>
              <span className="text-2xl font-black text-gray-800 hover:text-[#ff00e5] transition-colors cursor-default">FRAMER MOTION</span>
              <span className="text-2xl font-black text-gray-800 hover:text-yellow-400 transition-colors cursor-default">VITE</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020205] to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020205] to-transparent z-20" />
      </div>

      {/* Metrics Section */}
      <Section className="relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {[
            { label: "نمو في المبيعات", val: "40%", icon: <BarChart3 className="text-[#00f2ff]" /> },
            { label: "أداء فائق السرعة", val: "100%", icon: <Zap className="text-yellow-400" /> },
            { label: "تصميم يحول العميل", val: "+30%", icon: <Layout className="text-[#ff00e5]" /> },
            { label: "دعم فني مستمر", val: "24/7", icon: <CheckCircle2 className="text-[#7000ff]" /> },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 bg-white/[0.03] border border-white/5 rounded-[30px] md:rounded-[40px] text-center backdrop-blur-3xl hover:border-white/20 transition-all"
            >
              <div className="mb-6 flex justify-center scale-110 md:scale-125">{item.icon}</div>
              <div className="text-3xl md:text-5xl font-black mb-3 tracking-tighter">{item.val}</div>
              <div className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8">حلول مخصصة <span className="text-[#00f2ff]">لنمو أرباحك</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl md:text-2xl font-light">
            أنا لا أبني مجرد أكواد، أنا أبني جسوراً بينك وبين عميلك المستقبلي.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {targetAudiences.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className={`relative overflow-hidden group p-12 bg-white/[0.04] border border-white/10 rounded-[50px] backdrop-blur-3xl transition-all h-full flex flex-col`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} blur-[60px] opacity-40 group-hover:opacity-80 transition-opacity`} />
              <div className="relative mb-10 p-5 bg-white/10 rounded-2xl inline-block w-fit shadow-inner">{item.icon}</div>
              <h3 className="relative text-3xl font-black mb-6">{item.title}</h3>
              <p className="relative text-gray-400 leading-relaxed text-xl mb-12 flex-grow font-light">
                {item.description}
              </p>
              <div className="relative flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                 <span className="text-emerald-400 font-black">{item.result}</span>
                 <button className="flex items-center gap-3 text-[#00f2ff] font-black group-hover:gap-6 transition-all uppercase text-sm tracking-widest">
                    اطلب الحل
                    <ArrowRight className="rotate-180" size={18} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section id="portfolio" className="relative z-10 bg-white/[0.01]">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold mb-6 uppercase tracking-widest">Case Studies</div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">قصص نجاح <span className="text-[#ff00e5]">واقعية</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            خلف كل واجهة جميلة، لغة برمجة قوية تحل مشاكل الأعمال وتزيد الأرباح.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center`}
            >
              <div className={i % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                   <div className="p-2 md:p-3 bg-white/5 rounded-xl">{project.icon}</div>
                   <span className="text-gray-500 font-mono text-[10px] md:text-sm tracking-widest uppercase">{project.category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 tracking-tight">{project.title}</h3>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="p-5 md:p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                       <Zap size={16} /> المشكلة:
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">{project.problem}</p>
                  </div>

                  <div className="p-5 md:p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                       <Rocket size={16} /> الحل البرمجي:
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">{project.solution}</p>
                  </div>

                  <div className="p-6 md:p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[24px] md:rounded-[30px] shadow-[0_10px_40px_rgba(16,185,129,0.1)]">
                    <div className="text-emerald-400 font-black text-2xl md:text-3xl mb-1">{project.result}</div>
                    <div className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em]">النتيجة النهائية المثبتة</div>
                  </div>
                </div>
              </div>

              <div className={`relative group ${i % 2 === 0 ? "order-1" : "order-1 lg:order-2"}`}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/20 to-[#7000ff]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="relative rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 aspect-video shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      <Section id="about" className="relative z-10">
        <div className="bg-gradient-to-tr from-blue-900/30 to-purple-900/30 p-[1px] md:p-[2px] rounded-[40px] md:rounded-[60px]">
          <div className="bg-[#020205]/95 backdrop-blur-3xl rounded-[40px] md:rounded-[60px] p-8 md:p-24 grid lg:grid-cols-2 gap-12 md:gap-20 items-center overflow-hidden relative">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-mono mb-6 md:mb-8 font-black uppercase tracking-widest">About Me</div>
              <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-10 leading-tight md:leading-tight">شغفي هو نجاح <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#7000ff]">استثمارك الرقمي</span></h2>
              <p className="text-gray-300 text-lg md:text-2xl leading-relaxed mb-8 md:mb-10 font-light italic">
                "أؤمن أن التكنولوجيا وجدت لتخدم الإنسان وتحقق النمو، لذلك أضع خبرتي في بناء واجهات لا تكتفي بالجمال، بل تضمن لك تواجداً رقمياً قوياً يحق لك أن تفخر به."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {['سرعة تفوق التوقعات', 'تجربة مستخدم حصرية', 'كود نظيف وقابل للمقاس', 'توافق 100% مع Google'].map((point, i) => (
                  <div key={i} className="flex gap-3 items-center text-gray-400 font-bold text-sm md:text-base">
                    <CheckCircle2 size={18} className="text-[#00f2ff] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
              {['Vite', 'React 19', 'Tailwind', 'Motion', 'Next.js', 'Typescript'].map((tech, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[20px] md:rounded-[30px] text-center text-gray-400 font-mono font-black text-sm md:text-lg hover:text-white hover:border-[#00f2ff]/40 transition-all cursor-default shadow-xl"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-16 md:mb-20 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black mb-6 uppercase tracking-widest">Social Proof</div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">شركاء <span className="text-emerald-400">النجاح</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-xl font-light">
             نتائج حقيقية من أصحاب أعمال قرروا الاستثمار في التميز الرقمي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-white/[0.02] border border-white/10 rounded-[30px] md:rounded-[40px] backdrop-blur-3xl shadow-2xl flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                   <Star key={star} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 flex-grow italic font-light">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-white/5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center font-black text-lg md:text-xl shadow-lg border border-white/20">
                  {t.avatar}
                </div>
                <div className="text-right">
                  <div className="text-white font-black text-sm">{t.name}</div>
                  <div className="text-gray-500 text-[10px] md:text-xs mt-1 font-mono uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">خطط <span className="text-[#ff00e5]">الاستثمار الرقمي</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-2xl font-light">
            أنت لا تدفع مقابل كود، بل تدفع مقابل أرباح مستقبلية لشركتك. اختر بوابتك للنمو.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              tier: "Starter",
              name: "باقة الانطلاقة السحرية",
              desc: "للشركات التي تريد ترك انطباع أول لا ينسى.",
              price: "15,000",
              feats: ['صفحة هبوط (Landing Page) قناصة للعملاء', 'أداء صاروخي (Score 90+)', 'ربط ذكي مع WhatsApp و Analytics', 'دعم فني شامل لمدة شهر'],
              color: "white/5",
              btn: "ابدأ انطلاقتك الآن"
            },
            {
              tier: "Business",
              name: "مضاعف مبيعاتك (الأكثر طلباً)",
              desc: "الحل المتكامل لتحويل كل زائر لعميل وفي.",
              price: "35,000",
              feats: ['موقع متعدد الصفحات بتكتيك مبيعات', 'لوحة تحكم (CMS) سهلة الاستخدم', 'تصميم UX مخصص يزيد معدل التحويل', 'تحسين ظهورك في محركات البحث (SEO)', 'دعم فني 3 أشهر'],
              color: "gradient-to-b from-[#7000ff]/20 to-transparent",
              featured: true,
              btn: "ابدأ النمو الاحترافي"
            },
            {
              tier: "Premium",
              name: "الهيمنة الرقمية الكاملة",
              desc: "للمشاريع التي لا ترضى بأقل من القمة.",
              price: "70,000+",
              feats: ['تطبيق ويب (SaaS) متكامل', 'تكامل مع بوابات الدفع و API', 'أنيميشن Futuristic مبهر وحصري', 'استشارات استراتيجية مجانية', 'أمن فائق وحماية للبيانات'],
              color: "white/5",
              btn: "احجز مشروعك المتميز"
            }
          ].map((plan, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={`p-8 md:p-12 bg-${plan.color} border border-white/10 ${plan.featured ? 'border-[#7000ff]/50 shadow-[0_30px_70px_rgba(112,0,255,0.2)] lg:scale-105 z-20' : ''} rounded-[40px] md:rounded-[50px] flex flex-col h-full backdrop-blur-3xl relative overflow-hidden`}
            >
              {plan.featured && <div className="absolute top-6 left-8 md:top-8 md:left-10 py-1.5 px-4 md:px-5 bg-[#7000ff] text-white text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-xl animate-pulse">Recommended</div>}
              <div className="text-gray-500 font-mono text-[10px] md:text-sm mb-4 md:mb-6 uppercase tracking-[0.25em] font-black">{plan.tier}</div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 leading-tight">{plan.name}</h3>
              <p className="text-gray-400 mb-8 md:mb-10 flex-grow text-sm md:text-lg font-light italic">{plan.desc}</p>
              <div className="text-4xl md:text-6xl font-black mb-8 md:mb-12 tracking-tighter">
                {plan.price} <span className="text-sm md:text-lg font-bold text-gray-500">ج.م</span>
              </div>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                {plan.feats.map((feat, idx) => (
                  <li key={idx} className="flex gap-3 md:gap-4 text-xs md:text-base text-gray-300 font-light">
                    <CheckCircle2 size={18} className={`${plan.featured ? 'text-[#00f2ff]' : 'text-gray-600'} shrink-0`} />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 md:py-6 ${plan.featured ? 'bg-white text-black' : 'bg-white/5 text-white border border-white/10'} rounded-2xl font-black text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl`}>
                {plan.btn}
              </button>
              
              {plan.featured && (
                <div className="mt-8 flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 size={14} />
                  ضمان استرداد أموالك إذا لم يعجبك التصميم
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="relative z-10 bg-white/[0.01]">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-black mb-6 uppercase tracking-widest">Questions & Answers</div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">أسئلة <span className="text-[#00f2ff]">تخطر ببالك</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
             إجابات صريحة لتطمئن تماماً قبل أن نبدأ رحلة النجاح معاً.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-8 bg-white/[0.03] border border-white/10 rounded-[30px] hover:border-purple-500/30 transition-all group"
            >
               <h4 className="text-lg font-black mb-4 group-hover:text-[#00f2ff] transition-colors">{faq.q}</h4>
               <p className="text-gray-400 font-light text-base leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section id="roadmap" className="relative z-10 border-t border-white/5">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 rounded-lg bg-yellow-500/10 text-yellow-500 text-[10px] font-black mb-6 uppercase tracking-widest">Efficiency Plan</div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">كيف أحقق لك <span className="text-yellow-400">النتائج في 14 يوماً؟</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
             الوقت هو المال. إليك الخطة الزمنية المحكمة التي نتبعها لنقلك من الفكرة إلى الربحية في أسبوعين فقط.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {roadmap.map((step, i) => (
            <motion.div 
               key={i}
               whileHover={{ scale: 1.05 }}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.6 }}
               className="p-8 md:p-10 bg-white/[0.02] border border-white/10 rounded-[30px] md:rounded-[40px] backdrop-blur-3xl relative h-full flex flex-col group"
            >
               <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center font-mono text-[10px] md:text-xs font-black z-20">0{i+1}</div>
               <div className="mb-6 md:mb-8 p-3 md:p-4 bg-white/5 rounded-2xl inline-block group-hover:bg-white/10 transition-colors shadow-lg">{step.icon}</div>
               <div className="text-gray-500 text-[10px] font-mono mb-2 tracking-widest">{step.days} Days</div>
               <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 leading-tight">{step.phase}</h3>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                 {step.tasks.map((task, idx) => (
                   <li key={idx} className="flex gap-3 text-xs md:text-sm text-gray-400 font-light border-r border-white/5 pr-3">
                     {task}
                   </li>
                 ))}
               </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-right">
              <h4 className="text-2xl font-black mb-2 text-blue-400">نصيحة الخبراء للسوق المصري:</h4>
              <p className="text-gray-400 text-lg">"العميل في مصر يشتري النتائج أولاً، ثم الجمال ثانياً. اجعل عرضك يركز على توفير الوقت وزيادة الأرباح."</p>
           </div>
           <button className="px-10 py-5 bg-blue-600 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-[0_20px_40px_rgba(59,130,246,0.3)] whitespace-nowrap">
              ابدأ تنفيذ خطتك الآن
           </button>
        </div>
      </Section>

      {/* Futuristic Footer */}
      <footer id="contact" className="relative z-10 pt-20 md:pt-40 pb-10 md:pb-20 px-4 md:px-16 overflow-hidden">
        {/* Massive Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-gradient-to-t from-[#7000ff]/20 via-[#00f2ff]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/[0.02] border border-white/10 rounded-[40px] md:rounded-[60px] p-10 md:p-24 backdrop-blur-3xl overflow-hidden mb-16 md:mb-24"
          >
            {/* Inner Glows */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff00e5]/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00f2ff]/10 blur-[100px] rounded-full" />

            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-8xl lg:text-9xl font-black mb-8 md:mb-12 tracking-tighter leading-tight md:leading-[0.9]">
                لا تترك علامتك <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#7000ff] to-[#ff00e5] animate-pulse">في الماضي</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-3xl max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-light italic">
                "الوقت هو العملة الوحيدة التي لا تُعوض. دعنا نشفر مستقبلك الرقمي اليوم."
              </p>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-12">
                <a href="mailto:cfo.moaz@gmail.com" className="group relative px-12 py-6 md:px-16 md:py-8 bg-white text-black text-xl md:text-2xl font-black rounded-2xl md:rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_30px_70px_rgba(255,255,255,0.2)] overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10">ابدأ الرحلة الآن</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] opacity-0 group-hover:opacity-10 transition-opacity" />
                </a>
                
                <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full animate-ping" />
                      <span className="text-emerald-400 font-mono text-[10px] md:text-sm uppercase tracking-widest font-black">Status: Online</span>
                   </div>
                   <div className="text-2xl md:text-3xl font-mono text-white border-b-2 border-[#7000ff] pb-2">+20 102 868 2259</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social & Meta Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-24 px-4 md:px-0">
            <div className="sm:col-span-2">
              <div className="text-2xl md:text-3xl font-black mb-6 md:mb-8 flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-[#00f2ff] to-[#7000ff] rounded-xl" />
                معاذ رمضان إسماعيل
              </div>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md font-light italic">
                مطور واجهات أمامية متخصص في تحويل الأفكار إلى تجارب بصرية مذهلة وحلول برمجية تنمو معها أعمالك.
              </p>
            </div>
            
            <div className="hidden sm:block">
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h4>
              <ul className="space-y-4 text-gray-500 font-bold text-sm">
                <li><a href="#services" className="hover:text-[#00f2ff] transition-all">الخدمات</a></li>
                <li><a href="#portfolio" className="hover:text-[#7000ff] transition-all">المعرض</a></li>
                <li><a href="#pricing" className="hover:text-[#ff00e5] transition-all">الخطط</a></li>
                <li><a href="#about" className="hover:text-white transition-all">عن معاذ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Social Connect</h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {['LinkedIn', 'Twitter', 'GitHub', 'Behance'].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-[#00f2ff]/50 transition-all text-gray-400 hover:text-[#00f2ff]"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-right">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-gray-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
               <span>&copy; {new Date().getFullYear()} MOAZ RAMADAN</span>
               <div className="hidden md:block w-1 h-1 bg-gray-800 rounded-full" />
               <span>Architect of Future Interfaces</span>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-gray-500 hover:text-white transition-all group font-mono text-[10px] md:text-xs uppercase tracking-widest"
            >
              Back to Top
              <Rocket size={16} className="group-hover:-translate-y-2 transition-transform text-[#00f2ff]" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
