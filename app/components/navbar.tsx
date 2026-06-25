"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Aktif sayfayı otomatik yakalamak için

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/about" },
    { name: "Projeler", href: "/projects" },
    { name: "Hizmetler", href: "/services" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 transition-all duration-500 select-none border-b
        ${
          isScrolled
            ? "py-4 bg-white/[0.65] backdrop-blur-[12px] border-black/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.01)]"
            : "py-7 bg-transparent border-transparent"
        }`}
    >
      {/* 🔴 SCROLLED STATE CETVEL ÇİZGİSİ: Sayfa kaydırıldığında sol köşede parlayan kırmızı milimetrik detay */}
      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-red-600 transition-all duration-700 ease-out
          ${isScrolled ? "w-24" : "w-0"}`}
      />

      {/* SOL ALAN: JİLET LOGO */}
      <div className="flex items-center">
        <Link
          href="/"
          className="text-sm md:text-[15px] font-light tracking-[0.4em] text-[#0A0A0C] uppercase transition-transform duration-500 hover:scale-[1.02]"
        >
          EKINEXPO
        </Link>
      </div>

      {/* ORTA ALAN: SARSINTISIZ MİNİMALİST MENÜ */}
      <div className="hidden md:flex gap-12 text-[11px] font-normal tracking-[0.3em] uppercase text-gray-900">
        {navLinks.map((link) => {
          // Dinamik aktif sayfa kontrolü (Kullanıcı hangi sayfadaysa nokta orada sabit kalır)
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex flex-col items-center transition-all duration-300 relative pb-1
                ${isActive ? "text-black" : "text-black/50 hover:text-black"}`}
            >
              <span>{link.name}</span>
              
              {/* Kırmızı Gösterge Noktası (Layout Shift - Sarsıntı yaratmaz) */}
              <span
                className={`w-1 h-1 bg-red-600 rounded-full absolute bottom-[-4px] transition-all duration-300 ease-out
                  ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}`}
              />
            </Link>
          );
        })}
      </div>

      {/* SAĞ ALAN: INTERAKTİF PREMİUM SÜRÜCÜLER */}
      <div className="flex items-center gap-10">
        {/* Dil Seçici */}
        <button className="group text-[10px] font-mono tracking-[0.25em] uppercase text-black/60 hover:text-red-600 transition-colors duration-300 flex items-center gap-1">
          <span>TR</span>
          <span className="text-black/20 group-hover:text-red-600/50">/</span>
          <span className="text-black/30 group-hover:text-red-600/40 font-light">EN</span>
        </button>

        {/* Fütüristik İki Çizgili Hamburger Menü */}
        <button className="group flex flex-col gap-1.5 justify-center items-end w-6 h-5 cursor-pointer relative">
          {/* Üst Çizgi */}
          <span className="w-6 h-[1px] bg-black group-hover:bg-red-600 block transition-all duration-300 transform group-hover:-translate-x-1" />
          {/* Alt Çizgi */}
          <span className="w-4 h-[1px] bg-black group-hover:bg-red-600 block transition-all duration-300 group-hover:w-6" />
        </button>
      </div>
    </nav>
  );
}