module.exports = {
    root: true,
    ignorePatterns: ['dist', '.next'],
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:@next/next/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'react-hooks',
        'react-refresh',
        'import',
        'prettier',
    ],
    rules: {
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
                warnOnUnsortedImports: true,
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
                    { pattern: '@src/**', group: 'internal' },
                ],
                pathGroupsExcludedImportTypes: ['internal', 'react'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'prettier/prettier': 'error',
        'no-inline-comments': 'error',
        '@next/next/no-img-element': 'warn',
        '@next/next/no-html-link-for-pages': 'warn',
    },
};
