"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, Eye, Lock, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Asamblor",
    description: "Asamblor privacy policy. How we collect, use, and protect your fleet and driver data.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />

            {/* Background Texture */}
            <div className="absolute inset-0 bg-dotted-grid opacity-20" />
            <div className="hidden md:block absolute top-0 right-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative pt-32 pb-24 max-w-[900px] mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                            <ShieldAlert className="text-blue-400" size={24} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
                    </div>

                    <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>

                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        Your privacy is critical. Here is how we handle data at Asamblor.
                    </p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-blue-500">01.</span> Data Collection
                            </h2>
                            <p>
                                We collect information necessary to perform recruitment automation services. This includes:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                                <li>Fleet information provided by you via our contact forms.</li>
                                <li>Lead data harvested through our proprietary data mining tools.</li>
                                <li>Interaction logs from our AI agents during candidate qualification.</li>
                            </ul>
                        </section>

                        <section>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 md:backdrop-blur-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Lock className="text-primary" size={20} /> Data Sovereignty
                                </h2>
                                <p>
                                    Any lead data qualified by our system specifically for your fleet remains your property. We do not sell or share your specific leads with other clients or third parties for marketing purposes.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-blue-500">02.</span> AI Training & Usage
                            </h2>
                            <p>
                                Our AI agents process conversational data to improve qualification accuracy. This data is anonymized and used internally to enhance the performance of the Asamblor platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-blue-500">03.</span> Security
                            </h2>
                            <p>
                                We implement enterprise-grade security measures to protect your data. All data transmissions are encrypted using industry-standard protocols.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-blue-500">04.</span> Your Rights
                            </h2>
                            <p>
                                You may request access to, correction of, or deletion of your personal data at any time by contacting us.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/10 text-center md:text-left">
                            <p className="text-sm text-gray-500 italic">
                                For any privacy-related inquiries, please reach out to: privacy@asamblor.com
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
