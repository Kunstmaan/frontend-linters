# Kunstmaan ESLint for React

## Usage

```
npm install @kunstmaan/eslint-react-config --save-dev
```

Update your `.eslintrc` file:

```json
{
  "extends": ["./node_modules/@kunstmaan/eslint-react-config/index.js"],
  "rules": {

  }
}
```

You can add overrides inside the `rules` section.

## JavaScript Rules

For JavaScript we extend the [AirBnB styleguide](https://github.com/airbnb/javascript) with some exceptions.

#### Custom Rules

`indent`: For code indentation we use 4 spaces
* **Why?** 2 spaces is a relic from callback hell - 4 is more readable and generally is the standard in other languages.

`max-len`: For max-length we use 120 characters
* **Why?** Because we think this is the fine line where you can write concise and readable one-line functions while still encouraging you to write readable code.

`no-console`: Console functionality is allowed
* **Why?** Whilst being able to debug with tools other than `console.log` is important, having one in your code should not prevent a build.

`func-style`: We **don't** follow Airbnb's rule about function definition, prefer the usage of `function` if possible
* **Why?** Using `function` allows us to write out code in a certain way (will be elaborated on in the next rule), and allows you to explicitely discern functions from variables. NOTE: Callbacks should be arrow functions, and if you need `this` binding for any reason there is no rule against arrow functions.

`no-use-before-define`: We **don't** follow Airbnb's rule about function definition before invocation
* **Why?** Code is more readable when you can define your 'top level' functions (functions that will delegate their logic to other functions) above, and define 'detail' functions below. This way your code will make sense chronologically and you be able to consistently easily navigate your files. (This is applicable only to `function`, and not to `class`).

`arrow-parens`: We enforce parenthesis around **every** parameter in arrow functions, even if the function only has 1.
* **Why?** This will allow for more consistent syntax regardless of the # of arguments a function takes, aswell as consistency with TypeScript where typed arguments **need** to have parenthesis around them.

`import/extensions`: We don't allow you to specify the extensions of imports
* **Why?** Your build should be properly configured to handle whatever extensions you need.

`import/prefer-default-export`: We don't prefer defaults exports.
* **Why?** Default exports have more potential to lead to trouble with intellisense, and refactoring of code (renaming your imports is not a good idea).

## React-specific Rules

For our React rules we also extend the [AirBnB react styleguide](https://github.com/airbnb/javascript/tree/master/react), again with several exceptions which we will elaborate on.

#### Custom Rules

`react/jsx-indent`: For jsx indentation we use 4 spaces
* **Why?** Consistency with our other indentation.

`react/jsx-indent-props`: For jsx prop indentation we use 4 spaces
* **Why?** Consistency with our other indentation.

`react/prop-types`: Using propTypes is not mandatory
* **Why?** Runtime validation using propTypes is only useful during development. Unless creating a component library/extensively reused components the time invested in using propTypes is not worth it.

`react/sort-comp`: For ordering component data we first put the static methods / variables followed by the instance variables, render method, lifecycle methods and any other method.
* **Why?** We consider the render method to be more important so we like to have it first. We also want to see the instance variables before any other instance method.
