"use client";

import { motion } from "framer-motion";
import {
    Check,
    Database,
    Gauge,
    Target,
    TrendingUp,
    Search,
    Mail,
    Bot,
    CalendarCheck,
    Smartphone,
    Bell,
    BarChart3,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecializedOffer from "@/components/SpecializedOffer";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function OwnerOperatorsPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />
            <Hero
                headline={
                    <>
                        Turn the &#39;Broker Wall&#39; <br className="hidden md:block" />
                        <span className="text-primary italic font-playfair">Into Your Growth Engine.</span>
                    </>
                }
                subheadline="We target high-quality Owner-Operators with 'Fresh MCs' who need your authority to survive and grow. Bypass the job boards and recruit directly from the source."
                badgeText="Bypass the Broker Wall"
                badgeColor="red"
            />

            {/* Section 2: Strategy Section (The Math) */}
            <section className="py-20 relative overflow-hidden bg-background">
                <div className="max-w-[1000px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                            <Target size={14} />
                            <span>The Strategy</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">The Math Behind the Lease-On.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            New Owner-Operators face a 6-12 month &quot;Broker Wall&quot; where they cannot get loads.
                            We <span className="text-primary font-semibold">identify these operators</span> who have the equipment but no freight.
                            We present your fleet as the solution: they run under your authority immediately,
                            and you get instant capacity without buying new trucks.
                        </p>
                    </div>

                    {/* Engine Metrics Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Metric 1 */}
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group">
                            <div className="p-3 bg-primary/10 w-fit rounded-xl mb-4 text-primary">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Precision Targeting</h3>
                            <p className="text-sm text-muted-foreground">
                                We filter for Fresh MCs and High Fuel Cost struggle points to find motivated operators.
                            </p>
                        </div>
                        {/* Metric 2 */}
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group">
                            <div className="p-3 bg-blue-500/10 w-fit rounded-xl mb-4 text-blue-500">
                                <Database size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Volume</h3>
                            <p className="text-sm text-muted-foreground">
                                1,200 automated reach-outs every single day to cover the entire market.
                            </p>
                        </div>
                        {/* Metric 3 */}
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group">
                            <div className="p-3 bg-green-500/10 w-fit rounded-xl mb-4 text-green-500">
                                <Gauge size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Results</h3>
                            <p className="text-sm text-muted-foreground">
                                3–10 Qualified Interested Leads delivered to your team per day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Arbitrage Opportunity */}
            <section className="py-24 bg-muted/5 relative overflow-hidden">
                {/* Bg decorative */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1200px] mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                            <TrendingUp size={14} />
                            <span>Market Inefficiency</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                            The Authority Arbitrage.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Thousands of Owner-Operators buy their own trucks every month, but get blocked by the &quot;Broker Wall&quot; (6-12 months of no loads).
                            They are desperate for a home.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Your fleet has the <span className="text-foreground font-semibold">Authority Age</span> they need. We simply connect the two.
                            You get highly motivated operators who bring their own equipment, reducing your overhead while expanding your fleet&#39;s capacity.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1 p-4 bg-card border border-border rounded-xl min-w-[140px]">
                                <span className="text-3xl font-bold text-primary">0</span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wide">Truck Cost</span>
                            </div>
                            <div className="flex flex-col gap-1 p-4 bg-card border border-border rounded-xl min-w-[140px]">
                                <span className="text-3xl font-bold text-emerald-500">100%</span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wide">Capacity Gain</span>
                            </div>
                        </div>
                    </div>
                    {/* Visual Graphic Area */}
                    <div className="relative">
                        <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden aspect-square flex flex-col items-center justify-center p-8">
                            {/* Central Hub Node */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center relative z-20 mb-8"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs text-center p-2 shadow-[0_0_30px_rgba(0,102,255,0.4)]">
                                    YOUR FLEET
                                </div>
                            </motion.div>

                            {/* Connecting Nodes Animation */}
                            <div className="absolute inset-0 z-10">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.2], x: [0, (Math.random() - 0.5) * 200], y: [0, (Math.random() - 0.5) * 200] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                                        className="absolute top-1/2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                                    />
                                ))}
                            </div>

                            <div className="text-center relative z-20">
                                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">Incoming Capacity</p>
                                <div className="flex justify-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-75"></span>
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-150"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Inside the Engine (Horizontal Step-by-Step) */}
            <section className="py-24 bg-background relative border-y border-border/50">
                <div className="max-w-[1200px] mx-auto px-8 mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">From &#39;Data Point&#39; to &#39;Leased-On&#39;.</h2>
                    <p className="text-muted-foreground">The automated lifecycle of a capacity lead.</p>
                </div>

                <div className="overflow-x-auto pb-12 hide-scrollbar">
                    <div className="flex gap-6 px-8 min-w-max md:justify-center">
                        {[
                            { icon: Search, title: "1. Precision Data Mining", desc: "We scan daily for new MC authorities and OOS records." },
                            { icon: Mail, title: "2. The Warmup", desc: "We use domain-warmer technology to ensure our emails land in the Primary Inbox, not Spam." },
                            { icon: Bot, title: "3. AI Engagement", desc: "Our AI Voice & SMS agents reach out instantly. If they reply, the AI qualifies them." },
                            { icon: CalendarCheck, title: "4. The Handoff", desc: "Qualified leads are booked to your calendar. You just close the deal." }
                        ].map((step, idx) => (
                            <div key={idx} className="w-[280px] p-6 rounded-2xl bg-card border border-border relative group hover:-translate-y-1 transition-transform duration-300">
                                <div className="absolute top-6 right-6 text-4xl font-bold text-muted/10 group-hover:text-primary/10 transition-colors">0{idx + 1}</div>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: The Technology Stack */}
            <section className="py-24 bg-muted/5">
                <div className="max-w-[1200px] mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16">The Technology Stack</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all text-left">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                <BarChart3 className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">The Command Center (CRM)</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                A white-labeled dashboard to track every lead from &#39;New&#39; to &#39;Hired&#39;. Manage your pipeline with drag-and-drop simplicity.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all text-left relative overflow-hidden">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                                <Smartphone className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">The Mobile App</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Don&#39;t be tied to a desk. Use our &#39;Lead Connector&#39; mobile app to call leads and manage bookings from the yard.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all text-left">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                                <Bell className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Real-Time Alerts</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Get instant Telegram or SMS notifications the second a qualified driver says &quot;I&#39;m interested&quot;.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & FAQ */}
            <section className="bg-background">
                <SpecializedOffer
                    title="The Lease-On Acquisition System"
                    description="Scale your fleet without buying trucks. Get the full engine for a flat rate."
                    setupFee="$750"
                    monthlyFee="$1,500"
                    guaranteeText="30 Qualified Owner-Operator Leads in 30 Days. If we miss, we work for free until we hit it."
                    accentColor="primary"
                    features={[
                        "Access to Fresh MC Database",
                        "Real-time Authority Verification",
                        "Automated Pitching Sequences",
                        "Instant Lead Notifications",
                        "GHL CRM Setup",
                        "Dedicated Success Manager"
                    ]}
                />
            </section>

            <section className="py-24 max-w-[800px] mx-auto px-8">
                <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What defines a &#39;Qualified Lead&#39;?</AccordionTrigger>
                        <AccordionContent>
                            An Owner-Operator with their own equipment, active CDL, and intent to lease on.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do you take a percentage of the load?</AccordionTrigger>
                        <AccordionContent>
                            No. We are a flat-fee recruitment partner. You keep 100% of your dispatch fees.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What if I don&#39;t get 30 leads?</AccordionTrigger>
                        <AccordionContent>
                            We pause your billing and run the engine for free until we hit the target.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <Footer />
        </main>
    );
}
