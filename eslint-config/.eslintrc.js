const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const INDENTATION_SIZE = 4;

module.exports = {
    extends: ['airbnb'],
    rules: {
        // Javascript Rules
        'indent': [
            WARNING,
            INDENTATION_SIZE,
            { 'SwitchCase': 1 }
        ],
        'max-len': [
            ERROR,
            120
        ],
        'no-console': OFF,
        'no-use-before-define': [
            ERROR,
            {
                'functions': false,
                'classes': true
            }
        ],
        'arrow-parens': [
            ERROR,
            'always'
        ],
        'no-plusplus': [
            ERROR,
            {
                'allowForLoopAfterthoughts': true
            }
        ],

        // React Rules
        'react/jsx-indent': [
            ERROR,
            INDENTATION_SIZE
        ],
        'react/jsx-indent-props': [
            ERROR,
            INDENTATION_SIZE
        ],
        'react/prop-types': OFF,
        'react/sort-comp': [ERROR, {
            order: [
                'static-methods',
                'instance-variables',
                'render',
                'lifecycle',
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
          }
        ],

        // Import Rules
        'import/extensions': [
            ERROR,
            'never'
        ],
        'import/prefer-default-export': OFF
    }
}
