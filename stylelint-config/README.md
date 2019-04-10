# Kunstmaan StyleLint

## Usage

```
npm install @kunstmaan/stylelint-config --save-dev
```

Update your `.stylelintrc` file:
```json
{
    "extends": ["./node_modules/@kunstmaan/stylelint-config/index.js"],
    "rules": {}
}
```

You can add overrides inside the `rules` section.

## Basic rules

For our basic rules we've extended the [stylelint-standard-config](https://github.com/stylelint/stylelint-config-standard) and added the [stylelint-order](https://github.com/hudochenkov/stylelint-order) and [stylelint-scss](https://github.com/kristerkari/stylelint-scss) plugins

## Custom rules

We have done some custom extension, a lot of it to force the order of properties inside a selector.
For custom rules it's best to check the [.stylelintrc.js](./.stylelintrc.js) file.

We expect the following order of properties inside a selector.
```css
selector {
    @include
    @extend

    --custom-prop

    $dollar-vars

    content

    float
    position
    top
    right
    bottom
    left
    z-index

    display
    flex
    justify-content
    width
    height
    max-width
    max-height
    min-width
    min-height
    padding
    margin
    overflow
    transform

    background
    box-shadow
    opacity

    border
    outline

    color
    font
    line-height
    text
    white-space
    word

    list-style
    transition
    will-change
    perspective

    &:pseudo-classes {
    }

    nested-selector {
    }

    @media
}
```
