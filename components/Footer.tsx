"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Send, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-black pt-24 pb-0 overflow-hidden">


            {/* Footer Bottom / Links */}
            <div className="max-w-[1200px] mx-auto px-8 border-t border-white/5 pt-12 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {/* Company Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold">Company</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-500">
                            <Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link>
                            <Link href="/#faq" className="hover:text-purple-400 transition-colors">Contact</Link>
                            <Link href="/affiliate" className="hover:text-purple-400 transition-colors">Affiliate</Link>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold">Resources</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-500">
                            <Link href="/docs" className="hover:text-purple-400 transition-colors">Documentation</Link>
                            <Link href="/help" className="hover:text-purple-400 transition-colors">Help Center</Link>
                            <Link href="/changelog" className="hover:text-purple-400 transition-colors">Changelog</Link>
                            <Link href="/roadmap" className="hover:text-purple-400 transition-colors">Roadmap</Link>
                        </div>
                    </div>

                    {/* Legal Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold">Legal</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-500">
                            <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
                            <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* System Status Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold">Core Infrastructure</h4>
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm overflow-hidden min-w-[180px]">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Global Status</span>
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                                        </div>
                                        <span className="text-emerald-400 font-bold text-xs font-mono">SYSTEMS OPERATIONAL</span>
                                    </div>
                                </div>
                                <div className="h-6 w-px bg-white/10 mx-2" />
                                <div className="flex flex-col items-end">
                                    <span className="text-[9px] text-gray-600 font-mono">LATENCY</span>
                                    <span className="text-[10px] text-blue-400 font-mono">14ms</span>
                                </div>
                                {/* Scanning Bar Effect */}
                                <motion.div
                                    animate={{ left: ['-10%', '110%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-y-0 w-[20%] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Branding */}
                <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Asamblor Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p className="text-gray-500 text-[11px] font-medium tracking-tight">
                            &copy; 2026 Asamblor / Powered by BODISHTYAN SOLUTIONS SRL
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <Link href="#" className="hover:text-white transition-colors"><Github size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Send size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    <div className="text-gray-600 text-xs">
                        Asamblor is an independent organisation not affiliated with other fleet management platforms.
                    </div>
                </div>
            </div>
        </footer>
    );
}
