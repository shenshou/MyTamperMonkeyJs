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
      // Empty catches are intentional where a fallback is explicitly optional.
      "no-empty": ["error", { allowEmptyCatch: true }],
      // Existing scripts are linted without forcing a broad cleanup refactor.
      "no-unused-vars": "warn",
    },
  },
];
