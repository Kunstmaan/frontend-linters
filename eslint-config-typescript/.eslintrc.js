module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb-typescript',
        './node_modules/@kunstmaan/eslint-config/index.js'
    ],
}
