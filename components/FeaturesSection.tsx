"use client";

import { motion } from "framer-motion";
import { Target, Bot, CalendarCheck, Kanban, RefreshCw } from "lucide-react";

const features = [
    {
        icon: Target,
        title: "Geo-Targeted Lead Gen",
        description: "We find licensed CDL drivers in your hiring zones—not random job board applicants."
    },
    {
        icon: Bot,
        title: "AI-Powered Qualification",
        description: "Our AI asks your custom screening questions and filters out unqualified leads."
    },
    {
        icon: CalendarCheck,
        title: "Automated Booking",
        description: "Interested drivers book directly onto your calendar. No back-and-forth."
    },
    {
        icon: Kanban,
        title: "Pipeline Visibility",
        description: "See every driver in your pipeline—from first contact to hired—in one dashboard."
    },
    {
        icon: RefreshCw,
        title: "No-Show Recovery",
        description: "Automated follow-ups re-engage drivers who miss their interview."
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white/5">
            <div className="absolute inset-0 bg-dotted-grid opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] font-bold tracking-tight mb-4 text-balance">
                        Everything You Need to <br /> Hire Drivers—Automated
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
                        Stop managing spreadsheets and start managing interviews.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
