"use client";

import { motion } from "framer-motion";
import { Database, ShieldCheck, TrendingUp, Users, Activity } from "lucide-react";

export default function AdvantageSection() {
    return (
        <section className="py-16 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <Database size={12} />
                            <span>The Asamblor Advantage</span>
                        </div>

                        <h2 className="text-[34px] font-semibold tracking-tight text-white leading-[1.1] mb-6">
                            The Asamblor Advantage. <br />
                            Access the Hidden <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
                                &quot;Out of Service&quot; Pool.
                            </span>
                        </h2>

                        <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                            While other fleets fight over the same job board leads, we target CDL drivers from &quot;Out of Service&quot; (OOS) companies. These are experienced drivers who suddenly need a new home because their current carrier shut down.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                    <Database className="text-purple-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">2.6 Million Records</h3>
                                    <p className="text-sm text-gray-500">Real-time database of OOS/Not Authorized fleet records.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                    <ShieldCheck className="text-green-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Pre-Validated Data</h3>
                                    <p className="text-sm text-gray-500">We verify contacts and authority status before outreach.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual - Glass Mission Control Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div
                            className="bg-gradient-to-r from-white/10 to-white/5 w-full max-w-[32rem] rounded-[1.2em] overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                            style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
                        >
                            {/* Card Borders/Masks */}
                            <div className="absolute inset-0 rounded-[1.2em] border border-white/20" style={{ maskImage: 'linear-gradient(135deg, white, transparent 60%)' }}></div>
                            <div className="absolute inset-0 border-neutral-400/30 border rounded-[1.2em]" style={{ maskImage: 'linear-gradient(135deg, transparent 60%, white)' }}></div>

                            <div className="flex flex-col h-full p-6 pb-7 min-h-[400px]">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-3/4">
                                        <h1 className="text-[26px] leading-tight tracking-tight font-medium text-white">Live Data Feed</h1>
                                        <p className="text-neutral-400 text-sm font-light mt-1">Real-time OOS Database</p>
                                    </div>
                                    <div className="w-1/4 text-right">
                                        <div className="text-[20px] font-semibold font-mono text-white/50">ASAMBLOR</div>
                                        <div className="flex items-center justify-end gap-1 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(16, 185, 129, 0.6)' }}></div>
                                            <span className="text-xs text-green-300">LIVE</span>
                                        </div>
                                    </div>
                                </div>

                                {/* List Data (Replacting Planetary Icons from snippet with Data List) */}
                                <div className="space-y-4 mb-auto">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default group">
                                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white/5 border border-green-500/20 group-hover:border-green-500/50 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm text-neutral-200 font-mono truncate">DOT#{1008460 + i * 241}</div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] items-center px-1.5 py-0.5 rounded border border-red-500/20 bg-red-500/10 text-red-400 hidden sm:flex">
                                                    INACTIVE
                                                </span>
                                                <span className="text-sm text-neutral-400 font-medium whitespace-nowrap">{3 + i} Drivers</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

                                {/* Bottom Metrics */}
                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <div className="text-4xl font-semibold leading-tight font-mono bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent">
                                            4-5
                                        </div>
                                        <div className="text-xs opacity-70 uppercase tracking-wide text-neutral-400 mt-1">Qualified Leads / Day</div>
                                    </div>
                                    <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-500/20 shadow-lg text-purple-300">
                                        <Activity size={24} />
                                    </div>
                                </div>

                                <div className="rounded px-2 py-0.5 font-mono text-[10px] relative overflow-hidden mt-6 text-center border border-white/5 bg-white/5" >
                                    <span className="text-neutral-400">DATA SYNC: <span className="text-green-400">CONNECTED</span></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
