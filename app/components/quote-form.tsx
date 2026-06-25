"use client";

import { motion } from "framer-motion";

export default function CTAForm() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#F8F8F8] relative overflow-hidden select-none">
      
      {/* BAŞLIK ALANI (Ferah ve Minimalist) */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-red-500 mb-2">
          PROJE BAŞLATIN
        </span>
        <h2 className="text-2xl sm:text-3xl font-light text-black tracking-[0.25em] uppercase">
          Teklif Al
        </h2>
      </div>

      {/* DENGELİ VE GÖZÜ YORMAYAN FORM ALANI */}
      <div className="max-w-xl mx-auto bg-white p-8 md:p-10 border border-black/[0.03] rounded-md shadow-[0_4px_25px_rgba(0,0,0,0.015)] relative z-10">
        
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* İsim İnput Grubu */}
          <div className="relative group">
            <input 
              type="text"
              required
              className="w-full py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:placeholder-gray-300 text-[13px] font-light tracking-[0.05em] uppercase focus:outline-none focus:border-red-500 transition-colors duration-300" 
              placeholder="Ad Soyad" 
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-500 group-focus-within:w-full transition-all duration-300" />
          </div>

          {/* Email İnput Grubu */}
          <div className="relative group">
            <input 
              type="email"
              required
              className="w-full py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:placeholder-gray-300 text-[13px] font-light tracking-[0.05em] uppercase focus:outline-none focus:border-red-500 transition-colors duration-300" 
              placeholder="E-Posta Adresi" 
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-500 group-focus-within:w-full transition-all duration-300" />
          </div>

          {/* Fuar Adı İnput Grubu */}
          <div className="relative group">
            <input 
              type="text"
              required
              className="w-full py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:placeholder-gray-300 text-[13px] font-light tracking-[0.05em] uppercase focus:outline-none focus:border-red-500 transition-colors duration-300" 
              placeholder="Fuar Adı / Konsept" 
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-500 group-focus-within:w-full transition-all duration-300" />
          </div>

          {/* Metrekare İnput Grubu */}
          <div className="relative group">
            <input 
              type="text"
              required
              className="w-full py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:placeholder-gray-300 text-[13px] font-light tracking-[0.05em] uppercase focus:outline-none focus:border-red-500 transition-colors duration-300" 
              placeholder="Talep Edilen Alan (m²)" 
            />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-500 group-focus-within:w-full transition-all duration-300" />
          </div>

          {/* PREMİUM VE SAKİN GÖNDER BUTONU */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.01, backgroundColor: "#ef4444", borderColor: "#ef4444" }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3.5 bg-transparent border border-red-500/40 text-red-500 hover:text-white text-xs font-normal tracking-[0.2em] uppercase rounded-sm transition-colors duration-300 flex items-center justify-center gap-3 group"
            >
              <span>Talebi Gönder</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 stroke-red-500 group-hover:stroke-white" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>

        </form>
      </div>

      {/* Arka plandaki dumanlı kırmızı soft ışık dengesi */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vh] bg-red-500/[0.015] blur-[80px] rounded-full pointer-events-none" />
    </section>
  );
}