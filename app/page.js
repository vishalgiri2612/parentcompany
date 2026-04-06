"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

// Custom Hook for Scroll Reveal
function useReveal(options = { threshold: 0.12 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            options
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [options]);

    return { ref, isVisible };
}

const PremiumButton = ({ href, children, variant = "primary", className = "" }) => {
    const base = "font-industrial text-[12px] md:text-[13px] tracking-[0.6em] font-bold uppercase transition-all duration-700 py-6 md:py-8 px-12 md:px-16 relative group flex items-center justify-center gap-6 overflow-hidden rounded-[2px]";
    const styles = variant === "primary"
        ? "bg-dark text-glacier border border-dark hover:bg-gold hover:border-gold hover:text-dark"
        : "bg-glacier text-dark border border-dark/10 hover:border-dark hover:text-glacier";

    return (
        <Link href={href} className={`${base} ${styles} ${className}`}>
            <span className="relative z-10 transition-colors duration-500">{children}</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-3 transition-transform duration-500 relative z-10">arrow_forward</span>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-gold transition-all duration-700 opacity-10 group-hover:opacity-100" />
        </Link>
    );
};

const EntityPreview = ({ id, name, tagline, leader, delay = 0, isVisible }) => (
    <div className={`transition-all duration-[1200ms] border border-dark/10 p-12 md:p-20 bg-white hover:bg-dark group cursor-default relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="flex justify-between items-start mb-16">
            <span className="font-industrial text-gold tracking-[0.6em] text-[10px] md:text-[11px] uppercase font-bold">Phase {id}</span>
            <span className="material-symbols-outlined text-dark/10 group-hover:text-gold/30 text-6xl transition-all duration-700 group-hover:rotate-45">hub</span>
        </div>
        <h3 className="font-headline italic text-5xl md:text-8xl text-dark group-hover:text-gold transition-all duration-700 mb-10 leading-tight uppercase tracking-tight">{name}</h3>
        <p className="font-body text-lg md:text-xl text-dark/70 group-hover:text-glacier/40 leading-relaxed italic border-l border-gold/40 pl-10 mb-20">
            {tagline}
        </p>
        <div className="flex items-center justify-between pt-16 border-t border-dark/5 group-hover:border-white/10 relative z-10">
            <div>
                <p className="font-headline italic text-3xl text-dark group-hover:text-glacier transition-colors duration-500">{leader}</p>
                <p className="font-industrial text-[10px] tracking-widest text-dark/40 group-hover:text-white/20 font-bold uppercase mt-2">Executive Intelligence</p>
            </div>
            <Link href="/companies" className="w-16 h-16 border border-dark/5 group-hover:border-gold/40 flex items-center justify-center rounded-full transition-all duration-700 hover:scale-110">
                <span className="material-symbols-outlined text-lg group-hover:text-gold group-hover:font-bold">arrow_forward</span>
            </Link>
        </div>
        {/* Visual Polish */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </div>
);

export default function Home() {
    const heroRef = useReveal();
    const legacyRef = useReveal();
    const metricsRef = useReveal();
    const architectRef = useReveal();
    const connectRef = useReveal();

    // Dynamic Word Logic
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [wordOpacity, setWordOpacity] = useState(1);
    const words = ["Founders", "Architects", "Visionaries", "Builders", "Ideators"];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordOpacity(0);
            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setWordOpacity(1);
            }, 700);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-glacier min-h-screen selection:bg-gold selection:text-dark">
            <div className="grain-overlay" />
            <Navbar />

            <main className="">
                {/* 1. CINEMATIC HERO */}
                <section ref={heroRef.ref} className="h-screen flex flex-col justify-center px-6 md:px-24 mb-4 relative overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.02]"
                    >
                        <source src="/videoplayback.mp4" type="video/mp4" />
                    </video>
                    {/* Sophisticated Overlay Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-glacier/60 via-glacier/20 to-transparent z-[1] backdrop-blur-[0.5px]" />
                    <div className="absolute inset-0 bg-glacier/10 z-[1]" />

                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full mt-36 md:mt-48 lg:mt-64">
                        <div className="lg:col-span-12 lg:col-span-9">

                            <h1 className={`font-headline italic text-[12vw] sm:text-8xl md:max-w-6xl md:text-[10rem] leading-[0.8] text-dark mb-16 tracking-[-0.02em] transition-all duration-[2000ms] delay-300 ${heroRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                Investing behind <span
                                    className="text-gold-premium italic transition-opacity duration-500 ease-in-out"
                                    style={{ opacity: wordOpacity }}
                                >
                                    {words[currentWordIndex]}
                                </span> <br className="hidden md:block" /> Who Create A Better World.
                            </h1>
                            <div className={`transition-all duration-[1500ms] delay-700 ${heroRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                                <p className="font-body text-xl md:text-3xl text-dark/70 max-w-4xl leading-[1.6] italic border-l-2 border-gold/50 pl-16 mb-24">
                                    Operator-led early stage capital specifically engineered to <br className="hidden md:block" /> accelerate sovereign industrial growth and digital equity transformation.
                                </p>
                            </div>
                            <div className={`flex flex-col sm:flex-row gap-12 items-start transition-all duration-[1500ms] delay-1000 ${heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <PremiumButton href="/companies">Project Portfolio Assets</PremiumButton>
                                <Link href="/#contact" className="font-industrial text-[11px] md:text-[12px] tracking-[0.6em] text-dark/40 hover:text-dark transition-all duration-500 uppercase border-b border-dark/10 hover:border-gold pb-3 font-bold flex items-center gap-4">
                                    Become A Partner <span className="material-symbols-outlined text-xs">open_in_new</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. LEGACY TICKER - ULTRA SMOOTH */}
                <section className="py-10 md:py-16 bg-white border-y border-dark/5 overflow-hidden">
                    <div className="flex whitespace-nowrap gap-48 animate-scroll-ticker px-12">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex gap-48 items-center flex-shrink-0 group">
                                <span className="font-headline italic text-5xl text-dark/60 group-hover:text-gold transition-all duration-1000 cursor-default">BWorth</span>
                                <span className="font-industrial text-[32px] font-bold tracking-[0.8em] text-dark hover:text-dark transition-all">VEGA VRUDHI</span>
                                <span className="font-headline italic text-5xl text-dark/60 group-hover:text-gold transition-all duration-1000 cursor-default">RYM Grenergy</span>
                                <span className="font-industrial text-[32px] font-bold tracking-[0.8em] text-dark hover:text-dark transition-all">Synchronous Digital</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. METRICS - BOLD typography */}
                <section ref={metricsRef.ref} className="py-24 md:py-32 px-6 md:px-24 bg-dark text-glacier relative overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-end relative z-10">
                        <div className="lg:col-span-5">
                            <span className="font-industrial text-gold tracking-[0.6em] text-[11px] mb-12 block uppercase font-bold">Metrics of Excellence</span>
                            <h2 className="font-headline italic text-6xl md:text-[10rem] mb-12 leading-[0.85] text-gold">Let’s talk <br /><span className="text-white">Numbers.</span></h2>
                            <p className="font-body text-xl md:text-2xl text-glacier/30 leading-relaxed italic border-l border-gold/10 pl-10 max-w-sm">
                                Architecting a portfolio of 200+ global visionaries spread worldwide across deep-tech and consumer internet.
                            </p>
                        </div>
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-48">
                            {[
                                { value: "10 Billion", label: "Raised over institutional investors", prefix: "$" },
                                { value: "100,000", label: "People Employed Globally" },
                                { value: "250 Million", label: "Customers Served Worldwide" },
                                { value: "1 Million", label: "Micro-Entrepreneurs Supported" }
                            ].map((stat, idx) => (
                                <div key={idx} className={`border-l border-white/5 pl-12 transition-all duration-[1200ms] ${metricsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} style={{ transitionDelay: `${idx * 250}ms` }}>
                                    <h4 className="font-industrial text-7xl md:text-9xl font-bold text-glacier mb-6 tracking-tighter transition-all duration-1000 hover:text-gold cursor-default">
                                        <span className="opacity-20 text-4xl mr-4">{stat.prefix}</span>{stat.value.split(' ')[0]} <br className="md:hidden" /><span className="text-white/20 font-industrial text-3xl uppercase tracking-[0.4em] ml-2">{stat.value.split(' ').slice(1).join(' ')}</span>
                                    </h4>
                                    <p className="font-industrial text-[11px] tracking-[0.5em] uppercase opacity-20 font-bold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 font-industrial text-[40vw] text-white/[0.02] leading-none select-none pointer-events-none translate-x-1/2 -translate-y-1/2">DATA</div>
                </section>

                {/* 4. THE SOVEREIGN LEGACY ARCHITECTURE */}
                <section ref={legacyRef.ref} className="py-24 md:py-40 px-6 md:px-24 bg-glacier">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-16">
                            <div className={`transition-all duration-[1500ms] ${legacyRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                                <span className="font-industrial text-gold tracking-[0.8em] text-[11px] mb-8 block uppercase font-bold underline decoration-gold/20 underline-offset-[14px]">The Core Portfolio</span>
                                <h2 className="font-headline italic text-6xl md:text-[11rem] text-dark leading-[0.8] mb-4">The Sovereign <br />Legacy.</h2>
                            </div>
                            <Link href="/companies" className="font-industrial text-[12px] tracking-[0.6em] font-bold border-b-2 border-dark/5 pb-6 hover:border-gold transition-all uppercase mb-4 flex items-center gap-6 group">
                                Explorer Assets <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">east</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                            <EntityPreview id="01" name="BWorth" tagline="Sustainable Fashion Innovation Leader and Circular Economy Pioneer." leader="Dheeraj Anand" isVisible={legacyRef.isVisible} delay={100} />
                            <EntityPreview id="02" name="Vega Vrudhi" tagline="Precision Execution & Growth Architecture for nationwide enterprise impact." leader="Saurabh Jain" isVisible={legacyRef.isVisible} delay={250} />
                            <EntityPreview id="03" name="RYM Grenergy" tagline="Intelligent Systems & Deep-Tech Engineering optimized for future energy." leader="Yograj Rundhanker" isVisible={legacyRef.isVisible} delay={400} />
                            <EntityPreview id="04" name="Synchronous" tagline="High-Performance Digital Marketing Group for Elite Brand Dominance." leader="Devam Srivastava" isVisible={legacyRef.isVisible} delay={550} />
                        </div>
                    </div>
                </section>

                {/* 5. THE ARCHITECTS SECTION */}
                <section ref={architectRef.ref} className="py-24 md:py-32 px-6 md:px-24 bg-dark relative overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center relative z-10">
                        <div className="lg:col-span-6">
                            <span className="font-industrial text-gold tracking-[0.6em] text-[11px] uppercase font-bold mb-10 block underline decoration-gold/30 underline-offset-8">Executive Intelligence</span>
                            <h2 className="font-headline italic text-6xl md:text-[9.5rem] text-glacier leading-[0.85] mb-16">The Architects <br /> of The Future.</h2>
                            <p className="font-body text-xl md:text-3xl text-white/40 leading-relaxed italic border-l-2 border-gold/30 pl-16 mb-24 max-w-2xl">
                                Defining the next era of industrial expansion through the fusion of aesthetic precision and technical dominance.
                            </p>
                            <PremiumButton href="/leadership" variant="secondary">View Executive Suite</PremiumButton>
                        </div>
                        <div className="lg:col-span-6 grid grid-cols-1 gap-12 md:gap-20">
                            {[
                                { name: "Saurabh Jain", role: "CEO · Vega Vrudhi", text: "Numbers don't lie, but passion drives them." },
                                { name: "Dheeraj Anand", role: "CEO · BWorth", text: "BWorth is more than just a company; it is a movement towards conscious consumerism." }
                            ].map((leader, i) => (
                                <div key={i} className={`p-16 md:p-20 border border-white/5 bg-white/[0.02] hover:bg-gold transition-all group duration-1000 cursor-default rounded-sm ${architectRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`} style={{ transitionDelay: `${i * 350}ms` }}>
                                    <h4 className="font-headline italic text-5xl md:text-6xl text-white group-hover:text-dark transition-colors duration-700 mb-4 uppercase tracking-tight">{leader.name}</h4>
                                    <p className="font-industrial text-[11px] tracking-[0.5em] text-gold group-hover:text-dark font-bold uppercase mb-12">{leader.role}</p>
                                    <p className="font-body text-2xl text-white/20 group-hover:text-dark/80 italic leading-relaxed transition-colors duration-700 border-l border-white/5 group-hover:border-dark/20 pl-8">"{leader.text}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. FINAL ENTRANCE / CTA */}
                <section ref={connectRef.ref} className="py-32 md:py-48 px-6 md:px-24 bg-white text-center flex flex-col items-center">
                    <div className={`max-w-6xl mx-auto transition-all duration-[2000ms] ${connectRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
                        <span className="font-industrial text-gold tracking-[1em] text-[11px] uppercase font-bold mb-10 block italic opacity-60">Sovereign Strategic Initiation</span>
                        <h2 className="font-headline italic text-6xl md:text-[8rem] leading-[0.8] text-dark italic mb-16 tracking-tighter">Initialize Your <br /> Growth Sequence.</h2>
                        <div className="flex flex-col sm:flex-row gap-12 justify-center">
                            <PremiumButton href="/contact" className="px-20">Strategic Induction</PremiumButton>
                            <PremiumButton href="/companies" variant="secondary" className="px-20">Browse Global Assets</PremiumButton>
                        </div>
                    </div>
                </section>

                <footer className="bg-dark py-12 md:py-20 px-8 md:px-24 border-t border-white/5 relative overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto">
                        {/* BRAND ARCHITECTURE - COMPACT */}
                        <div className="mb-12">
                            <div className="relative w-[180px] h-[50px] md:w-[280px] md:h-[80px] mb-8">
                                <Image
                                    src="/logo.png"
                                    alt="RISEMATE Logo"
                                    fill
                                    sizes="(max-width: 768px) 180px, 280px"
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="font-body text-[13px] md:text-[14px] text-glacier/70 max-w-2xl leading-relaxed italic border-l-2 border-gold/40 pl-8 uppercase tracking-[0.1em] font-medium mb-12">
                                The leading technology partner for circular luxury and sustainable industrial innovation. <br className="hidden md:block" /> Architecting the sovereign future of high-velocity operations and digital capital.
                            </p>
                        </div>

                        {/* DATA REGISTRY - COMPACT GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 border-t border-white/10 pt-16">
                            <div className="md:col-span-3">
                                <h6 className="font-industrial text-gold text-[13px] font-bold uppercase tracking-[0.8em] mb-10 flex items-center gap-4">
                                    <span className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(201,168,76,0.6)]"></span> INDEX
                                </h6>
                                <div className="flex flex-col gap-5 font-body text-[13px] text-glacier/60 uppercase tracking-[0.4em] font-bold leading-none">
                                    <Link href="/" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Digital Home</Link>
                                    <Link href="/companies" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Portfolio Assets</Link>
                                    <Link href="/leadership" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Executive Suite</Link>
                                    <Link href="/partners" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Strategic Nexus</Link>
                                    <Link href="/contact" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Strategic Induction</Link>
                                </div>
                            </div>
                            <div className="md:col-span-4">
                                <h6 className="font-industrial text-gold text-[13px] font-bold uppercase tracking-[0.8em] mb-10 flex items-center gap-4">
                                    <span className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(201,168,76,0.6)]"></span> REGISTRY
                                </h6>
                                <div className="font-body text-[13px] text-glacier/60 leading-[2.6] tracking-[0.4em] font-bold uppercase italic">
                                    info@bworth.co.in<br />
                                    saurabh@vegavruddhi.com<br />
                                    +91 91166 16636
                                </div>
                            </div>
                            <div className="md:col-span-5">
                                <h6 className="font-industrial text-gold text-[13px] font-bold uppercase tracking-[0.8em] mb-10 flex items-center gap-4">
                                    <span className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(201,168,76,0.6)]"></span> HEADQUARTERS
                                </h6>
                                <div className="font-body text-[13px] text-glacier/60 leading-[2.6] tracking-[0.4em] font-bold uppercase italic border-l border-white/5 pl-8">
                                    Sector – 69, HR / Jagatpura, RJ<br />
                                    Institutional NCR / ACTIVE STATUS<br />
                                    ESTABLISHED 2026 SOVEREIGN REGISTRY
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM COPYRIGHT - COMPACT */}
                        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                            <span className="font-industrial text-[11px] md:text-[12px] text-glacier/40 tracking-[0.8em] uppercase font-bold italic">© 2026 RISEMATE VENTURE. ALL RIGHTS RESERVED.</span>

                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
