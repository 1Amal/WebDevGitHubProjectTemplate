import eslint from "@eslint/js";

export default [
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

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
