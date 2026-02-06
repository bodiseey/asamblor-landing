"use client";

import { motion } from "framer-motion";
import { Truck, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const tracks = [
    {
        title: "Expand with Owner-Operators",
        benchmark: "3–10 QILs / Day",
        description: "Scale your fleet without the capital expense of buying trucks. We target and qualify high-tier Owner-Operators with fresh MCs or those looking to lease onto established authorities.",
        icon: Truck,
        color: "from-blue-500/20 to-blue-600/5",
        border: "border-blue-500/20",
        iconColor: "text-blue-400"
    },
    {
        title: "Fill Empty Seats with Drivers",
        benchmark: "3–6 QILs / Day",
        description: "Eliminate the recruitment friction. We find, vet, and book qualified CDL company drivers directly onto your calendar, ensuring your equipment never sits idle.",
        icon: UserCheck,
        color: "from-primary/20 to-primary/5",
        border: "border-primary/20",
        iconColor: "text-primary"
    }
];

export default function CapacityTracks() {
    return (
        <section className="py-16 bg-background relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[34px] font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                        Dual-Track <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-400">Capacity Architecture.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-[16px] leading-relaxed">
                        Two specialized pathways designed to solve the two biggest growth bottlenecks in the U.S. trucking industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-[2rem] bg-gradient-to-br ${track.color} border ${track.border} backdrop-blur-sm relative group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500`}
                        >
                            <div className="flex flex-col h-full">
                                <div className={`p-4 rounded-2xl bg-white/5 border border-black/5 dark:border-white/10 w-fit mb-6 ${track.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                                    <track.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">{track.title}</h3>
                                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-4 w-fit">
                                    Benchmark: {track.benchmark}
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 grow">
                                    {track.description}
                                </p>
                                <Link href="/book" className="flex items-center gap-2 text-foreground font-semibold text-sm hover:gap-3 transition-all">
                                    Deploy this Track <ArrowRight size={16} className="text-primary" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
