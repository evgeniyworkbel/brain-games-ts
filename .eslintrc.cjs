/* eslint-env node */
module.exports = {
    extends: [
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
      }]    
    },
};
