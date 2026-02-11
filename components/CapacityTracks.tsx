"use client";

import { motion } from "framer-motion";
import { User, Truck, ChevronRight, BarChart3, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CapacityTracks() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-heading">
                        Two Tracks to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Scale.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose your growth vector. Our dual-track engine runs specialized campaigns for both asset-light expansion and fleet utilization.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Track 1: Owner Operators */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative rounded-3xl border border-border bg-card p-8 hover:border-primary/50 transition-colors overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Truck size={120} />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                            <Truck size={14} />
                            <span>Track 1</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Expand with Owner-Operators</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Bypass the Broker Wall. We identify Owner-Operators with fresh MC authorities who need to lease onto established fleets for consistent freight and insurance access.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                                <span className="text-sm font-medium">Daily Qualified Leads</span>
                                <span className="text-xl font-bold text-foreground">3–10</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                                <span className="text-sm font-medium">Lead Exclusivity</span>
                                <span className="text-xl font-bold text-emerald-500">100%</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <ChevronRight className="text-primary shrink-0 mt-0.5" size={16} />
                                <span>Access to <strong>2.6M Driver Database</strong> (OOS Priority)</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <ChevronRight className="text-primary shrink-0 mt-0.5" size={16} />
                                <span>Real-time MC Authority Verification</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <ChevronRight className="text-primary shrink-0 mt-0.5" size={16} />
                                <span>Automated Lease-On Pitching</span>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <Link href="/owner-operators" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link">
                                Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Track 2: Company Drivers */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative rounded-3xl border border-border bg-card p-8 hover:border-blue-400/50 transition-colors overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Users size={120} />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                            <Users size={14} />
                            <span>Track 2</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Fill Empty Seats</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Stop the bleeding. We target experienced Company Drivers with clean MVRs who are actively looking for better CPM and consistent home time.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                                <span className="text-sm font-medium">Daily Qualified Leads</span>
                                <span className="text-xl font-bold text-foreground">3–6</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                                <span className="text-sm font-medium">Candidate Quality</span>
                                <span className="text-xl font-bold text-emerald-500">Verified</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <ChevronRight className="text-blue-500 shrink-0 mt-0.5" size={16} />
                                <span>CDL Class A Validation</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <ChevronRight className="text-blue-500 shrink-0 mt-0.5" size={16} />
                                <span>Experience & Endorsement Filtering</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <ChevronRight className="text-blue-500 shrink-0 mt-0.5" size={16} />
                                <span>Instant Interview Scheduling</span>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <Link href="/drivers" className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all group/link">
                                Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
