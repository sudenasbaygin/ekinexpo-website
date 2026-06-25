"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gönderim motoru buraya bağlanacak
    console.log("Form Data:", form);
  };

  return (
    <main className="min-h-screen bg-[#F6F6F8] text-[#0A0A0C] px-6 sm:px-12 md:px-20 py-44 relative overflow-hidden font-sans antialiased select-none">
      
      {/* 📐 MİMARİ GEOMETRİK DESEN (Tüm siteyle uyumlu ince kırmızı kılavuz çizgileri) */}
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

      {/* 🔴 BACKGROUND AMBIENCE: Boşluğu yok eden lüks kırmızı ışık auraları */}
      <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[50vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/[0.05] to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/[0.04] to-transparent blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🏛 BAŞLIK ALANI */}
        <div className="flex flex-col items-start mb-24 border-b border-black/[0.06] pb-12 relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-red-600 uppercase">
              KÜRESEL BAĞLANTI
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extralight tracking-[0.25em] uppercase text-black">
            İletişim
          </h1>
          <div className="absolute bottom-0 left-0 h-[2px] w-20 bg-red-600" />
        </div>

        {/* 🎛 İLETİŞİM BLOKLARI (2 Sütunlu Dengeli ve Dolgun Yapı) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/[0.08] bg-white/[0.4] backdrop-blur-[8px] divide-y lg:divide-y-0 lg:divide-x divide-black/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.02)]">
          
          {/* SOL SÜTUN: Kurumsal Merkez Bilgileri */}
          <div className="lg:col-span-5 p-10 sm:p-14 flex flex-col justify-between min-h-[450px] relative bg-white/[0.1]">
            <div>
              <span className="text-red-600 font-mono text-[10px] tracking-[0.2em] uppercase block mb-8">// HEADQUARTERS</span>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-[11px] font-mono tracking-widest text-black/40 uppercase mb-2">Merkez Ofis</h3>
                  <p className="text-gray-800 font-light text-base leading-relaxed tracking-wide max-w-xs">
                    Maslak Mahallesi, Büyükdere Caddesi No:243/4 <br />
                    Sarıyer / İstanbul
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-mono tracking-widest text-black/40 uppercase mb-2">Doğrudan Hat</h3>
                  <p className="text-gray-900 font-light text-lg tracking-wide hover:text-red-600 transition-colors cursor-pointer">
                    +90 (212) 234 56 78
                  </p>
                  <p className="text-gray-500 font-light text-sm tracking-wide hover:text-red-600 transition-colors cursor-pointer mt-1">
                    info@ekinexpo.com
                  </p>
                </div>
              </div>
            </div>

            {/* Alt Detay: Global Operasyon Saat Kılavuzu */}
            <div className="mt-12 pt-6 border-t border-black/[0.04] flex justify-between items-center text-[10px] font-mono text-black/50">
              <span>ÇALIŞMA SAATLERİ: 09:00 - 18:00</span>
              <span className="text-red-600 font-medium">GMT +3</span>
            </div>
          </div>

          {/* SAĞ SÜTUN: Premium Teklif & İletişim Formu */}
          <form 
            onSubmit={handleSubmit}
            className="lg:col-span-7 p-10 sm:p-14 flex flex-col justify-between relative bg-white/[0.2]"
          >
            {/* Hover anında alttan gelen o çok hafif lüks kırmızı parıltı */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="space-y-8 w-full">
              <span className="text-black/30 font-mono text-[10px] tracking-[0.2em] uppercase block mb-4">// PROJE BAŞLATIN</span>
              
              {/* INPUT: İsim */}
              <div className="relative border-b border-black/[0.1] focus-within:border-red-600 transition-colors duration-300 pb-2">
                <label className="block text-[9px] font-mono tracking-widest text-black/40 uppercase mb-1">ADINIZ & SOYADINIZ</label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-transparent border-none outline-none p-0 text-gray-900 font-light text-sm tracking-wide placeholder-gray-300"
                  placeholder="John Doe"
                />
              </div>

              {/* INPUT: E-posta */}
              <div className="relative border-b border-black/[0.1] focus-within:border-red-600 transition-colors duration-300 pb-2">
                <label className="block text-[9px] font-mono tracking-widest text-black/40 uppercase mb-1">E-POSTA ADRESİNİZ</label>
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-transparent border-none outline-none p-0 text-gray-900 font-light text-sm tracking-wide placeholder-gray-300"
                  placeholder="john@studio.com"
                />
              </div>

              {/* INPUT: Mesaj */}
              <div className="relative border-b border-black/[0.1] focus-within:border-red-600 transition-colors duration-300 pb-2">
                <label className="block text-[9px] font-mono tracking-widest text-black/40 uppercase mb-1">PROJE DETAYLARI / MESAJINIZ</label>
                <textarea 
                  rows={3}
                  required
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full bg-transparent border-none outline-none p-0 text-gray-900 font-light text-sm tracking-wide placeholder-gray-300 resize-none mt-1 leading-relaxed"
                  placeholder="Fuar lokasyonu, stand m² ölçüleri ve vizyonunuz hakkında kısa bir bilgi..."
                />
              </div>
            </div>

            {/* Premium Gönder Butonu */}
            <div className="mt-12 pt-6 border-t border-black/[0.04] flex justify-end items-center">
              <button 
                type="submit"
                className="group relative px-8 py-3.5 bg-[#0A0A0C] text-[#F6F6F8] font-mono text-[10px] tracking-[0.3em] uppercase overflow-hidden transition-transform active:scale-[0.98]"
              >
                {/* Buton içindeki akışkan kırmızı hover efekti */}
                <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-400 ease-out group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-3">
                  TALEBİ GÖNDER <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>
          </form>

        </div>

        {/* Alt Bilgi Teknik Çizgisi */}
        <div className="flex justify-between items-center mt-12 px-2 opacity-[0.25] text-[9px] font-mono text-black pointer-events-none select-none tracking-[0.15em]">
          <span>EKINEXPO_2026 // GLOBAL_DESK</span>
          <span>SECURE_ENCRYPTED_FORM</span>
        </div>

      </div>
    </main>
  );
}