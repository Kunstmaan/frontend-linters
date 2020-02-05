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
        '@kunstmaan/eslint-config'
    ],
    rules: {
        // React Rules
        'react/jsx-filename-extension': [ERROR, { extensions: ['.jsx', '.tsx'] }],

        // Typescript Rules
        /** "explicit-function-return-type" can be off for apps, but should be on for libraries! */
        // '@typescript-eslint/explicit-function-return-type': [OFF],
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
        '@typescript-eslint/interface-name-prefix': [ERROR, 'always'],
        '@typescript-eslint/no-use-before-define': [ERROR, { functions: false, classes: true }],
        // '@typescript-eslint/no-object-literal-type-assertion': [ERROR, {
        //     allowAsParameter: true,
        // }],
    }
}
