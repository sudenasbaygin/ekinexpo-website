"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Yıl Deneyim" },
  { value: "1000+", label: "Tamamlanan Proje" },
  { value: "2000 m²", label: "Üretim Alanı" },
  { value: "35+", label: "Uzman Ekip" },
];

export default function Stats() {
  return (
    <section className="py-28 px-6 sm:px-12 md:px-16 bg-[#F6F6F8] relative overflow-hidden border-t border-black/[0.03]">
      
      {/* 🔴 BACKGROUND AMBIENCE: Tasarım dilini koruyan yumuşak kızıllık */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[40vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/[0.03] via-transparent to-transparent blur-[100px] pointer-events-none" />

      {/* 🧱 MİMARİ KÖŞE NİŞANGAHLARI */}
      <div className="absolute top-8 left-12 text-red-600/30 font-mono text-base pointer-events-none select-none">+</div >
      <div className="absolute bottom-8 right-12 text-red-600/30 font-mono text-base pointer-events-none select-none">+</div >

      {/* 🎛 PAFTA / METRİK GRID YAPISI */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 border border-black/[0.05] bg-white/[0.35] backdrop-blur-[6px] divide-x divide-y divide-black/[0.05] lg:divide-y-0 shadow-[0_24px_60px_rgba(0,0,0,0.01)] z-10 relative">
        
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            className="group relative p-10 sm:p-12 flex flex-col justify-center items-start text-left min-h-[200px] cursor-pointer overflow-hidden transition-all duration-500"
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

            {/* HOVER RED NEON PARILTI SÜZÜLMESİ */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-red-500/0 group-hover:bg-red-500/[0.06] blur-[40px] rounded-full transition-all duration-700 pointer-events-none" />

            {/* 🔢 Sol Üst Köşedeki Teknik Numaratör */}
            <span className="absolute top-5 left-6 text-[9px] font-mono tracking-[0.2em] text-gray-400 group-hover:text-red-600 transition-colors duration-500">
              METRIC_0{i + 1}
            </span>

            {/* 📊 İSTATİSTİK DEĞERİ (Premium İnce Tipografi Kontrolü) */}
            <h2 className="text-4xl sm:text-5xl md:text-[56px] font-extralight text-[#0A0A0C] tracking-tight leading-none transition-transform duration-500 group-hover:scale-[1.01]">
              {s.value}
            </h2>

            {/* 🏷️ İLİŞKİLİ ETİKET (Mimari Cetvel Çizgili) */}
            <p className="text-gray-500 text-[10px] sm:text-[11px] font-normal tracking-[0.25em] uppercase mt-5 border-l border-black/[0.08] group-hover:border-red-500/50 pl-4 transition-colors duration-500">
              {s.label}
            </p>

            {/* Sağ Alt Köşedeki İnteraktif Mimari Artı Süslemesi */}
            <span className="absolute bottom-5 right-6 opacity-25 text-black group-hover:text-red-600 group-hover:rotate-90 group-hover:opacity-100 text-sm font-mono transition-all duration-500">
              +
            </span>

            {/* Sol Kenardaki Lüks Yükselen Cetvel Çizgisi */}
            <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-red-600 group-hover:h-full transition-all duration-500 ease-in-out" />
          </motion.div>
        ))}

      </div>

      {/* Alt Teknik Bilgi Satırı */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mt-6 px-2 opacity-[0.25] text-[9px] font-mono text-black pointer-events-none select-none tracking-[0.15em]">
        <span>DATA_REF: 88.40 // PERFORMANCE_TRACK</span>
        <span>EKINEXPO_STATS_2026</span>
      </div>
    </section>
  );
}