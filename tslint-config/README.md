# Kunstmaan TSLint

## Usage

```
npm install @kunstmaan/tslint-config --save-dev
```

Update your `tslint.json` file:

```json
{
  "extends": ["./node_modules/@kunstmaan/tslint-config/tslint.json"],
  "rules": {

  }
}
```

You can add overwrites inside the `rules` section.

## TypeScript Rules

For TypeScript we extend the [AirBnB styleguide](https://github.com/airbnb/javascript) with some exceptions.

Basically, we use the same ruleset as we do for JavaScript, Start off by reading the AirBnB styleguide, and [our JavaScript rules](../eslint-config). There are no specific gotcha's for TypeScript, for now...

## React-specific Rules

For our React rules we also extend the Palantir's [TSLint React Preset](https://github.com/palantir/tslint-react), and supplement this with exceptions and overwrites to get the same result as we do in our ESLint config.
