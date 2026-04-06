"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Portfolio", href: "/companies" },
    { name: "Team", href: "/leadership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled
      ? "py-4 bg-dark/98 backdrop-blur-3xl border-b border-gold/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      : "py-10 bg-black/[0.02] backdrop-blur-[12px] border-b border-black/[0.05]"
      }`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* LOGO ARCHITECTURE */}
        <Link href="/" className="group flex items-center">
          <div className="relative w-[160px] h-[50px] md:w-[240px] md:h-[70px] transition-all duration-700 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="RISEMATE VENTURE"
              fill
              sizes="(max-width: 768px) 160px, 240px"
              className={`object-contain transition-all duration-700 scale-[1.6] md:scale-[2]`}
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV ARCHITECTURE */}
        <div className="hidden lg:flex gap-12 items-center">
          <div className="flex gap-10 font-body text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-bold">
            {links.map((link, idx) => (
              <Link
                key={`${link.href}-${idx}`}
                href={link.href}
                className={`transition-all px-2 py-1 relative group ${pathname === link.href
                  ? "text-gold"
                  : scrolled ? "text-glacier/50 hover:text-glacier" : "text-dark hover:text-gold"
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-[-10px] left-0 h-[2px] bg-gold transition-all duration-700 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          <div className={`h-8 w-px mx-6 transition-colors duration-500 ${scrolled ? 'bg-white/10' : 'bg-dark/10'}`} />

          <Link
            href="/contact"
            className={`group relative px-10 py-4 border transition-all duration-700 font-industrial text-[11px] tracking-[0.5em] font-bold uppercase overflow-hidden ${scrolled
              ? 'bg-white/5 border-white/10 text-glacier hover:bg-gold hover:text-dark hover:border-gold'
              : 'bg-dark/5 border-dark/10 text-dark hover:bg-gold hover:text-dark hover:border-gold'
              }`}
          >
            <span className="relative z-10 flex items-center gap-4">
              Initialize <span className="material-symbols-outlined text-sm group-hover:rotate-45 transition-transform duration-500">bolt</span>
            </span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          className={`lg:hidden z-[60] p-4 bg-white/5 border rounded-sm transition-all duration-500 ${scrolled ? 'text-gold border-white/10' : 'text-dark border-dark/10'
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Sovereign Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "segment"}
          </span>
        </button>
      </div>

      {/* MOBILE OVERLAY ARCHITECTURE */}
      <div
        className={`fixed inset-0 bg-dark z-50 lg:hidden flex flex-col items-center justify-center transition-all duration-1000 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gold/[0.03] to-transparent pointer-events-none" />
        <div className="flex flex-col gap-10 text-center px-12 relative z-10">
          <span className="font-industrial text-gold/30 tracking-[1em] text-xs uppercase font-bold mb-8">Navigation Registry</span>
          {links.map((link, idx) => (
            <Link
              key={`${link.href}-${idx}`}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-headline italic text-5xl md:text-6xl transition-all duration-700 hover:scale-110 ${pathname === link.href ? "text-gold" : "text-glacier/40 hover:text-glacier"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-16 border-t border-white/5 pt-16 flex flex-col items-center gap-6">
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="font-industrial text-gold tracking-[0.6em] text-sm font-bold uppercase underline underline-offset-8">
              Begin Sequence →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
