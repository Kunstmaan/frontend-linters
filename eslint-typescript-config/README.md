# Kunstmaan ESLint for TypeScript

## Usage

```
npm install @kunstmaan/eslint-typescript-config --save-dev
```

Update your `.eslintrc` file:

```json
overrides: [
  {
    "files": ['*.ts', '*.tsx'],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": ["./node_modules/@kunstmaan/eslint-typescript-config/index.js"],
    "rules": {

    }
  }
]
```

You can add overrides inside the `rules` section.

## Rules

See the [@kunstmaan/eslint-config styleguide](https://github.com/Kunstmaan/frontend-linters/blob/master/eslint-config/README.md#javascript-rules).
