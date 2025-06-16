module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            ['bug', 'ci', 'feat', 'fix', 'refactor', 'revert', 'style', 'add'],
        ],
    },
};
