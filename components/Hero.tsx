"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Terminal, TrendingUp, CheckCircle2, Zap, Mail, Cpu, Truck, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import USMapBackground from "./USMapBackground";

// Typewriter Component
const TypewriterCode = () => {
    const codeString = `class CapacityEngine(Engine):
  def analyze_capacity(self, record):
    # Detect OOS & Fresh MC
    status = records.check_status(record)
    if status.broker_wall:
      self.engage(record, strategy='broker_bypass')
      return True
    return False`;

    const [displayedCode, setDisplayedCode] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "200px" });

    useEffect(() => {
        if (isInView && currentIndex < codeString.length) {
            const timeout = setTimeout(() => {
                setDisplayedCode(prev => prev + codeString[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 30 + Math.random() * 50); // Random typing speed
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isInView, codeString]);

    return (
        <div ref={ref} className="font-mono text-[10px] text-gray-300 leading-relaxed whitespace-pre">
            {displayedCode}
            <span className="animate-pulse inline-block w-1.5 h-3 bg-primary align-middle ml-1" />
        </div>
    );
};

// CountUp Animation Component (Optimized)
const CountUp = ({ end, decimals = 0, duration = 2 }: { end: string | number, decimals?: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const target = typeof end === 'string' ? parseFloat(end.replace(/,/g, '')) : end;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "200px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            setCount(easeOutExpo * target);
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration, isInView]);

    return <span ref={ref}>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
};

export default function Hero({
    headline = (
        <>
            The Ultimate{" "}
            <span className="relative inline-block md:animate-pill mx-3">
                <span className="relative inline-block" style={{ perspective: "1000px" }}>
                    <span className="inline-flex items-center bg-primary/5 border-primary/20 border rounded-full pt-2 pr-6 pb-2 pl-6 md:backdrop-blur-sm italic text-primary font-playfair md:animate-sway3d">
                        Capacity
                    </span>
                </span>
            </span>
            <br className="hidden md:block" />
            Engine for Your Fleets.
        </>
    ),
    subheadline = "Scale your fleet without the friction. We automate the identification, engagement, and qualification of high-tier Owner-Operators and CDL Drivers.",
    badgeText = "Bypass the Broker Wall",
    badgeColor = "red",
    ctaType = "standard"
}: { headline?: React.ReactNode, subheadline?: string, badgeText?: string, badgeColor?: string, ctaType?: "selection" | "standard" }) {
    const [timeRange, setTimeRange] = useState("Monthly");

    const data = {
        Daily: { leads: 1200, qualified: 6, tokens: 1000, emails: 1200, growth: "+15%" },
        Weekly: { leads: 6000, qualified: 30, tokens: 5000, emails: 6000, growth: "+22%" },
        Monthly: { leads: 26400, qualified: 132, tokens: 25000, emails: 26400, growth: "+35%" },
    };

    const currentData = data[timeRange as keyof typeof data];

    interface HeroProps {
        headline?: React.ReactNode;
        subheadline?: string;
        badgeText?: string;
        badgeColor?: "red" | "blue" | "green" | "yellow";
        ctaType?: "selection" | "standard";
    }

    const badgeStyles = {
        red: {
            container: "bg-red-500/10 border-red-500/20",
            ping: "bg-red-400",
            dot: "bg-red-500",
            text: "text-red-500"
        },
        blue: {
            container: "bg-blue-500/10 border-blue-500/20",
            ping: "bg-blue-400",
            dot: "bg-blue-500",
            text: "text-blue-500"
        },
        green: {
            container: "bg-green-500/10 border-green-500/20",
            ping: "bg-green-400",
            dot: "bg-green-500",
            text: "text-green-500"
        },
        yellow: {
            container: "bg-yellow-500/10 border-yellow-500/20",
            ping: "bg-yellow-400",
            dot: "bg-yellow-500",
            text: "text-yellow-500"
        }
    };

    const currentBadgeStyle = badgeStyles[badgeColor as keyof typeof badgeStyles] || badgeStyles.red;

    return (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-12">
            {/* Interactive US Map Background */}
            <USMapBackground />

            <div className="max-w-[1200px] mx-auto px-8 text-center space-y-6 relative z-10">
                <h1 className="text-[32px] md:text-[80px] leading-[1.1] font-bold text-foreground tracking-tight text-center md:[filter:drop-shadow(0_0_80px_rgba(0,102,255,0.45))]">
                    {headline}
                </h1>

                <p className="max-w-2xl mx-auto text-[17px] text-muted-foreground mt-6 font-light leading-relaxed">
                    {subheadline}
                </p>

                {ctaType === "selection" ? (
                    // Selection Hub Layout (Homepage)
                    <div className="flex flex-col items-center mt-10 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">

                        {/* 1. "I AM LOOKING for :" Text */}
                        <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-6">
                            I am looking to recruit:
                        </p>

                        {/* 2. Centralized Button Pair */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full max-w-xl mx-auto relative">



                            {/* Button A: Owner-Operators (Primary) */}
                            <div className="w-full relative group">


                                <Link href="/owner-operators" className="block w-full">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full h-[60px] rounded-xl bg-primary text-white font-bold text-lg shadow-[0_10px_40px_-10px_rgba(0,102,255,0.5)] border border-primary/50 relative overflow-hidden flex items-center justify-center gap-3 transition-all hover:bg-primary/90"
                                    >
                                        <Truck size={20} />
                                        <span>Owner-Operators</span>
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Button B: Company Drivers (Ghost) */}
                            <Link href="/drivers" className="block w-full">
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full h-[60px] rounded-xl bg-transparent text-muted-foreground hover:text-white font-semibold text-lg border-2 border-dashed border-white/10 hover:border-white/20 relative flex items-center justify-center gap-3 transition-all"
                                >
                                    <Users size={20} />
                                    <span>Company Drivers</span>
                                </motion.button>
                            </Link>

                        </div>

                        {/* Guarantee Badge - Moved below buttons to prevent overlap */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                            <ShieldCheck size={12} className="text-yellow-500" />
                            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-wide">30-Lead Guarantee Included</span>
                        </div>

                        {/* Mobile Text for Guarantee if needed, but handled above */}
                    </div>
                ) : (
                    // Standard Layout (Sub-pages)
                    <>
                        {/* Broker Wall / Badge Hook */}
                        <div className={`inline-flex items-center justify-center gap-2 py-1 px-3 rounded-full ${currentBadgeStyle.container} mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300`}>
                            <span className="relative flex h-2 w-2">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentBadgeStyle.ping} opacity-75`}></span>
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${currentBadgeStyle.dot}`}></span>
                            </span>
                            <span className={`text-xs font-semibold ${currentBadgeStyle.text} tracking-wide uppercase`}>{badgeText}</span>
                        </div>

                        {/* Kick Off CTA */}
                        <div className="inline-flex mt-6 items-center relative z-20">
                            <Link href="/book" className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-bold tracking-tight text-white bg-primary ring-1 ring-primary/30 shadow-[0_0_0_1px_rgba(0,102,255,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:ring-primary/60 hover:shadow-[0_0_0_1px_rgba(0,102,255,0.35),0_40px_80px_rgba(0,102,255,0.18)]">
                                <span className="relative z-[1]">Kick Off Your Capacity Engine</span>
                                <ArrowRight size={18} className="relative z-[1] text-white" />
                                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{ boxShadow: '0 0 0 1px rgba(0,102,255,0.45), 0 18px 60px rgba(0,102,255,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(0,102,255,0.22) 0%, rgba(0,102,255,0.08) 35%, rgba(0,102,255,0.00) 60%)' }}></span>
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <div className="relative mt-12 max-w-[1200px] mx-auto px-8 w-full">
                {/* Framed background - Hidden on mobile */}
                <div className="hidden md:block absolute inset-x-0 -top-6 -bottom-10 bg-primary/10 rounded-[40px] blur-2xl opacity-20" />
                <div className="relative overflow-hidden bg-card border border-border rounded-3xl shadow-2xl md:backdrop-blur-xl">

                    <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
                        {/* LEFT: PIPELINE PERFORMANCE */}
                        <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                                        <TrendingUp className="text-primary" size={16} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">Capacity Engine Dashboard</h3>
                                </div>
                                <div className="flex bg-muted/50 dark:bg-black/40 rounded-lg p-1 border border-border shadow-inner self-start sm:self-auto">
                                    {["Daily", "Weekly", "Monthly"].map((range) => (
                                        <button
                                            key={range}
                                            onClick={() => setTimeRange(range)}
                                            className={`px-3 py-1 rounded-md text-[10px] font-medium transition-all ${timeRange === range
                                                ? "bg-primary text-primary-foreground border border-primary dark:bg-primary/20 dark:text-primary dark:border-primary/20 shadow-sm"
                                                : "text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            {range}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Compact Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {/* Total Leads */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <TrendingUp size={40} className="text-primary" />
                                    </div>
                                    <p className="text-[10px] text-primary/60 mb-1 uppercase tracking-wider font-semibold"> Outreach Volume</p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 transition-all group-hover:scale-105 origin-left">
                                        <CountUp end={currentData.leads} />
                                    </h3>
                                    <div className="text-[10px] text-green-400 flex items-center bg-green-500/10 w-fit px-1.5 py-0.5 rounded border border-green-500/10">
                                        <TrendingUp size={10} className="mr-1" /> {currentData.growth}
                                    </div>
                                </div>

                                {/* Qualified */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <CheckCircle2 size={40} className="text-blue-400" />
                                    </div>
                                    <p className="text-[10px] text-blue-300/60 mb-1 uppercase tracking-wider font-semibold">Interested Leads (QIL)</p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:scale-105 origin-left">
                                        <CountUp end={currentData.qualified} decimals={0} />
                                    </h3>
                                    <div className="w-full bg-muted dark:bg-blue-900/30 h-1 rounded-full overflow-hidden mt-2 border border-border">
                                        <motion.div
                                            key={timeRange}
                                            className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(currentData.qualified / (currentData.leads * 0.01)) * 10}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>

                                {/* Tokens Used */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Zap size={40} className="text-yellow-400" />
                                    </div>
                                    <p className="text-[10px] text-yellow-300/60 mb-1 uppercase tracking-wider font-semibold">Identification Rate</p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:scale-105 origin-left">
                                        99.4%
                                    </h3>
                                    <p className="text-[9px] text-yellow-400/50 font-mono tracking-tighter">ENGINE ACTIVE</p>
                                </div>

                                {/* Emails Sent */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Mail size={40} className="text-emerald-400" />
                                    </div>
                                    <p className="text-[10px] text-emerald-300/60 mb-1 uppercase tracking-wider font-semibold">Human Response Rate</p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:scale-105 origin-left">
                                        12.8%
                                    </h3>
                                    <p className="text-[9px] text-emerald-400/50 font-mono tracking-tighter">BOT DETECTION BYPASSED</p>
                                </div>
                            </div>

                            {/* Activity Feed / Velocity */}
                            <div className="relative h-28 w-full bg-muted/30 dark:bg-black/40 rounded-xl border border-border overflow-hidden flex flex-col pt-3 px-3">
                                <div className="text-[10px] text-gray-500 font-mono flex items-center justify-between px-1 mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,102,255,0.8)]" />
                                        Capacity Velocity
                                    </div>
                                    <span className="text-primary/50 leading-none">REAL-TIME DATA</span>
                                </div>
                                <div className="flex justify-between items-end w-full gap-1 h-full pb-1">
                                    {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 100].map((h, i) => (
                                        <motion.div
                                            key={i + timeRange}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05, duration: 1, ease: "backOut" }}
                                            viewport={{ once: true }}
                                            className="flex-1 bg-gradient-to-t from-primary/10 via-primary/40 to-primary/80 rounded-t-sm relative group/bar"
                                        >
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover/bar:opacity-30 transition-opacity rounded-t-sm" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: AGENT STUDIO */}
                        <div className="p-6 md:p-8 flex flex-col justify-center bg-muted/10 dark:bg-white/[0.02]">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl text-foreground font-medium">Capacity Engine Workspace</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                        <span className="text-[10px] text-emerald-300 font-mono tracking-wide">SYSTEM ONLINE</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Container */}
                            <div className="relative w-full bg-background dark:bg-black/40 rounded-xl border border-border p-5 backdrop-blur-md overflow-hidden">
                                {/* Decoration */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full pointer-events-none"></div>

                                {/* Code Terminal with Typewriter */}
                                <div className="bg-[#0B0F14] rounded-lg border border-white/10 overflow-hidden font-mono text-xs mb-5 shadow-inner">
                                    <div className="flex items-center px-3 py-2 border-b border-white/5 bg-white/5">
                                        <div className="flex gap-1.5 mr-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
                                        </div>
                                        <span className="text-gray-500 text-[10px]">agent_core.py</span>
                                    </div>
                                    <div className="p-4 min-h-[100px]">
                                        <TypewriterCode />
                                    </div>
                                </div>

                                {/* Bottom Metrics */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 uppercase">Tasks Processed</span>
                                        <span className="text-white font-bold text-lg">847</span>
                                    </div>
                                    <div className="flex flex-col border-l border-white/5 pl-4">
                                        <span className="text-[10px] text-gray-500 uppercase">Success Rate</span>
                                        <span className="text-emerald-400 font-bold text-lg">98.5%</span>
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
