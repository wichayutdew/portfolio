import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import type { Linter } from 'eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'build'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ...js.configs.recommended,
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@eslint-react': eslintReact as unknown as Linter.Plugin,
      'react-hooks': reactHooks as unknown as Linter.Plugin,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...(eslintReact.configs.recommended.rules as Linter.RulesRecord),
      ...(reactHooks.configs.recommended.rules as Linter.RulesRecord),
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json: json as unknown as Linter.Plugin },
    language: 'json/json',
    rules: { ...(json.configs.recommended.rules as Linter.RulesRecord) },
  },
  {
    files: ['**/*.jsonc', 'tsconfig.json'],
    plugins: { json: json as unknown as Linter.Plugin },
    language: 'json/jsonc',
    rules: { ...(json.configs.recommended.rules as Linter.RulesRecord) },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown: markdown as unknown as Linter.Plugin },
    language: 'markdown/gfm',
    rules: { ...(markdown.configs.recommended.rules as Linter.RulesRecord) },
  },
  {
    files: ['**/*.css'],
    plugins: { css: css as unknown as Linter.Plugin },
    language: 'css/css',
    rules: { ...(css.configs.recommended.rules as Linter.RulesRecord) },
  },
);
