"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, Truck, Users } from "lucide-react";
import Link from "next/link";

export default function FlexibleEngagementModels() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-heading">
                        Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Engagement Models.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose the acquisition engine that perfectly aligns with your fleet&apos;s scaling velocity and capital structure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card A: The High-Velocity Subscription */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-primary/50 transition-colors overflow-hidden flex flex-col h-full shadow-xl"
                    >
                        {/* Background Effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[80px] rounded-full pointer-events-none -mr-20 -mt-20" />

                        <div className="relative z-10 flex-grow">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                                <Truck size={14} />
                                <span>Track A</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">The High-Velocity Subscription</h3>
                            <p className="text-sm font-medium text-primary mb-6">Best for Fleets scaling aggressively (2+ seats/month).</p>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">$1,500</span>
                                    <span className="text-xl text-muted-foreground font-normal">/mo</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">+ $750 One-Time Setup Fee</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-foreground">Custom Email Infrastructure Build-out</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-foreground"><strong>100+ High-Intent Leads</strong> delivered every 30 days</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-foreground">Full access to Instant Truck Detail Records</span>
                                </li>
                            </ul>
                        </div>

                        {/* Guarantee Block inside Card A */}
                        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 mb-8 relative overflow-hidden group">
                            <h4 className="text-yellow-400 text-sm font-semibold mb-1 flex items-center gap-2">
                                <ShieldCheck size={16} />
                                The 30-Lead Guarantee
                            </h4>
                            <p className="text-xs text-yellow-200/80 leading-relaxed">
                                30 Qualified Leads in 30 Days or we work for free until we hit the target.
                            </p>
                        </div>

                        <div className="mt-auto relative z-10">
                            <Link href="/book" className="block w-full">
                                <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    Start the Engine
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card B: The Risk-Free Success Fee */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-blue-400/50 transition-colors overflow-hidden flex flex-col h-full shadow-xl"
                    >
                        {/* Background Effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none -mr-20 -mt-20" />

                        <div className="relative z-10 flex-grow">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                                <Users size={14} />
                                <span>Track B</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">The Risk-Free Success Fee</h3>
                            <p className="text-sm font-medium text-blue-400 mb-6">Best for Fleets needing a specific &quot;Ready-to-Roll&quot; driver.</p>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">$0</span>
                                    <span className="text-xl text-muted-foreground font-normal">Upfront Cost</span>
                                </div>
                                <div className="mt-2 space-y-1">
                                    <p className="text-sm text-foreground font-medium">• $1,800 <span className="text-muted-foreground font-normal">per Company Driver Hired</span></p>
                                    <p className="text-sm text-foreground font-medium">• $2,500 <span className="text-muted-foreground font-normal">per Owner-Operator Leased-On</span></p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <Check className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-foreground">Zero retainers, setup fees, or hidden costs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-foreground">Targeting Active 1-2 Truck Authorities & OOS Drivers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-sm text-foreground">Pay only when the driver is seated & rolling</span>
                                </li>
                            </ul>
                        </div>

                        {/* Guarantee Block inside Card B */}
                        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 mb-8 relative overflow-hidden group">
                            <h4 className="text-blue-400 text-sm font-semibold mb-1 flex items-center gap-2">
                                <ShieldCheck size={16} />
                                30-Day Retention Protection
                            </h4>
                            <p className="text-xs text-blue-300/80 leading-relaxed">
                                If a driver leaves within the first 30 days, we replace them at absolutely no cost.
                            </p>
                        </div>

                        <div className="mt-auto relative z-10">
                            <Link href="/book" className="block w-full">
                                <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    Hire a Driver
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
