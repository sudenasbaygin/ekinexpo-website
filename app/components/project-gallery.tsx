"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { id: "01", name: "Alpha Premium Stand", location: "Düsseldorf, Almanya", img: "/proje1.jpeg" },
  { id: "02", name: "Vortex Concept Pavilion", location: "Milano, İtalya", img: "/proje2.jpeg" },
  { id: "03", name: "Minimalist Curve Loft", location: "İstanbul, Türkiye", img: "/proje3.jpeg" },
  { id: "04", name: "Horizon Expo Hall", location: "Paris, Fransa", img: "/proje4.jpeg" },
];

export default function ProjectGallery() {
  return (
    <section className="py-32 px-6 sm:px-12 md:px-16 bg-[#F6F6F8] relative overflow-hidden border-t border-black/[0.03]">
      
      {/* 🔴 BACKGROUND AMBIENCE: Proje alanını da besleyen mimari aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/[0.03] via-transparent to-transparent blur-[120px] pointer-events-none" />

      {/* 📐 MİMARİ KILAVUZ PARAMETRELERİ */}
      <div className="absolute top-14 left-12 opacity-[0.2] pointer-events-none uppercase tracking-[0.25em] font-mono text-[9px] text-black">
        PORTFOLIO MATRIX // INDEX_v2
      </div>

      {/* 🏛 BAŞLIK ALANI (Premium Tipografi Kontrolü) */}
      <div className="flex flex-col items-center text-center mb-24 select-none relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
          <span className="text-[9px] font-mono tracking-[0.55em] uppercase text-red-600 translate-x-[0.27em]">
            SEÇİLİ İŞLER
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extralight text-[#0A0A0C] leading-none tracking-[0.35em] uppercase translate-x-[0.17em]">
          Projelerimiz
        </h2>
        <div className="w-24 h-[1px] bg-red-500/40 mt-10 relative">
          <span className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rounded-full" />
        </div>
      </div>

      {/* 🖼 PAFTA / BITIŞIK PROJE GRIDI (Lüks Mimari Pafta Düzeni) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative border border-black/[0.08] bg-white/[0.2] backdrop-blur-[4px] z-10 shadow-[0_30px_70px_rgba(0,0,0,0.015)] divide-x divide-y divide-black/[0.08] lg:divide-y-0">
        
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            className="group relative h-[420px] cursor-pointer overflow-hidden rounded-none bg-[#EAEAEA] transition-all duration-500"
          >
            {/* 📸 PROJE FOTOĞRAFI (Geliştirilmiş Sinematik Lens Filtresi) */}
            <Image
              src={p.img}
              alt={p.name}
              fill
              className="
                object-cover transition-transform duration-[900ms] cubic-bezier(0.16, 1, 0.3, 1)
                brightness-[0.8] contrast-[1.02] saturate-[0.85]
                group-hover:scale-105
                group-hover:brightness-[0.7]
                group-hover:saturate-[0.95]
              "
            />

            {/* 🖤 GRADIENT OVERLAY (Yazıların jilet gibi okunması için mimari degrade) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.85] via-black/[0.15] to-transparent group-hover:from-black/[0.9] transition-all duration-500" />

            {/* SOL ÜST KÖŞE TEKNİK PARAMETRE */}
            <div className="absolute top-6 left-6 font-mono text-[9px] text-white/30 group-hover:text-red-400 group-hover:tracking-[0.2em] transition-all duration-500">
              PRJ_REF // {p.id}
            </div>

            {/* PROJE BİLGİ KATMANI (Sarsıntısız, İzole Flex Alanı) */}
            <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end h-[160px]">
              
              {/* Lokasyon Bilgisi */}
              <span className="text-red-500 text-[9px] font-mono tracking-[0.22em] uppercase mb-2">
                {p.location}
              </span>

              {/* Proje Adı */}
              <h3 className="text-white text-[14px] sm:text-[15px] font-light tracking-[0.15em] uppercase leading-tight group-hover:text-white/90 transition-colors duration-300">
                {p.name}
              </h3>
              
              {/* Detay Sürücüsü (Layout Shift yaratmayan, aşağıdan süzülen ince akış) */}
              <div className="flex items-center justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mt-4 pt-3 border-t border-white/[0.07] group-hover:border-white/[0.15]">
                <span className="text-[8px] font-mono text-white/50 tracking-[0.25em]">
                  VIEW_CASE_STUDY
                </span>
                <svg 
                  className="w-4 h-4 stroke-white/70 group-hover:stroke-red-500 transform group-hover:translate-x-1 transition-all duration-500" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Kartın Alt Sınırında Sağa Doğru Uzayan Premium İnce Kırmızı Çizgi */}
            <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500 ease-in-out" />
          </motion.div>
        ))}

      </div>

      {/* Alt Teknik Kılavuz Çizgisi */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mt-6 px-2 opacity-[0.25] text-[9px] font-mono text-black pointer-events-none select-none tracking-[0.15em]">
        <span>GALLERY_MATRIX // SHUTTER_ACTIVE</span>
        <span>EKINEXPO_PROJ_2026</span>
      </div>
    </section>
  );
}