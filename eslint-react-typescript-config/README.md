# Kunstmaan ESLint for React TypeScript

## Usage

```
npm install @kunstmaan/eslint-react-typescript-config --save-dev
```

Update your `.eslintrc` file:

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["./node_modules/@kunstmaan/eslint-react-typescript-config/index.js"],
  "rules": {

  }
}
```

You can add overrides inside the `rules` section.

## Rules

See the [@kunstmaan/eslint-config styleguide](https://github.com/Kunstmaan/frontend-linters/blob/master/eslint-config/README.md#javascript-rules).
