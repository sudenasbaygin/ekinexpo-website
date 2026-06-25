"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Misyon", desc: "Markaların küresel fuar alanlarında en fütüristik ve güçlü mimari dille temsil edilmesini sağlamak." },
  { title: "Vizyon", desc: "Global fuar stand mimarisinde inovasyon, estetik ve premium standartları belirleyen lider marka olmak." },
  { title: "Değerler", desc: "Milimetrik mühendislik kalitesi, sarsılmaz kurumsal güven, zamanında anahtar teslim ve lüks deneyim." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F8] text-[#0A0A0C] px-6 sm:px-12 md:px-16 py-36 relative overflow-hidden font-sans antialiased select-none">
      
      {/* 🔴 BACKGROUND AMBIENCE: Tasarımın kalbi olan o yoğun kırmızı nebula ışığı */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[110vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/[0.05] via-red-600/[0.01] to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[20%] w-[50vw] h-[30vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/[0.04] to-transparent blur-[90px] pointer-events-none z-0" />

      {/* 🧱 MİMARİ MİLİMETRİK GRID ARKA PLAN */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 📐 TEKNİK PARAMETRE VE NİŞANGAHLAR */}
      <div className="absolute top-14 left-12 opacity-[0.2] pointer-events-none uppercase tracking-[0.25em] font-mono text-[9px]">
        STUDIO_PROFILE // MANIFESTO_v1.0
      </div>
      <div className="absolute top-24 right-16 text-red-600/30 font-mono text-base pointer-events-none">+</div >
      <div className="absolute bottom-16 left-16 text-red-600/30 font-mono text-base pointer-events-none">+</div >

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🏛 BAŞLIK ALANI (Üst Düzey Tipografi Kontrolü) */}
        <div className="flex flex-col items-center text-center mb-20 select-none">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.55em] uppercase text-red-600 translate-x-[0.27em]">
              KURUMSAL MANİFESTO
            </span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.3em] uppercase translate-x-[0.15em] leading-none"
          >
            Hakkımızda
          </motion.h1>
          
          <div className="w-24 h-[1px] bg-red-500/40 mt-10 relative">
            <span className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rounded-full" />
          </div>
        </div>

        {/* 📑 MANİFESTO METNİ (Jilet Gibi Temiz Yerleşim) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-28"
        >
          <p className="text-gray-800 text-sm sm:text-base md:text-[17px] font-light tracking-[0.05em] leading-[2.2] px-4">
            Ekinexpo, fuar stand tasarımı ve endüstriyel mimari alanında fütüristik, modüler ve yüksek prestijli çözümler sunan global bir vizyon ortağıdır. 
            <span className="text-black font-normal"> 2000 m² ileri teknoloji üretim laboratuvarı</span> ve <span className="text-black font-normal">35+ disiplinlerarası uzman kadrosu</span> ile, fikir aşamasından anahtar teslim kurulum ve uluslararası lojistik operasyonlarına kadar tüm süreçleri kusursuz bir mimari paftada yönetmektedir.
          </p>
        </motion.div>

        {/* 🎛 BİLGİ KARTLARI (Bitişik Pafta Matrisi - Sıfır Sarsıntı) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black/[0.06] bg-white/[0.35] backdrop-blur-[6px] divide-y md:divide-y-0 md:divide-x divide-black/[0.06] shadow-[0_30px_70px_rgba(0,0,0,0.01)]">
          
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="group relative p-10 sm:p-12 flex flex-col justify-between min-h-[250px] cursor-pointer overflow-hidden transition-all duration-500"
            >
              {/* KART İÇİ MİLİMETRİK TEKNİK GRID */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-all duration-700 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000 1px, transparent 1px),
                    linear-gradient(to bottom, #000 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* HOVER RED NEON SHADOW */}
              <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-red-500/0 group-hover:bg-red-500/[0.06] blur-[40px] rounded-full transition-all duration-700 pointer-events-none" />

              {/* ÜST KATMAN: Başlık ve Köşe Artısı */}
              <div className="flex justify-between items-start relative z-10 w-full mb-6">
                <h2 className="text-gray-900 text-[14px] sm:text-[15px] font-normal tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-black">
                  {v.title}
                </h2>
                <span className="text-black/[0.12] group-hover:text-red-600 group-hover:rotate-90 text-sm font-mono transition-all duration-500">
                  +
                </span>
              </div>

              {/* ALT KATMAN: Açıklama Metni */}
              <div className="relative z-10 mt-auto">
                <p className="text-gray-500 text-[12px] font-light tracking-wide leading-relaxed transition-colors duration-500 group-hover:text-gray-600">
                  {v.desc}
                </p>
              </div>

              {/* Sol Kenardaki Lüks Yükselen Cetvel Çizgisi */}
              <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-red-600 group-hover:h-full transition-all duration-500 ease-in-out" />
            </motion.div>
          ))}

        </div>

        {/* Alt Teknik Bilgi Satırı */}
        <div className="flex justify-between items-center mt-8 px-2 opacity-[0.25] text-[9px] font-mono text-black pointer-events-none select-none tracking-[0.15em]">
          <span>CORE_DOC: 10.44 // MANIFESTO_ACTIVE</span>
          <span>EKINEXPO_ARCH_2026</span>
        </div>

      </div>
    </main>
  );
}