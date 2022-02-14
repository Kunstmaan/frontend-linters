const OFF = 0;
const WARN = 1;
const ERROR = 2;

const INDENTATION_SIZE = 4;

module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:import/recommended',
    ],
    rules: {
        // Javascript Rules
        'arrow-parens': [ERROR, 'always'],
        'function-paren-newline': [ERROR, 'consistent'],
        'implicit-arrow-linebreak': [OFF],
        indent: [WARN, INDENTATION_SIZE, { SwitchCase: 1 }],
        'max-len': [ERROR, 120],
        'no-console': OFF,
        'no-nested-ternary': [OFF],
        'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
        'no-unused-expressions': [ERROR, { allowShortCircuit: true, allowTernary: true }],
        'no-unused-vars': [ERROR, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        'no-use-before-define': [ERROR, { functions: false, classes: true }],
        'object-curly-newline': [OFF],

        // JSX Rules
        'jsx-a11y/label-has-for': [OFF],

        // React Rules
        'react/destructuring-assignment': [OFF],
        'react/jsx-indent': [ERROR, INDENTATION_SIZE],
        'react/jsx-indent-props': [ERROR, INDENTATION_SIZE],
        'react/prop-types': OFF,
        'react/require-default-props': OFF,
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
        'import/prefer-default-export': OFF
    }
}
