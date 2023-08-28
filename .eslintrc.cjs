/* eslint-env node */
module.exports = {
    extends: [
      'airbnb',
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
    root: true,
    rules: {
      "indent": ["error", 4, { "SwitchCase": 1 }],
      "object-curly-newline": ["error", { "minProperties": 9, "consistent": true }],
      "max-len": ["error", { "code": 110, "ignoreStrings": true, "ignoreComments": true }],
      "no-console": "off",
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "import/order": ["error", {
        "groups": [
          ["builtin", "external"],
          ["internal", "parent", "sibling"],
          "index",
          "object",
          "type",
          "unknown"
        ],
        "warnOnUnassignedImports": true,
      }],
      "import/prefer-default-export": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
    },
};
