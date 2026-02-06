"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-dotted-grid opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center space-y-8 max-w-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/10 md:backdrop-blur-xl relative group">
                        <Ghost size={64} className="text-primary animate-bounce" />
                        <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
                        404
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-gray-400">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                        The resource you are looking for has been moved or doesn&apos;t exist yet.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link href="/">
                        <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <Home size={16} />
                            Back to Home
                        </button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 glass-button px-6 py-3 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                </motion.div>
            </div>

            {/* Matrix-like decorative elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-gray-700 font-mono tracking-widest uppercase opacity-50">
                Error Code: 0x404_NOT_FOUND // AI_SYSTEM_ONLINE
            </div>
        </main>
    );
}
