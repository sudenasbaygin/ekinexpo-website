"use client";

import { motion } from "framer-motion";

const highEndServices = [
  {
    id: "01",
    title: "Fuar Stand Tasarımı & Uygulama",
    desc: "Uluslararası fuar arenalarında markanızın gücünü ve vizyonunu sahneye taşıyan fütüristik, modüler ve ahşap stand çözümleri sunuyoruz. Fikir aşamasından anahtar teslim kuruluma kadar her adımı titizlikle yönetiyoruz.",
    size: "lg:col-span-2",
  },
  {
    id: "02",
    title: "İç Mimari & Showroom",
    desc: "Kurumsal genel merkezler, lüks showroomlar ve prestijli ofis alanları için kalıcı konsept tasarımları geliştiriyoruz. Marka değerinizi fiziksel mekana kusursuzca yansıtıyoruz.",
    size: "lg:col-span-1",
  },
  {
    id: "03",
    title: "Özel Mobilya Seçkisi",
    desc: "Stand ve etkinlik alanlarınıza tam uyum sağlayan, dünya trendlerini ve lüks estetiği yansıtan özel tasarım kiralık mobilya, aydınlatma ve dijital ekran çözümleri sunuyoruz.",
    size: "lg:col-span-1",
  },
  {
    id: "04",
    title: "Global Operasyon & Lojistik",
    desc: "Almanya, İtalya, Fransa başta olmak üzere dünya genelindeki tüm fuar merkezlerinde anahtar teslim kurulum, yerel fuar idaresi onay süreçleri, depolama ve güvenli lojistik yönetimi sağlıyoruz.",
    size: "lg:col-span-2",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F8] text-[#0A0A0C] px-6 sm:px-12 md:px-20 py-44 relative overflow-hidden font-sans antialiased select-none">
      
      {/* 📐 MİMARİ GEOMETRİK DESEN (Sade ekranı kurtaran ince doku) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #BA1A1A 1px, transparent 1px),
            linear-gradient(to bottom, #BA1A1A 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* 🔴 BACKGROUND AMBIENCE: Boşluğu dolduran, yoğunlaştırılmış dramatik kırmızı ışık dalgaları */}
      <div className="absolute top-[15%] left-[-10%] w-[60vw] h-[50vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/[0.06] to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[70vw] h-[50vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/[0.05] to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🏛 BAŞLIK ALANI (Altındaki kırmızı şerit ve parlayan nokta ile güçlendirildi) */}
        <div className="flex flex-col items-start mb-24 border-b border-black/[0.06] pb-12 relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-red-600 uppercase">
              KURUMSAL ÇÖZÜMLER
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extralight tracking-[0.25em] uppercase text-black">
            Hizmetlerimiz
          </h1>
          
          {/* Başlığın altındaki lüks kırmızı cetvel çizgisi nirengi noktası */}
          <div className="absolute bottom-0 left-0 h-[2px] w-20 bg-red-600" />
        </div>

        {/* 🎛 PREMİUM MATRİS (İçi kırmızı aura ve degrade dolgulu yeni nesil yapı) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-black/[0.08] bg-white/[0.4] backdrop-blur-[8px] divide-y lg:divide-y-0 divide-black/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.02)]">
          {highEndServices.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className={`group relative p-10 sm:p-12 flex flex-col justify-between min-h-[320px] cursor-pointer transition-all duration-500 bg-white/[0.2] ${s.size} lg:border-r lg:border-b border-black/[0.08] [&:nth-child(3)]:border-r-0`}
            >
              {/* 🛑 HOVER ANINDA ALTTAN SÜZÜLEN KIRMIZIMSI LÜKS GRADYAN (Boşluk hissini yok eder) */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
              
              {/* Kartın sağ alt köşesinde gizli, hover anında hafifçe parlayan kırmızı neon halkası */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-red-500/0 group-hover:bg-red-500/[0.08] blur-[30px] rounded-full transition-all duration-500 pointer-events-none z-0" />

              {/* Sol Kenardaki İnce Kırmızı Kılavuz Çizgisi */}
              <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-red-600 group-hover:h-full transition-all duration-500 ease-in-out z-10" />

              {/* ÜST BÖLÜM: Sıra Numarası (Hover durumunda kırmızıya döner) */}
              <div className="font-mono text-[11px] text-black/20 group-hover:text-red-600 font-medium transition-colors duration-300 relative z-10">
                // 0{s.id}
              </div>

              {/* ORTA BÖLÜM: Temiz ve Net Tipografi */}
              <div className="my-auto pt-6 relative z-10">
                <h2 className="text-gray-950 text-xl font-light tracking-wide uppercase mb-4 transition-colors duration-300 group-hover:text-black">
                  {s.title}
                </h2>
                <p className="text-gray-500 text-[13px] font-light tracking-wide leading-[1.8] max-w-[95%] transition-colors duration-500 group-hover:text-gray-800">
                  {s.desc}
                </p>
              </div>

              {/* ALT BÖLÜM: İnceleme Alanı (Kırmızı ok transformasyonu) */}
              <div className="mt-8 pt-4 border-t border-black/[0.04] flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all duration-300 relative z-10">
                <span className="text-[9px] tracking-widest text-black font-medium group-hover:text-red-600 transition-colors">DETAYLARI İNCELE</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-red-600 font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alt Bilgi Teknik Çizgisi */}
        <div className="flex justify-between items-center mt-12 px-2 opacity-[0.25] text-[9px] font-mono text-black pointer-events-none select-none tracking-[0.15em]">
          <span>EKINEXPO_2026 // DESIGN_SYSTEM</span>
          <span>SADECE_PREMIUM_KURULUMLAR</span>
        </div>

      </div>
    </main>
  );
}