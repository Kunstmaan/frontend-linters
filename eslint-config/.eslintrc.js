const OFF = 0;
const WARN = 1;
const ERROR = 2;

const INDENTATION_SIZE = 4;

module.exports = {
    extends: [
        'airbnb-base',
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

        // Import Rules
        'import/extensions': [ERROR, 'never'],
        'import/prefer-default-export': OFF
    }
}
