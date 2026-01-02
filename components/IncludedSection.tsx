"use client";

import { Check, X, AlertTriangle, ShieldCheck, Zap } from "lucide-react";

export default function IncludedSection() {
    return (
        <section className="py-20 relative bg-black/95">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-[34px] font-semibold tracking-tight text-white leading-[1.1] mb-6">
                        Stop Competing. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">Start Dominating.</span>
                    </h2>
                    <p className="text-[15px] text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        See why Asamblor is the unfair advantage for modern fleets.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-gray-500">
                                <th className="py-8 px-8 font-semibold w-1/3"></th>
                                <th className="py-8 px-8 font-bold text-white text-lg min-w-[200px]">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
                                        Asamblor
                                    </div>
                                </th>
                                <th className="py-8 px-8 font-semibold text-gray-400 min-w-[200px]">DIY Hiring</th>
                                <th className="py-8 px-8 font-semibold text-gray-400 min-w-[200px]">Other Agencies</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                {
                                    feature: "Time to First Interview",
                                    icon: <Zap size={16} className="text-purple-400" />,
                                    asamblor: { status: true, text: "2-3 Days" },
                                    diy: { status: false, text: "30+ Days" },
                                    other: { status: "warning", text: "14-21 Days" }
                                },
                                {
                                    feature: "Driver Pre-Qualification",
                                    icon: <ShieldCheck size={16} className="text-green-400" />,
                                    asamblor: { status: true, text: "AI-Screened (Exp, Violations)" },
                                    diy: { status: false, text: "Manual Phone Screens" },
                                    other: { status: "warning", text: "Basic Questions Only" }
                                },
                                {
                                    feature: "Lead Source",
                                    icon: <Check size={16} className="text-blue-400" />,
                                    asamblor: { status: true, text: "Exclusive Pool" },
                                    diy: { status: false, text: "Shared Job Boards" },
                                    other: { status: false, text: "Recycled Databases" }
                                },
                                {
                                    feature: "Automation Level",
                                    icon: <Zap size={16} className="text-yellow-400" />,
                                    asamblor: { status: true, text: "Full (Outreach to Booking)" },
                                    diy: { status: false, text: "None (Manual Calling)" },
                                    other: { status: "warning", text: "Partial (Email Only)" }
                                },
                                {
                                    feature: "Cost Per Qualified Lead",
                                    asamblor: { status: true, text: "~$400 Flat (4-5 Leads/Week)" },
                                    diy: { status: "warning", text: "$2,000+ (Ads + Time)" },
                                    other: { status: false, text: "$3,500+ Per Hire Fees" }
                                },
                                {
                                    feature: "Support",
                                    asamblor: { status: true, text: "Dedicated Success Manager" },
                                    diy: { status: false, text: "None" },
                                    other: { status: "warning", text: "Ticket-Based Only" }
                                },
                                {
                                    feature: "Pipeline Visibility",
                                    icon: <Check size={16} className="text-indigo-400" />,
                                    asamblor: { status: true, text: "Real-Time CRM Dashboard" },
                                    diy: { status: false, text: "Spreadsheets & Notes" },
                                    other: { status: "warning", text: "Weekly Reports Only" }
                                }
                            ].map((row, index) => (
                                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                    <td className="py-5 px-8 font-medium text-gray-300 flex items-center gap-3">
                                        {row.icon && <span className="p-1.5 rounded-lg bg-white/5 border border-white/10">{row.icon}</span>}
                                        {row.feature}
                                    </td>

                                    {/* Asamblor Column */}
                                    <td className="py-5 px-8 font-medium relative overflow-hidden group-hover:bg-white/5 transition-colors">
                                        <div className="relative z-10 flex items-center gap-2 text-green-400 font-semibold">
                                            <Check size={16} className="text-green-500" />
                                            {row.asamblor.text}
                                        </div>
                                        {/* Subtle column highlight */}
                                        <div className="absolute inset-x-0 top-0 bottom-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-x border-white/5" />
                                    </td>

                                    {/* DIY Column */}
                                    <td className="py-5 px-8 font-medium text-gray-500">
                                        <div className="flex items-center gap-2">
                                            {row.diy.status === false && <X size={16} className="text-red-500" />}
                                            {row.diy.status === 'warning' && <AlertTriangle size={16} className="text-yellow-500" />}
                                            <span className={row.diy.status === false ? 'text-gray-500' : 'text-gray-400'}>{row.diy.text}</span>
                                        </div>
                                    </td>

                                    {/* Other Agencies Column */}
                                    <td className="py-5 px-8 font-medium text-gray-500">
                                        <div className="flex items-center gap-2">
                                            {row.other.status === false && <X size={16} className="text-red-500" />}
                                            {row.other.status === 'warning' && <AlertTriangle size={16} className="text-yellow-500" />}
                                            {/* Neutral status has no icon */}
                                            <span className={row.other.status === false ? 'text-gray-500' : 'text-gray-400'}>{row.other.text}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
