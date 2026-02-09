import { Check, ShieldCheck, ArrowRight, Database, Mic, BarChart3, Mail, Bell } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
    return (
        <section id="pricing" className="relative py-24 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="section-heading">
                        Stop Competing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Start Dominating.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stop complicating your growth. Get the full engine for a flat rate.
                    </p>
                </div>

                <div className="relative rounded-3xl border border-border bg-card/50 shadow-2xl md:backdrop-blur-xl overflow-hidden">
                    {/* Background Effects - Hidden on mobile */}
                    <div className="hidden md:block absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="hidden md:block absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-0 relative z-10">
                        {/* LEFT: Plan Details & Features */}
                        <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                                <ShieldCheck size={14} />
                                <span>Risk-Mitigated RaaS Model</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                                The Full Autopilot Engine
                            </h3>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Everything you need to scale your capacity. No-Refund Integrity ensures intensive technical configuration and precision mining.
                            </p>

                            <div className="space-y-5 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
                                        <Database className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium">Access to 2.6M Driver Database</h4>
                                        <p className="text-sm text-muted-foreground">Exclusive &apos;Out of Service&apos; &amp; Inactive pool.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 text-primary">
                                        <Mic size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium">Dual-Track Capacity Engine</h4>
                                        <p className="text-sm text-muted-foreground">Specialized pathways for Owner-Operators &amp; Company Drivers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 shrink-0">
                                        <BarChart3 className="text-green-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium">Custom GHL Recruitment CRM</h4>
                                        <p className="text-sm text-muted-foreground">Pre-built pipelines and automation workflows.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 shrink-0">
                                        <Mail className="text-orange-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium">High-Volume Email Infrastructure</h4>
                                        <p className="text-sm text-muted-foreground">Done-for-you domain warmup & management.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 shrink-0">
                                        <Bell className="text-pink-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium">Real-time Lead Notifications</h4>
                                        <p className="text-sm text-muted-foreground">Instant alerts via SMS/Email for hot leads.</p>
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
                                    The 30-Lead Guarantee
                                </h4>
                                <p className="text-sm text-yellow-200/80 leading-relaxed relative z-10">
                                    If we don&apos;t deliver <strong>30 Qualified Interested Leads in 30 days</strong>, we run the system for free until we do—zero questions asked.
                                </p>
                                <div className="mt-4 pt-4 border-t border-yellow-500/10">
                                    <p className="text-[11px] text-yellow-200/50 leading-relaxed italic">
                                        Note: Asamblor provides the lead flow and engagement infrastructure. Final qualification, follow-ups, and all hiring decisions remain the exclusive operational responsibility of the client company.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Pricing & Action */}
                        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-white/[0.02] relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-50" />

                            <div className="relative z-10 text-center lg:text-left">
                                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-4">Simple Pricing</p>
                                <div className="flex flex-col items-center lg:items-start gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">$1,500<span className="text-2xl text-muted-foreground font-normal">/mo</span></span>
                                    {/* Configuration Fee */}
                                    <span className="text-lg text-muted-foreground">+ $750 Configuration Fee</span>
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
