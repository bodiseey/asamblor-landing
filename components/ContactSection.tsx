"use client";

import { Mail, Send, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "How is this different from Indeed or other job boards?",
        answer: "Job boards require you to sift through hundreds of unqualified resumes. Asamblor does the sourcing, screening, and scheduling for you. You only speak to drivers who meet your criteria and are ready to work."
    },
    {
        question: "Do I need to learn new software?",
        answer: "No. Our system syncs directly with your existing calendar (Google, Outlook, etc.). You just check your schedule and show up for the interviews."
    },
    {
        question: "What if drivers don't show up?",
        answer: "We have an automated recovery system that follows up with no-shows to reschedule. We also overbook slightly to ensure you hit your hiring targets, and providing qualified leads means higher show rates."
    },
    {
        question: "How fast can I get started?",
        answer: "Setup takes less than 48 hours. We build your profile, set your targeting criteria, and launch the outreach campaigns. You can start seeing interviews in week 1."
    },
    {
        question: "Do you guarantee hires?",
        answer: "We guarantee a specific volume of qualified, interviewed-ready candidates. While hiring decisions are up to you, our clients typically hire 1 driver for every 3-5 interviews."
    }
];

export default function ContactSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        fleetSize: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://hook.eu2.make.com/qd6aft8mstfgw7iuptl5wva8b8yag4ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", phone: "", fleetSize: "", message: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Something went wrong. Please try again or email us directly.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Connection error. Please check your internet and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="py-16 relative overflow-hidden" id="faq">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: CONTACT FORM */}
                    <div>
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
                                <Mail size={12} />
                                <span>Let&apos;s Work Together</span>
                            </div>
                            <h2 className="section-heading text-left mb-4">
                                Ready to scale your fleet?
                            </h2>
                            <p className="text-[15px] text-muted-foreground leading-relaxed">
                                Start automating your recruitment workflow today. Fill out the form or book a call to get started immediately.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border rounded-2xl p-6 shadow-xl relative"
                        >
                            <AnimatePresence>
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl text-center p-6 border border-green-500/20"
                                    >
                                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 className="text-green-500" size={24} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                        <p className="text-gray-400 text-sm">
                                            We will contact you shortly.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-muted-foreground">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-muted-foreground">Fleet Size</label>
                                    <select
                                        name="fleetSize"
                                        value={formData.fleetSize}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [&>option]:bg-background"
                                    >
                                        <option value="">Select fleet size</option>
                                        <option value="1-10">1 - 10 Trucks</option>
                                        <option value="11-50">11 - 50 Trucks</option>
                                        <option value="51-100">50 - 100 Trucks</option>
                                        <option value="101+">100+ Trucks</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-muted-foreground">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                        className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="Tell us about your hiring goals..."></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground font-semibold rounded-lg py-3 text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <Send size={14} />}
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: FAQ */}
                    <div>
                        <div className="mb-8 lg:mt-0 mt-12">
                            <h3 className="section-heading text-left">
                                Frequently Asked Questions
                            </h3>
                            <p className="text-[15px] text-muted-foreground leading-relaxed">
                                Common questions about our AI-driven recruitment process.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-muted/50 border-border' : 'bg-transparent border-transparent hover:bg-muted/30'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-start justify-between p-4 text-left transition-colors gap-4"
                                    >
                                        <span className={`text-[15px] font-medium leading-normal ${openIndex === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={16}
                                            className={`text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-4 pb-4 pt-0 text-[14px] text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
