"use client";

import { motion } from "framer-motion";
import {
    Check,
    UserCheck,
    Zap,
    Mail,
    Target,
    Users,
    ShieldAlert,
    Search,
    MessageSquare,
    Filter,
    CalendarCheck,
    MessageCircle,
    Smartphone,
    Bell,
    Box,
    Play
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecializedOffer from "@/components/SpecializedOffer";
import Footer from "@/components/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function DriversPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground selection:bg-blue-500/30">
            <Navbar />
            <Hero
                headline={
                    <>
                        Eliminate the <br className="hidden md:block" />
                        <span className="text-blue-400 italic font-playfair">Empty Seat Crisis.</span>
                    </>
                }
                subheadline="Stop losing revenue on unassigned trucks. We use AI to find and vet experienced CDL drivers from 'Out of Service' fleets before they hit the open market."
                badgeText="Solve the Empty Seat Crisis"
                badgeColor="blue"
            />

            {/* Section 2: Strategy Section (The OOS Advantage) */}
            <section className="py-20 relative overflow-hidden bg-background">
                <div className="max-w-[1000px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                            <Target size={14} />
                            <span>The OOS Advantage</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">We Don&#39;t Post Ads. We Hunt.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Traditional recruiting waits for applicants. We go on the offense.
                            We specifically target drivers from companies that are <span className="text-blue-400 font-semibold">&apos;OOS&apos;</span>.
                            These are experienced drivers who are mathematically the most likely to move, and we get to them first.
                        </p>
                    </div>

                    {/* AI Qualification Layer Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Icon 1: Vetting */}
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/30 transition-all group">
                            <div className="p-3 bg-blue-500/10 w-fit rounded-xl mb-4 text-blue-500">
                                <UserCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI Vetting</h3>
                            <p className="text-sm text-muted-foreground">
                                Agents vet for MVR, experience, and endorsements in real-time.
                            </p>
                        </div>
                        {/* Icon 2: Speed */}
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/30 transition-all group">
                            <div className="p-3 bg-yellow-500/10 w-fit rounded-xl mb-4 text-yellow-500">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Speed</h3>
                            <p className="text-sm text-muted-foreground">
                                Instant interview booking directly to your calendar.
                            </p>
                        </div>
                        {/* Icon 3: Volume */}
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/30 transition-all group">
                            <div className="p-3 bg-green-500/10 w-fit rounded-xl mb-4 text-green-500">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Volume</h3>
                            <p className="text-sm text-muted-foreground">
                                3–6 Qualified Interested Leads delivered daily.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Hidden Market Advantage */}
            <section className="py-24 bg-muted/5 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                            <ShieldAlert size={14} />
                            <span>Market Failure</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                            Why Job Boards Fail <br /><span className="text-muted-foreground">(And Why We Don&#39;t).</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Traditional job boards are filled with &#39;window shoppers&#39; and unqualified applicants. We don&#39;t wait for applications. We hunt.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We target drivers from fleets that just went <span className="text-foreground font-semibold">&#39;Out of Service&#39; (OOS)</span>.
                            These are experienced, vetted drivers who are suddenly displaced and looking for work today. We get to them before they ever hit the open market.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-sm text-red-400 max-w-sm">
                                <Users size={16} />
                                <span>Job Boards: 95% Unqualified Applicants</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-500 max-w-sm">
                                <Target size={16} />
                                <span>Asamblor: 100% Active Driver Targeting</span>
                            </div>
                        </div>
                    </div>
                    {/* Visual Graphic Area: Abstract Data Filter */}
                    <div className="relative h-[400px] w-full flex items-center justify-center">
                        {/* Filter Funnel Container */}
                        <div className="relative w-64 h-80 bg-card border border-border rounded-3xl shadow-2xl flex flex-col items-center p-4 overflow-hidden">
                            {/* Top: Many Dots (Applicants) */}
                            <div className="w-full flex flex-wrap justify-center gap-2 mb-8 relative z-10">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                        className="w-2 h-2 rounded-full bg-gray-600"
                                    />
                                ))}
                            </div>

                            {/* Filter Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "80%" }}
                                transition={{ duration: 1, delay: 1 }}
                                className="h-1 bg-blue-500 rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                            />

                            {/* Middle: Filtering Process */}
                            <div className="text-center mb-8 space-y-2 opacity-50">
                                <div className="text-[10px] font-mono text-blue-300">MVR CHECK...</div>
                                <div className="text-[10px] font-mono text-blue-300">CDL VALIDATION...</div>
                                <div className="text-[10px] font-mono text-blue-300">EXPERIENCE VERIFIED...</div>
                            </div>

                            {/* Bottom: Qualified Dots */}
                            <div className="mt-auto flex justify-center gap-3">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 1.5 + (i * 0.2) }}
                                        className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                                    />
                                ))}
                            </div>

                            {/* Funnel Shape BG */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: The AI Vetting Engine (Step-by-Step) */}
            <section className="py-24 bg-background relative border-y border-border/50">
                <div className="max-w-[1200px] mx-auto px-8 mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">From &#39;Out-of-Service&#39; to &#39;On Your Payroll&#39;.</h2>
                    <p className="text-muted-foreground">The automated lifecycle of a driver lead.</p>
                </div>

                <div className="overflow-x-auto pb-12 hide-scrollbar">
                    <div className="flex gap-6 px-8 min-w-max md:justify-center">
                        {[
                            { icon: Search, title: "1. Precision Extraction", desc: "We monitor federal databases for OOS and Not Authorized status changes daily." },
                            { icon: MessageCircle, title: "2. The AI Interview", desc: "Our AI Agents text and call these drivers immediately. We don't just chat; we vet." },
                            { icon: Filter, title: "3. The Qualification Layer", desc: "The AI asks your specific 'Knockout Questions' (Years of Experience, Clean MVR, SAP status)." },
                            { icon: CalendarCheck, title: "4. The Handoff", desc: "Only qualified, interested drivers are booked directly to your interview calendar." }
                        ].map((step, idx) => (
                            <div key={idx} className="w-[280px] p-6 rounded-2xl bg-card border border-border relative group hover:-translate-y-1 transition-transform duration-300">
                                <div className="absolute top-6 right-6 text-4xl font-bold text-muted/10 group-hover:text-blue-500/10 transition-colors">0{idx + 1}</div>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: The Command Center Stack */}
            <section className="py-24 bg-muted/5">
                <div className="max-w-[1200px] mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16">The Command Center</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all text-left">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-900 to-black border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                <Box className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Unified Inbox</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Stop chasing texts on personal phones. Manage all driver communication in one branded portal.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all text-left relative overflow-hidden">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                                <Smartphone className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">The &#39;Lead Connector&#39; App</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Review driver applications and listen to call recordings from your phone while walking the yard.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all text-left">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                                <Bell className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Instant Notifications</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Your recruiting team gets a Telegram alert the moment a driver passes the vetting process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & FAQ */}
            <section className="bg-background">
                <SpecializedOffer
                    title="The Driver Recruitment Engine"
                    description="Fill your seats with experienced drivers. Stop relying on job boards."
                    setupFee="$750"
                    monthlyFee="$1,500"
                    guaranteeText="30 Qualified Driver Leads in 30 Days. If we miss, we work for free until we hit it."
                    accentColor="blue"
                    features={[
                        "Access to 'Out of Service' Driver Pool",
                        "Automated CDL & Endorsement Verification",
                        "Instant Interview Scheduling",
                        "Automated Reactivation Campaigns",
                        "GHL CRM Setup",
                        "Dedicated Success Manager"
                    ]}
                />
            </section>

            <section className="py-24 max-w-[800px] mx-auto px-8">
                <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do you know they are qualified?</AccordionTrigger>
                        <AccordionContent>
                            Our AI pre-screens for experience, endorsements, and MVR issues before booking.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is the volume?</AccordionTrigger>
                        <AccordionContent>
                            We aim for 3-6 highly qualified interviews per day.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can I customize the vetting questions?</AccordionTrigger>
                        <AccordionContent>
                            Yes. We program the AI with your specific insurance requirements.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <Footer />
        </main>
    );
}
