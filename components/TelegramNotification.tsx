"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

export default function TelegramNotification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Initial start delay
        const initialTimer = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // Start showing after 5 seconds

        return () => clearTimeout(initialTimer);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isVisible) {
            // If visible, hide after 8 seconds
            interval = setTimeout(() => {
                setIsVisible(false);
            }, 8000);
        } else {
            // If hidden, show after 30 seconds
            interval = setTimeout(() => {
                setIsVisible(true);
            }, 30000);
        }

        return () => clearTimeout(interval);
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 right-6 z-50 max-w-[320px] w-full"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl p-4">
                        <div className="flex gap-3">
                            {/* Icon */}
                            <div className="shrink-0 relative h-10 w-10">
                                <Image
                                    src="/telegram-logo.png"
                                    alt="Telegram"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                    <h4 className="text-white font-bold text-[15px] truncate">Asamblor Mate</h4>
                                    <span className="text-xs text-neutral-400 shrink-0">Just now</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white text-[14px] font-medium leading-none">
                                        🚀 New Interested Lead Alert!
                                    </p>
                                    <p className="text-neutral-300 text-[13px] leading-tight">
                                        Check your CRM and please reach out ASAP! ✅
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
