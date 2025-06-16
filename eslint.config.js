// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import next from '@next/eslint-plugin-next';

export default tsEslint.config({ ignores: ['dist'] }, {
    extends: [
        js.configs.recommended,
        ...tsEslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
    },
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        import: importPlugin,
        prettier,
        '@next/next': next,
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        '@typescript-eslint/no-namespace': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'sort-imports': [
            'error',
            { ignoreCase: true, ignoreDeclarationSort: true },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    ['external', 'builtin'],
                    'internal',
                    ['sibling', 'parent'],
                    'index',
                ],
                pathGroups: [
                    {
                        pattern: '@(react|react-native)',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@src/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['internal', 'react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'prettier/prettier': 'error',
        'no-inline-comments': 'error',
    },
}, storybook.configs["flat/recommended"]);
