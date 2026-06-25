"use client";

import { motion } from "framer-motion";

const services = [
  { id: "01", name: "Fuar Stand Tasarımı", desc: "Markanıza özel fütüristik, modüler ve akılda kalıcı premium stand çözümleri." },
  { id: "02", name: "İç Mimari Projeler", desc: "Kurumsal kimliğinizi ve vizyonunuzu kusursuzca yansıtan lüks mekan tasarımları." },
  { id: "03", name: "Mobilya Kiralama", desc: "Konsept tasarımlara tam uyum sağlayan, küratörlü özel tasarım mobilya seçkisi." },
  { id: "04", name: "Uluslararası Fuar Desteği", desc: "Dünyanın her noktasında anahtar teslim kurulum, lojistik ve global operasyon yönetimi." },
];

export default function ServicesGrid() {
  return (
    <section className="py-36 px-6 sm:px-12 md:px-16 bg-[#F6F6F8] relative overflow-hidden border-t border-black/[0.03]">
      
      {/* 🔴 BACKGROUND AMBIENCE: Hero alanı ile devamlılık sağlayan yumuşak mimari kızıllık */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[60vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/[0.04] via-transparent to-transparent blur-[130px] pointer-events-none" />

      {/* 📐 MİMARİ KILAVUZ PARAMETRELERİ */}
      <div className="absolute top-14 left-12 opacity-[0.2] pointer-events-none uppercase tracking-[0.25em] font-mono text-[9px] text-black">
        Scale 1:20 // Grid System v2.6
      </div>
      <div className="absolute right-16 top-14 opacity-[0.2] text-red-600 font-mono text-[9px] tracking-[0.25em] pointer-events-none select-none">
        [SYS_SERVICE_MATRIX]
      </div>

      {/* 🏛 BAŞLIK ALANI (Premium Tipografi Kontrolü) */}
      <div className="flex flex-col items-center text-center mb-28 select-none relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
          <span className="text-[9px] font-mono tracking-[0.55em] uppercase text-red-600 translate-x-[0.27em]">
            MİMARİ ÇÖZÜMLER
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-[#0A0A0C] leading-none tracking-[0.35em] uppercase translate-x-[0.17em]">
          Hizmetlerimiz
        </h2>
        <div className="w-24 h-[1px] bg-red-500/40 mt-10 relative">
          <span className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rounded-full" />
        </div>
      </div>

      {/* 🎛 PAFTA / GRID YAPISI (Tam Matris Sınırları) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative border border-black/[0.05] bg-white/[0.35] backdrop-blur-[6px] z-10 shadow-[0_30px_70px_rgba(0,0,0,0.01)]">
        
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            className={`group relative p-10 flex flex-col justify-between min-h-[360px] cursor-pointer transition-all duration-700 ease-out overflow-hidden
              ${i > 0 ? 'lg:border-l border-black/[0.05]' : ''}
              ${i % 2 !== 0 ? 'sm:border-l lg:border-l-0' : ''}
              ${i >= 2 ? 'border-t border-black/[0.05] lg:border-t-0' : ''}
            `}
          >
            {/* KART İÇİ MİLİMETRİK GRID DOKUSU */}
            <div 
              className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.04] transition-all duration-700 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #000 1px, transparent 1px),
                  linear-gradient(to bottom, #000 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            />

            {/* HOVER RED NEON SHADOW FLUID */}
            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-red-500/0 group-hover:bg-red-500/[0.08] blur-[50px] rounded-full transition-all duration-700 pointer-events-none" />

            {/* ÜST KATMAN: Numaratör Yapısı */}
            <div className="flex justify-between items-start relative z-10">
              <div className="font-mono text-[9px] text-gray-400 group-hover:text-red-600 transition-colors duration-500 flex items-center gap-2 tracking-[0.15em]">
                <span className="w-1 h-[1px] bg-gray-300 group-hover:bg-red-600 group-hover:w-5 transition-all duration-500" />
                <span>SEC_{s.id}</span>
              </div>
              <span className="text-black/[0.12] group-hover:text-red-600 group-hover:rotate-90 text-sm font-mono transition-all duration-500">
                +
              </span>
            </div>

            {/* METİN VE İKON ALANI (Sıralama Sabitlendi, Sarsıntı Engellendi) */}
            <div className="mt-auto relative z-10 flex flex-col h-[150px] justify-end">
              
              {/* Hizmet İsmi */}
              <h3 className="text-gray-900 text-[14px] sm:text-[15px] font-normal tracking-[0.18em] uppercase transition-colors duration-500 group-hover:text-black">
                {s.name}
              </h3>
              
              {/* Açıklama Metni (Sarsıntısız Opaklık ve Yumuşak Y Ekseni Kayması) */}
              <div className="h-[55px] mt-2 relative overflow-hidden">
                <p className="text-gray-400 text-[11px] font-light tracking-wide leading-relaxed max-w-[95%] transition-all duration-500 ease-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-gray-500">
                  {s.desc}
                </p>
              </div>

              {/* Teknik İnce Çizgi ve Ok Sürücüsü */}
              <div className="w-full flex items-center justify-between mt-4 pt-4 border-t border-black/[0.03] group-hover:border-red-500/20 transition-colors duration-500">
                <span className="text-[8px] font-mono text-gray-300 tracking-[0.2em] group-hover:text-red-600/70 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 group-hover:translate-x-0">
                  VIEW_SPECIFICATIONS
                </span>
                <svg 
                  className="w-5 h-5 stroke-black group-hover:stroke-red-600 transform group-hover:translate-x-1 transition-all duration-500" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Sol Kenardaki Cetvel Çizgisi (Lüks İtalyan Tarzı Kusursuz Akış) */}
            <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-red-600 group-hover:h-full transition-all duration-500 ease-in-out" />
          </motion.div>
        ))}

      </div>

      {/* Alt Teknik Kılavuz Çizgisi */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mt-6 px-2 opacity-[0.25] text-[9px] font-mono text-black pointer-events-none select-none tracking-[0.15em]">
        <span>SYS_REF: 44.02 // CORE_GRID_ACTIVE</span>
        <span>EKINEXPO_CORP_2026</span>
      </div>
    </section>
  );
}