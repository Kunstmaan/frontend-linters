module.exports = {
    "plugins": [
        "stylelint-order",
        "stylelint-scss"
    ],
    "extends": "stylelint-config-standard",
    "rules": {
        "indentation": 4,
        "max-empty-lines": 2,
        "comment-empty-line-before": null,
        "color-named": "never",
        "number-leading-zero": "never",
        "length-zero-no-unit": true,
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-properties": true,
        "declaration-empty-line-before": null,
        "selector-list-comma-newline-after": "always",
        "block-opening-brace-space-before": "always",
        "block-closing-brace-newline-after": [
            "always", {
                "ignoreAtRules": ["if", "else"]
            }
        ],
        "at-rule-empty-line-before": null,
        "selector-pseudo-element-colon-notation": "single",
        "selector-pseudo-class-no-unknown": [true, {
            "ignorePseudoClasses": ["global"]
        }],
        "color-hex-case": "upper",
        "color-hex-length": "long",
        "block-no-empty": null,
        "rule-empty-line-before": [
            "always-multi-line", {
                "except": ["first-nested"],
                "ignore": ["after-comment"]
            }
        ],
        "at-rule-no-unknown": null,
        "max-nesting-depth": 7,
        "no-descending-specificity": null,
        "order/order": [
            {
                "type": "at-rule",
                "name": "extend"
            },
            {
                "type": "at-rule",
                "name": "include",
                "hasBlock": false
            },
            "custom-properties",
            "dollar-variables",
            "declarations",
            {
                "type": "rule",
                "selector": /^&:[\w-]+$/,
            },
            "rules",
            {
                "type": "at-rule",
                "name": "media"
            }
        ],
        "order/properties-order": [
            {
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "content"
                ]
            },
            {
                "groupName": "Position",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "order": "flexible",
                "properties": [
                    "float",
                    "position",
                    "top",
                    "right",
                    "bottom",
                    "left",
                    "z-index"
                ]
            },
            {
                "groupName": "Box Model",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "order": "flexible",
                "properties": [
                    "display",
                    "flex",
                    "flex-basis",
                    "flex-direction",
                    "flex-grow",
                    "flex-shrink",
                    "flex-wrap",
                    "justify-content",
                    "align-items",
                    "align-content",
                    "align-self",
                    "width",
                    "height",
                    "max-width",
                    "max-height",
                    "min-width",
                    "min-height",
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left",
                    "margin",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "overflow",
                    "transform",
                    "transform-origin"
                ]
            },
            {
                "groupName": "Visual Box",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "order": "flexible",
                "properties": [
                    "background",
                    "background-attachment",
                    "background-blend-mode",
                    "background-clip",
                    "background-color",
                    "background-image",
                    "background-origin",
                    "background-position",
                    "background-repeat",
                    "background-size",
                    "box-shadow",
                    "opacity"
                ]
            },
            {
                "groupName": "Border",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "order": "flexible",
                "properties": [
                    "border",
                    "border-block-end",
                    "border-block-end-color",
                    "border-block-end-style",
                    "border-block-end-width",
                    "border-block-start",
                    "border-block-start-color",
                    "border-block-start-style",
                    "border-block-start-width",
                    "border-bottom",
                    "border-bottom-color",
                    "border-bottom-left-radius",
                    "border-bottom-right-radius",
                    "border-bottom-style",
                    "border-bottom-width",
                    "border-collapse",
                    "border-color",
                    "border-image",
                    "border-image-outset",
                    "border-image-repeat",
                    "border-image-slice",
                    "border-image-source",
                    "border-image-width",
                    "border-inline-end",
                    "border-inline-end-color",
                    "border-inline-end-style",
                    "border-inline-end-width",
                    "border-inline-start",
                    "border-inline-start-color",
                    "border-inline-start-style",
                    "border-inline-start-width",
                    "border-left",
                    "border-left-color",
                    "border-left-style",
                    "border-left-width",
                    "border-radius",
                    "border-right",
                    "border-right-color",
                    "border-right-style",
                    "border-right-width",
                    "border-spacing",
                    "border-style",
                    "border-top",
                    "border-top-color",
                    "border-top-left-radius",
                    "border-top-right-radius",
                    "border-top-style",
                    "border-top-width",
                    "border-width",
                    "outline",
                    "outline-color",
                    "outline-offset",
                    "outline-style",
                    "outline-width"
                ]
            },
            {
                "groupName": "Typography",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "order": "flexible",
                "properties": [
                    "color",
                    "font-family",
                    "font-size",
                    "font-style",
                    "font-variant",
                    "font-weight",
                    "line-height",
                    "text-align",
                    "text-decoration",
                    "text-transform",
                    "vertical-align",
                    "white-space",
                    "word-break",
                    "word-wrap"
                ]
            },
            {
                "groupName": "Misc",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "order": "flexible",
                "properties": [
                    "list-style",
                    "transition",
                    "will-change",
                    "perspective"
                ]
            }
        ],
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-named-arguments": "always",
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-colon-newline-after": "always-multi-line",
        "scss/dollar-variable-colon-space-after": "at-least-one-space",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/declaration-nested-properties": "never",
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/no-duplicate-dollar-variables": [,
            { "ignoreInsideAtRules": ["if", "mixin"] }
        ]
    }
}
