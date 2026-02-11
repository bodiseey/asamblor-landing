import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    			'dotted-grid': 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 2px, transparent 0)',
    			'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
    			shine: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)'
    		},
    		backgroundSize: {
    			'dotted-grid': '30px 30px'
    		},
    		fontFamily: {
    			playfair: [
    				'var(--font-playfair)',
    				'serif'
    			]
    		},
    		keyframes: {
    			appear: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			fadeInUp: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					transform: 'translateY(-20px)'
    				}
    			},
    			shimmer: {
    				'0%': {
    					backgroundPosition: '200% 0'
    				},
    				'100%': {
    					backgroundPosition: '-200% 0'
    				}
    			},
    			sway3d: {
    				'0%, 100%': {
    					transform: 'rotate3d(1, 1, 1, 0deg)'
    				},
    				'50%': {
    					transform: 'rotate3d(1, 1, 1, 5deg)'
    				}
    			},
    			pill: {
    				'0%, 100%': {
    					transform: 'scale(1)'
    				},
    				'50%': {
    					transform: 'scale(1.05)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			appear: 'appear 300ms ease-out forwards',
    			fadeInUp: 'fadeInUp 0.8s ease-out forwards',
    			float: 'float 6s ease-in-out infinite',
    			shimmer: 'shimmer 8s infinite linear',
    			sway3d: 'sway3d 5s ease-in-out infinite',
    			pill: 'pill 3s ease-in-out infinite',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			action: {
    				DEFAULT: '#8B5CF6',
    				hover: '#7C3AED'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			asamblor: {
    				text: '#ffffff',
    				subtext: '#94A3B8',
    				border: 'rgba(255,255,255,0.08)',
    				bg: '#050505',
    				blue: '#0066FF'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
