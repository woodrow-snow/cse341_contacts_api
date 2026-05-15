import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
//   { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
// ]);

export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "error"
    }
  },

  prettierConfig
]);