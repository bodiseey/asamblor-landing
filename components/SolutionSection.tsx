"use client";

import { motion } from "framer-motion";
import { Database, Mic2, CalendarCheck2, Play, Send } from "lucide-react";

const steps = [
    {
        icon: Play,
        title: "Kickoff & Discovery",
        number: "01",
        description: "Clarify goals, scope, and success metrics.",
        color: "text-indigo-400",
        ring: "ring-indigo-400/60",
        bg: "bg-indigo-400/10"
    },
    {
        icon: Database,
        title: "Data Mining",
        number: "02",
        description: "We scrape thousands of 'Out of Service' fleet records daily to find drivers looking for work.",
        color: "text-blue-400",
        ring: "ring-blue-400/60",
        bg: "bg-blue-400/10"
    },
    {
        icon: Send,
        title: "Campaign & Outreach", // New Step
        number: "03",
        description: "We launch targeted SMS and email campaigns to engage the pre-validated driver pool.",
        color: "text-pink-400",
        ring: "ring-pink-400/60",
        bg: "bg-pink-400/10"
    },
    {
        icon: Mic2,
        title: "AI & Qualification Layer",
        number: "04",
        description: "Our AI agents vet leads for experience, safety records, and interest—handling objections in real-time.",
        color: "text-primary",
        ring: "ring-primary/60",
        bg: "bg-primary/10"
    },
    {
        icon: CalendarCheck2,
        title: "Booked Interview",
        number: "05",
        description: "Qualified drivers are booked directly onto your calendar. You only talk to candidates ready to drive.",
        color: "text-emerald-400",
        ring: "ring-emerald-400/60",
        bg: "bg-emerald-400/10"
    }
];

export default function SolutionSection() {
    return (
        <section className="py-16 relative bg-background overflow-hidden" id="workflow">
            {/* Background Elements - Hidden on mobile for performance */}
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="hidden md:block absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT COLUMN: STEPS (Timeline) */}
                    <div className="order-2 lg:order-1 space-y-4">
                        {steps.map((step, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 dark:bg-neutral-900/70 border-black/5 dark:border-white/10 border rounded-2xl p-4 md:backdrop-blur-md hover:border-black/10 dark:hover:border-white/20 transition-all group"
                            >
                                <div className="grid grid-cols-[auto_1fr] items-center gap-5">
                                    {/* Indicator */}
                                    <div className="flex flex-col items-center">
                                        <span className={`text-[10px] font-mono mb-1 ${step.color}`}>{step.number}</span>
                                        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ${step.ring} bg-background dark:bg-neutral-950 relative`}>
                                            <span className={`h-2.5 w-2.5 rounded-full bg-foreground`}></span>
                                            {/* Connecting Line */}
                                            {index !== steps.length - 1 && (
                                                <span className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-12 bg-black/10 dark:bg-white/10 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-colors"></span>
                                            )}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <p className="text-base text-foreground font-medium tracking-tight group-hover:opacity-80 transition-opacity mb-0.5">
                                            {step.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: HEADER (Sticky) */}
                    <div className="order-1 lg:order-2 lg:sticky lg:top-32 self-start text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-heading text-left lg:text-right">
                                The Operational <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400">Engine Logic.</span>
                            </h2>
                            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 text-left lg:text-right">
                                From raw data to a booked interview, Asamblor handles the entire recruitment funnel. We automate the grunt work so you can focus on closing.
                            </p>

                            <div className="flex flex-wrap lg:justify-end gap-3">
                                <span className="px-3 py-1 rounded-full border border-border bg-card text-sm text-muted-foreground">
                                    Full Autopilot
                                </span>
                                <span className="px-3 py-1 rounded-full border border-border bg-card text-sm text-muted-foreground">
                                    24/5 Engagement
                                </span>
                                <span className="px-3 py-1 rounded-full border border-border bg-card text-sm text-muted-foreground">
                                    CRM Integration
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
