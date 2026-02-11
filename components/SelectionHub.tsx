"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users } from "lucide-react";

export default function SelectionHub() {
    return (
        <section className="relative z-40 w-full pt-24 pb-6 px-6 md:pt-28 md:pb-8 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

                {/* Text and Selection */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
                    <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider text-center md:text-left whitespace-nowrap">
                        I am looking to recruit:
                    </span>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <Link href="/owner-operators" className="w-full md:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 102, 255, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm md:text-base shadow-lg shadow-primary/20 flex items-center justify-center gap-2 border border-primary/50 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <Truck size={18} />
                                <span>Owner-Operators</span>
                            </motion.button>
                        </Link>

                        <Link href="/drivers" className="w-full md:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto px-6 py-3 rounded-xl bg-slate-800 text-white font-bold text-sm md:text-base shadow-lg border border-slate-700 hover:border-slate-500 relative overflow-hidden group flex items-center justify-center gap-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <Users size={18} />
                                <span>Company Drivers</span>
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Guarantee Badge */}
                <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                    <div className="p-1.5 rounded-full bg-yellow-500/10 text-yellow-500">
                        <ShieldCheck size={16} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-yellow-500 uppercase tracking-wide">30-Lead Guarantee</span>
                        <span className="text-[10px] text-yellow-200/60">30 Qualified Leads in 30 Days or we run for free</span>
                    </div>
                </div>
                {/* Mobile Guarantee Badge (Simplified) */}
                <div className="flex md:hidden items-center justify-center gap-2 text-xs text-yellow-500/80 mt-2">
                    <ShieldCheck size={14} />
                    <span>30 Qualified Leads/30 Days Guarantee</span>
                </div>

            </div>
        </section>
    );
}
