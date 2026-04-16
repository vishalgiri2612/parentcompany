"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const ContactOrbit = () => (
    <div style={{ position: 'relative', width: '420px', height: '420px', margin: '0 auto' }}>
        {/* Dashed orbit ring */}
        <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1px dashed rgba(0,35,102,0.15)',
            top: '50%', left: '50%',
            width: '420px', height: '420px',
            transform: 'translate(-50%,-50%)'
        }} />

        {/* Center box */}
        <div style={{
            position: 'absolute',
            width: '160px', height: '160px',
            borderRadius: '50%',
            background: 'rgba(0,35,102,0.07)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,35,102,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '4px',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: 10
        }}>
            <span style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', color: 'rgba(0,35,102,0.4)', textTransform: 'uppercase' }}>Risemate</span>
            <span style={{ fontSize: '16px', fontWeight: 900, color: '#002366', letterSpacing: '-0.03em' }}>Venture</span>
        </div>

        {/* Spinning orbit */}
        <div style={{
            position: 'absolute',
            width: '100%', height: '100%',
            animation: 'orbitSpin 18s linear infinite'
        }}>
            {[
                { icon: 'phone', label: 'Call', pos: { top: '0%', left: '50%' } },
                { icon: 'chat', label: 'Chat', pos: { top: '25%', left: '85%' } },
                { icon: 'mail', label: 'Mail', pos: { top: '75%', left: '85%' } },
                { icon: 'language', label: 'Web', pos: { top: '100%', left: '50%' } },
                { icon: 'location_on', label: 'Office', pos: { top: '75%', left: '15%' } },
                { icon: 'person', label: 'Team', pos: { top: '25%', left: '15%' } },
            ].map(({ icon, label, pos }, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    ...pos,
                    transform: 'translate(-50%, -50%)',
                    width: '56px', height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(0,35,102,0.06)',
                    border: '1px solid rgba(0,35,102,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                }}>
                    <span
                        className="material-symbols-outlined"
                        style={{
                            fontSize: '20px',
                            color: '#002366',
                            animation: 'orbitReverse 18s linear infinite',
                            display: 'flex',
                        }}
                    >{icon}</span>
                </div>
            ))}
        </div>

        <style>{`
            @keyframes orbitSpin { to { transform: rotate(360deg); } }
            @keyframes orbitReverse { to { transform: rotate(-360deg); } }
        `}</style>
    </div>
);

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const ContactCard = ({ title, email, phone, icon, refLabel, accent, objectPos }) => (
    <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        className="relative p-10 bg-white border border-dark/5 rounded-[40px] hover:border-[#002366]/20 hover:shadow-[0_45px_90px_-20px_rgba(0,35,102,0.08)] transition-all duration-700 group overflow-hidden"
    >
        {/* Subtle Entity Accent Glow */}
        <div className={`absolute -top-10 -right-10 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ${accent}`} />

        <div className="relative z-10">
            <div className="flex items-start mb-10">
                <div className="w-14 h-14 bg-[#002366]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#002366] group-hover:text-white transition-all duration-700 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                </div>
            </div>
            <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#002366]/40 mb-2">{refLabel}</p>
                <h3 className="text-2xl font-black text-dark tracking-tighter">{title}</h3>
            </div>
            <div className="space-y-3">
                <a href={`mailto:${email}`} className="block text-sm font-bold text-dark/70 hover:text-[#002366] transition-colors">{email}</a>
                {phone && (
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#002366]/70 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-600 animate-pulse"></span>
                        {phone}
                    </p>
                )}
            </div>
        </div>
    </motion.div>
);

export default function Contact() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen selection:bg-[#002366] selection:text-white overflow-x-hidden">
            <Navbar />

            <main className="pt-24">
                {/* HERO */}
                <section className="relative py-24 md:py-40 px-6 md:px-24 overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-12 opacity-[0.03] pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="border-r border-dark h-full"></div>
                        ))}
                    </div>

                    <div className="max-w-screen-2xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="flex items-center gap-4 mb-12">
                                    <span className="w-12 h-[1px] bg-[#002366]/30"></span>
                                    <span className="text-xs font-black uppercase tracking-[0.6em] text-[#002366]">Initialize Connection</span>
                                </div>

                                <h1 className="text-6xl md:text-[8rem] font-black leading-[0.8] text-dark tracking-tighter mb-16">
                                    Nexus <br />
                                    <span className="text-[#002366] italic font-serif font-normal">Collective.</span>
                                </h1>

                                <div className="max-w-xl border-l-[3px] border-[#002366] pl-12 py-4">
                                    <p className="text-xl md:text-2xl text-dark/40 font-secondary leading-tight italic">
                                        Bridge the gap between institutional expertise and your sovereign growth. Our global operations are active across all regional hubs.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right: Orbit Animation */}
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="relative hidden lg:flex items-center justify-center"
                            >
                                {/* Decorative glow */}
                                <div className="absolute inset-0 bg-[#002366]/5 blur-[100px] rounded-full pointer-events-none" />
                                <ContactOrbit />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ENTITY MATRIX */}
                <section className="py-24 px-6 md:px-24 bg-white relative">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ContactCard
                                title="BWorth Support"
                                email="info@bworth.co.in"
                                phone="+91 8826668050"
                                icon="eco"
                                refLabel="Industrial Synthesis"
                                accent="bg-green-600"
                                objectPos="object-left-top"
                            />
                            <ContactCard
                                title="Vega Vrudhi"
                                email="saurabh@vegavruddhi.com"
                                phone="+91 91166 16636"
                                icon="precision_manufacturing"
                                refLabel="Execution Framework"
                                accent="bg-blue-600"
                                objectPos="object-right-top"
                            />
                            <ContactCard
                                title="RYM Grenergy"
                                email="contact@rym-grenergy.com"
                                phone="+91 82000 55645"
                                icon="bolt"
                                refLabel="Energy Sovereignty"
                                accent="bg-amber-500"
                                objectPos="object-left-bottom"
                            />
                            <ContactCard
                                title="Synchronous"
                                email="ops@synchronous.digital"
                                phone="Global Access"
                                icon="hub"
                                refLabel="Digital Architecture"
                                accent="bg-indigo-600"
                                objectPos="object-right-bottom"
                            />
                        </div>
                    </div>
                </section>

                {/* HUB INFRASTRUCTURE */}
                <section className="py-32 bg-[#f8faff] px-6 md:px-24 relative overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto relative z-10">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            className="flex flex-col md:flex-row justify-between items-end mb-32"
                        >
                            <div className="max-w-xl">
                                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#002366] mb-6 block">Physical Infrastructure</span>
                                <h2 className="text-4xl md:text-8xl font-black text-dark tracking-tighter leading-none">Global <br /> Hubs.</h2>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-dark/30 mt-12 md:mt-0 italic">Operational Ref: HQ_SYNC_2026</p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {[
                                {
                                    type: "Global Headquarters",
                                    label: "Institutional NCR",
                                    city: "Gurugram",
                                    address: "7th Floor, Spaze Plazo, Golf Course Ext. Road Sector – 69.",
                                    ref: "HQ_SYNC_2026",
                                    code: "NCR"
                                },
                                {
                                    type: "Main Hub Operations",
                                    label: "Royal Heritage Hub",
                                    city: "Jaipur",
                                    address: "Vinayak Enclave, Jagatpura.",
                                    ref: "Satellite Office Strategy Hub",
                                    code: "RJ"
                                }
                            ].map((hub, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    initial="initial"
                                    whileInView="whileInView"
                                    className="group relative p-16 bg-white rounded-[64px] border border-[#002366]/5 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.02)]"
                                >
                                    <div className="absolute top-0 right-0 p-16 text-[150px] font-black text-[#002366]/[0.02] leading-none pointer-events-none group-hover:text-[#002366]/[0.05] transition-all duration-1000">
                                        {hub.code}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-10">
                                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#002366] bg-[#002366]/5 px-5 py-2.5 rounded-full">{hub.type}</span>
                                        </div>
                                        <h4 className="text-4xl font-black text-dark mb-2 tracking-tighter">{hub.label}</h4>
                                        <p className="text-2xl font-black text-[#002366] mb-10">{hub.city}</p>
                                        <div className="h-[1px] w-full bg-dark/5 mb-10" />
                                        <p className="text-2xl text-dark/40 font-secondary leading-tight max-w-sm mb-16">
                                            {hub.address}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-[#002366]"></div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-dark/20 uppercase tracking-[0.4em]">
                                                {hub.ref}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MANDATE PORTAL */}
                <section className="py-40 bg-[#001233] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                    <div className="container-wide relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                            <motion.div
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[1em] text-[#002366] bg-white px-5 py-2.5 rounded-full mb-12 inline-block">Secure Protocol</span>
                                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">Ready to <br /><span className="text-white/40 italic font-serif font-normal">Initialize?</span></h2>
                                <p className="text-xl md:text-2xl text-white/40 font-secondary leading-tight max-w-lg mb-16 italic">
                                    Submit your institutional mandate. Our board reviews all strategic partnership profiles within 48 operational cycles.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                                className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[80px] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.5)]"
                            >
                                <form className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-4">
                                            <label className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 block ml-2">Full Identity</label>
                                            <input type="text" className="w-full bg-white/[0.03] border-b border-white/10 rounded-none px-2 py-5 text-white focus:border-white outline-none transition-all placeholder:text-white/10" placeholder="LEAD NAME" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 block ml-2">Corporate Email</label>
                                            <input type="email" className="w-full bg-white/[0.03] border-b border-white/10 rounded-none px-2 py-5 text-white focus:border-white outline-none transition-all placeholder:text-white/10" placeholder="EXEC@ENTITY.COM" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 block ml-2">Mandate Specification</label>
                                        <textarea rows="4" className="w-full bg-white/[0.03] border-b border-white/10 rounded-none px-2 py-5 text-white focus:border-white outline-none transition-all placeholder:text-white/10" placeholder="Strategic objectives and vertical focus..."></textarea>
                                    </div>

                                    <div className="pt-8">
                                        <button className="group relative w-full h-24 overflow-hidden rounded-full transition-all duration-700">
                                            <div className="absolute inset-0 bg-white transition-transform duration-700 group-hover:scale-95"></div>
                                            <div className="absolute inset-0 bg-[#002366] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
                                            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.8em] text-dark group-hover:text-white transition-colors duration-700">
                                                Transmit Mandate
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
