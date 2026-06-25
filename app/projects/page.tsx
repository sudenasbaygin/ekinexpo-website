"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Gerçek verilerine göre burayı güncelleyebilirsin
const allProjects = [
  { id: "01", name: "Alpha Premium Stand", location: "Düsseldorf, Almanya", category: "fuar", img: "/proje1.jpeg" },
  { id: "02", name: "Vortex Concept Pavilion", location: "Milano, İtalya", category: "fuar", img: "/proje2.jpeg" },
  { id: "03", name: "Minimalist Curve Loft", location: "İstanbul, Türkiye", category: "ic-mimari", img: "/proje3.jpeg" },
  { id: "04", name: "Horizon Expo Hall", location: "Paris, Fransa", category: "fuar", img: "/proje4.jpeg" },
  { id: "05", name: "Nexus Corporate Headquarters", location: "Berlin, Almanya", category: "ic-mimari", img: "/proje1.jpeg" },
  { id: "06", name: "Zenith Showroom Concept", location: "Londra, İngiltere", category: "ic-mimari", img: "/proje2.jpeg" },
  { id: "07", name: "Quantum Modular Pavilion", location: "Dubai, BAE", category: "fuar", img: "/proje3.jpeg" },
  { id: "08", name: "Aura Luxury Residence", location: "İzmir, Türkiye", category: "ic-mimari", img: "/proje4.jpeg" },
];

const categories = [
  { id: "all", label: "TÜMÜ" },
  { id: "fuar", label: "FUAR STAND TASARIMI" },
  { id: "ic-mimari", label: "İÇ MİMARİ PROJELER" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F6F6F8] text-[#0A0A0C] px-6 sm:px-12 md:px-16 py-36 relative overflow-hidden font-sans antialiased select-none">
      
      {/* 🔴 BACKGROUND AMBIENCE: Yoğun kırmızı duman aurası arka plan bağlantısı */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[110vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/[0.04] via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      {/* 🧱 MİMARİ MİLİMETRİK GRID DOKUSU */}
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
        ARCHIVE_MATRIX // TOTAL_ITEMS_{allProjects.length}
      </div>
      <div className="absolute top-24 right-16 text-red-600/30 font-mono text-base pointer-events-none">+</div >

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🏛 BAŞLIK ALANI (Premium Tipografi Kontrolü) */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.55em] uppercase text-red-600 translate-x-[0.27em]">
              MASTER WORK PORTFOLIO
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-[0.3em] uppercase translate-x-[0.15em] leading-none">
            Projelerimiz
          </h1>
          <div className="w-24 h-[1px] bg-red-500/40 mt-10 relative">
            <span className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rounded-full" />
          </div>
        </div>

        {/* 🎛 INTERAKTİF FILTRELEME BUTONLARI (Kusursuz Cetvel Çizgili) */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-20 border-b border-black/[0.05] pb-6 text-[10px] font-mono tracking-[0.25em]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`relative pb-2 uppercase transition-all duration-300
                ${activeFilter === cat.id ? "text-red-600" : "text-black/40 hover:text-black"}`}
            >
              <span>{cat.label}</span>
              {activeFilter === cat.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-red-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 🖼 PROJE PORTFOLYO GRIDI (Filtre Geçişleri Sarsıntısız ve Animasyonlu) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/[0.08] bg-white/[0.2] backdrop-blur-[4px] divide-x divide-y divide-black/[0.08] [&>*:nth-child(4n+1)]:border-l-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={p.id}
                className="group relative h-[380px] cursor-pointer overflow-hidden rounded-none bg-[#EAEAEA]"
              >
                {/* 📸 PROJE FOTOĞRAFI */}
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="
                    object-cover transition-transform duration-[900ms] cubic-bezier(0.16, 1, 0.3, 1)
                    brightness-[0.8] contrast-[1.02] saturate-[0.85]
                    group-hover:scale-105
                    group-hover:brightness-[0.7]
                  "
                />

                {/* 🖤 GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.85] via-black/[0.15] to-transparent group-hover:from-black/[0.9] transition-all duration-500" />

                {/* SOL ÜST KÖŞE TEKNİK PARAMETRE */}
                <div className="absolute top-6 left-6 font-mono text-[9px] text-white/30 group-hover:text-red-400 group-hover:tracking-[0.2em] transition-all duration-500">
                  REF_{p.id}
                </div>

                {/* PROJE BİLGİ KATMANI */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end h-[160px]">
                  <span className="text-red-500 text-[9px] font-mono tracking-[0.22em] uppercase mb-2">
                    {p.location}
                  </span>
                  <h3 className="text-white text-[13px] sm:text-[14px] font-light tracking-[0.15em] uppercase leading-tight">
                    {p.name}
                  </h3>
                  
                  {/* Sarsıntısız Detay Sürücüsü */}
                  <div className="flex items-center justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mt-4 pt-3 border-t border-white/[0.07] group-hover:border-white/[0.15]">
                    <span className="text-[8px] font-mono text-white/50 tracking-[0.25em]">
                      CASE_DETAILS
                    </span>
                    <svg className="w-4 h-4 stroke-white/70 group-hover:stroke-red-500 transform group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Sol Sınırda Yükselen Lüks Cetvel Çizgisi */}
                <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-red-600 group-hover:h-full transition-all duration-500 ease-in-out" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Alt Teknik Bilgi Satırı */}
        <div className="flex justify-between items-center mt-8 px-2 opacity-[0.25] text-[9px] font-mono text-black pointer-events-none select-none tracking-[0.15em]">
          <span>GRID_RENDER: COMPLETED // SYS_2026</span>
          <span>EKINEXPO_PORTFOLIO</span>
        </div>

      </div>
    </main>
  );
}