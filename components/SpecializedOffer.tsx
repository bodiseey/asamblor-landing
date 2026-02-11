"use client";

import { Check, ShieldCheck, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SpecializedOfferProps {
    title: string;
    description: string;
    setupFee: string;
    monthlyFee: string;
    guaranteeText: string;
    accentColor: "blue" | "primary" | "emerald";
    features: string[];
}

export default function SpecializedOffer({
    title,
    description,
    setupFee,
    monthlyFee,
    guaranteeText,
    accentColor = "primary",
    features
}: SpecializedOfferProps) {

    // Color mapping
    const colors = {
        blue: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            text: "text-blue-500",
            hoverText: "hover:text-blue-400",
            buttonBg: "bg-blue-600",
            buttonHover: "hover:bg-blue-500",
            gradient: "from-blue-500/5",
            badge: "bg-blue-500/10 border-blue-500/20 text-blue-500"
        },
        primary: {
            bg: "bg-primary/10",
            border: "border-primary/20",
            text: "text-primary",
            hoverText: "hover:text-primary",
            buttonBg: "bg-primary",
            buttonHover: "hover:bg-primary/90",
            gradient: "from-primary/5",
            badge: "bg-primary/10 border-primary/20 text-primary"
        },
        emerald: {
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            text: "text-emerald-500",
            hoverText: "hover:text-emerald-400",
            buttonBg: "bg-emerald-600",
            buttonHover: "hover:bg-emerald-500",
            gradient: "from-emerald-500/5",
            badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
        }
    };

    const currentColor = colors[accentColor];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-heading">
                        Stop Competing. <span className={`text-transparent bg-clip-text bg-gradient-to-r ${accentColor === 'blue' ? 'from-blue-400 to-cyan-300' : 'from-primary to-blue-400'}`}>Start Dominating.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="relative rounded-3xl border border-border bg-card/50 shadow-2xl md:backdrop-blur-xl overflow-hidden">
                    {/* Background Effects */}
                    <div className={`hidden md:block absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] ${currentColor.gradient} blur-[120px] rounded-full pointer-events-none opacity-50`} />
                    <div className="hidden md:block absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-0 relative z-10">
                        {/* LEFT: Plan Details & Features */}
                        <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${currentColor.badge} text-xs font-semibold uppercase tracking-wider w-fit mb-6`}>
                                <ShieldCheck size={14} />
                                <span>Risk-Mitigated RaaS Model</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                                {title}
                            </h3>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                A specialized acquisition engine built for volume and speed.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className={`p-1 rounded-full ${currentColor.bg} border ${currentColor.border} shrink-0 mt-0.5`}>
                                            <Check className={currentColor.text} size={14} />
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Guarantee Block */}
                            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <ShieldCheck size={80} className="text-yellow-500" />
                                </div>
                                <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                                    <ShieldCheck size={18} />
                                    The 30-Lead Guarantee
                                </h4>
                                <p className="text-sm text-yellow-200/80 leading-relaxed relative z-10">
                                    {guaranteeText}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Pricing & Action */}
                        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-white/[0.02] relative">
                            <div className="relative z-10 text-center lg:text-left">
                                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-4">Simple Pricing</p>
                                <div className="flex flex-col items-center lg:items-start gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">{monthlyFee}<span className="text-2xl text-muted-foreground font-normal">/mo</span></span>
                                    {/* Configuration Fee */}
                                    <span className="text-lg text-muted-foreground">+ {setupFee} Configuration Fee</span>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <Link href="/book" className="block w-full">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full py-4 rounded-xl ${currentColor.buttonBg} ${currentColor.buttonHover} text-primary-foreground font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group`}
                                        >
                                            Start Your Engine
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                    <p className="text-xs text-center text-gray-500">
                                        Strictly limited spots per month. No long-term contracts.
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-border space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Check className="text-green-500 shrink-0" size={16} />
                                        <span>Full Account Setup & Onboarding</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Check className="text-green-500 shrink-0" size={16} />
                                        <span>Weekly Performance Reviews</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <X className="text-red-500 shrink-0" size={16} />
                                        <span>No Hidden Fees</span>
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
