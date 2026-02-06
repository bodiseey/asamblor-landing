"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu } from "lucide-react";
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
                    <Link href="/#workflow" className="hover:text-foreground transition-colors">How It Works</Link>
                    <Link href="/#testimonials" className="hover:text-foreground transition-colors">Results</Link>
                    <Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                    <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/book">
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/20">
                            Book an Appointment
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu (Simple Dropdown) */}
            {isOpen && (
                <div className="absolute top-20 left-6 right-6 bg-background/95 backdrop-blur-3xl border border-border rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl">
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
