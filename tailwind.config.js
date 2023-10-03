/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#96b5dd",
      
"secondary": "#2d7503",
      
"accent": "#e0aaef",
      
"neutral": "#231d25",
      
"base-100": "#3e3c5d",
      
"info": "#3f5de4",
      
"success": "#0d685e",
      
"warning": "#f9b76c",
      
"error": "#ec5146",
      },
    },
  ],
  plugins: [require("daisyui")],
}

