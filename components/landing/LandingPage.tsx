"use client";

import Image from "next/image";
import { useState, useEffect, type CSSProperties } from "react";
import { getCalApi } from "@calcom/embed-react";
import { DottedSurface } from "./DottedSurface";
import { WavePath } from "./WavePath";

export const CAL_NAMESPACE = "asamblor-acquisition-infrastructure-discovery";
export const CAL_LINK = "carriex/asamblor-acquisition-infrastructure-discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", useSlotsViewOnSmallScreen: "true" });

export function useCalInit() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "dark", styles: { branding: { brandColor: "#2563eb" } } });
    })();
  }, []);
}

const calAttrs = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": CAL_CONFIG,
} as const;

const PRICING_ROWS = [
  {
    plan: "Micro Infrastructure",
    volume: "7,500 Emails",
    operators: "8 Signed Operators",
    fee: "$1,200 / mo",
    savings: "$3,675 (65% Savings)",
  },
  {
    plan: "Starter Infrastructure",
    volume: "15,000 Emails",
    operators: "15 Signed Operators",
    fee: "$1,750 / mo",
    savings: "$8,750 (77% Savings)",
  },
  {
    plan: "Growth Infrastructure",
    volume: "30,000 Emails",
    operators: "30 Signed Operators",
    fee: "$2,800 / mo",
    savings: "$18,950 (84% Savings)",
  },
  {
    plan: "Pro Infrastructure",
    volume: "45,000 Emails",
    operators: "45 Signed Operators",
    fee: "$3,900 / mo",
    savings: "$29,100 (86% Savings)",
  },
  {
    plan: "Enterprise Infrastructure",
    volume: "60,000 Emails",
    operators: "60 Signed Operators",
    fee: "$5,000 / mo",
    savings: "$39,250 (87% Savings)",
  },
  {
    plan: "Fleet-Scale Infrastructure",
    volume: "75,000 Emails",
    operators: "75 Signed Operators",
    fee: "$6,000 / mo",
    savings: "$49,500 (88% Savings)",
  },
];

export const HOVER_CSS = `
.lp-nav-link { color: #71717a; transition: color .15s ease; }
.lp-nav-link:hover { color: #fafafa; }
.lp-btn-primary { background: #2563eb; transition: background .15s ease; }
.lp-btn-primary:hover { background: #1d4ed8; }
.lp-btn-light { background: #fafafa; transition: background .15s ease; }
.lp-btn-light:hover { background: #e4e4e7; }
.lp-btn-white { background: #fff; transition: background .15s ease; }
.lp-btn-white:hover { background: #f0f9ff; }
.lp-btn-outline { transition: border-color .15s ease, color .15s ease; }
.lp-btn-outline:hover { border-color: rgba(255,255,255,0.2); color: #fafafa; }
.lp-link-muted { color: #71717a; transition: color .15s ease; }
.lp-link-muted:hover { color: #fafafa; }
.lp-link-dark { color: #71717a; transition: color .15s ease; }
.lp-link-dark:hover { color: #fafafa; }
.lp-hero-link { color: #3b82f6; text-decoration: underline; transition: color .15s ease; }
.lp-hero-link:hover { color: #60a5fa; }
.lp-link-footer { color: #52525b; transition: color .15s ease; }
.lp-link-footer:hover { color: #a1a1aa; }
.lp-social { border: 1px solid rgba(255,255,255,0.07); transition: border-color .15s ease; }
.lp-social:hover { border-color: rgba(255,255,255,0.15); }
.lp-arrow-btn-light { background: #fff; border: 1px solid #e2e6ed; transition: border-color .15s ease, background .15s ease; }
.lp-arrow-btn-light:hover { border-color: #b0b8cc; background: #f8f9fc; }
.lp-arrow-btn-dark { background: #09090b; border: 1px solid #e2e6ed; transition: background .15s ease; }
.lp-arrow-btn-dark:hover { background: #27272a; }
.lp-hero-pill-input::placeholder { color: #71717a; }
.lp-cta-input::placeholder { color: #52525b; }

.lp-diff-card { transition: background 0.3s ease; }
.lp-diff-card:hover { background: rgba(255,255,255,0.015) !important; }
.lp-diff-card:hover .lp-rect-3 { transform: translate(4px, 4px); }
.lp-diff-card:hover .lp-rect-2 { transform: translate(2px, 2px); }
.lp-diff-card .lp-rect-3, .lp-diff-card .lp-rect-2 { transition: transform 0.3s ease; }

.lp-diff-card:hover .lp-dot-pulse { transform: scale(1.3); transform-origin: center; stroke: rgba(59,130,246,1); }
.lp-diff-card .lp-dot-pulse { transition: transform 0.3s ease, stroke 0.3s ease; }

.lp-diff-card .lp-bar-1, .lp-diff-card .lp-bar-2, .lp-diff-card .lp-bar-3 { transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1); }
.lp-diff-card:hover .lp-bar-1 { transform: scaleY(1.15); transform-origin: 0px 52px; }
.lp-diff-card:hover .lp-bar-2 { transform: scaleY(1.25); transform-origin: 0px 52px; }
.lp-diff-card:hover .lp-bar-3 { transform: scaleY(1.1); transform-origin: 0px 52px; }

@keyframes lp-clock-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.lp-diff-card:hover .lp-clock-hand {
  animation: lp-clock-rotate 10s linear infinite;
  transform-origin: 40px 28px;
}

.lp-stage-card { transition: background 0.3s ease; }
.lp-stage-card:hover { background: #f1f5f9 !important; }

.lp-stage-card .lp-email-paper { transition: transform 0.3s ease; }
.lp-stage-card:hover .lp-email-paper { transform: translateY(-4px); }

@keyframes lp-vibrate {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  20% { transform: translate(-1px, 0.5px) rotate(-0.5deg); }
  40% { transform: translate(-0.5px, -1px) rotate(0.5deg); }
  60% { transform: translate(1px, 0.5px) rotate(0deg); }
  80% { transform: translate(0.5px, -0.5px) rotate(0.5deg); }
}
.lp-stage-card:hover .lp-phone-svg {
  animation: lp-vibrate 0.2s linear infinite;
  transform-origin: center;
}

.lp-stage-card:hover .lp-check-path {
  transform: scale(1.15);
  transform-origin: 41px 30px;
  stroke: rgba(34,197,94,1);
  transition: all 0.25s ease;
}
.lp-stage-card .lp-check-path { transition: all 0.25s ease; }

.lp-stage-card .lp-form-line-1, .lp-stage-card .lp-form-line-2 { transition: transform 0.3s ease; }
.lp-stage-card:hover .lp-form-line-1 { transform: scaleX(1.05); transform-origin: 16px 16px; }
.lp-stage-card:hover .lp-form-line-2 { transform: scaleX(1.08); transform-origin: 16px 24px; }

.lp-stage-card .lp-crm-col-1, .lp-stage-card .lp-crm-col-2, .lp-stage-card .lp-crm-col-3, .lp-stage-card .lp-crm-col-4 { transition: stroke 0.2s, stroke-width 0.2s; }
.lp-stage-card:hover .lp-crm-col-1 { stroke: rgba(37,99,235,0.25); }
.lp-stage-card:hover .lp-crm-col-2 { stroke: rgba(37,99,235,0.4); }
.lp-stage-card:hover .lp-crm-col-3 { stroke: rgba(37,99,235,0.6); }
.lp-stage-card:hover .lp-crm-col-4 { stroke: rgba(37,99,235,0.85); stroke-width: 1.25; }

@keyframes lp-bell-swing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(8deg); }
  75% { transform: rotate(-8deg); }
}
.lp-stage-card:hover .lp-bell-body {
  animation: lp-bell-swing 0.6s ease-in-out infinite;
  transform-origin: 32px 8px;
}
.lp-stage-card .lp-bell-wave { transition: stroke 0.3s ease; }
.lp-stage-card:hover .lp-bell-wave { stroke: rgba(245,158,11,0.7); }

.lp-stage-card .lp-chart-path { transition: all 0.3s ease; }
.lp-stage-card:hover .lp-chart-path {
  stroke: rgba(37,99,235,0.8);
  stroke-width: 1.5;
  transform: translateY(-2px);
}

@keyframes char-blur-in {
  0% {
    filter: blur(4px);
    opacity: 0;
    transform: translateY(2px);
  }
  100% {
    filter: blur(0px);
    opacity: 1;
    transform: translateY(0);
  }
}
.char-blur-in {
  display: inline-block;
  animation: char-blur-in 0.18s ease-out forwards;
}
.lp-h2-line {
  display: block;
  white-space: nowrap;
}
@media (max-width: 1200px) {
  .lp-h2-line {
    white-space: normal !important;
    display: inline !important;
  }
}

@keyframes lp-pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
@keyframes lp-engMount { from { opacity: 0; transform: scale(0.65); } to { opacity: 1; transform: scale(1); } }
@keyframes lp-engFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
@keyframes lp-engRing { 0%,100% { transform: scale(1); opacity: 0.55; } 50% { transform: scale(1.07); opacity: 0.25; } }
@keyframes lp-engGlow { 0%,100% { opacity: 0.55; } 50% { opacity: 1; } }
@keyframes lp-drawLine { to { stroke-dashoffset: 0; } }

@media (max-width: 1200px) {
  .lp-h1 { 
    font-size: 24px !important; 
    line-height: 1.25 !important;
  }
  .lp-h1-line {
    white-space: normal !important;
    display: inline !important;
  }
  .lp-subhero {
    white-space: normal !important;
  }
  .lp-hero-map-wrap {
    opacity: 0.38 !important;
    mask-image: linear-gradient(to bottom, transparent 30%, black 100%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 30%, black 100%);
  }
}

@media (max-width: 900px) {
  .lp-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
  .lp-2col { grid-template-columns: 1fr !important; gap: 32px !important; }
  .lp-3col { grid-template-columns: 1fr !important; }
  .lp-4col { grid-template-columns: 1fr 1fr !important; }
  .lp-h2 { font-size: 32px !important; }
  .lp-eco-strip { flex-wrap: wrap; }
  .lp-nav-links { display: none !important; }
}
.lp-price-row {
  transition: background-color 0.15s ease;
}
.lp-price-row:hover {
  background-color: rgba(255, 255, 255, 0.02) !important;
}

@keyframes lp-ring-scale {
  0% { transform: scale(0.3); opacity: 0; }
  50% { opacity: 0.35; }
  100% { transform: scale(1.3); opacity: 0; }
}
@keyframes lp-flow-branch-1 {
  0% { stroke-dashoffset: 80; }
  100% { stroke-dashoffset: -80; }
}
@keyframes lp-orbit-1 {
  from { transform: rotate(0deg) translateX(34px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(34px) rotate(-360deg); }
}
@keyframes lp-orbit-2 {
  from { transform: rotate(120deg) translateX(52px) rotate(-120deg); }
  to   { transform: rotate(480deg) translateX(52px) rotate(-480deg); }
}
@keyframes lp-orbit-3 {
  from { transform: rotate(240deg) translateX(52px) rotate(-240deg); }
  to   { transform: rotate(600deg) translateX(52px) rotate(-600deg); }
}
@keyframes lp-orbit-4 {
  from { transform: rotate(60deg) translateX(34px) rotate(-60deg); }
  to   { transform: rotate(420deg) translateX(34px) rotate(-420deg); }
}
@keyframes lp-orbit-5 {
  from { transform: rotate(200deg) translateX(68px) rotate(-200deg); }
  to   { transform: rotate(560deg) translateX(68px) rotate(-560deg); }
}
@keyframes lp-orbit-6 {
  from { transform: rotate(320deg) translateX(68px) rotate(-320deg); }
  to   { transform: rotate(680deg) translateX(68px) rotate(-680deg); }
}
@keyframes lp-scan-arc {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes lp-db-glow {
  0%,100% { filter: drop-shadow(0 0 4px rgba(37,99,235,0.4)); }
  50%      { filter: drop-shadow(0 0 10px rgba(37,99,235,0.9)); }
}
@keyframes lp-dash-flow {
  to { stroke-dashoffset: -200; }
}
@keyframes lp-node-pulse {
  0%,100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.35); opacity: 0.7; }
}
@keyframes lp-travel-arc {
  0%   { offset-distance: 0%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}
@keyframes lp-grid-fade {
  0%,100% { opacity: 0.4; }
  50%      { opacity: 0.7; }
}
.lp-feat-card {
  position: relative;
  background: transparent;
  border-right: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
}
.lp-feat-card:last-child { border-right: none; }
.lp-feat-preview {
  position: relative;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.lp-feat-preview::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(60% 60% at 50% 100%, rgba(0,0,0,0.55), transparent 70%);
}
.lp-feat-body { padding: 24px 32px 40px; position: relative; z-index: 1; }
.lp-feat-eyebrow { font-size: 10.5px; color: #71717a; font-family: monospace; letter-spacing: 0.08em; margin-bottom: 10px; text-transform: uppercase; }
.lp-feat-stat { font-size: 34px; font-weight: 600; color: #fafafa; letter-spacing: -0.025em; margin-bottom: 10px; line-height: 1; font-feature-settings: "tnum"; }
.lp-feat-stat .accent { color: #71717a; font-size: 22px; margin-left: 4px; font-weight: 500; }
.lp-feat-desc { font-size: 13px; color: #71717a; line-height: 1.55; }
.lp-faq-item summary::-webkit-details-marker { display: none; }
.lp-faq-item[open] .lp-faq-icon { transform: rotate(45deg); color: #fafafa; }
.lp-faq-item summary:hover { color: #ffffff; }
`;

type Testimonial = { quote: string | React.ReactNode; name: string; title: string; initials: string; bg: string };
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before Asamblor, we were paying $750 per driver to a recruiter and getting maybe 4–5 owner-operators a month. Three months in, we're signing 15–20 per month and our recruiting costs dropped over 80%.",
    name: "David R.",
    title: "Director of Recruitment, Midwest Freight Authority",
    initials: "DR",
    bg: "#2563eb",
  },
  {
    quote:
      "The thing that sold us was owning the infrastructure. When we leave, we keep the CRM, the domains, the lead history — everything. No other agency in trucking gives you that.",
    name: "Maria C.",
    title: "Operations Manager, Sun State Logistics",
    initials: "MC",
    bg: "#18181b",
  },
  {
    quote: (
      <>
        We already use{" "}
        <a href="https://carriex.io/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
          CarrieX
        </a>{" "}
        for data pulls. Graduating to Asamblor meant we stopped running campaigns ourselves — the team handles everything. Our recruiters just take calls now.
      </>
    ),
    name: "James T.",
    title: "Fleet Manager, Coastal Transport Group",
    initials: "JT",
    bg: "#7c3aed",
  },
];

const AsamblorMark = ({ size = 14, dark = false }: { size?: number; dark?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <circle cx="3.5" cy="12" r="2.2" fill="#2563eb" />
    <circle cx="12.5" cy="4" r="2.2" fill={dark ? "#09090b" : "#09090b"} />
    <path d="M3.5 12 C3.5 7.5 8 7.5 12.5 4" stroke="#09090b" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  </svg>
);


function GridBg() {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
      <defs>
        <pattern id="lp-feat-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
        </pattern>
        <radialGradient id="lp-feat-mask" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="lp-feat-grid-mask">
          <rect width="100%" height="100%" fill="url(#lp-feat-mask)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#lp-feat-grid)" mask="url(#lp-feat-grid-mask)" />
    </svg>
  );
}

function DataPoolWidget() {
  const [count, setCount] = useState(4529184);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 400);
    return () => clearInterval(timer);
  }, []);

  const fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="lp-feat-card">
      <div className="lp-feat-preview">
        <GridBg />
        <svg width="220" height="220" viewBox="-110 -110 220 220" style={{ overflow: "visible", display: "block", position: "relative", zIndex: 1 }}>
          <defs>
            <radialGradient id="dp-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="dp-scan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#e4e4e7" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="dp-chip" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#2a2a32" />
              <stop offset="100%" stopColor="#0a0a0c" />
            </radialGradient>
          </defs>

          <circle cx="0" cy="0" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="0" cy="0" r="64" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
          <circle cx="0" cy="0" r="88" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          <g style={{ transformOrigin: "0px 0px", animation: "lp-scan-arc 5s linear infinite" }}>
            <path d="M 0 -88 A 88 88 0 0 1 62 -62" fill="none" stroke="url(#dp-scan)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="0" cy="-88" r="3" fill="#e4e4e7" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.45))" }} />
          </g>
          <g style={{ transformOrigin: "0px 0px", animation: "lp-scan-arc 9s linear infinite reverse" }}>
            <path d="M 0 -64 A 64 64 0 0 1 45 -45" fill="none" stroke="url(#dp-scan)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Orbiting packets */}
          <g style={{ transformOrigin: "0px 0px", animation: "lp-orbit-1 3.5s linear infinite" }}>
            <circle cx="34" cy="0" r="3" fill="#e4e4e7" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.35))" }} />
          </g>
          <g style={{ transformOrigin: "0px 0px", animation: "lp-orbit-4 3.5s linear infinite" }}>
            <circle cx="34" cy="0" r="2" fill="rgba(228,228,231,0.5)" />
          </g>
          <g style={{ transformOrigin: "0px 0px", animation: "lp-orbit-2 6s linear infinite" }}>
            <circle cx="52" cy="0" r="2.5" fill="#a1a1aa" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.25))" }} />
          </g>
          <g style={{ transformOrigin: "0px 0px", animation: "lp-orbit-3 6s linear infinite" }}>
            <circle cx="52" cy="0" r="2" fill="rgba(255,255,255,0.3)" />
          </g>
          <g style={{ transformOrigin: "0px 0px", animation: "lp-orbit-5 8s linear infinite" }}>
            <circle cx="68" cy="0" r="2" fill="rgba(212,212,216,0.55)" />
          </g>
          <g style={{ transformOrigin: "0px 0px", animation: "lp-orbit-6 8s linear infinite" }}>
            <circle cx="68" cy="0" r="1.5" fill="rgba(255,255,255,0.2)" />
          </g>

          <circle cx="0" cy="0" r="42" fill="url(#dp-core-glow)" />
          <circle cx="0" cy="0" r="28" fill="url(#dp-chip)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <circle cx="0" cy="-27" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" transform="translate(0,1)" />
          <g style={{ transformOrigin: "center" }}>
            <g transform="translate(-12,-12)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e4e4e7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
            </g>
          </g>
        </svg>
      </div>
      <div className="lp-feat-body">
        <div className="lp-feat-eyebrow">Live database sync</div>
        <div className="lp-feat-stat" style={{ fontFamily: "monospace" }}>
          {mounted ? fmt(count) : "4,529,184"}
          <span className="accent">+</span>
        </div>
        <div className="lp-feat-desc">
          Verified trucking records inside the{" "}
          <a href="https://carriex.io/" target="_blank" rel="noopener noreferrer" style={{ color: "#a1a1aa", textDecoration: "none", borderBottom: "1px dotted rgba(255,255,255,0.2)" }}>
            CarrieX
          </a>{" "}
          database
        </div>
      </div>
    </div>
  );
}

function OutreachWidget() {
  const channels = [
    { x: 40, label: "EMAIL" },
    { x: 140, label: "SMS" },
    { x: 240, label: "CRM" },
  ];
  return (
    <div className="lp-feat-card">
      <div className="lp-feat-preview">
        <GridBg />
        <svg width="280" height="200" viewBox="0 0 280 200" style={{ display: "block", position: "relative", zIndex: 1, overflow: "visible" }}>
          <defs>
            <linearGradient id="ow-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#e4e4e7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="ow-hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ow-chip" cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor="#22222a" />
              <stop offset="100%" stopColor="#0c0c10" />
            </radialGradient>
          </defs>

          {/* Static guide lines */}
          {channels.map((c, i) => (
            <path key={`g${i}`} d={`M 140 50 L ${c.x} 150`} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          ))}
          {/* Animated flowing dashes */}
          {channels.map((c, i) => (
            <path
              key={`a${i}`}
              d={`M 140 50 L ${c.x} 150`}
              stroke="url(#ow-line)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="6 10"
              style={{ animation: `lp-dash-flow ${2.4 + i * 0.3}s linear infinite` }}
            />
          ))}

          {/* Hub glow + chip */}
          <circle cx="140" cy="50" r="30" fill="url(#ow-hub-glow)" />
          <circle cx="140" cy="50" r="18" fill="url(#ow-chip)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <circle cx="140" cy="50" r="4" fill="#e4e4e7" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))", transformOrigin: "140px 50px", animation: "lp-node-pulse 2s ease-in-out infinite" }} />

          {/* Channel chips */}
          {channels.map((c, i) => (
            <g key={`c${i}`}>
              <rect x={c.x - 28} y={140} width={56} height={28} rx={8} fill="url(#ow-chip)" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
              <circle cx={c.x - 16} cy={154} r="2.5" fill="#e4e4e7" style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.3))" }} />
              <text x={c.x + 4} y={158} fill="#d4d4d8" fontSize="10" fontFamily="monospace" letterSpacing="0.05em">{c.label}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="lp-feat-body">
        <div className="lp-feat-eyebrow">Monthly outbound capacity</div>
        <div className="lp-feat-stat">
          75,000<span className="accent">+</span>
        </div>
        <div className="lp-feat-desc">Targeted outreach points per month, built for your fleet</div>
      </div>
    </div>
  );
}

function CostWidget() {
  return (
    <div className="lp-feat-card">
      <div className="lp-feat-preview">
        <GridBg />
        <svg width="280" height="200" viewBox="0 0 280 200" style={{ display: "block", position: "relative", zIndex: 1, overflow: "visible" }}>
          <defs>
            <linearGradient id="cw-arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3f3f46" />
              <stop offset="100%" stopColor="#e4e4e7" />
            </linearGradient>
            <radialGradient id="cw-chip-dim" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#1c1c22" />
              <stop offset="100%" stopColor="#0a0a0c" />
            </radialGradient>
            <radialGradient id="cw-chip-bright" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#2a2a32" />
              <stop offset="100%" stopColor="#0a0a0c" />
            </radialGradient>
            <radialGradient id="cw-bright-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Track */}
          <path d="M 40 130 A 100 100 0 0 1 240 130" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M 40 130 A 100 100 0 0 1 240 130" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Active gradient arc */}
          <path d="M 40 130 A 100 100 0 0 1 240 130" stroke="url(#cw-arc)" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Traveling packet along arc */}
          <circle r="3" fill="#e4e4e7" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.5))", offsetPath: "path('M 40 130 A 100 100 0 0 1 240 130')", animation: "lp-travel-arc 3.2s ease-in-out infinite" } as React.CSSProperties} />

          {/* Left endpoint (Agency) */}
          <circle cx="40" cy="130" r="14" fill="url(#cw-chip-dim)" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
          <circle cx="40" cy="130" r="4" fill="#71717a" />
          <rect x="6" y="152" width="68" height="20" rx="6" fill="url(#cw-chip-dim)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x="40" y="165" fill="#a1a1aa" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="0.04em">$3.5K</text>
          <text x="40" y="186" fill="#52525b" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="0.06em">AGENCY</text>

          {/* Right endpoint (Asamblor) */}
          <circle cx="240" cy="130" r="22" fill="url(#cw-bright-glow)" />
          <circle cx="240" cy="130" r="14" fill="url(#cw-chip-bright)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
          <circle cx="240" cy="130" r="4" fill="#fafafa" style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.5))", transformOrigin: "240px 130px", animation: "lp-node-pulse 2s ease-in-out infinite" }} />
          <rect x="206" y="152" width="68" height="20" rx="6" fill="url(#cw-chip-bright)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <text x="240" y="165" fill="#fafafa" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="0.04em">$44</text>
          <text x="240" y="186" fill="#e4e4e7" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="0.06em">ASAMBLOR</text>
        </svg>
      </div>
      <div className="lp-feat-body">
        <div className="lp-feat-eyebrow">Cost per acquisition</div>
        <div className="lp-feat-stat">
          $44<span className="accent" style={{ color: "#10b981" }}>↓</span>
        </div>
        <div className="lp-feat-desc">Max projected cost per signed owner-operator vs. $3,500+ with agencies</div>
      </div>
    </div>
  );
}


export default function LandingPage({ faq = [] as { q: string; a: string }[] }: { faq?: { q: string; a: string }[] }) {
  useCalInit();
  const [idx, setIdx] = useState(0);
  const n = TESTIMONIALS.length;

  const t1 = TESTIMONIALS[idx % n];
  const t2 = TESTIMONIALS[(idx + 1) % n];

  return (
    <main style={{ background: "#09090b", color: "#fafafa", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style dangerouslySetInnerHTML={{ __html: HOVER_CSS }} />

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(9,9,11,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/logo.png" alt="Asamblor" width={32} height={32} priority style={{ display: "block", objectFit: "contain" }} />
            <span style={{ fontSize: 14.5, fontWeight: 500, color: "#fafafa", letterSpacing: "-0.01em" }}>Asamblor</span>
          </a>
          <div className="lp-nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="#how-it-works" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>How It Works</a>
            <a href="#engine" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Infrastructure</a>
            <a href="/solutions" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Solutions</a>
            <a href="#pricing" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Pricing</a>
            <a href="#contact" className="lp-nav-link" style={{ fontSize: 13.5, textDecoration: "none" }}>Contact</a>
          </div>
          <a href="/book" {...calAttrs} className="lp-btn-light" style={{ color: "#09090b", fontSize: 13, fontWeight: 500, padding: "8px 16px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", cursor: "pointer" }}>
            Book a Discovery Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#09090b", padding: "40px 0 80px", position: "relative", overflow: "hidden", minHeight: "min(calc(100vh - 58px), 780px)" }}>
        <DottedSurface className="absolute inset-0 z-0" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 1120 }}>
            <h1 className="lp-h1" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20 }}>
              <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#fafafa" }}>Asamblor is an owner-operator acquisition infrastructure </span>
              <span className="lp-h1-line" style={{ display: "block", whiteSpace: "nowrap", color: "#71717a" }}>that finds, vets, and routes active candidates directly into your CRM.</span>
            </h1>
            <p className="lp-subhero" style={{ fontSize: 16, color: "#71717a", lineHeight: 1.6, marginBottom: 32 }}>
              {"We build and run done-for-you lease-on pipelines to scale your fleet asset-light—free from job boards and agency commissions."}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="lp-hero-pill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                maxWidth: 480,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 999,
                padding: 6,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <input
                type="email"
                placeholder="your@company.com"
                aria-label="Work email"
                className="lp-hero-pill-input"
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  padding: "12px 18px",
                  fontSize: 15,
                  color: "#fafafa",
                  fontFamily: "inherit",
                }}
              />
              <button
                type="button"
                {...calAttrs}
                className="lp-btn-primary"
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Book a Discovery Call →
              </button>
            </form>
            {/* Powered by CarrieX text block inside Hero */}
            <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.07)", marginTop: 72 }} />
            <div style={{ marginTop: 48 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
                <div style={{ maxWidth: 560 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.025em" }}>
                    <span style={{ color: "#fafafa" }}>Powered by </span>
                    <a 
                      href="https://carriex.io/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      CarrieX
                    </a>
                    <span style={{ color: "#71717a" }}>, we operate inside a single, unified data ecosystem.</span>
                  </h2>
                </div>
                <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.7, maxWidth: 400, margin: 0 }}>
                  We tap into 4.5M+ verified trucking records to build an exclusive pipeline of active owner-operators — no scrapers, no cold lists, no manual handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* VALUE PROP + STATS */}
      <section id="how-it-works" style={{ background: "#09090b", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-2col" style={{ padding: "80px 0 72px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <h2 className="lp-h2" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em" }}>
                <span className="lp-h2-line" style={{ color: "#ffffff" }}>Stop renting leads. </span>
                <span className="lp-h2-line" style={{ color: "#71717a" }}>Start owning the infrastructure.</span>
              </h2>
            </div>
            <div style={{ paddingTop: 8 }}>
              <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.72, marginBottom: 28 }}>
                Traditional recruiting burns margin on $3,500+ agency fees for every owner-operator signed. Asamblor replaces the agency with productized, done-for-you acquisition pipelines—built as a permanent business asset you own.
              </p>
              <a href="mailto:office@asamblor.com" className="lp-link-dark" style={{ fontSize: 13.5, textDecoration: "none" }}>Contact us →</a>
            </div>
          </div>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
            <DataPoolWidget />
            <OutreachWidget />
            <CostWidget />
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section style={{ background: "#09090b", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { 
                fig: "FIG 0.1", 
                title: "We own the data layer", 
                desc: (
                  <>
                    We mine 4.5M+ verified trucking records directly through{" "}
                    <a href="https://carriex.io/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                      CarrieX
                    </a>
                    —our proprietary data platform. No scrapers, no bought lists, and no stale data.
                  </>
                ),
                svg: (
                <svg width="80" height="56" viewBox="0 0 80 56" fill="none" style={{ marginBottom: 32, display: "block" }}>
                  <rect x="8" y="8" width="48" height="36" rx="3" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <rect x="16" y="16" width="48" height="36" rx="3" stroke="rgba(255,255,255,0.09)" strokeWidth="1" className="lp-rect-2" />
                  <rect x="24" y="24" width="48" height="24" rx="3" stroke="rgba(255,255,255,0.05)" strokeWidth="1" className="lp-rect-3" />
                  <circle cx="14" cy="14" r="3" stroke="rgba(59,130,246,0.6)" strokeWidth="1" className="lp-dot-pulse" />
                  <circle cx="22" cy="22" r="3" stroke="rgba(59,130,246,0.4)" strokeWidth="1" className="lp-dot-pulse" />
                </svg>
              )},
              { fig: "FIG 0.2", title: "You own the infrastructure", desc: "Domains, CRM configurations, and historical lead data—all yours to keep. When you close your contract, you walk away with a fully operational acquisition asset.", svg: (
                <svg width="80" height="56" viewBox="0 0 80 56" fill="none" style={{ marginBottom: 32, display: "block" }}>
                  <rect x="4" y="20" width="24" height="32" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className="lp-bar-1" />
                  <rect x="32" y="10" width="24" height="42" rx="2" stroke="rgba(255,255,255,0.09)" strokeWidth="1" className="lp-bar-2" />
                  <rect x="60" y="28" width="16" height="24" rx="2" stroke="rgba(255,255,255,0.05)" strokeWidth="1" className="lp-bar-3" />
                  <line x1="4" y1="52" x2="76" y2="52" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </svg>
              )},
              { fig: "FIG 0.3", title: "Flat monthly, not per-hire", desc: "Agencies charge $3,500+ per operator. Asamblor operates on a transparent, flat monthly fee. Scaling your lease-on fleet no longer forces your recruiting costs to spiral.", svg: (
                <svg width="80" height="56" viewBox="0 0 80 56" fill="none" style={{ marginBottom: 32, display: "block" }}>
                  <circle cx="40" cy="28" r="22" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
                  <circle cx="40" cy="28" r="14" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <path d="M40 14V28L50 34" stroke="rgba(245,158,11,0.6)" strokeWidth="1.2" strokeLinecap="round" className="lp-clock-hand" />
                  <circle cx="40" cy="28" r="2" fill="rgba(245,158,11,0.7)" />
                </svg>
              )},
            ].map((d) => (
              <div key={d.title} className="lp-diff-card" style={{ padding: "48px 32px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                {d.svg}
                <div style={{ fontSize: 10, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.05em", marginBottom: 8 }}>{d.fig}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#ffffff", marginBottom: 10, letterSpacing: "-0.01em" }}>{d.title}</div>
                <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ENGINE STAGES */}
      <section id="engine" style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ padding: "64px 0 56px", borderBottom: "1px solid #e2e8f0" }}>
            <h2 className="lp-h2" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.022em" }}>
              <span className="lp-h2-line" style={{ color: "#0f172a" }}>The complete acquisition infrastructure. </span>
              <span className="lp-h2-line" style={{ color: "#71717a" }}>Fully managed for you.</span>
            </h2>
          </div>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderLeft: "1px solid #e2e8f0" }}>
            {[
              { code: "1.0  Email Outreach", title: "Email Outreach", desc: "Up to 75,000 targeted emails per month with A/B testing, reply detection, inbox rotation, and full deliverability infrastructure.", svg: (
                <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
                  <rect className="lp-email-paper" x="12" y="14" width="40" height="24" rx="1.5" stroke="rgba(37,99,235,0.2)" strokeWidth="1" />
                  <rect x="4" y="8" width="56" height="36" rx="3" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <path d="M4 14L32 28L60 14" stroke="rgba(37,99,235,0.35)" strokeWidth="1" />
                  <line x1="4" y1="20" x2="20" y2="20" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                  <line x1="44" y1="20" x2="60" y2="20" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                </svg>
              )},
              { code: "2.0  SMS Follow-Up", title: "SMS Follow-Up", desc: "TCPA-compliant SMS fires within minutes of a reply or click — only on explicit intent signals. Lifts reply-to-sign conversion significantly.", svg: (
                <svg width="64" height="48" viewBox="0 0 64 48" fill="none" className="lp-phone-svg">
                  <rect x="18" y="4" width="28" height="42" rx="4" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <rect x="22" y="10" width="20" height="14" rx="2" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
                  <circle cx="32" cy="38" r="3" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
                  <line x1="22" y1="17" x2="42" y2="17" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                </svg>
              )},
              { code: "3.0  Web Vetting Forms", title: "Web Vetting Forms", desc: "Dynamic pre-qualification forms capture authority, trailer, equipment, and experience. Leads arrive fully scored before a recruiter makes a single call.", svg: (
                <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
                  <rect x="8" y="4" width="48" height="40" rx="3" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <line x1="16" y1="16" x2="48" y2="16" stroke="rgba(0,0,0,0.07)" strokeWidth="1" className="lp-form-line-1" />
                  <line x1="16" y1="24" x2="48" y2="24" stroke="rgba(0,0,0,0.07)" strokeWidth="1" className="lp-form-line-2" />
                  <line x1="16" y1="32" x2="36" y2="32" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
                  <path d="M38 30L40.5 32.5L44.5 28" stroke="rgba(34,197,94,0.55)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lp-check-path" />
                </svg>
              )},
              { code: "4.0  CRM Pipeline", title: "CRM Pipeline Engineering", desc: "Custom pipeline built around your exact process — stage automations, lead routing, re-engagement sequences, and drag-and-drop workflow triggers.", svg: (
                <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
                  <rect x="4" y="8" width="12" height="32" rx="2" stroke="rgba(0,0,0,0.1)" strokeWidth="1" className="lp-crm-col-1" />
                  <rect x="20" y="16" width="12" height="24" rx="2" stroke="rgba(0,0,0,0.08)" strokeWidth="1" className="lp-crm-col-2" />
                  <rect x="36" y="20" width="12" height="20" rx="2" stroke="rgba(0,0,0,0.06)" strokeWidth="1" className="lp-crm-col-3" />
                  <rect x="52" y="28" width="8" height="12" rx="1.5" stroke="rgba(37,99,235,0.35)" strokeWidth="1" className="lp-crm-col-4" />
                  <line x1="4" y1="40" x2="60" y2="40" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                </svg>
              )},
              { code: "5.0  Real-Time Alerts", title: "Real-Time Notifications", desc: "Bots ping your team the moment a hot lead drops, a form is submitted, or a campaign flag fires. No qualified operator falls through.", svg: (
                <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
                  <g className="lp-bell-body">
                    <path d="M32 8C32 8 44 14 44 26V34H20V26C20 14 32 8 32 8Z" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinejoin="round" />
                    <path d="M20 34H44L47 38H17L20 34Z" stroke="rgba(0,0,0,0.07)" strokeWidth="1" strokeLinejoin="round" />
                    <path d="M29 38C29 39.66 30.34 41 32 41C33.66 41 35 39.66 35 38" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
                  </g>
                  <path d="M12 18C16 12 24 8 32 8" stroke="rgba(245,158,11,0.35)" strokeWidth="1" strokeLinecap="round" className="lp-bell-wave" />
                  <path d="M52 18C48 12 40 8 32 8" stroke="rgba(245,158,11,0.35)" strokeWidth="1" strokeLinecap="round" className="lp-bell-wave" />
                </svg>
              )},
              { code: "6.0  Command Center", title: "Command Center Dashboard", desc: "Full transparency: emails sent, deliverability, opens, replies, pipeline stages, and signed operators. Know where every dollar goes.", svg: (
                <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
                  <rect x="4" y="4" width="56" height="40" rx="3" stroke="rgba(0,0,0,0.09)" strokeWidth="1" />
                  <path d="M12 36L20 26L28 30L36 20L44 24L52 14" stroke="rgba(37,99,235,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lp-chart-path" />
                  <line x1="4" y1="12" x2="60" y2="12" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                  <rect x="6" y="6" width="8" height="4" rx="1" fill="rgba(0,0,0,0.04)" />
                  <rect x="16" y="6" width="8" height="4" rx="1" fill="rgba(0,0,0,0.04)" />
                </svg>
              )},
            ].map((stage) => (
              <div key={stage.code} className="lp-stage-card" style={{ padding: "36px 28px 40px", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
                  <span style={{ fontSize: 10, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.06em" }}>{stage.code}</span>
                  <span style={{ fontSize: 10, color: "#cbd5e1", fontFamily: "monospace" }}>→</span>
                </div>
                <div style={{ marginBottom: 28 }}>{stage.svg}</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#0f172a", marginBottom: 10, letterSpacing: "-0.01em" }}>{stage.title}</div>
                <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65 }}>{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ padding: "64px 0 56px", borderBottom: "1px solid #e2e8f0" }}>
            <h2 className="lp-h2" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.022em" }}>
              <span className="lp-h2-line" style={{ color: "#0f172a" }}>How Asamblor compares </span>
              <span className="lp-h2-line" style={{ color: "#71717a" }}>to the alternatives.</span>
            </h2>
          </div>
          <div className="lp-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderLeft: "1px solid #e2e8f0" }}>
            <ComparisonCol
              tag="JOB BOARDS"
              title="Public listing platforms"
              dark={false}
              items={[
                { ok: false, label: "Per-post or per-lead pricing", sub: "Cost scales with every posting" },
                { ok: false, label: "Low-intent public applicants", sub: "Saturated with ghost leads" },
                { ok: false, label: "Board owns the data", sub: "You keep nothing when you leave" },
                { ok: false, label: "Hard scale ceiling", sub: "Can't reach passive operators" },
              ]}
            />
            <ComparisonCol
              tag="RECRUITING AGENCIES"
              title="Traditional recruiting agencies"
              dark={false}
              items={[
                { ok: false, label: "$3,500+ per signed operator", sub: "Recruiting fees eat your expansion margins" },
                { ok: false, label: "Opaque, variable quality", sub: "No ICP-matching or pre-vetting" },
                { ok: false, label: "Agency owns the pipeline", sub: "Zero asset when you exit" },
                { ok: false, label: "Cost scales per hire", sub: "More operators signed = more commissions" },
              ]}
            />
            <ComparisonCol
              tag="ASAMBLOR  ·  RECOMMENDED"
              title="Done-for-you acquisition infrastructure"
              dark
              items={[
                { ok: true, label: "Flat monthly, no commissions", sub: "Predictable cost at any volume" },
                { 
                  ok: true, 
                  label: (
                    <>
                      <a href="https://carriex.io/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                        CarrieX
                      </a>{" "}
                      ICP-matched data
                    </>
                  ), 
                  sub: "4.5M+ verified trucking records" 
                },
                { ok: true, label: "You own the entire pipeline", sub: "Domains, CRM, history — yours" },
                { ok: true, label: "75K emails/mo, no ceiling", sub: "Scale your fleet without scaling recruiting costs" },
              ]}
              cta
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: "radial-gradient(circle at center, #3b82f6 0%, #2563eb 70%)", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ padding: "64px 0 32px" }}>
            <h2 className="lp-h2" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.022em" }}>
              <span className="lp-h2-line" style={{ color: "#ffffff" }}>Scalable Growth Packages & Projections</span>
              <span className="lp-h2-line" style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, marginTop: 12, lineHeight: 1.5, whiteSpace: "normal" }}>All plans require a flat $750 technical setup fee to cover infrastructure provisioning and database integration. No per-operator fees, ever.</span>
            </h2>
            <div style={{ display: "flex", gap: "20px 32px", flexWrap: "wrap", marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.85)", fontFamily: "monospace", letterSpacing: "0.03em" }}>
              <span>✓ Standard outbound pipelines</span>
              <span>✓ CRM integration & workflow engineering</span>
              <span>✓ Dynamic vetting forms</span>
              <span>✓ SMS follow-up triggers</span>
              <span>✓ Real-time notifications</span>
              <span>✓ Command center dashboard</span>
            </div>
            <WavePath className="w-full text-white/20" style={{ width: "100%", marginTop: 32 }} />
          </div>

          <div style={{ overflowX: "auto", margin: "40px 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                  <th style={{ padding: "16px 12px", textAlign: "left", fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "monospace", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>PLAN OPTION</th>
                  <th style={{ padding: "16px 12px", textAlign: "left", fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "monospace", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>MONTHLY VOLUME</th>
                  <th style={{ padding: "16px 12px", textAlign: "left", fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "monospace", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>EST. SIGNED OPERATORS (10%)</th>
                  <th style={{ padding: "16px 12px", textAlign: "left", fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "monospace", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>NET MONTHLY FEE</th>
                  <th style={{ padding: "16px 12px", textAlign: "left", fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "monospace", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>YOUR 1ST-MONTH SAVINGS</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((row, idx) => (
                  <tr key={idx} className="lp-price-row" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                    <td style={{ padding: "22px 12px", fontSize: 13, lineHeight: "1.5", color: "#ffffff", fontWeight: 500 }}>{row.plan}</td>
                    <td style={{ padding: "22px 12px", fontSize: 13, lineHeight: "1.5", color: "rgba(255,255,255,0.85)" }}>{row.volume}</td>
                    <td style={{ padding: "22px 12px", fontSize: 13, lineHeight: "1.5", color: "#e0f2fe", fontWeight: 500 }}>{row.operators}</td>
                    <td style={{ padding: "22px 12px", fontSize: 13, lineHeight: "1.5", color: "#ffffff", fontWeight: 600 }}>{row.fee}</td>
                    <td style={{ padding: "22px 12px", fontSize: 13, lineHeight: "1.5", color: "#a7f3d0", fontWeight: 600 }}>{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTNOTES */}
          <div style={{ marginTop: 40, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 24, paddingBottom: 24, marginBottom: 40 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontFamily: "monospace" }}>
              <div>*Optional dedicated CRM custom pipelines setup is available on request for $100 flat.</div>
              <div style={{ marginTop: 6 }}>*Data estimates and projected outcomes are computed using standard industry-average lead conversion parameters. First-month Asamblor cost includes the one-time $750 technical setup fee.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ padding: "56px 0 48px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 className="lp-h2" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              <span className="lp-h2-line" style={{ color: "#0f172a" }}>What clients say. </span>
              <span className="lp-h2-line" style={{ color: "#71717a" }}>In their own words.</span>
            </h2>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setIdx((i) => (i - 1 + n) % n)} className="lp-arrow-btn-light" style={{ width: 34, height: 34, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
                <svg width="12" height="10" viewBox="0 0 14 12" fill="none">
                  <path d="M13 6H1M1 6L6 1M1 6L6 11" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={() => setIdx((i) => (i + 1) % n)} className="lp-arrow-btn-dark" style={{ width: 34, height: 34, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
                <svg width="12" height="10" viewBox="0 0 14 12" fill="none">
                  <path d="M1 6H13M13 6L8 1M13 6L8 11" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <TestimonialCard t={t1} bg="#ffffff" />
            <TestimonialCard t={t2} bg="#f1f5f9" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq.length > 0 && (
        <section id="faq" style={{ background: "#09090b", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
            <div className="lp-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
              <div>
                <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 16 }}>FAQ</div>
                <h2 className="lp-h2" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em" }}>
                  <span className="lp-h2-line" style={{ color: "#ffffff" }}>What fleet owners </span>
                  <span className="lp-h2-line" style={{ color: "#71717a" }}>ask us most.</span>
                </h2>
              </div>
              <div>
                {faq.map((item, i) => (
                  <details key={i} className="lp-faq-item" style={{ borderTop: i === 0 ? "1px solid rgba(255,255,255,0.07)" : undefined, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <summary style={{ listStyle: "none", cursor: "pointer", padding: "20px 0", fontSize: 16, color: "#fafafa", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                      <span>{item.q}</span>
                      <span className="lp-faq-icon" style={{ color: "#71717a", fontSize: 18, lineHeight: 1, flexShrink: 0, transition: "transform 0.2s ease" }}>+</span>
                    </summary>
                    <div style={{ padding: "0 0 22px", fontSize: 14.5, color: "#a1a1aa", lineHeight: 1.7, maxWidth: 720 }}>{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section id="contact" style={{ background: "radial-gradient(circle at center, rgba(37,99,235,0.06) 0%, rgba(9,9,11,0) 70%), #0a0a0d", padding: "88px 0", overflow: "hidden", position: "relative", borderBottom: "1px solid rgba(255,255,255,0.07)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ position: "absolute", right: -80, top: -80, width: 440, height: 440, borderRadius: "50%", background: "rgba(255,255,255,0.01)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -40, bottom: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.01)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 40px", textAlign: "center", position: "relative" }}>
          <div style={{ fontSize: 10.5, color: "#71717a", fontFamily: "monospace", letterSpacing: "0.07em", marginBottom: 32 }}>BOOK A DATA DISCOVERY CALL</div>
          <h2 className="lp-h2" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 18 }}>
            <span className="lp-h2-line" style={{ color: "#ffffff" }}>Ready to build your </span>
            <span className="lp-h2-line" style={{ color: "#71717a" }}>acquisition infrastructure?</span>
          </h2>
          <p style={{ fontSize: 16, color: "#a1a1aa", marginBottom: 40, lineHeight: 1.68, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
            We&apos;ll review your ICP, show you what&apos;s in the{" "}
            <a href="https://carriex.io/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              CarrieX
            </a>{" "}
            database for your exact target, and scope your engine.
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            <input type="email" placeholder="your@company.com" className="lp-cta-input" style={{ width: 260, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "12px 16px", fontSize: 14, color: "#fff", outline: "none", fontFamily: "inherit" }} />
            <button type="button" {...calAttrs} className="lp-btn-primary" style={{ color: "#fff", fontSize: 14, fontWeight: 500, padding: "12px 28px", borderRadius: 6, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>Get Started →</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#09090b", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="lp-4col" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 2fr 1fr", borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ padding: "48px 32px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
                <Image src="/logo.png" alt="Asamblor" width={26} height={26} style={{ display: "block", objectFit: "contain" }} />
                <span style={{ fontSize: 13.5, fontWeight: 500, color: "#fafafa" }}>Asamblor</span>
              </div>
              <p style={{ fontSize: 12.5, color: "#3f3f46", lineHeight: 1.7, marginBottom: 20, maxWidth: 200 }}>
                Acquisition infrastructure for modern fleets.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <a href="https://carriex.io" className="lp-social" style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <path d="M12.5 1.5L7 7.5M12.5 1.5H8.5M12.5 1.5V5.5" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 3H2.5C1.67 3 1 3.67 1 4.5V11.5C1 12.33 1.67 13 2.5 13H9.5C10.33 13 11 12.33 11 11.5V8" stroke="#52525b" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </a>
                <a href="mailto:office@asamblor.com" className="lp-social" style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
                  <svg width="11" height="9" viewBox="0 0 14 11" fill="none">
                    <rect x="1" y="1" width="12" height="9" rx="1.5" stroke="#52525b" strokeWidth="1.4" />
                    <path d="M1 3.5L7 7L13 3.5" stroke="#52525b" strokeWidth="1.4" />
                  </svg>
                </a>
              </div>
            </div>
            <FooterCol heading="Product" links={[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Infrastructure", href: "#engine" },
              { label: "Pricing", href: "#pricing" },
              { label: "CarrieX Data", href: "https://carriex.io" },
            ]} />
            <FooterCol heading="Solutions" columns={2} links={[
              { label: "All solutions", href: "/solutions" },
              { label: "Freight Brokers", href: "/solutions/freight-brokers" },
              { label: "Insurance Sales", href: "/solutions/insurance-sales" },
              { label: "Factoring Companies", href: "/solutions/factoring-companies" },
              { label: "Fuel Card Providers", href: "/solutions/fuel-card-providers" },
              { label: "Dispatch Services", href: "/solutions/dispatch-services" },
              { label: "Repair Shops", href: "/solutions/repair-shops" },
              { label: "Tire Dealers", href: "/solutions/tire-dealers" },
              { label: "Tech Vendors", href: "/solutions/tech-vendors" },
              { label: "Truck Stops", href: "/solutions/truck-stops" },
              { label: "Equipment Suppliers", href: "/solutions/equipment-suppliers" },
              { label: "CDL Schools", href: "/solutions/cdl-schools" },
              { label: "Truck Leasing", href: "/solutions/truck-leasing" },
              { label: "Compliance Consultants", href: "/solutions/compliance-consultants" },
            ]} />
            <FooterCol heading="Company" links={[
              { label: "carriex.io", href: "https://carriex.io" },
              { label: "office@asamblor.com", href: "mailto:office@asamblor.com" },
              { label: "+1 872-313-1211", href: "tel:+18723131211" },
            ]} />
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderLeft: "1px solid rgba(255,255,255,0.07)", borderRight: "1px solid rgba(255,255,255,0.07)", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 11.5, color: "#27272a", fontFamily: "monospace" }}>
              © 2026{" "}
              <a href="https://carriex.io/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                CarrieX Labs LLC
              </a>. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              <a href="/privacy" className="lp-link-footer" style={{ fontSize: 11.5, fontFamily: "monospace", textDecoration: "none" }}>Privacy Policy</a>
              <a href="/terms" className="lp-link-footer" style={{ fontSize: 11.5, fontFamily: "monospace", textDecoration: "none" }}>Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ComparisonCol({
  tag, title, items, dark, cta,
}: {
  tag: string; title: string; dark: boolean; cta?: boolean;
  items: { ok: boolean; label: string | React.ReactNode; sub: string }[];
}) {
  const baseStyle: CSSProperties = dark
    ? { 
        padding: "36px 28px", 
        background: "#ffffff",
        border: "1px solid rgba(37, 99, 235, 0.18)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.05)",
        borderRadius: 8,
        position: "relative",
        zIndex: 2,
        transform: "translateY(-6px)"
      }
    : { 
        padding: "36px 28px", 
        borderRight: "1px solid #e2e8f0",
        background: "transparent"
      };
  return (
    <div style={baseStyle}>
      <div style={{ fontSize: 10, color: dark ? "#2563eb" : "#71717a", fontFamily: "monospace", letterSpacing: "0.06em", marginBottom: 20 }}>{tag}</div>
      <div style={{ fontSize: 15, fontWeight: 500, color: dark ? "#0f172a" : "#71717a", marginBottom: 24, letterSpacing: "-0.01em" }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: cta ? 28 : 0 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: it.ok ? "#10b981" : "#ef4444", fontSize: 12, marginTop: 1 }}>{it.ok ? "✓" : "✕"}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: dark ? "#0f172a" : "#334155" }}>{it.label}</div>
              <div style={{ fontSize: 12, color: dark ? "#71717a" : "#71717a", marginTop: 2 }}>{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
      {cta && (
        <a href="/book" {...calAttrs} className="lp-btn-primary" style={{ display: "block", color: "#fff", fontSize: 13, fontWeight: 500, padding: 12, borderRadius: 6, textAlign: "center", textDecoration: "none", marginTop: 12, cursor: "pointer" }}>
          Book a Discovery Call
        </a>
      )}
    </div>
  );
}

// PricingCol removed in favor of the master pricing matrix

function TestimonialCard({ t, bg }: { t: Testimonial; bg: string }) {
  return (
    <div style={{ background: bg, padding: "48px 44px", borderRight: "1px solid #e2e8f0", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 380 }}>
      <p style={{ fontSize: 26, color: "#0f172a", lineHeight: 1.45, letterSpacing: "-0.015em" }}>&ldquo;{t.quote}&rdquo;</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 40, paddingTop: 24, borderTop: "1px solid #e2e8f0" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "white" }}>{t.initials}</span>
        </div>
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 500, color: "#0f172a" }}>{t.name}</div>
          <div style={{ fontSize: 12, color: "#71717a", marginTop: 1 }}>{t.title}</div>
        </div>
      </div>
    </div>
  );
}

function FooterCol({ heading, links, columns = 1 }: { heading: string; links: { label: string; href: string }[]; columns?: 1 | 2 }) {
  return (
    <div style={{ padding: "48px 28px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
      <h4 style={{ fontSize: 10, fontWeight: 500, color: "#3f3f46", fontFamily: "monospace", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 18 }}>{heading}</h4>
      <div style={{ display: "grid", gridTemplateColumns: columns === 2 ? "1fr 1fr" : "1fr", rowGap: 12, columnGap: 20 }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} className="lp-link-muted" style={{ fontSize: 13, textDecoration: "none" }}>{l.label}</a>
        ))}
      </div>
    </div>
  );
}
