"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // 🏞 Resmin hatasız yüklenmesi için Next.js Image bileşeni

export default function Hero() {
  const ref = useRef(null);

  // Scroll derinlik hissi animasyonları
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  // 🏞 ARKA PLAN GÖRSELİ İÇİN PARALLAKS: Resmin arkada lüks ve yavaş kaymasını sağlar
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="h-screen relative overflow-hidden bg-[#F5F5F7] font-sans antialiased select-none"
    >
      
      {/* 🖼 ARKA PLAN GÖRSELİ (Kod düzenini bozmadan, doğrudan eklenen bg1.png katmanı) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none scale-105"
      >
        <Image
          src="/bg1.png" // public/bg1.png yol kontrolünü yap kanka
          alt="Architecture Background"
          fill
          priority
          className="object-cover object-center opacity-[0.45]" // Filtresiz, orijinal renkleri koruyan netlik ayarı
        />
      </motion.div>

      {/* 🧱 MİMARİ MİLİMETRİK GRID (Resmin üzerinde durarak teknik pafta hissini korur) */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 🔴 MAKSİMUM SEVİYEYE ÇIKARILMIŞ PATLAYAN KIRMIZI ENERJİ KATMANLARI */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        
        {/* 1. KATMAN: Ortam Sıcaklığı (Arka plan görselini kırmızı pusla harmanlar) */}
        <div className="absolute w-[150vw] h-[100vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff1111]/[0.22] via-[#ff3333]/[0.05] to-transparent blur-[150px]" />
        
        {/* 2. KATMAN: SOL DEVASA PATLAMA */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.9, 0.98, 0.9],
            x: [-30, 15, -30],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[90vw] h-[65vh] left-[2%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff1e1e]/85 via-[#ff3c3c]/35 to-transparent blur-[100px] mix-blend-multiply"
        />

        {/* 3. KATMAN: SAĞ DEVASA PATLAMA */}
        <motion.div 
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.95, 0.85, 0.95],
            x: [30, -15, 30],
            y: [10, -10, 10]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[90vw] h-[65vh] right-[2%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff1111]/80 via-[#ff3333]/30 to-transparent blur-[100px] mix-blend-multiply"
        />

        {/* 4. KATMAN: SÜPER AKKOR MERKEZ ÇEKİRDEK */}
        <motion.div 
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[65vw] h-[25vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff0000] via-[#ff2222]/45 to-transparent blur-[50px] mix-blend-multiply" 
        />

        {/* ESTETİK VE AKAN FÜTÜRİSTİK DALGA ÇİZGİLERİ */}
        <div className="absolute w-[125vw] h-[85vh] opacity-[0.42] mix-blend-darken translate-x-[-5vw]">
          <svg 
            className="w-full h-full"
            viewBox="0 0 1440 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="url(#estetik_red_grad)" strokeWidth="1.4">
              <motion.path 
                animate={{ x: [-60, 60] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                d="M50 300 Q 400 60, 720 300 T 1390 300" 
              />
              <motion.path 
                animate={{ x: [60, -60] }} 
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                d="M50 300 Q 480 30, 720 300 T 1390 300" 
              />
              
              {[...Array(6)].map((_, i) => (
                <motion.path 
                  key={i}
                  animate={{ x: [ -80 + (i * 10), 80 - (i * 10) ] }}
                  transition={{ duration: 12 + i, repeat: Infinity, ease: "linear" }}
                  d={`M100 ${295 + i*2} C 300 ${230 + i*7}, 500 ${320 - i*9}, 720 300 C 940 ${260 + i*9}, 1140 ${350 - i*7}, 1340 ${303 - i*2}`} 
                  strokeWidth="0.55" 
                  opacity="0.4"
                />
              ))}
            </g>
            <defs>
              <linearGradient id="estetik_red_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff0000" stopOpacity="0" />
                <stop offset="20%" stopColor="#ff0000" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#ff3B3B" stopOpacity="1" />
                <stop offset="80%" stopColor="#ff0000" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* 📐 KÖŞE NİŞANGAHLARI VE TEKNİK PARAMETRELER */}
      <div className="absolute top-[22%] left-[8%] text-red-600/40 font-mono text-base z-20">+</div >
      <div className="absolute bottom-[28%] right-[10%] text-red-600/40 font-mono text-base z-20">+</div >
      <div className="absolute top-1/2 left-8 text-[9px] font-mono text-black/30 -translate-y-1/2 rotate-90 origin-left tracking-[0.5em] z-20">
        ARCH_MATRIX_ONLINE // 2026
      </div>

      {/* 🏛 İMZA BAŞLIK KATMANI */}
      <div className="h-full flex flex-col items-center justify-center text-center px-4 relative z-30">
        
        <motion.h1
          initial={{ opacity: 0, y: 25, letterSpacing: "0.55em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[55px] sm:text-[95px] md:text-[145px] font-light text-[#0A0A0C] leading-none tracking-[0.4em] translate-x-[0.2em]"
        >
          EKINEXPO
        </motion.h1>

        {/* ALT BAŞLIK */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-gray-900 text-xs sm:text-sm md:text-[13px] font-normal tracking-[0.35em] uppercase leading-relaxed max-w-2xl px-4"
        >
          Fuar Stand Tasarımı & İç Mimarlıkta <br className="sm:hidden" /> Premium Mimari Deneyim
        </motion.p>

        {/* 🚀 LÜKS CETVEL OUTLINE BUTONU */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ 
            scale: 1.02, 
            backgroundColor: "rgba(255, 0, 0, 0.05)",
            borderColor: "#ff0000"
          }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 group flex items-center gap-4 px-10 py-3.5 border border-[#ff0000]/60 text-[#ff0000] text-xs font-medium tracking-[0.25em] uppercase rounded-none transition-all duration-300 backdrop-blur-[1px]"
        >
          <span>Projeleri Keşfet</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 stroke-current" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>

        {/* SCROLL SİMGESİ */}
        <div className="absolute bottom-8 flex flex-col items-center gap-3 text-black/40 pointer-events-none">
          <div className="w-[20px] h-[34px] border border-black/30 rounded-full flex justify-center p-1 relative">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-1 bg-red-600 rounded-full" 
            />
          </div>
          <span className="text-[8px] tracking-[0.35em] uppercase font-mono text-black/60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-600 to-transparent mt-1" />
        </div>

      </div>
    </motion.section>
  );
}