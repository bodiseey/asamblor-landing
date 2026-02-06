"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Calendar, ShieldCheck, Zap, ArrowLeft, BarChart3, Users, Clock } from "lucide-react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Strategy Call | Asamblor",
    description: "Schedule a consultation with Asamblor experts to build your automated fleet recruitment engine.",
};

export default function BookPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "kick-off" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-dotted-grid opacity-20" />

            {/* Background Elements - Hidden on mobile for performance */}
            <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                                <Calendar size={14} />
                                <span>Kick off your hiring process</span>
                            </div>
                            <h1 className="section-heading text-left !mb-6 !md:text-[64px]">
                                Book Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400 italic">Hiring Engine.</span>
                            </h1>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                Shift your recruitment into high gear. Schedule a session with our automation experts to build your custom autonomous driver funnel.
                            </p>
                        </div>

                        {/* Back Link */}
                        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Home</span>
                        </Link>

                        {/* Analytics/Automation Stats Card */}
                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="p-4 md:p-6 rounded-3xl bg-white/[0.03] border border-white/10 md:backdrop-blur-xl relative group overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <BarChart3 size={120} className="text-primary" />
                                </div>
                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="flex items-center gap-2 text-primary font-bold">
                                        <Zap size={18} fill="currentColor" />
                                        <span className="text-sm uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 border border-primary/20">Automation Velocity</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between border-b border-border pb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                                                    <Users size={16} className="text-muted-foreground" />
                                                </div>
                                                <span className="text-sm text-foreground font-medium">Lead Screening</span>
                                            </div>
                                            <span className="text-sm font-bold text-primary uppercase italic tracking-wider">Instant</span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-border pb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                                                    <Clock size={16} className="text-muted-foreground" />
                                                </div>
                                                <span className="text-sm text-foreground font-medium">Qual. Interviews</span>
                                            </div>
                                            <span className="text-sm font-bold text-primary uppercase italic tracking-wider">Automated</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                                                    <ShieldCheck size={16} className="text-muted-foreground" />
                                                </div>
                                                <span className="text-sm text-foreground font-medium">Hiring Certainty</span>
                                            </div>
                                            <span className="text-sm font-bold text-primary uppercase italic tracking-wider">94% Success</span>
                                        </div>
                                    </div>
                                </div>
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
                        <div className="relative group p-[1px] rounded-[24px] md:rounded-[32px] overflow-hidden bg-gradient-to-b from-primary/30 to-transparent min-h-[600px] md:min-h-[700px] shadow-[0_0_80px_rgba(0,102,255,0.1)]">
                            <div className="absolute inset-0 bg-card md:backdrop-blur-3xl rounded-[24px] md:rounded-[32px] overflow-hidden">
                                {/* Cal.com Embed Library Component */}
                                <div className="w-full h-full min-h-[600px] md:min-h-[700px]">
                                    <Cal namespace="kick-off"
                                        calLink="bodishtyan-solutions-llc-vsaga6/kick-off"
                                        style={{ width: "100%", height: "100%" }}
                                        config={{ "layout": "month_view", "theme": "dark" }}
                                    />
                                </div>
                            </div>

                            {/* Decorative Corner Accents - Hidden on mobile */}
                            <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] pointer-events-none" />
                            <div className="hidden md:block absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[60px] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
