module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended'
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-var-requires': [0],
                '@typescript-eslint/no-namespace': [0],
                '@typescript-eslint/no-empty-function': [1],
                '@typescript-eslint/no-explicit-any': [1],
                '@typescript-eslint/ban-types': [1]
            }
        },
        {
            files: ['*.jsx', '*.tsx'],
            extends: [
                'plugin:react/recommended',
                'plugin:react/jsx-runtime',
                'plugin:react-hooks/recommended'
            ],
            rules: {
                'react/no-unknown-property': ['error', {ignore: ['styleName']}]
            }
        },
        {
            files: ['*.vue'],
            extends: [
                'plugin:vue/vue3-recommended'
            ],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            },
            rules: {
                'vue/html-indent': [2, 4]
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'simple-import-sort'
    ],
    rules: {
        // 缩进
        indent: [2, 4],

        // 引号
        quotes: [2, 'single'],

        // 对象属性引号
        'quote-props': [2, 'as-needed'],

        // 对象最后一项不加,
        'comma-dangle': [2, 'never'],

        // 末尾加;
        semi: ['error', 'always'],

        // 行不允许空格
        'no-trailing-spaces': [2, {skipBlankLines: true}],

        // 大括号空格
        'object-curly-spacing': [2, 'never'],

        // 文件结尾空行
        'eol-last': [2, 'always'],

        // 空行的数量
        'no-multiple-empty-lines': [2, {max: 2, maxEOF: 1}],

        'no-case-declarations': [0],

        'no-shadow': [2],

        'no-redeclare': [2],

        'simple-import-sort/imports': [1, {
            groups: [['^node:', '^[a-zA-Z]', '^@[a-zA-Z]', '^@\\/', '^\\/', '^\\.', '^\\u0000']]
        }],

        'simple-import-sort/exports': [1]
    }
};
