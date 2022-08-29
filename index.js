module.exports = {
    extends: ['./rules/base', './rules/typescript', './rules/karma', './rules/angular', './rules/angular-a11y.js'].map(
        require.resolve
    ),
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                args: 'after-used'
            }
        ]
    }
};
