module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bridge: "url('/images/generic/bridge.jpg')",
        // portrait:
        //   "linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(255,255,255,1)), url('/images/portrait/SY_0022-bw-removedbg.png')",
        portrait: "url('/images/portrait/SY_0022-bw.jpg')",
      },
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
