"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export default function IncludedSection() {
    // 0 = 1 Hire/Mo, 1 = 3 Hires/Mo, 2 = 5 Hires/Mo
    const [hireGoal, setHireGoal] = useState<0 | 1 | 2>(1);

    const goals = [
        { label: "1 Hire/Mo", hires: 1, successFee: 21600, subscription: 18750, savings: 2850 },
        { label: "3 Hires/Mo", hires: 3, successFee: 64800, subscription: 18750, savings: 46050 },
        { label: "5 Hires/Mo", hires: 5, successFee: 108000, subscription: 18750, savings: 89250 }
    ];

    const currentGoal = goals[hireGoal];

    // Calculate max value for progress bars
    const maxCost = 108000;

    return (
        <section className="py-24 relative bg-background overflow-hidden" id="roi-calculator">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -mr-40 -mt-20" />
            
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                        <Calculator size={14} />
                        <span>ROI Calculator</span>
                    </div>
                    <h2 className="section-heading">
                        Stop Competing. <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600">Start Dominating.</span>
                    </h2>
                    <p className="text-[17px] text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
                        See how much you save with our High-Velocity Subscription compared to traditional Success Fees as you scale your fleet.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 md:backdrop-blur-xl shadow-2xl p-6 md:p-10">
                    
                    {/* Toggles */}
                    <div className="flex flex-col items-center mb-12">
                        <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-widest">Select Hiring Goal</p>
                        <div className="inline-flex bg-muted/50 p-1.5 rounded-xl border border-border relative">
                            {goals.map((goal, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setHireGoal(idx as 0 | 1 | 2)}
                                    className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all ${hireGoal === idx ? "text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    {hireGoal === idx && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-background border border-border rounded-lg shadow-sm"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{goal.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Data Display */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        
                        {/* Costs Breakdown */}
                        <div className="space-y-8">
                            {/* Success Fee Bar */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <h4 className="text-sm font-semibold text-muted-foreground">Traditional Success Fee</h4>
                                    <span className="text-2xl font-bold text-foreground font-mono">${currentGoal.successFee.toLocaleString()}</span>
                                </div>
                                <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-blue-500/50 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(currentGoal.successFee / maxCost) * 100}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground/60 mt-2 text-right">Annualized Cost</p>
                            </div>

                            {/* Subscription Bar */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <h4 className="text-sm font-semibold text-muted-foreground">Asamblor Subscription</h4>
                                    <span className="text-2xl font-bold text-foreground font-mono">${currentGoal.subscription.toLocaleString()}</span>
                                </div>
                                <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-primary rounded-full relative overflow-hidden"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(currentGoal.subscription / maxCost) * 100}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                    </motion.div>
                                </div>
                                <p className="text-xs text-muted-foreground/60 mt-2 text-right">Annual Cost (Includes Setup)</p>
                            </div>
                        </div>

                        {/* Savings Highlight */}
                        <div className="flex flex-col justify-center items-center p-8 rounded-2xl border border-green-500/20 bg-green-500/5 relative overflow-hidden group text-center h-full">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <TrendingUp size={100} className="text-green-500" />
                            </div>
                            
                            <p className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-widest relative z-10 flex items-center gap-2">
                                <DollarSign size={16} /> Annual Savings
                            </p>
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={hireGoal}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10"
                                >
                                    <h3 className="text-5xl md:text-6xl font-bold text-green-400 tracking-tight font-mono [text-shadow:_0_0_30px_rgb(74_222_128_/_40%)]">
                                        ${currentGoal.savings.toLocaleString()}
                                    </h3>
                                </motion.div>
                            </AnimatePresence>
                            
                            <p className="text-sm text-green-200/60 mt-4 relative z-10">
                                Capital you can reinvest into trucks, insurance, and growth.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
