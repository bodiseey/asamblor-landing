"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, Zap, ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />

            {/* Background Texture */}
            <div className="absolute inset-0 bg-dotted-grid opacity-20" />
            <div className="hidden md:block absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative pt-32 pb-24 max-w-[900px] mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                            <Scale className="text-primary" size={24} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
                    </div>

                    <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>

                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        Last updated: January 2026. These terms govern your use of the Asamblor platform and recruitment automation services.
                    </p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">01.</span> Service Scope
                            </h2>
                            <p>
                                Asamblor, a product of BODISHTYAN SOLUTIONS SRL (&quot;Asamblor&quot;, &quot;we&quot;, &quot;us&quot;), provides an Autonomous Recruitment Agent-as-a-Service (RaaS). Our platform automates lead generation, qualification, and booking of candidates for trucking fleets.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">02.</span> User Compliance & TCPA
                            </h2>
                            <p className="mb-4">
                                By using our services, you acknowledge that you are the sender of any communications initiated through our platform. You agree to comply with all applicable laws, including but not limited to the Telephone Consumer Protection Act (TCPA) and CAN-SPAM Act.
                            </p>
                            <p>
                                You represent that you have the necessary consents to contact any individuals or entities using the data provided via our system.
                            </p>
                        </section>

                        <section>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 md:backdrop-blur-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Zap className="text-yellow-400" size={20} /> No Guarantee of Performance
                                </h2>
                                <p>
                                    Asamblor facilitates the recruitment funnel through AI automation. While we strive for high-quality leads and bookings, we do not guarantee specific hiring results, driver retention, or the performance of any candidate booked through our platform. All hiring decisions remain the sole responsibility of the client.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">03.</span> Fees & Professional Services
                            </h2>
                            <p>
                                Fees are billed based on the chosen plan. Due to the nature of Recruitment-as-a-Service and the immediate allocation of AI resources and data mining tasks, all fees are non-refundable once the service period has commenced.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">04.</span> Intellectual Property
                            </h2>
                            <p>
                                All AI models, proprietary algorithms, and workflow structures used by Asamblor remain the exclusive intellectual property of BODISHTYAN SOLUTIONS SRL.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/10">
                            <p className="text-sm text-gray-500">
                                Contact: legal@asamblor.com | BODISHTYAN SOLUTIONS SRL
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
