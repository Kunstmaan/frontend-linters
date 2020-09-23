const OFF = 0;
const WARN = 1;
const ERROR = 2;

const INDENTATION_SIZE = 4;

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        '@kunstmaan/eslint-config',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        // Fix no-use-before-define rule
        // see: https://github.com/typescript-eslint/typescript-eslint/issues/2502#issuecomment-689595020
        'no-use-before-define': [OFF],
        '@typescript-eslint/no-use-before-define': [ERROR],
        'no-shadow': [OFF],
        '@typescript-eslint/no-shadow': ["error", { ignoreTypeValueShadow: true }],
        'no-undef': [OFF],
        'no-unused-vars': [OFF],
        '@typescript-eslint/no-unused-vars': [ERROR, { vars: 'all', args: 'none', ignoreRestSiblings: true }],

        // React Rules
        'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],

        // Typescript Rules
        /** 'explicit-function-return-type' can be off for apps, but should be on for libraries! */
        '@typescript-eslint/explicit-function-return-type': [OFF],
        '@typescript-eslint/explicit-module-boundary-types': [OFF],
        '@typescript-eslint/indent': [ERROR, INDENTATION_SIZE, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 'first', body: 1 },
            FunctionExpression: { parameters: 'first', body: 1 },
            CallExpression: { arguments: 'first' },
            ArrayExpression: 'first',
            ObjectExpression: 'first',
            ImportDeclaration: 'first',
            flatTernaryExpressions: false,
        }],
        '@typescript-eslint/naming-convention': [ERROR, {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
                regex: '^I[A-Z]',
                match: true,
            }
        }],
        '@typescript-eslint/no-use-before-define': [ERROR, { functions: false, classes: true }],
    }
}
