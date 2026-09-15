import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      ".next/**",
      "out/**",
      ".nuxt/**",
      ".svelte-kit/**",
      ".cache/**",
      ".parcel-cache/**",
      ".vite/**",
    ],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  {
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
);
