"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

// Custom Hook for Scroll Reveal
function useReveal() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

const ContactForm = ({ type }) => {
    const isInvestor = type === "investor";
    return (
        <form className="space-y-12 animate-reveal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group">
                    <label className="font-industrial text-[11px] text-gold uppercase tracking-[0.5em] font-extrabold block">Full Name / ENTITY ID</label>
                    <input
                        type="text"
                        className="w-full bg-white border-b-2 border-dark/10 py-4 text-dark font-body font-bold focus:border-gold outline-none transition-all duration-700 uppercase tracking-widest text-sm placeholder:text-dark/30 placeholder:italic"
                        placeholder="ALPHA_STRATEGIC_LTD"
                    />
                </div>
                <div className="space-y-4 group">
                    <label className="font-industrial text-[11px] text-gold uppercase tracking-[0.5em] font-extrabold block">Email Protocol</label>
                    <input
                        type="email"
                        className="w-full bg-white border-b-2 border-dark/10 py-4 text-dark font-body font-bold focus:border-gold outline-none transition-all duration-700 text-sm placeholder:text-dark/30 placeholder:italic"
                        placeholder="ARCHITECT@NEXUS.CO.IN"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <label className="font-industrial text-[11px] text-gold uppercase tracking-[0.5em] font-extrabold block">
                    {isInvestor ? "Investment Class / CAPITAL POOL SIZE" : "Innovation Summary / VENTURE VECTOR"}
                </label>
                <input
                    type="text"
                    className="w-full bg-white border-b-2 border-dark/20 py-4 text-dark font-body font-bold focus:border-gold outline-none transition-all duration-700 uppercase tracking-widest text-sm placeholder:text-dark/30 placeholder:italic"
                    placeholder={isInvestor ? "TIER-1 INSTITUTIONAL (> $10M)" : "NEURAL AI / CIRCULAR LOGISTICS"}
                />
            </div>

            <div className="space-y-4">
                <label className="font-industrial text-[11px] text-gold uppercase tracking-[0.5em] font-extrabold block">Manifesto / CORE PROPOSITION</label>
                <textarea
                    rows="4"
                    className="w-full bg-white border-l-4 border-dark/10 pl-10 py-6 text-dark font-body font-bold focus:border-gold outline-none transition-all duration-700 uppercase tracking-widest text-sm placeholder:text-dark/30 placeholder:italic"
                    placeholder="DESCRIBE THE SOVEREIGN IMPACT OF THIS INITIATION SEQUENCE..."
                />
            </div>

            <button type="submit" className="w-full bg-dark text-glacier py-8 font-industrial text-[13px] tracking-[0.7em] font-extrabold uppercase transition-all duration-700 hover:bg-gold hover:text-dark shadow-[0_30px_70px_rgba(0,0,0,0.15)] hover:scale-[1.02]">
                Initialize Induction Sequence →
            </button>
            <p className="font-industrial text-[10px] text-dark/50 tracking-[0.5em] uppercase text-center mt-8 font-extrabold">Secure 256-bit industrial encryption active.</p>
        </form>
    );
}

export default function Contact() {
    const introReveal = useReveal();
    const optionsReveal = useReveal();
    const [activePath, setActivePath] = useState("investor"); // "investor" or "idea"

    return (
        <div className="bg-glacier min-h-screen selection:bg-gold selection:text-dark">
            <Navbar />

            <main className="pt-32">
                {/* 1. HERO */}
                <section ref={introReveal.ref} className="py-24 md:py-32 px-6 md:px-24 bg-white relative overflow-hidden border-b border-dark/5">
                    <div className="max-w-screen-2xl mx-auto">
                        <span className="font-industrial text-gold tracking-[0.8em] text-[11px] uppercase font-extrabold mb-8 block underline decoration-gold/20 underline-offset-[12px]">Strategic Initiation</span>
                        <h1 className="font-headline italic text-6xl md:text-[8.5rem] leading-[0.85] text-dark mb-12 tracking-tighter">Enter The <br className="hidden md:block" /> Global Registry.</h1>
                        <p className="font-body text-xl md:text-3xl text-dark/80 leading-relaxed italic border-l-2 border-gold/40 pl-12 max-w-5xl uppercase tracking-tight">
                            Synchronizing capital and innovation into a singular operative nexus. Choose your path to institutional integration.
                        </p>
                    </div>
                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 font-industrial text-[35vw] text-dark/[0.01] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4 uppercase">REGISTRY</div>
                </section>

                {/* 2. DUAL PATH SELECTION */}
                <section ref={optionsReveal.ref} className="px-6 md:px-24 bg-glacier border-b border-dark/5">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 py-24 md:py-48">

                        {/* SELECTOR SIDEBAR */}
                        <div className="lg:col-span-5 space-y-12">
                            <div
                                onClick={() => setActivePath("investor")}
                                className={`p-16 border-2 transition-all duration-700 cursor-pointer group relative overflow-hidden bg-white shadow-sm ${activePath === "investor" ? 'border-gold shadow-2xl scale-[1.02]' : 'border-dark/5 hover:border-gold/30'}`}
                            >
                                <span className={`font-industrial text-[11px] uppercase tracking-[0.4em] font-extrabold mb-6 block ${activePath === "investor" ? 'text-gold' : 'text-dark/40'}`}>Pathway A</span>
                                <h3 className={`font-headline italic text-4xl md:text-6xl tracking-tight mb-8 ${activePath === "investor" ? 'text-dark' : 'text-dark/40 group-hover:text-dark/60'}`}>Become an <br /> Institutional Investor</h3>
                                <p className={`font-body text-[11px] uppercase tracking-widest leading-relaxed italic ${activePath === "investor" ? 'text-dark/70' : 'text-dark/30'}`}>
                                    LPs, Family Offices, and Private Equity partners looking to synchronize capital with high-velocity industrial growth.
                                </p>
                                {activePath === "investor" && <div className="absolute top-0 right-0 p-6 material-symbols-outlined text-gold text-4xl">check_circle</div>}
                            </div>

                            <div
                                onClick={() => setActivePath("idea")}
                                className={`p-16 border-2 transition-all duration-700 cursor-pointer group relative overflow-hidden bg-white shadow-sm ${activePath === "idea" ? 'border-gold shadow-2xl scale-[1.02]' : 'border-dark/5 hover:border-gold/30'}`}
                            >
                                <span className={`font-industrial text-[11px] uppercase tracking-[0.4em] font-extrabold mb-6 block ${activePath === "idea" ? 'text-gold' : 'text-dark/40'}`}>Pathway B</span>
                                <h3 className={`font-headline italic text-4xl md:text-6xl tracking-tight mb-8 ${activePath === "idea" ? 'text-dark' : 'text-dark/40 group-hover:text-dark/60'}`}>Engine of <br /> Innovation</h3>
                                <p className={`font-body text-[11px] uppercase tracking-widest leading-relaxed italic ${activePath === "idea" ? 'text-dark/70' : 'text-dark/30'}`}>
                                    Founders and Visionaries with scalable ideas in circular luxury or high-impact technical operations.
                                </p>
                                {activePath === "idea" && <div className="absolute top-0 right-0 p-6 material-symbols-outlined text-gold text-4xl">check_circle</div>}
                            </div>

                            <div className="pt-20 border-t border-dark/10">
                                <div className="flex items-center gap-10 text-dark/30">
                                    <span className="font-industrial text-[10px] tracking-[0.6em] uppercase font-extrabold italic">Institutional Status: Open</span>
                                    <div className="flex gap-4">
                                        <span className="w-2 h-2 bg-gold/40 rounded-full animate-pulse" />
                                        <span className="w-2 h-2 bg-gold/40 rounded-full animate-pulse delay-75" />
                                        <span className="w-2 h-2 bg-gold/40 rounded-full animate-pulse delay-150" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FORM PANEL */}
                        <div className={`lg:col-span-7 bg-white p-12 md:p-24 border border-dark/5 transition-all duration-1000 shadow-[0_20px_80px_rgba(0,0,0,0.03)] ${optionsReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="mb-20">
                                <h4 className="font-industrial text-gold text-[14px] tracking-[1em] uppercase font-extrabold mb-8 italic">Process Initiation</h4>
                                <div className="w-12 h-1 bg-gold/30 mb-10" />
                                <p className="font-body text-dark/50 text-sm italic max-w-xl leading-relaxed">
                                    Please provide the necessary identifiers for induction into the Sovereign Registry. Our institutional team reviews all entries within 48 execution hours.
                                </p>
                            </div>

                            <ContactForm type={activePath} />
                        </div>

                    </div>
                </section>

                {/* 3. FOOTER */}
                <footer className="bg-dark py-12 md:py-20 px-8 md:px-24 border-t border-white/5 relative overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="mb-12">
                            <div className="font-industrial text-dark bg-gold px-6 py-3 text-4xl md:text-5xl font-bold uppercase inline-block tracking-[0.4em] mb-6 shadow-2xl">
                                RISE MATE
                                <span className="block text-[10px] tracking-[0.8em] mt-1 opacity-80">SOVEREIGN INDUSTRIAL GROUP</span>
                            </div>
                            <p className="font-body text-[13px] md:text-[14px] text-glacier/70 max-w-2xl leading-relaxed italic border-l-2 border-gold/40 pl-8 uppercase tracking-[0.1em] font-medium mb-12">
                                The leading technology partner for circular luxury and sustainable industrial innovation. <br className="hidden md:block" /> Architecting the sovereign future of high-velocity operations and digital capital.
                            </p>
                        </div>

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

                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                            <span className="font-industrial text-[9px] text-glacier/30 tracking-[1em] uppercase font-bold">© 2026 RISEMATE VENTURE ALL RIGHTS RESERVED.</span>

                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
