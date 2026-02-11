"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 px-8 py-4"
        >
            <div className="max-w-[1200px] mx-auto glass-card rounded-full px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Asamblor Logo"
                        width={120}
                        height={32}
                        className="h-8 w-auto object-contain"
                        priority
                        loading="eager"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-foreground transition-colors outline-none">
                            Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto min-w-[240px]">
                            <div className="bg-background/80 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                                <Link href="/owner-operators" className="block px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all group/item">
                                    <div className="font-semibold text-foreground group-hover/item:text-primary">For Owner-Operators</div>
                                    <div className="text-xs text-muted-foreground">Lease-on & Authority Solutions</div>
                                </Link>
                                <Link href="/drivers" className="block px-4 py-3 rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-all group/item">
                                    <div className="font-semibold text-foreground group-hover/item:text-blue-400">For Company Drivers</div>
                                    <div className="text-xs text-muted-foreground">CDL Recruitment & Placement</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/#workflow" className="hover:text-foreground transition-colors">How It Works</Link>
                    <Link href="/#testimonials" className="hover:text-foreground transition-colors">Results</Link>
                    <Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                    <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
                </div>

                {/* CTA & Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/book">
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/20">
                                Book an Appointment
                            </button>
                        </Link>
                    </div>

                    <ThemeToggle />

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Simple Dropdown) */}
            {isOpen && (
                <div className="absolute top-20 left-6 right-6 bg-background/95 backdrop-blur-3xl border border-border rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl">
                    <div className="flex flex-col gap-2 border-b border-white/5 pb-4">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Services</span>
                        <Link href="/owner-operators" className="pl-4 py-2 border-l border-primary/20 hover:border-primary text-foreground hover:bg-white/5 transition-all text-sm font-medium" onClick={() => setIsOpen(false)}>
                            For Owner-Operators
                        </Link>
                        <Link href="/drivers" className="pl-4 py-2 border-l border-blue-500/20 hover:border-blue-500 text-foreground hover:bg-white/5 transition-all text-sm font-medium" onClick={() => setIsOpen(false)}>
                            For Company Drivers
                        </Link>
                    </div>
                    <Link href="/#workflow" className="text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsOpen(false)}>How It Works</Link>
                    <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsOpen(false)}>Results</Link>
                    <Link href="/#pricing" className="text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/#faq" className="text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <Link href="/book" className="text-foreground font-bold bg-primary/10 text-center py-3 rounded-xl border border-primary/20" onClick={() => setIsOpen(false)}>Book an Appointment</Link>
                </div>
            )}
        </motion.nav>
    );
}
