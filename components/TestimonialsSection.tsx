"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const testimonials = [
    {
        id: 0,
        quote: "We went from 8 empty trucks to fully staffed in 6 weeks. It's ridiculous how well this works.",
        author: "James D.",
        role: "Fleet Owner, Dallas, TX",
        icon: Quote,
        metricLabel: "Time to Hire",
        metricValue: "6 wks"
    },
    {
        id: 1,
        quote: "First qualified interview in 5 days. No cold calling. No spreadsheets. Just showed up to the interview.",
        author: "Sarah M.",
        role: "Owner-Operator, Ohio",
        icon: ShieldCheck,
        metricLabel: "Qualified",
        metricValue: "5 days"
    },
    {
        id: 2,
        quote: "Finally, a system that actually delivers. We used to spend $3K/mo on Indeed for nothing.",
        author: "Michael R.",
        role: "Logistics Manager, CA",
        icon: Star,
        metricLabel: "ROI",
        metricValue: "10x"
    }
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Section Header adapted from user snippet */}
            <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* Left Content */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        <ShieldCheck size={12} />
                        <span>Verified Partners</span>
                    </div>

                    <h2 className="text-[34px] font-semibold tracking-tight text-white leading-[1.1]">
                        Real Fleets. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">Real Results.</span>
                    </h2>

                    <p className="text-[15px] text-gray-400 leading-relaxed max-w-lg">
                        See how modern fleets are automating their recruitment pipeline and filling trucks faster than ever before.
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                            <Star size={14} className="text-yellow-500/80" />
                            <span className="text-xs text-white/70">Trusted by 500+</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                            <ShieldCheck size={14} className="text-green-500/80" />
                            <span className="text-xs text-white/70">Verified Reviews</span>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                        <Link href="/book" className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-all hover:-translate-y-0.5">
                            <Play size={16} className="fill-black" />
                            <span>Book Live Demo</span>
                        </Link>
                        <Link href="/book" className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-all hover:-translate-y-0.5">
                            <span>Get started</span>
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-2 pt-4">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Content: Stacked Cards */}
                <div className="lg:col-span-7 relative h-[500px] flex items-center justify-center perspective-1000">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

                    {/* The Stack */}
                    <div className="relative w-full max-w-md h-[360px]">
                        {testimonials.map((item, index) => {
                            // Calculate position relative to active index
                            let offset = (index - activeIndex + testimonials.length) % testimonials.length;
                            // We want 0 to be front, 1 to be behind, 2 to be further behind
                            // If we have many items, we might need logic to hide generic ones, but with 3 items:
                            // Active (0) -> z-30, scale 1, y 0, opacity 1
                            // Next (1) -> z-20, scale 0.95, y -10, opacity 0.7
                            // Last (2) -> z-10, scale 0.9, y -20, opacity 0.4

                            // However, user snippet uses a specific layout. Let's adapt tailored to 3 items.

                            let zIndex = 30;
                            let scale = 1;
                            let y = 0;
                            let opacity = 1;
                            let blur = 0;

                            if (index === activeIndex) {
                                zIndex = 30;
                            } else if (index === (activeIndex + 1) % testimonials.length) {
                                zIndex = 20;
                                scale = 0.95;
                                y = -15; // move UP to look like stack behind
                                opacity = 0.6;
                                blur = 2; // slight blur for depth
                            } else {
                                zIndex = 10;
                                scale = 0.90;
                                y = -30;
                                opacity = 0.3;
                                blur = 4;
                            }

                            return (
                                <motion.div
                                    key={item.id}
                                    className="absolute inset-0 origin-bottom"
                                    initial={false}
                                    animate={{
                                        zIndex,
                                        scale,
                                        y,
                                        opacity,
                                        filter: `blur(${blur}px)`
                                    }}
                                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                >
                                    <div className="h-full w-full rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between">

                                        {/* Header of Card */}
                                        <div className="flex justify-between items-start">
                                            <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                                <item.icon className="text-white/80" size={20} />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">{item.metricLabel}</div>
                                                <div className="text-xl font-bold text-white mt-1">{item.metricValue}</div>
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="relative">
                                            <Quote className="absolute -top-4 -left-2 text-white/5 rotate-180" size={60} />
                                            <p className="relative text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                                                "{item.quote}"
                                            </p>
                                        </div>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-sm font-bold text-white">
                                                {item.author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-white">{item.author}</div>
                                                <div className="text-xs text-white/50">{item.role}</div>
                                            </div>
                                        </div>

                                        {/* SVG Filter applied via style or class if needed. 
                                            The user snippet used inline SVG filters. 
                                            We can rely on backdrop-blur-xl and border-white/10 for the glass effect in React 
                                            without the heavy inline SVG complexity for now, unless mandated.
                                            Detailed glass effect:
                                        */}
                                        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)' }}></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
