import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-8 md:px-16 bg-[#F8F8F8] border-t border-black/[0.05] text-[#1A1A1A] select-none relative">
      
      {/* 🧱 ARKA PLAN SÜSÜ: Teknik Köşe Artısı */}
      <div className="absolute top-0 left-12 text-red-500/30 text-xs font-mono pointer-events-none select-none -translate-y-1/2">
        +
      </div>

      {/* ANA İÇERİK GRİDİ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-black/[0.04]">
        
        {/* 1. SÜTUN: LOGO & ÖZET */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col">
            <h3 className="text-base font-light tracking-[0.35em] uppercase text-black">
              Ekinexpo
            </h3>
            <span className="text-[9px] font-mono text-red-500/60 tracking-[0.25em] uppercase mt-0.5">
              Architectural Bureau
            </span>
          </div>
          <p className="text-gray-400 text-[11px] font-light tracking-wide leading-relaxed mt-2 max-w-[220px]">
            Fuar stand tasarımında fütüristik çizgiler ve premium mimari deneyimler.
          </p>
        </div>

        {/* 2. SÜTUN: HIZLI LİNKLER */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400">// MENÜ</span>
          <div className="flex flex-col gap-2.5 text-[11px] font-light tracking-[0.15em] uppercase">
            <Link href="/" className="text-gray-600 hover:text-red-500 transition-colors">Anasayfa</Link>
            <Link href="/about" className="text-gray-600 hover:text-red-500 transition-colors">Hakkımızda</Link>
            <Link href="/projects" className="text-gray-600 hover:text-red-500 transition-colors">Projelerimiz</Link>
            <Link href="/services" className="text-gray-600 hover:text-red-500 transition-colors">Hizmetler</Link>
          </div>
        </div>

        {/* 3. SÜTUN: SOSYAL MEDYA / İNDEKS */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400">// NETWORK</span>
          <div className="flex flex-col gap-2.5 text-[11px] font-light tracking-[0.15em] uppercase">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500 transition-colors">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500 transition-colors">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500 transition-colors">Pinterest</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500 transition-colors">Behance</a>
          </div>
        </div>

        {/* 4. SÜTUN: İLETİŞİM & ADRES */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400">// HQ_CONTACT</span>
          <div className="flex flex-col gap-2">
            <a 
              href="mailto:info@ekinexpo.com" 
              className="text-[12px] font-light tracking-[0.1em] text-black hover:text-red-500 transition-colors uppercase"
            >
              info@ekinexpo.com
            </a>
            <p className="text-gray-400 text-[11px] font-light tracking-wide leading-relaxed max-w-[240px]">
              Fuar ve Mimarlık Merkezi, No:44 <br /> İstanbul, Türkiye
            </p>
          </div>
        </div>

      </div>

      {/* EN ALT KATMAN: Telif Hakları ve Pafta Bilgileri */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-400/80">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          <span>&copy; 2026 EKINEXPO. ALL RIGHTS RESERVED.</span>
        </div>
        
        {/* Görseldeki o ince mimari kod satırı */}
        <div className="hidden md:flex items-center gap-6 text-[9px] opacity-60">
          <span>SPEC_SYS // V2.0.26</span>
          <span>COORDINATES: 40.9891° N // 28.8239° E</span>
          <span className="text-red-500/70">GRID_ACTIVE</span>
        </div>
      </div>

    </footer>
  );
}