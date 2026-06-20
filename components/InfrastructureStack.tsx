"use client";

import React from "react";

export const INFRASTRUCTURE_COMPONENTS = [
  {
    code: "1.0",
    title: "Email Outreach",
    desc: "Up to 75,000 targeted touches per month with A/B testing, reply detection, inbox rotation, and full deliverability stack (SPF/DKIM/DMARC).",
    icon: (
      <svg width="40" height="32" viewBox="0 0 64 48" fill="none">
        <rect x="12" y="14" width="40" height="24" rx="1.5" stroke="rgba(96,165,250,0.35)" strokeWidth="1" />
        <rect x="4" y="8" width="56" height="36" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M4 14L32 28L60 14" stroke="rgba(96,165,250,0.6)" strokeWidth="1" />
        <line x1="4" y1="20" x2="20" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="44" y1="20" x2="60" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    code: "2.0",
    title: "SMS Follow-Up",
    desc: "TCPA-compliant, 10DLC-registered SMS that fires within minutes of a reply or click — only on explicit intent signals. Lifts reply-to-sign conversion materially.",
    icon: (
      <svg width="40" height="32" viewBox="0 0 64 48" fill="none">
        <rect x="18" y="4" width="28" height="42" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect x="22" y="10" width="20" height="14" rx="2" stroke="rgba(34,197,94,0.5)" strokeWidth="1" />
        <circle cx="32" cy="38" r="3" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="22" y1="17" x2="42" y2="17" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    code: "3.0",
    title: "Web Vetting Forms",
    desc: "Dynamic pre-qualification forms capture MC, USDOT, equipment, lane, and contact. Replies land in your CRM already scored, not as raw leads.",
    icon: (
      <svg width="40" height="32" viewBox="0 0 64 48" fill="none">
        <rect x="8" y="4" width="48" height="40" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="16" y1="16" x2="48" y2="16" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="16" y1="24" x2="48" y2="24" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="16" y1="32" x2="36" y2="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M38 30L40.5 32.5L44.5 28" stroke="rgba(34,197,94,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: "4.0",
    title: "CRM Pipeline Engineering",
    desc: "Custom pipeline built around your sales process — stage automations, lead routing by territory or equipment, re-engagement sequences, drag-and-drop triggers.",
    icon: (
      <svg width="40" height="32" viewBox="0 0 64 48" fill="none">
        <rect x="4" y="8" width="12" height="32" rx="2" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect x="20" y="16" width="12" height="24" rx="2" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="36" y="20" width="12" height="20" rx="2" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="52" y="28" width="8" height="12" rx="1.5" stroke="rgba(96,165,250,0.55)" strokeWidth="1" />
        <line x1="4" y1="40" x2="60" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    code: "5.0",
    title: "Real-Time Notifications",
    desc: "Bots ping your recruiter, dispatcher, or ops team the moment a hot lead replies or a vetting form submits. No qualified prospect waits in a queue.",
    icon: (
      <svg width="40" height="32" viewBox="0 0 64 48" fill="none">
        <path d="M32 8C32 8 44 14 44 26V34H20V26C20 14 32 8 32 8Z" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinejoin="round" />
        <path d="M20 34H44L47 38H17L20 34Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinejoin="round" />
        <path d="M29 38C29 39.66 30.34 41 32 41C33.66 41 35 39.66 35 38" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M12 18C16 12 24 8 32 8" stroke="rgba(245,158,11,0.5)" strokeWidth="1" strokeLinecap="round" />
        <path d="M52 18C48 12 40 8 32 8" stroke="rgba(245,158,11,0.5)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: "6.0",
    title: "Command Center Dashboard",
    desc: "Full transparency: outbound volume, deliverability, opens, replies, pipeline stages, and signed prospects. Know where every dollar goes, week over week.",
    icon: (
      <svg width="40" height="32" viewBox="0 0 64 48" fill="none">
        <rect x="4" y="4" width="56" height="40" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M12 36L20 26L28 30L36 20L44 24L52 14" stroke="rgba(96,165,250,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="12" x2="60" y2="12" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="6" y="6" width="8" height="4" rx="1" fill="rgba(255,255,255,0.06)" />
        <rect x="16" y="6" width="8" height="4" rx="1" fill="rgba(255,255,255,0.06)" />
      </svg>
    ),
  },
];

export function InfrastructureStack({ compact = false }: { compact?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr 1fr" : "1fr 1fr", gap: 0, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", background: "linear-gradient(180deg, #0e0e11 0%, #0a0a0c 100%)" }}>
      {INFRASTRUCTURE_COMPONENTS.map((c, i) => (
        <div
          key={c.code}
          style={{
            padding: "18px 18px 20px",
            borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
            borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <span style={{ fontSize: 10, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.06em" }}>{c.code}</span>
            <span style={{ fontSize: 10, color: "#3f3f46", fontFamily: "monospace" }}>→</span>
          </div>
          <div style={{ marginBottom: 12 }}>{c.icon}</div>
          <div style={{ fontSize: 13.5, fontWeight: 500, color: "#fafafa", marginBottom: 6, letterSpacing: "-0.01em" }}>{c.title}</div>
          <p style={{ fontSize: 12, color: "#a1a1aa", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
