"use client";

import { motion } from "framer-motion";
import { Database, ShieldCheck, TrendingUp, Users, Activity } from "lucide-react";

export default function AdvantageSection() {
    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                            <Database size={12} />
                            <span>The Asamblor Advantage</span>
                        </div>

                        <h2 className="section-heading">
                            Bypass the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400">
                                Broker Wall.
                            </span>
                        </h2>

                        <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                            Newly formed companies with &quot;fresh MCs&quot; often cannot find work because brokers refuse to work with them for the first 6–12 months. Asamblor identifies these high-tier Owner-Operators and helps them lease onto established fleets to access consistent freight and fuel cards.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-white/5 border border-black/5 dark:border-white/10 shrink-0">
                                    <Database className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold mb-1">2.6 Million Records</h3>
                                    <p className="text-sm text-muted-foreground">Precision mining of OOS (Out of Service) records and Fresh MC data.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-white/5 border border-black/5 dark:border-white/10 shrink-0">
                                    <ShieldCheck className="text-green-400" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-semibold mb-1">Lease-On Strategy</h3>
                                    <p className="text-sm text-muted-foreground">Bridge the gap between fresh authorities and established freight access.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual - Glass Mission Control Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="bg-card border border-border rounded-[1.2em] overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl backdrop-blur-xl">

                            <div className="flex flex-col h-full p-4 md:p-6 pb-7 min-h-[400px]">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-3/4">
                                        <h1 className="text-[26px] leading-tight tracking-tight font-medium text-foreground">Live Data Feed</h1>
                                        <p className="text-muted-foreground text-sm font-light mt-1">Real-time OOS Database</p>
                                    </div>
                                    <div className="w-1/4 text-right">
                                        <div className="text-[20px] font-semibold font-mono text-foreground/30">ASAMBLOR</div>
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
                                                <div className="text-sm text-foreground font-mono truncate">DOT#{1008460 + i * 241}</div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] items-center px-1.5 py-0.5 rounded border border-red-500/20 bg-red-500/10 text-red-400 hidden sm:flex">
                                                    INACTIVE
                                                </span>
                                                <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">{3 + i} Drivers</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

                                {/* Bottom Metrics */}
                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <div className="text-4xl font-semibold leading-tight font-mono bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                            30+
                                        </div>
                                        <div className="text-xs opacity-70 uppercase tracking-wide text-muted-foreground mt-1">Interested Leads / 30 Days</div>
                                    </div>
                                    <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-lg text-primary">
                                        <Activity size={24} />
                                    </div>
                                </div>

                                <div className="rounded px-2 py-0.5 font-mono text-[10px] relative overflow-hidden mt-6 text-center border border-border bg-muted/50" >
                                    <span className="text-muted-foreground">ENGINE STATUS: <span className="text-green-500">ACTIVE & ENGAGED</span></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
