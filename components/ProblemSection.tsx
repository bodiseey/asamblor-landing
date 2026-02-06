import { AlertCircle, TrendingDown } from "lucide-react";

export default function ProblemSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both">
                    <div className="inline-flex items-center gap-2 text-red-400 mb-6 bg-red-400/10 px-4 py-2 rounded-full border border-red-400/20">
                        <TrendingDown size={16} />
                        <span className="text-sm font-medium">The Cost of Empty Seats</span>
                    </div>

                    <h2 className="section-heading mb-6">
                        Your Trucks Are Sitting. <br />
                        <span className="text-red-500">Your Revenue Is Bleeding.</span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                        Cold calls that go nowhere. Job board applicants who ghost. No-shows. Manual follow-ups.
                        Hiring drivers shouldn&apos;t be this hard, and every day a truck sits empty costs you money.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Ghosting Applicants</h3>
                            <p className="text-muted-foreground text-sm">You call, they don&apos;t answer. You schedule, they don&apos;t show.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Wasted Time</h3>
                            <p className="text-muted-foreground text-sm">Hours spent screening unqualified leads instead of growing your fleet.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Lost Revenue</h3>
                            <p className="text-muted-foreground text-sm">Every idle truck is thousands of dollars in lost potential revenue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
