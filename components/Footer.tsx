"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Send, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-border bg-background pt-24 pb-0 overflow-hidden">


            {/* Footer Bottom / Links */}
            <div className="max-w-[1200px] mx-auto px-8 border-t border-border pt-12 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {/* Company Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground font-bold">Company</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            <Link href="/#faq" className="hover:text-primary transition-colors">Contact</Link>
                            <Link href="/affiliate" className="hover:text-primary transition-colors">Affiliate</Link>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground font-bold">Resources</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
                            <Link href="/help" className="hover:text-primary transition-colors">Help Center</Link>
                            <Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link>
                            <Link href="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link>
                        </div>
                    </div>

                    {/* Legal Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground font-bold">Legal</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* System Status Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground font-bold">Core Infrastructure</h4>
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border backdrop-blur-sm overflow-hidden min-w-[180px]">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Global Status</span>
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

                {/* Bottom Branding & Partners */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-12 border-t border-border">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Asamblor Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="space-y-4">
                            <p className="text-muted-foreground text-[11px] font-medium tracking-tight">
                                &copy; 2026 Asamblor | Operated by BODISHTYAN SOLUTIONS SRL (IDNO: 1023600021052)
                            </p>
                            <div className="flex gap-4 text-muted-foreground">
                                <Link href="#" className="hover:text-foreground transition-colors"><Github size={20} /></Link>
                                <Link href="#" className="hover:text-foreground transition-colors"><Send size={20} /></Link>
                                <Link href="#" className="hover:text-foreground transition-colors"><Twitter size={20} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Partners Section */}
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <h4 className="text-muted-foreground text-[10px] font-mono tracking-[0.2em] uppercase text-center md:text-right">Asamblor Official Partners</h4>
                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-12">
                            <Link href="https://refer.instantly.ai/2i1jvrjr3jv4" target="_blank" className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale brightness-0 invert">
                                <Image src="/images/instantly.png" alt="Instantly Partner" width={100} height={32} className="h-5 w-auto object-contain" />
                            </Link>
                            <Link href="https://get.quo.com/64cw1cxkz56i" target="_blank" className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale brightness-0 invert">
                                <Image src="/images/quo.png" alt="Quo Partner" width={80} height={32} className="h-5 w-auto object-contain" />
                            </Link>
                            <Link href="https://manychat.partnerlinks.io/r6n2p787cmg9-ogcg6e" target="_blank" className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale brightness-0 invert">
                                <Image src="/images/manychat.png" alt="Manychat Partner" width={110} height={32} className="h-5 w-auto object-contain" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-muted-foreground/60 text-xs">
                    Asamblor is an independent organisation not affiliated with other fleet management platforms.
                </div>
            </div>
        </footer>
    );
}
