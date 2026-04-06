"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

// Custom Hook for Scroll Reveal
function useReveal() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

const ExecutiveMember = ({ id, name, role, vision, focus, philosophy, experience, bios, isVisible, delay = 0 }) => (
    <div className={`transition-all duration-1000 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start py-24 md:py-32 border-b border-dark/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="lg:col-span-5 sticky top-32">
            <div className="relative group">
                <div className="aspect-[3/4] bg-dark/5 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-dark/5 shadow-2xl flex items-center justify-center p-12">
                    <span className="material-symbols-outlined text-[10rem] text-dark/5 group-hover:text-gold/10 transition-colors duration-700">person</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 border-r-2 border-b-2 border-gold/40 pointer-events-none" />
                <div className="absolute -top-4 -left-4 font-industrial text-[10px] tracking-[0.8em] font-bold text-gold/30 uppercase">Sovereign Intel {id}</div>
            </div>
            <div className="mt-16">
                <h3 className="font-headline italic text-5xl md:text-7xl text-dark leading-tight mb-4">{name}</h3>
                <p className="font-industrial text-[11px] tracking-[0.4em] text-gold font-bold uppercase mb-8">{role}</p>
                <div className="flex gap-4 items-center">
                    <span className="px-3 py-1 border border-dark/10 text-[9px] font-industrial tracking-[0.2em] font-bold uppercase opacity-40">Active Status</span>
                    <span className="px-3 py-1 border border-dark/10 text-[9px] font-industrial tracking-[0.2em] font-bold uppercase opacity-40">{experience} Years Exp</span>
                </div>
            </div>
        </div>
        <div className="lg:col-span-7 pt-8">
            <div className="space-y-16">
                <div className="border-l-2 border-gold/30 pl-12">
                    <h5 className="font-industrial text-[11px] text-gold uppercase tracking-[0.6em] font-bold mb-6 italic underline decoration-gold/10 underline-offset-8">The Core Vision</h5>
                    <p className="font-body text-dark text-xl md:text-3xl leading-relaxed italic opacity-90">{vision}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white/40 p-10 border border-dark/5 hover:border-gold/10 transition-all group">
                        <h6 className="font-industrial text-[10px] text-gold uppercase tracking-[0.4em] font-bold mb-6">Strategic Focus</h6>
                        <p className="font-body text-dark/70 text-sm leading-relaxed uppercase tracking-widest font-bold">{focus}</p>
                    </div>
                    <div className="bg-white/40 p-10 border border-dark/5 hover:border-gold/10 transition-all group">
                        <h6 className="font-industrial text-[10px] text-gold uppercase tracking-[0.4em] font-bold mb-6">Industrial Narrative</h6>
                        <p className="font-body text-dark/60 text-xs leading-relaxed italic">{bios}</p>
                    </div>
                </div>

                <div className="bg-dark p-12 text-glacier relative overflow-hidden group">
                    <p className="font-headline italic text-3xl md:text-5xl opacity-40 text-gold/40 group-hover:opacity-100 transition-opacity duration-1000 leading-[1.1] mb-8 select-none">"{philosophy}"</p>
                    <div className="flex justify-between items-end border-t border-white/5 pt-8">
                        <span className="font-industrial text-[9px] tracking-[0.5em] text-white/20 font-bold uppercase">Executive Intelligence Kernel</span>
                        <span className="font-industrial text-[9px] tracking-[0.5em] text-gold/40 font-bold uppercase cursor-pointer hover:text-gold transition-colors">IND-REQ-0{id}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function Leadership() {
    const introReveal = useReveal();
    const executiveReveal = useReveal();

    return (
        <div className="bg-glacier min-h-screen selection:bg-gold selection:text-dark">
            <Navbar />

            <main className="pt-32">
                {/* 1. HERO */}
                <section ref={introReveal.ref} className="py-24 md:py-48 px-6 md:px-24 bg-white relative overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto">
                        <span className="font-industrial text-gold tracking-[0.8em] text-[10px] uppercase font-bold mb-8 block underline decoration-gold/20 underline-offset-8">Executive Registry</span>
                        <h1 className="font-headline italic text-6xl md:text-[10rem] leading-[0.8] text-dark mb-12 tracking-tighter">The Architects <br className="hidden md:block" /> of The Future.</h1>
                        <p className="font-body text-xl md:text-3xl text-dark leading-relaxed italic border-l-2 border-gold/40 pl-12 max-w-5xl opacity-80">
                            Stewardship defined by the fusion of industrial intelligence and sovereign legacy. Leading the next generation of global impact through precision execution.
                        </p>
                    </div>
                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 font-industrial text-[30vw] text-dark/[0.01] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4 uppercase">Regal</div>
                </section>

                {/* 2. THE MAIN ARCHITECTS */}
                <section ref={executiveReveal.ref} className="py-24 md:py-32 px-6 md:px-24 bg-glacier border-t border-dark/5">
                    <div className="max-w-screen-2xl mx-auto flex flex-col">
                        <ExecutiveMember
                            id="01"
                            name="Saurabh Jain"
                            role="Founder & CEO · Vega Vrudhi"
                            experience="15+"
                            vision="Scaling on-ground execution through AI/ML-driven precision across the continental registry."
                            focus="Managed sales, specialized staffing, and national growth engines operating at high-velocity."
                            bios="Architecting the digital-to-physical execution layer for elite brands. Specializing in pan-India market dominance and neural lead fulfillment architecture."
                            philosophy="Numbers don't lie, but passion drives them."
                            isVisible={executiveReveal.isVisible}
                            delay={100}
                        />
                        <ExecutiveMember
                            id="02"
                            name="Dheeraj Anand"
                            role="Founder & CEO · BWorth"
                            experience="18+"
                            vision="Redefining the luxury industry through sovereign circularity and technical upcycling dominance."
                            focus="Business engineering, strategic asset management, and global scale-up architecture."
                            bios="Transforming the consumption narrative through 18 years of business building. Engineering sustainable luxury ecosystems that preserve cultural and industrial capital."
                            philosophy="BWorth is more than just a company; it is a movement towards conscious consumerism."
                            isVisible={executiveReveal.isVisible}
                            delay={200}
                        />
                    </div>
                </section>

                <footer className="bg-dark py-12 md:py-20 px-8 md:px-24 border-t border-white/5 relative overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto">
                        {/* BRAND ARCHITECTURE - COMPACT */}
                        <div className="mb-12">
                            <div className="font-industrial text-dark bg-gold px-6 py-3 text-4xl md:text-5xl font-bold uppercase inline-block tracking-[0.4em] mb-6 shadow-2xl">
                                RISE MATE
                                <span className="block text-[10px] tracking-[0.8em] mt-1 opacity-80">SOVEREIGN INDUSTRIAL GROUP</span>
                            </div>
                            <p className="font-body text-[13px] md:text-[14px] text-glacier/70 max-w-2xl leading-relaxed italic border-l-2 border-gold/40 pl-8 uppercase tracking-[0.1em] font-medium mb-12">
                                The leading technology partner for circular luxury and sustainable industrial innovation. <br className="hidden md:block" /> Architecting the sovereign future of high-velocity operations and digital capital.
                            </p>
                        </div>

                        {/* DATA REGISTRY - COMPACT GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 border-t border-white/10 pt-12">
                            <div className="md:col-span-3">
                                <h6 className="font-industrial text-gold text-[11px] font-bold uppercase tracking-[0.8em] mb-6 flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span> Index
                                </h6>
                                <div className="flex flex-col gap-3 font-body text-[11px] text-glacier/50 uppercase tracking-[0.3em] font-bold">
                                    <Link href="/" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Digital Home</Link>
                                    <Link href="/companies" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Portfolio Assets</Link>
                                    <Link href="/leadership" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Executive Suite</Link>
                                    <Link href="/partners" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Strategic Nexus</Link>
                                    <Link href="/contact" className="hover:text-gold transition-all duration-500 hover:translate-x-1">Strategic Induction</Link>
                                </div>
                            </div>
                            <div className="md:col-span-4">
                                <h6 className="font-industrial text-gold text-[11px] font-bold uppercase tracking-[0.8em] mb-6 flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span> Registry
                                </h6>
                                <div className="font-body text-[11px] text-glacier/50 leading-[2.2] tracking-[0.3em] font-bold uppercase">
                                    info@bworth.co.in<br />
                                    saurabh@vegavruddhi.com<br />
                                    +91 91166 16636
                                </div>
                            </div>
                            <div className="md:col-span-5">
                                <h6 className="font-industrial text-gold text-[11px] font-bold uppercase tracking-[0.8em] mb-6 flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span> Headquarters
                                </h6>
                                <div className="font-body text-[11px] text-glacier/50 leading-[2.2] tracking-[0.3em] font-bold uppercase">
                                    Sector – 69, HR / Jagatpura, RJ<br />
                                    Institutional NCR / ACTIVE STATUS<br />
                                    ESTABLISHED 2026 SOVEREIGN REGISTRY
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM COPYRIGHT - COMPACT */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                            <span className="font-industrial text-[9px] text-glacier/30 tracking-[1em] uppercase font-bold">© 2026 RISEMATE VENTURE ALL RIGHTS RESERVED.</span>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
