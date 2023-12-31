/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slidein: {
          "0%": { marginTop: "100%", width: '100%', opacity: '75%'},
          "50%": { opacity: '50%'},
          "75%": { opacity: '25%'},
          "100%": { marginTop: "0%", width: '100%', opacity: '25%'},
        },
        headerSlidein: {
          "0%": { marginLeft: "100%", width: '100%'},
          "100%": { marginLeft: "0%", width: '100%'},
        },
        headerSlideinLeft: {
          "0%": { marginLeft: "100%", width: '100%'},
          "100%": { marginLeft: "0%", width: '100%'},
        },
        showButton: {
          "0%": { display: "hidden", width: '100%', opacity: '0'},
          "25%": { display: "block", width: '100%', opacity: '0.25'},
          "50%": { display: "block", width: '100%', opacity: '0.5'},
          "75%": { display: "block", width: '100%', opacity: '0.75'},
          "100%": { display: "block%", width: '100%', opacity: '1'},
        },
   
      },
      animation: {
        slidein: "slidein 1s ease-in-out",
        headerSlidein: "headerSlidein 1s ease-in-out",
        headerSlideinLeft: "headerSlideinLeft 1s ease-in-out",
        showButton: "showButton 1s ease-in",
        
      },
    },
  },
  plugins: [],
};
