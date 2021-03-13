/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
  },
};
