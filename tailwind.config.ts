// import type { Config } from "tailwindcss";

// const config: Config = {
 
// };
// export default config;

import { withUt } from "uploadthing/tw";
 
export default withUt({
  // Your existing Tailwind config

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colours: {
        accent: "#0989ff",
        topHeadingPrimary: "#010f1c",
        topHeadingSecondary: "#021d35",
        pink: "#fd4b4b",
      }, 
      container: {
        center: true,
        padding: "15px",
      }
    },
  },
  plugins: [],
  
});
