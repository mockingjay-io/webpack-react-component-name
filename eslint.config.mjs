import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {ignores: ["examples/*", "dist/*", "coverage/*", "test/resources/*"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {
    files: [
      "test/**"
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      }
    }
  },
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];