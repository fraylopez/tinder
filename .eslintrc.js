const { isJSDoc } = require("typescript");

module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
    "jest": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint"
  ],
  "ignorePatterns": [
    "node_modules/",
    "dist",
    "*.js",
  ],
  "rules": {
    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": ["variable", "function"],
        "format": ["camelCase", "PascalCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/member-delimiter-style": "off",
    "max-classes-per-file": [
      "error",
      1
    ],
    "no-multiple-empty-lines": [1, {"max": 1, "maxEOF": 0}],
    "max-len": ["error", { "code": 120, "ignoreStrings": true, "ignoreRegExpLiterals": true }],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "warn",
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-new-wrappers": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "radix": "error",
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "jsdoc-format": true,
          "no-reference-import": true
        }
      }
    ],
  }
};
