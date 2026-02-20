// eslint-disable-next-line pluginImport/no-unresolved
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

const MAX_CYCLOMATIC_COMPLEXITY = 6;
const MAX_DEPTH = 3;
const MAX_LINES_PER_FUNCTION = 50;

export default defineConfig([
  {
    ignores: ['dist/', 'node_modules/'],
  },

  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      pluginJsxA11y,
      pluginReact,
      pluginUnicorn,
      pluginImport
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: true,
      },
    },
    rules: {
      // Regras do 'eslint-plugin-import'
      'pluginImport/no-unresolved': 'error',
      'pluginImport/named': 'error',
      'pluginImport/default': 'error',
      'pluginImport/namespace': 'error',
      'pluginImport/no-duplicates': 'error',
      'pluginImport/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Regras do 'eslint-plugin-react' e 'eslint-plugin-jsx-a11y'
      'pluginReact/react-in-jsx-scope': 'off',
      'pluginReact/prop-types': 'error',
      'pluginReact/require-default-props': ['error', { forbidDefaultForRequired: true }],
      'pluginReact/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'pluginReact/self-closing-comp': 'error',
      'pluginReact/jsx-boolean-value': ['error', 'never'],
      'pluginReact/jsx-no-duplicate-props': 'error',
      'pluginReact/jsx-no-undef': 'error',
      'pluginReact/jsx-uses-react': 'error',
      'pluginReact/jsx-uses-vars': 'error',
      'pluginReact/no-deprecated': 'error',
      'pluginReact/no-direct-mutation-state': 'error',
      'pluginReact/no-find-dom-node': 'error',
      'pluginReact/no-is-mounted': 'error',
      'pluginReact/no-render-return-value': 'error',
      'pluginReact/no-string-refs': 'error',
      'pluginReact/no-unescaped-entities': 'error',
      'pluginReact/no-unknown-property': 'error',
      'pluginReact/no-unused-prop-types': 'error',
      'pluginReact/no-unused-state': 'error',
      'pluginReact/prefer-es6-class': ['error', 'always'],
      'pluginReact/prefer-stateless-function': 'error',
      'pluginReact/require-render-return': 'error',
      'pluginReact/jsx-key': 'error',
      'pluginReact/jsx-no-comment-textnodes': 'error',
      'pluginReact/jsx-no-target-blank': 'error',
      'pluginReact/jsx-pascal-case': 'error',
      'pluginReact/jsx-props-no-multi-spaces': 'error',
      'pluginReact/jsx-tag-spacing': ['off', { beforeSelfClosing: 'never' }],
      'pluginReact/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'pluginReact/jsx-sort-props': ['error', {
        shorthandFirst: true,
        noSortAlphabetically: false
      }],

      // Regras do ESLint (JavaScript geral)
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
      'no-console': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'eqeqeq': ['error', 'always', { null: 'ignore' }],

      // Regras de Formatação e Complexidade
      'max-len': ['error', { code: 100 }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      ],
      'complexity': ['error', MAX_CYCLOMATIC_COMPLEXITY],
      'max-depth': ['error', MAX_DEPTH],
      'max-lines-per-function': ['error', {
        max: MAX_LINES_PER_FUNCTION,
        skipBlankLines: true,
        skipComments: true
      }],

      // Regras do 'eslint-plugin-unicorn'
      'pluginUnicorn/filename-case': ['off', { case: 'kebabCase' }],
      'pluginUnicorn/prevent-abbreviations': 'off',
      'pluginUnicorn/no-null': 'off',
      'pluginUnicorn/no-useless-undefined': 'error',
      'pluginUnicorn/explicit-length-check': 'error',
    },
  },
]);