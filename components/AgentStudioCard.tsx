"use client";

import { motion } from "framer-motion";

export default function AgentStudioCard() {
    return (
        <div
            className="card-top max-w-[32rem] mx-auto overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-card rounded-[1.2em] border border-border"
            style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
            <div className="absolute inset-0 rounded-[1.2em] border border-border/50" style={{ maskImage: 'linear-gradient(135deg, white, transparent 60%)' }}></div>
            <div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{ maskImage: 'linear-gradient(135deg, transparent 60%, white)' }}></div>
            <div className="pointer-events-none absolute -inset-px rounded-[1.3rem] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(90,97,255,0.12),transparent_60%)]"></div>

            <div className="flex flex-col h-full p-6 pb-7">
                <div className="flex justify-between items-start mb-2">
                    <div className="w-3/4">
                        <h1 className="text-[26px] leading-tight tracking-tight font-medium text-foreground">Agent Studio</h1>
                        <p className="text-muted-foreground text-sm font-light mt-1">Orchestrator • AI-Powered</p>
                    </div>
                    <div className="w-1/4 text-right">
                        <div className="text-[20px] font-semibold font-mono text-foreground">AI-AGENTS</div>
                        <div className="flex items-center justify-end gap-1 mt-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(16, 185, 129, 0.3)' }}></div>
                            <span className="text-xs text-emerald-300">ACTIVE</span>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto w-full mb-4">
                    <div className="absolute inset-0 translate-y-2 scale-[0.98] rounded-lg bg-neutral-900/50 ring-1 ring-white/5 blur-[0.3px]"></div>
                    <div className="relative rounded-lg bg-[#0B0F14] ring-1 ring-white/10 overflow-hidden">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-neutral-950/50">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-red-500/60"></span>
                                <span className="h-2 w-2 rounded-full bg-amber-500/60"></span>
                                <span className="h-2 w-2 rounded-full bg-emerald-500/60"></span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full border border-border bg-muted/60 px-2 py-1 text-xs text-muted-foreground">
                                <span className="text-muted-foreground/80">agents…</span>
                            </div>
                        </div>
                        <div className="relative h-32 font-mono text-[11px]">
                            <div className="absolute inset-0 grid grid-cols-[30px_1fr]">
                                <div className="select-none border-r border-border bg-muted px-2 py-2 text-muted-foreground/50 flex flex-col gap-1">
                                    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                                </div>
                                <div className="m-0 overflow-hidden px-3 py-2 text-muted-foreground flex flex-col gap-[2px]">
                                    <div><span className="text-blue-300">class</span> <span className="text-foreground">OrchestratorAgent</span>:</div>
                                    <div className="pl-4"><span className="text-blue-300">def</span> <span className="text-yellow-300">__init__</span>(<span className="text-emerald-300">self</span>, tools, memory):</div>
                                    <div className="pl-8"><span className="text-emerald-300">self</span>.tools = tools</div>
                                    <div className="pl-8"><span className="text-emerald-300">self</span>.memory = memory</div>
                                    <div className="pl-4"><span className="text-blue-300">def</span> <span className="text-yellow-300">plan</span>(<span className="text-emerald-300">self</span>, goal):</div>
                                    <div className="pl-8">steps = []</div>
                                    <div className="pl-8"><span className="text-blue-300">for</span> tool <span className="text-blue-300">in</span> <span className="text-emerald-300">self</span>.tools:</div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0B0F14] to-transparent"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mb-4 max-w-lg">
                    <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
                        <div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-medium">12</div>
                        <div className="text-xs opacity-70 uppercase tracking-wide">ACTIVE AGENTS</div>
                    </div>
                    <div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                    <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
                        <div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-medium">98<span className="text-sm">%</span></div>
                        <div className="text-xs opacity-70 uppercase tracking-wide">SUCCESS RATE</div>
                    </div>
                    <div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                    <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
                        <div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-medium">847</div>
                        <div className="text-xs opacity-70 uppercase tracking-wide">TASKS RUN</div>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent mb-3"></div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {['ORCHESTRATOR', 'ANALYTICS', 'WORKFLOW'].map((tag, i) => (
                        <span key={tag} className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-lg ${i === 0 ? 'bg-violet-500/10 border-violet-500/20 text-violet-300' :
                            i === 1 ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' :
                                'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                            }`}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex justify-between w-full">
                    <span className="opacity-70 flex items-center gap-2 text-sm mb-1 text-foreground">
                        <span className="font-sans">AUTO-SCALING</span>
                    </span>
                    <div className="flex flex-col items-end">
                        <span className="opacity-70 flex items-center gap-2 text-sm mb-1 text-foreground">
                            <span className="font-sans">AUTONOMOUS</span>
                            <div className="w-2 h-2 rounded-full bg-violet-400" style={{ boxShadow: '0 0 6px rgba(139, 92, 246, 0.4)' }}></div>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
