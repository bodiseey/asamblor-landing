"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Calendar, ShieldCheck, Zap, ArrowLeft, BarChart3, Users, Clock } from "lucide-react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "kick-off" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative pt-32 pb-24 max-w-[1400px] mx-auto px-8">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
                                <Calendar size={12} />
                                <span>Kick off your hiring process</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                                Book Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 italic">Hiring Engine.</span>
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Shift your recruitment into high gear. Schedule a session with our automation experts to build your custom autonomous driver funnel.
                            </p>
                        </div>

                        {/* Back Link */}
                        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm">Back to Home</span>
                        </Link>

                        {/* Analytics/Automation Stats Card */}
                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <BarChart3 size={80} />
                                </div>
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-emerald-400">
                                        <Zap size={16} />
                                        <span className="text-xs font-bold uppercase tracking-widest">Automation Velocity</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                            <div className="flex items-center gap-3">
                                                <Users size={16} className="text-gray-500" />
                                                <span className="text-sm text-gray-400 text-[13px]">Lead Screening</span>
                                            </div>
                                            <span className="text-sm font-bold text-white uppercase italic">Instant</span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                            <div className="flex items-center gap-3">
                                                <Clock size={16} className="text-gray-500" />
                                                <span className="text-sm text-gray-400 text-[13px]">Qual. Interviews</span>
                                            </div>
                                            <span className="text-sm font-bold text-white uppercase italic">Automated</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <ShieldCheck size={16} className="text-gray-500" />
                                                <span className="text-sm text-gray-400 text-[13px]">Hiring Certainty</span>
                                            </div>
                                            <span className="text-sm font-bold text-white uppercase italic">94% Success</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Scanning Effect */}
                                <motion.div
                                    animate={{ left: ['-100%', '200%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-y-0 w-[50%] bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent skew-x-12 pointer-events-none"
                                />
                            </div>

                        </div>
                    </motion.div>

                    {/* Booking Widget Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="relative group p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-white/20 to-transparent min-h-[700px]">
                            <div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-3xl rounded-[32px] overflow-hidden">
                                {/* Cal.com Embed Library Component */}
                                <div className="w-full h-full min-h-[700px]">
                                    <Cal namespace="kick-off"
                                        calLink="bodishtyan-solutions-llc-vsaga6/kick-off"
                                        style={{ width: "100%", height: "100%" }}
                                        config={{ "layout": "month_view" }}
                                    />
                                </div>
                            </div>

                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 blur-[60px] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
