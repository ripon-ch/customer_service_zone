/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            colors: {
                border: "#e5e7eb", // gray-200
                input: "#e5e7eb", // same as border
                ring: "#0f172a", // slate-900
                background: "#ffffff", // white
                foreground: "#0f172a", // slate-900
                primary: {
                    DEFAULT: "#1f2937", // gray-800
                    foreground: "#f9fafb" // gray-50
                },
                secondary: {
                    DEFAULT: "#f3f4f6", // gray-100
                    foreground: "#1f2937" // gray-800
                },
                destructive: {
                    DEFAULT: "#ef4444", // red-500
                    foreground: "#f9fafb" // gray-50
                },
                muted: {
                    DEFAULT: "#f3f4f6", // gray-100
                    foreground: "#6b7280" // gray-500
                },
                accent: {
                    DEFAULT: "#f3f4f6", // gray-100
                    foreground: "#1f2937" // gray-800
                },
                popover: {
                    DEFAULT: "#ffffff", // white
                    foreground: "#0f172a" // slate-900
                },
                card: {
                    DEFAULT: "#ffffff", // white
                    foreground: "#0f172a" // slate-900
                },
                sidebar: {
                    DEFAULT: "#fafafa", // light background
                    foreground: "#3f3f46", // zinc-700
                    primary: "#1e293b", // slate-800
                    "primary-foreground": "#fafafa", // zinc-100
                    accent: "#f4f4f5", // zinc-100
                    "accent-foreground": "#1e293b", // slate-800
                    border: "#e0e7ff", // indigo-100
                    ring: "#3b82f6" // blue-500
                },
                brand: {
                    start: "#845ef7", // hsl(266 85% 61%)
                    mid: "#5c7cfa", // hsl(230 85% 64%)
                    end: "#38d9a9" // hsl(158 64% 52%)
                }
            },
            borderRadius: {
                lg: "0.5rem", // 8px
                md: "0.375rem", // 6px (8px - 2px)
                sm: "0.25rem" // 4px (8px - 4px)
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" } // only exception kept (plugin-specific)
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out"
            }
        }
    },
    plugins: [require("daisyui")]
};
