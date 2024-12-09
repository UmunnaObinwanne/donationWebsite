import react from "eslint-plugin-react";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  {
    plugins: { react, tailwindcss },
    files: ["**/*.{js,jsx,ts,tsx}"], // Include all relevant file types
    rules: {
      "react/react-in-jsx-scope": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/migration-from-tailwind-2": "warn",
    },
  },
];
