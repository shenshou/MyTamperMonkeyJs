import globals from "globals";
import eslint from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**"],
  },
  eslint.configs.recommended,
  {
    files: ["scripts/**/*.user.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Existing scripts are linted without forcing a broad cleanup refactor.
      "no-unused-vars": "warn",
    },
  },
];
