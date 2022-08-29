module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            plugins: ['rxjs'],
            extends: ['plugin:rxjs/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                project: ['./tsconfig.*?.json'],
                sourceType: 'module'
            }
        }
    ]
};
