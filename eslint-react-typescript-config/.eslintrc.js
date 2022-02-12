const OFF = 0;
const WARN = 1;
const ERROR = 2;

const INDENTATION_SIZE = 4;

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        // Javascript Rules
        'arrow-parens': [ERROR, 'always'],
        'function-paren-newline': [ERROR, 'consistent'],
        'implicit-arrow-linebreak': [OFF],
        indent: [WARN, INDENTATION_SIZE, { SwitchCase: 1 }],
        'max-len': [ERROR, 120],
        'no-console': [OFF],
        'no-nested-ternary': [OFF],
        'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
        'no-unused-expressions': [ERROR, { allowShortCircuit: true, allowTernary: true }],
        'no-unused-vars': [ERROR, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        'object-curly-newline': [OFF],
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc', // for reduce accumulators
                'accumulator', // for reduce accumulators
                'e', // for e.returnvalue
                'staticContext', // for ReactRouter context
                'state', // for Redux toolkit reducer,
            ],
        }],

        // JSX Rules
        'jsx-a11y/label-has-for': [OFF],
        'jsx-a11y/label-has-associated-control': [OFF, {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'either',
            depth: 3,
        }],

        // React Rules
        'react/destructuring-assignment': [OFF],
        'react/jsx-indent': [ERROR, INDENTATION_SIZE],
        'react/jsx-indent-props': [ERROR, INDENTATION_SIZE],
        'react/prop-types': [OFF],
        'react/jsx-props-no-spreading': [OFF],
        'react/require-default-props': [OFF],
        'react/no-unstable-nested-components': [ERROR, {
            allowAsProps: true,
        }],
        'react/sort-comp': [ERROR, {
            order: [
                'static-variables',
                'static-methods',
                'instance-variables',
                'lifecycle',
                'render',
                'everything-else',
            ],
            groups: {
                lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'state',
                    'getInitialState',
                    'getChildContext',
                    'getDerivedStateFromProps',
                    'componentWillMount',
                    'UNSAFE_componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillUpdate',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount'
                ]
            }
        }],

        // Import Rules
        'import/extensions': [ERROR, 'never'],
        'import/prefer-default-export': [OFF],

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
            ignoredNodes: ['TSTypeParameterInstantiation'],
        }],
        '@typescript-eslint/naming-convention': [ERROR, {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
                regex: '^I[A-Z]',
                match: true,
            },
        }],
        '@typescript-eslint/no-use-before-define': [ERROR, {
            functions: false,
            classes: true,
        }],
    }
}
