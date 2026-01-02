"use client";

import { Bolt, BarChart3, Globe2, Repeat, Star, ShieldCheck, BadgeCheck, Languages, Boxes, Inbox, MessageSquare, Calendar, Database, Clock, BellRing, BarChart, Workflow, UserPlus, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FeatureHighlights() {
    return (
        <section className="relative z-10 max-w-[1200px] mx-auto px-8 py-16">
            {/* Badge */}
            <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur">
                    <Bolt className="h-3.5 w-3.5 text-sky-300" />
                    <span className="text-xs text-sky-200/90 tracking-wide">Feature Highlights</span>
                </div>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-center text-3xl md:text-[34px] font-semibold tracking-tight text-white leading-tight">
                Everything You Need to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    Hire Drivers—Automated
                </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/70 font-normal">
                Stop managing spreadsheets and start managing interviews. Tools to track, automate, and scale your pipeline.
            </p>

            {/* Grid */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <RealtimeCard />
                <BordersCard />
                <CollabCard />
                <AutomationCard />
            </div>
        </section>
    );
}

function RealtimeCard() {
    const [animated, setAnimated] = useState(false);
    const [usWidth, setUsWidth] = useState(0);
    const [bdWidth, setBdWidth] = useState(0);
    const cardRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !animated) {
                    setAnimated(true);
                    setUsWidth(76); // Target %
                    setBdWidth(44); // Target %
                }
            },
            { threshold: 0.4 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [animated]);

    return (
        <section ref={cardRef} className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6 transition-all duration-300 hover:bg-white/[0.06]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

            {/* Inset UI preview */}
            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                    <BarChart3 className="h-4 w-4 text-purple-300" />
                    <span className="font-medium">Realtime KPI Monitor</span>
                </div>

                <div className="space-y-3">
                    {/* Row 1 */}
                    <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5 rounded-full bg-blue-500/20 ring-1 ring-white/20 flex items-center justify-center text-[10px] text-blue-200 font-bold">L</div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white/90">Lead Velocity</p>
                                    <p className="text-xs text-white/60">84/week</p>
                                </div>
                                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-purple-400 to-blue-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${usWidth}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                            <span className="text-xs text-white/70">{usWidth}%</span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5 rounded-full bg-green-500/20 ring-1 ring-white/20 flex items-center justify-center text-[10px] text-green-200 font-bold">Q</div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white/90">Qualification Rate</p>
                                    <p className="text-xs text-white/60">Top 10%</p>
                                </div>
                                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${bdWidth}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                            <span className="text-xs text-white/70">{bdWidth}%</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <button className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-3 py-1.5 text-xs text-purple-200 ring-1 ring-purple-400/30 hover:bg-purple-500/20 transition">
                        <Sparkles className="h-3 w-3" />
                        AI Insights
                    </button>
                    <div className="flex items-center gap-2 text-[11px] text-white/50">
                        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        Live
                    </div>
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">Real‑Time Performance Tracking</h3>
            <p className="mt-1.5 text-sm text-white/70">
                See KPIs, qualified drivers, and booked interview trends as they happen. Make confident decisions with instant insight.
            </p>
        </section>
    );
}

function BordersCard() {
    return (
        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6 transition-all duration-300 hover:bg-white/[0.06]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>

            {/* Inset UI */}
            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Globe2 className="h-4 w-4 text-indigo-300" />
                        <span className="font-medium">Nationwide Reach</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] text-white/60">Weekly</span>
                        <Repeat className="h-4 w-4 text-white/40" />
                    </div>
                </div>

                {/* Sliding List */}
                <div className="overflow-hidden h-36 rounded-xl ring-white/10 ring-1 mt-3 relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="flex flex-col"
                            animate={{ y: [0, -120] }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        >
                            {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
                                <div key={index} className="flex pt-2 pr-3 pb-2 pl-3 items-center justify-between border-b border-white/5 last:border-0">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-6 w-6 rounded-full ring-1 ring-white/20 bg-gray-700 flex items-center justify-center text-[10px] text-white`}>{i}</div>
                                        <div>
                                            <p className="text-sm text-white/90">Driver Position #{100 + i}</p>
                                            <p className="text-[11px] text-white/50">TX • OTR</p>
                                        </div>
                                    </div>
                                    <Star className="h-4 w-4 text-amber-300" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[11px] text-white/60">
                    <Languages className="h-3.5 w-3.5" />
                    Multi-state compliance support
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">Hire Without Borders</h3>
            <p className="mt-1.5 text-sm text-white/70">
                Target drivers across regions ("Out of Service" pools) with localized compliance checks to scale confidently.
            </p>
        </section>
    );
}

function CollabCard() {
    const shimmerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6 transition-all duration-300 hover:bg-white/[0.06]"
            onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>

            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Boxes className="h-4 w-4 text-emerald-300" />
                    <span className="font-medium">Connects with your tools</span>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-3">
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <Inbox className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">Email</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <MessageSquare className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">SMS</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <Calendar className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">Cal</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <Database className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">CRM</span>
                    </div>
                </div>

                <div className="mt-3 overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                    <div className="relative grid grid-cols-6 gap-2 p-3">
                        <div className="h-2 rounded-full bg-white/10 col-span-2"></div>
                        <div className="h-2 rounded-full bg-white/10 col-span-3"></div>
                        <div className="h-2 rounded-full bg-white/10 col-span-1"></div>
                        <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    </div>
                    <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-5 w-5 rounded-full bg-gray-700 ring-1 ring-white/20 flex items-center justify-center text-[8px] text-white">U{i}</div>
                            ))}
                        </div>
                        <span className="ml-1 text-[11px] text-white/60">Synced across tools</span>
                    </div>
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">Seamless Collaboration</h3>
            <p className="mt-1.5 text-sm text-white/70">
                Keep your team aligned with integrations to email, SMS, calendars, and your CRM—all in one place.
            </p>
        </section>
    );
}

function AutomationCard() {
    return (
        <section className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6 transition-all duration-300 hover:bg-white/[0.06]">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Workflow className="h-4 w-4 text-fuchsia-300" />
                        <span className="font-medium">Team Workspace</span>
                    </div>
                    <button className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition">
                        <UserPlus className="h-3.5 w-3.5" />
                        Add
                    </button>
                </div>

                <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-7 w-7 rounded-full bg-purple-500/20 ring-1 ring-white/20 flex items-center justify-center text-xs text-white">AM</div>
                            <div>
                                <p className="text-sm text-white/90">Ava Morgan</p>
                                <p className="text-[11px] text-white/50">Recruiter</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-white/60">
                            <Clock className="h-3.5 w-3.5" />
                            Auto-reminders
                        </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-7 w-7 rounded-full bg-blue-500/20 ring-1 ring-white/20 flex items-center justify-center text-xs text-white">ER</div>
                            <div>
                                <p className="text-sm text-white/90">Ethan Reed</p>
                                <p className="text-[11px] text-white/50">Safety Manager</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-white/60">
                            <BellRing className="h-3.5 w-3.5" />
                            Follow-ups
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">Automate Recruitment Workflows</h3>
            <p className="mt-1.5 text-sm text-white/70">
                Automate follow‑ups, reminders, and handoffs so your team can focus on verifying drivers and closing hires.
            </p>
        </section>
    );
}
