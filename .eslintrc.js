module.exports = {
    env: {
        browser: true, // Enables browser globals like window and document.
        node: true, // Enables Node.js global variables and Node.js scoping.
        es6: true, // Enables ES6 syntax.
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:prettier/recommended', // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['import'],
    rules: {
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': [
            0,
            { html: 'ignore', custom: 'ignore', explicitSpread: 'ignore' },
        ],
        'react-hooks/exhaustive-deps': 0,
        'import/no-unresolved': 'error', // Turn on errors for missing imports.
        'import/prefer-default-export': 0,
        'import/order': [
            2,
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'always',
            },
        ],
        'import/newline-after-import': 1,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                labelComponents: ['label'],
            },
        ],
    },
    settings: {
        'import/resolver': {
            alias: [
                ['@/components', './src/components'],
                ['@/constants', './src/constants'],
                ['@/containers', './src/containers'],
                ['@/contexts', './src/contexts'],
                ['@/hocs', './src/hocs'],
                ['@/libs', './src/libs'],
                ['@/styles', './src/styles'],
            ],
        },
    },
};
