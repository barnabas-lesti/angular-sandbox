// @ts-check

import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import angularEslint from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJSDoc from "eslint-plugin-jsdoc";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import typescriptEslint from "typescript-eslint";

const PROJECT_ID = "@ate";
const IGNORE_FILE_PATH = path.resolve(process.cwd(), ".lintignore");

export default typescriptEslint.config(
  { ignores: includeIgnoreFile(IGNORE_FILE_PATH).ignores },
  {
    files: ["**/*.js", "**/*.ts"],
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unused-imports": eslintPluginUnusedImports,
      "jsdoc": eslintPluginJSDoc,
    },
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...typescriptEslint.configs.stylistic,
      ...angularEslint.configs.tsRecommended,
      eslintPluginJSDoc.configs["flat/recommended-typescript"],
    ],
    processor: angularEslint.processInlineTemplates,
    rules: {
      // https://eslint.org/docs/latest/rules/
      "eol-last": ["error", "always"],
      "default-param-last": ["error"],
      "no-trailing-spaces": ["error"],
      "arrow-spacing": ["error"],
      "prefer-const": ["error"],
      "no-console": ["error", { allow: ["debug", "warn", "error"] }],
      "no-restricted-syntax": [
        "error",
        { selector: "MethodDefinition[kind='set']", message: "Property setters are not allowed." },
        { selector: "MethodDefinition[kind='get']", message: "Property getters are not allowed." },
      ],

      // https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules
      "jsdoc/require-jsdoc": "off",
      "jsdoc/check-tag-names": "off",

      // https://typescript-eslint.io/rules
      // "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-empty-function": ["error", { allow: ["private-constructors"] }],

      // https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin/docs/rules
      "@angular-eslint/component-class-suffix": ["error", { suffixes: ["Component", "Container", "Page", "Modal"] }],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      // https://github.com/lydell/eslint-plugin-simple-import-sort
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^@?\\w"], [`^${PROJECT_ID}?\\w`], ["^\\./", "^\\.\\./"], ["^/"], ["^.+\\.(css|scss)([?].*)?$"]],
        },
      ],
      "simple-import-sort/exports": "error",

      // https://github.com/sweepline/eslint-plugin-unused-imports
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angularEslint.configs.templateRecommended, ...angularEslint.configs.templateAccessibility],
    rules: {
      // https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template/docs/rules
      "@angular-eslint/template/prefer-self-closing-tags": "error",
    },
  },
  eslintConfigPrettier,
);
