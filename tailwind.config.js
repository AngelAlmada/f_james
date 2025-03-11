/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Archivos de React y TypeScript
  ],
  theme: {
    extend: {
      fontFamily: {
        trajanus: ["trajanus", "serif"]
      },
      screens: {
        'xs': '380px',       // 📱 iPhone 14 Pro (390x850)
        'custom-md': '480px', // 📱 Pixel 7 Pro (480x1040)
        'custom-lg': '430px',
        'custom-llg': '770px', // 📱 iPhone 14 Pro Max (430x930)
        'custom-xl': '890px', // 📱 iPad Air 5 (820x1080)
        'custom-xc': '1024px',
        'custom-xs': '1100px',
        'custom-xxl': '1520px',
      },
    },
  },
  plugins: [],
};
