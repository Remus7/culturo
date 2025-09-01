module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--bg-primary)",
          text: "var(--text-white)"
        },
        secondary: {
          background: "var(--bg-secondary)",
          text: "var(--text-secondary)"
        },
        accent: {
          background: "var(--bg-accent)",
          purple: "var(--bg-purple)",
          lightblue: "var(--bg-lightblue)",
          green: "var(--bg-green)"
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)"
        },
        text: {
          primary: "var(--text-white)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          input: "var(--text-input)"
        },
        lightblue: "var(--bg-lightblue)"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif']
      }
    }
  },
  plugins: []
};