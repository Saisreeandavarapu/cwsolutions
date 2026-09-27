/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          dark: '#0B1623',           // Primary Dark (#0B1623)
          darker: '#08101A',         // Deepest Dark
          navy: '#102235',           // Deep Navy (#102235)
          steel: '#2567A8',          // Industrial Blue (#2567A8)
          'steel-hover': '#1F558C',  // Industrial Blue Hover
          'steel-bright': '#1687E8', // Bright Blue Accent (#1687E8)
          'steel-light': '#EAF4FC',  // Soft Blue (#EAF4FC)
          amber: '#2567A8',          // Preserved alias to Industrial Blue
          yellow: '#2567A8',         // Preserved alias to Industrial Blue
          'yellow-hover': '#1F558C',
          'yellow-light': '#EAF4FC',
          bg: '#FFFFFF',             // Pure White (#FFFFFF)
          'bg-subtle': '#F7F8FA',    // Off White (#F7F8FA)
          'bg-muted': '#EFF2F5',
          border: '#D9E0E7',         // Border (#D9E0E7)
          'border-dark': '#BCC7D3',
          graphite: '#1F2933',       // Graphite (#1F2933)
          text: '#0B1623',           // Typography
          'text-muted': '#667085',   // Muted Text (#667085)
          'text-subtle': '#8E9AA8',  // Secondary Subdued Text
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'industrial': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'industrial-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
