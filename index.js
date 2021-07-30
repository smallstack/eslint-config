module.exports = {
  "plugins": ["@typescript-eslint", "rxjs"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": ["warn", {
      "overrides": {
        "constructors": "off"
      },
      "accessibility": "explicit"
    }],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-floating-promises": 1,
    "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
    "rxjs/no-nested-subscribe": "warn",
    "rxjs/no-ignored-subscription": "warn",
    "no-console": "warn",
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
