"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Geographic city positions mapped to amCharts Albers projection (0-1100 scale)
const cities = [
    { name: "Seattle", x: 260, y: 110, size: "large", label: true },
    { name: "Los Angeles", x: 210, y: 480, size: "large", label: true },
    { name: "Chicago", x: 745, y: 310, size: "large", label: true },
    { name: "New York City", x: 1000, y: 220, size: "large", label: true },
    { name: "Dallas", x: 605, y: 560, size: "large", label: true },
    { name: "Atlanta", x: 885, y: 460, size: "large", label: true },
    { name: "Miami", x: 945, y: 640, size: "large", label: true },
    { name: "Denver", x: 480, y: 350, size: "medium", label: false },
    { name: "Phoenix", x: 360, y: 460, size: "medium", label: false },
    { name: "Minneapolis", x: 680, y: 180, size: "medium", label: false },
];

// Capacity routing lines
const routes = [
    { id: 1, path: "M 260 110 Q 500 150, 745 310 Q 850 300, 1000 220" },
    { id: 2, path: "M 210 480 Q 400 520, 605 560 Q 800 560, 945 640" },
    { id: 3, path: "M 1000 220 Q 950 400, 945 640" },
    { id: 4, path: "M 745 310 Q 670 450, 605 560" },
    { id: 5, path: "M 605 560 Q 750 500, 885 460 Q 950 350, 1000 220" },
    { id: 6, path: "M 260 110 Q 230 300, 210 480" },
];

// Realistic State Paths (AmCharts usaLow set)
const statePaths = [
    { id: "WA", d: "M313.23,58.66L306.56,87.28L299.68,118.48L300.3,122.21L299.24,126.14L267.26,118.43L261.12,119.3L257.44,117.29L253.95,118.28L247.56,119.17L240.68,116.96L236.67,117.76L233.22,117.63L231.12,115.79L225.89,113.27L222.2,112.96L215.57,113.53L211.77,112.47L208.47,110.57L208.26,107.16L208.97,103.37L207.41,98.33L203.38,95.72L200.31,92.59L195.72,91.03L192.49,90.34L194.19,70.89L198.52,49.07L217.79,59.52L219.14,78.74L224.58,74.04L227.61,55.27L226.19,34.98L269.51,47.56z" },
    { id: "OR", d: "M299.24,126.14L301.91,131.28L304.11,133.69L304.17,137.26L301.92,139.8L298.48,145.04L294.56,151.7L290.12,155.29L286.7,159.8L285.82,163.34L288.45,165.54L289.06,168.74L286.18,174.71L276.58,214.43L276.56,214.49L227.74,202.25L159.29,181.87L158.03,168.07L170.35,146.42L179.28,122.31L192.49,90.34L195.72,91.03L200.31,92.59L203.38,95.72L207.41,98.33L208.97,103.37L208.26,107.16L208.47,110.57L211.77,112.47L215.57,113.53L222.2,112.96L225.89,113.27L231.12,115.79L233.22,117.63L236.67,117.76L240.68,116.96L247.56,119.17L253.95,118.28L257.44,117.29L261.12,119.3L267.26,118.43z" },
    { id: "CA", d: "M276.58,214.43L227.74,202.25l-17.77,65.65l24.91,38.1l24.81,36.73l24.25,34.76l-0.04,2.07l0.38,3.22l0.71,4.21l1.52,4.68l2.62,4.99l-6.55,3.43l-3.58,9.89l-4.7,4.36l0.15,4.13l-0.03,3.48l2.68,3.76l-3,4.03l-2.5,-0.55l-24.4,-2.83l-21.77,-3.21l-0.34,-8.7l-5.13,-13.35l-16.39,-18.1l-7.17,-2.72l-6.12,-9.01l-13.93,-5.57l-3.65,-4.82l1.14,-12.6l-11.03,-26.87l-5.61,-34.54l2.12,-4.85l-5.41,-9.47l-7.53,-22.22l3.25,-18.36L158.03,168.07L170.35,146.42L179.28,122.31L192.49,90.34L194.19,70.89L198.52,49.07l20,10.6l10,14.6l5,21.5l1,45.4l11.4,25.3l5,15.6l9.6,-4l5,1.5l-2,-4l3,-4l-5,-3.5l1,-4.5l-5,-3l2,-4l3,2l4.5,-2.5l5.5,1.5l1,-4l2,1.5l1.5,-4.5l4.5,-2.5l2.5,4l7,-4l1,5l-1,3.5l-4,3l-2.5,-1.5l-1,4l3,3.5l-1,5.5l1,3.5l6,5L276.58,214.43z" },
    { id: "NV", d: "M326.11,225.41L303.82,336.59L300.35,354.51L299.42,355.09L297.54,358.24L295.26,356.86L292.12,354.57L288.33,353.79L286.52,356.27L287.5,359.65L286.5,364.43L285.98,368.82L285.97,373.36L283.94,377.49L259.69,342.73L234.88,306L209.97,267.9L227.74,202.25L276.56,214.49L276.58,214.43z" },
    { id: "ID", d: "M503.5,131.88l-3.52,42l-2.68,20.78l-26.83,-2.88l-28.95,-3.29l-24.91,-3.65l-31.5,-4.76L385.21,178.56L375.87,234.37L326.11,225.41L306.56,87.28L313.23,58.66l14.56,3.32l-4.08,23.87l2.66,6.84l-0.9,4.04l2.04,4.2l3.06,2.89l1.81,4.02l2.8,7.84l3.3,4.09l4.61,1.17l-2.72,4.62l-2.72,5.59l0.12,6.03l-2.12,1.07l-1.02,5.77l2.35,2.79l3.65,-2.03l2.24,-2.83l1.78,1l1.27,3.45l0.41,7.44l2.26,3.35l-0.13,6.05l0.65,1.82l3.14,1.18l1.35,3.63l1.74,6.36l3.54,-2.56l5.11,1.79l0.83,-2.13l8.81,3.02l0.81,-2.13l3.36,-0.08L503.5,131.88z" },
    { id: "MT", d: "M501.84,159.67L499.16,180.45L472.33,177.57L443.38,174.28L418.47,170.63L386.97,165.87L385.13,177.31L384.7,178.06L383.16,176.53L382.13,173.11L380.5,172.2L377.44,176.27L373.63,176.35L364.82,173.33L363.99,175.46L358.88,173.67L355.34,176.23L353.6,169.87L352.25,166.24L349.11,165.06L348.46,163.24L348.59,157.19L346.33,153.84L345.92,146.4L344.65,142.95L342.87,141.95L340.63,144.78L336.98,146.81L334.63,144.02L335.65,138.25L337.77,137.18L337.65,131.15L340.37,125.56L343.09,120.94L338.48,119.77L335.18,115.68L332.38,107.84L330.57,103.82L327.51,100.93L325.47,96.73L326.37,92.69L323.71,85.85L327.79,61.98L372.22,71.15L416.94,78.85L461.89,85.08L507.02,89.83L503.5,131.88z" },
    { id: "TX", d: "M658.64,445.06L659.67,446.53L663.36,446.16L667.77,446.16L666.94,459.1L668.65,483.45L671.9,485.95L673.07,489.45L674.87,494.7L677.27,499.84L679.1,502.91L677.42,511.32L676.22,513.83L674.63,519.34L676.12,520.83L676.18,525.4L673.27,528.5L671.32,531.91L673.04,534.9L656.02,540.04L637.82,557.24L617.61,567.14L606.35,578.03L601.48,588.34L601.04,604.28L601.91,615.41L605.78,623.36L597.58,623.93L582.8,618.52L566.71,610.86L561.26,599.79L557.33,583.46L545.79,569.82L539.4,556.02L530.11,539.78L516.53,529.83L500.18,529.18L486.19,546.32L470.08,538.07L460.36,530.23L456.6,517.21L451.21,504.67L440.58,493.46L431.39,485.2L425.23,476.34L423.48,472.47L423.5,470.51L440.89,472.47L475.73,475.87L493.71,477.35L497.01,434.63L501.59,375.32L519.86,376.63L538.16,377.73L556.46,378.64L555.49,400.85L554.53,422.51L558.91,425.14L561.9,427.12L566.91,425.79L569.54,430.6L575.82,432.43L581.41,433.82L590.23,433.51L592.59,439.04L598.33,436.88L603.58,440.5L608.74,442.04L611.74,438.79L614.58,442.61L620.93,441.42L623.71,442.55L626.89,441.61L630.14,439.76L634.09,439.72L640.76,439.93L640.76,439.93L645.06,438.36L650.4,440.72L658.64,445.06z" },
    { id: "FL", d: "M915.25,488.75L920.47,504.83L931.05,522.16L942.9,537.63L944.43,546.48L957.31,568.23L961.78,588.44L960.97,609.01L952.91,614.56L942.16,613.5L937.22,603.98L928.48,599.97L914.49,581.98L901.97,566.79L898.51,556.09L899.92,541.71L893.44,529.65L878.58,517.85L866.13,510.74L845.03,523.09L839.71,517.25L819.88,509.08L797.83,514.18L798.97,510.92L799.58,506.33L794.58,501.21L794.73,499.45L805.82,497.08L845.75,492.54L849.47,498.29L869.32,496.79L901.59,495.62L903.65,499.35L905.87,496.93L904.7,489.07L906.93,487.93L911.06,488.99z" },
    { id: "NY", d: "M1006.47,191.24L1006.81,207.31L1010.14,224.38L1011.92,225.92L1008.84,228.98L1010.11,231.52L1032.89,222.46L1038.92,225.29L1017.3,238.01L1006.63,240.74L1005.97,233.13L991.08,227.52L988.02,226.6L984.83,225.73L983,222.77L982.87,220.23L980.43,218.69L976.03,216.05L953.56,221.02L929.39,226.03L903.43,230.95L902.33,224.89L914.06,208.94L913.34,206.86hzM903.43,230.95L909.87,200.77L917.84,196.33L930.8,194.61L944.51,193.68L955.07,183.7L952.2,175.26L949.61,172.2L962.67,153.32L968.84,147.56L992.69,141.54L993.51,146.1L993.6,149.11L995.65,155.57L997.38,158.72L996.94,163.69L999.87,169.09L999.66,172.55L1000.17,173.31L1002.51,172.89z" },
];

export default function USMapBackground() {
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);
    const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 transition-all duration-300 ${isMobile ? 'pt-24' : ''}`}>
                <svg
                    viewBox="100 0 1000 750"
                    className={`w-full h-full opacity-50 transition-transform duration-500 ${isMobile ? 'scale-125 origin-top' : ''}`}
                    preserveAspectRatio={isMobile ? "xMidYMin meet" : "xMidYMid slice"}
                >
                    {/* High-Accuracy Realistic Map Backdrop */}
                    <g opacity="0.35" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="0.8" fill="none">
                        {statePaths.map((state) => (
                            <path key={state.id} d={state.d} />
                        ))}
                        {/* Mainland approximation for filler regions */}
                        <path d="M 330,60 L 980,60 L 1050,150 L 1000,350 L 950,550 L 900,650 L 800,650 L 600,680 L 400,650 L 250,600 L 150,550 L 120,400 L 150,200 Z" strokeWidth="1.2" />
                    </g>

                    {/* Logistics Routes */}
                    {routes.map((route) => {
                        const isHovered = hoveredRoute === route.id;
                        return (
                            <g key={route.id}>
                                <motion.path
                                    d={route.path}
                                    fill="none"
                                    stroke="rgba(0, 102, 255, 0.2)"
                                    strokeWidth="15"
                                    strokeLinecap="round"
                                    filter="url(#route-glow)"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1, opacity: isHovered ? 0.4 : 0.2 }}
                                    transition={{ duration: 2.5 }}
                                />
                                <motion.path
                                    d={route.path}
                                    fill="none"
                                    stroke="rgba(100, 180, 255, 0.4)"
                                    strokeWidth={isHovered ? "5" : "3"}
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    className="pointer-events-auto cursor-pointer"
                                    onMouseEnter={() => setHoveredRoute(route.id)}
                                    onMouseLeave={() => setHoveredRoute(null)}
                                />
                                {/* Data Flow Pulse */}
                                <motion.path
                                    d={route.path}
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.3)"
                                    strokeWidth="1.5"
                                    strokeDasharray="20 40"
                                    animate={{ strokeDashoffset: -1000 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Truck Animation */}
                                <g>
                                    <circle r="8" fill="rgba(0, 150, 255, 0.3)" filter="url(#truck-glow)">
                                        <animateMotion dur={`${15 + route.id * 5}s`} repeatCount="indefinite">
                                            <mpath href={`#route-${route.id}`} />
                                        </animateMotion>
                                    </circle>
                                    <circle r="3" fill="white">
                                        <animateMotion dur={`${15 + route.id * 5}s`} repeatCount="indefinite">
                                            <mpath href={`#route-${route.id}`} />
                                        </animateMotion>
                                    </circle>
                                </g>
                                <path id={`route-${route.id}`} d={route.path} fill="none" />
                            </g>
                        );
                    })}

                    {/* Nodes / Hubs */}
                    {cities.map((city, index) => {
                        const isHovered = hoveredCity === city.name;
                        const baseSize = city.size === "large" ? 12 : 8;

                        return (
                            <g key={city.name}>
                                <motion.circle
                                    cx={city.x}
                                    cy={city.y}
                                    r={isHovered ? baseSize * 4 : baseSize * 3}
                                    fill="url(#hub-radial)"
                                    filter="url(#hub-glow)"
                                    animate={{ opacity: isHovered ? 0.5 : 0.25 }}
                                />
                                <motion.circle
                                    cx={city.x}
                                    cy={city.y}
                                    r={baseSize}
                                    fill="rgba(0, 150, 255, 0.2)"
                                    stroke="rgba(255, 255, 255, 0.6)"
                                    strokeWidth="1.5"
                                    filter="url(#glass)"
                                    className="pointer-events-auto cursor-pointer"
                                    onMouseEnter={() => setHoveredCity(city.name)}
                                    onMouseLeave={() => setHoveredCity(null)}
                                    whileHover={{ scale: 1.3 }}
                                />
                                <circle cx={city.x} cy={city.y} r={baseSize * 0.4} fill="#0088FF" filter="url(#hub-glow)" />
                                <circle cx={city.x} cy={city.y} r={baseSize * 0.2} fill="white" />

                                {city.label && (
                                    <text
                                        x={city.x}
                                        y={city.y - baseSize * 2.5}
                                        textAnchor="middle"
                                        fill="rgba(255, 255, 255, 0.7)"
                                        fontSize="10"
                                        fontWeight="500"
                                        style={{ textShadow: "0 0 4px rgba(0, 0, 0, 0.8)" }}
                                    >
                                        {city.name}
                                    </text>
                                )}
                            </g>
                        );
                    })}

                    <defs>
                        <filter id="route-glow"><feGaussianBlur stdDeviation="10" /></filter>
                        <filter id="hub-glow"><feGaussianBlur stdDeviation="8" /></filter>
                        <filter id="truck-glow"><feGaussianBlur stdDeviation="4" /></filter>
                        <filter id="glass"><feGaussianBlur stdDeviation="1" /></filter>
                        <radialGradient id="hub-radial">
                            <stop offset="0%" stopColor="#0088FF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#0044FF" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
