"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Force a minimum loading time for the experience
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
                >
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Shimmering Logo */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <Image
                                src="/logo.png"
                                alt="Asamblor Logo"
                                width={180}
                                height={48}
                                className="h-12 w-auto object-contain brightness-200"
                                priority
                            />
                            {/* Scanning line */}
                            <motion.div
                                animate={{ left: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent skew-x-12 pointer-events-none"
                            />
                        </motion.div>

                        {/* Progress Indicator */}
                        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(0,102,255,0.8)]"
                            />
                        </div>

                        {/* Status Text */}
                        <div className="flex flex-col items-center gap-2">
                            <motion.span
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]"
                            >
                                Initializing Capacity Engine
                            </motion.span>
                            <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                                Systems Check: OK
                            </span>
                        </div>
                    </div>

                    {/* Background Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
