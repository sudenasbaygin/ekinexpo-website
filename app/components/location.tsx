"use client";

export default function Location() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#F8F8F8] relative overflow-hidden select-none">
      
      {/* BAŞLIK ALANI (Ferah ve Mimari Dile Uygun) */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-red-500 mb-2">
          BİZE ULAŞIN
        </span>
        <h2 className="text-2xl sm:text-3xl font-light text-black tracking-[0.25em] uppercase">
          Konumumuz
        </h2>
      </div>

      {/* DENGELİ, YUMUŞATILMIŞ VE SİYAH-BEYAZ HARİTA ALANI */}
      <div className="max-w-7xl mx-auto rounded-md overflow-hidden border border-black/[0.04] shadow-[0_4px_25px_rgba(0,0,0,0.01)] relative z-10 bg-white p-2">
        
        <div className="relative w-full h-[450px] overflow-hidden rounded-[4px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6502092147135!2d28.823908!3d40.989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzIwLjgiTiAyOMKwNDknMjYuMSJF!5e0!3m2!1str!2str!4v1623700000000!5m2!1str!2str" 
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            title="Ekinexpo Location"
            className="w-full h-full border-0 transition-all duration-700
              /* 🔥 HARİTAYI SİYAH-BEYAZ VE PREMİUM YAPAN CSS FİLTRELERİ */
              grayscale contrast-[1.1] brightness-[0.95] invert-[0.02]
              hover:grayscale-0 hover:contrast-100 hover:brightness-100
            "
          />
          
          {/* Haritanın üstündeki sert renk geçişlerini yumuşatan çok hafif teknik katman */}
          <div className="absolute inset-0 pointer-events-none border border-black/[0.05] rounded-[4px]" />
        </div>

      </div>

      {/* Sağ Alttaki Teknik Koordinat Süslemesi (Boşluğu estetik olarak doldurur) */}
      <div className="max-w-7xl mx-auto flex justify-end mt-4 px-2 opacity-[0.2] text-[9px] font-mono text-black pointer-events-none">
        <span>LOC_REF // LAT: 40.9891° N // LNG: 28.8239° E</span>
      </div>
    </section>
  );
}