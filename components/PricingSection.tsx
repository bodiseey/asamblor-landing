"use client";

import { Check, ShieldCheck, ArrowRight, Database, Mic, BarChart3, Mail, Bell } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
    return (
        <section id="pricing" className="relative py-24 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-[40px] md:text-[50px] font-semibold tracking-tight text-white leading-[1.1] mb-6">
                        One Plan. <span className="text-purple-400">Total Dominance.</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Stop complicating your growth. Get the full engine for a flat rate.
                    </p>
                </div>

                <div className="relative rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-0 relative z-10">
                        {/* LEFT: Plan Details & Features */}
                        <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                                <ShieldCheck size={14} />
                                <span>All-Inclusive System</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                The Full Autopilot Engine
                            </h3>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Everything you need to fill your trucks. No hidden fees. No per-lead charges.
                            </p>

                            <div className="space-y-5 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
                                        <Database className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Access to 2.6M Driver Database</h4>
                                        <p className="text-sm text-gray-400">Exclusive &apos;Out of Service&apos; &amp; Inactive pool.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 shrink-0">
                                        <Mic className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">AI Voice Agent</h4>
                                        <p className="text-sm text-gray-400">24/7 Qualifying & Booking directly to calendar.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 shrink-0">
                                        <BarChart3 className="text-green-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Custom GHL Recruitment CRM</h4>
                                        <p className="text-sm text-gray-400">Pre-built pipelines and automation workflows.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 shrink-0">
                                        <Mail className="text-orange-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">High-Volume Email Infrastructure</h4>
                                        <p className="text-sm text-gray-400">Done-for-you domain warmup & management.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 shrink-0">
                                        <Bell className="text-pink-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Real-time Lead Notifications</h4>
                                        <p className="text-sm text-gray-400">Instant alerts via SMS/Email for hot leads.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Guarantee Block */}
                            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ShieldCheck size={80} className="text-yellow-500" />
                                </div>
                                <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                                    <ShieldCheck size={18} />
                                    The Asamblor Guarantee
                                </h4>
                                <p className="text-sm text-yellow-200/80 leading-relaxed relative z-10">
                                    If we don&apos;t generate at least <strong>20 qualified driver interviews</strong> in your first 30 days, we work for free until we do.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Pricing & Action */}
                        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-white/[0.02] relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-50" />

                            <div className="relative z-10 text-center lg:text-left">
                                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-4">Simple Pricing</p>
                                <div className="flex flex-col items-center lg:items-start gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">$1,550<span className="text-2xl text-gray-500 font-normal">/mo</span></span>
                                    <span className="text-lg text-gray-400">+ $700 Setup Fee</span>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <Link href="/book" className="block w-full">
                                        <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group">
                                            Start Your Engine
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                    <p className="text-xs text-center text-gray-500">
                                        Strictly limited spots per month. No long-term contracts.
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check className="text-green-500 shrink-0" size={16} />
                                        <span>Full Account Setup & Onboarding</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check className="text-green-500 shrink-0" size={16} />
                                        <span>Weekly Performance Reviews</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check className="text-green-500 shrink-0" size={16} />
                                        <span>Dedicated Success Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
