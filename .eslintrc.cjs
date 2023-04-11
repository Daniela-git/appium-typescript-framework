module.exports = {
  extends: ["plugin:wdio/recommended", 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'wdio'],
  root: true,
};
