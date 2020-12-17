module.exports = {
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": 1,
    "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
    "no-warning-comments": ["warn", { "terms": ["fixme"] }],
    "semi": "warn",
    "quotes": "error",
    "no-unreachable": "warn",
    "object-shorthand": "warn",
    "no-case-declarations": "warn",
    "no-useless-escape": "warn",
    "no-prototype-builtins": "warn"
  }
}
