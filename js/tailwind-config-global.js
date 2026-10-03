tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#871C1C",
          gold: "#FFD700",
        },
        philo: {
          // Backgrounds
          burgundy: "#3A0505",
          crimson: "#650707",
          vnRed: "#8B0000",
          brightCrimson: "#B00000",
          blackBurgundy: "#140303",
          dark: "#140303",
          deepBurgundy: "#0D0101",

          // Gold family
          gold: "#FFD34E",
          warmGold: "#D9A62E",
          antiqueGold: "#D9A62E",
          darkGold: "#A87A00",
          lightGold: "#FFE9A0",
          champagne: "#F5D98A",
          blackBurgundyGold: "#C4920A",

          // Text / Surface
          ivory: "#FFF4DC",
          cream: "#FFF8E1",
          warmIvory: "#FFF1D6",
          muted: "#D9BFA5",

          // UI elements
          cardBg: "rgba(58, 5, 5, 0.78)",
          overlay: "rgba(20, 3, 3, 0.85)",
        },
        background: {
          light: "#FFF4DC",
          dark: "#140303",
        }
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        "heading-academy": ["'Lora'", "serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        cinematic: "var(--shadow-cinematic)",
        gold: "var(--shadow-gold-glow)",
        "gold-hover": "var(--shadow-gold-glow-hover)",
        "gold-lg": "0 0 40px rgba(255, 211, 78, 0.35)",
        "card": "0 20px 60px rgba(0,0,0,0.4)",
        "card-hover": "0 30px 80px rgba(0,0,0,0.5), 0 0 30px rgba(217,166,46,0.2)",
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      backgroundImage: {
        "philo-gradient": "linear-gradient(135deg, #3A0505 0%, #650707 50%, #3A0505 100%)",
        "gold-gradient": "linear-gradient(90deg, #D9A62E 0%, #FFD34E 50%, #D9A62E 100%)",
        "hero-gradient": "linear-gradient(180deg, rgba(20,3,3,0) 0%, rgba(20,3,3,0.8) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(58,5,5,0.9) 0%, rgba(101,7,7,0.7) 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-in": "slideIn 0.3s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255, 211, 78, 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(255, 211, 78, 0.5)" },
        },
      },
    },
  },
};
