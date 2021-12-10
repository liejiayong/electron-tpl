module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript', 'vue-global-api'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    // sourceType: 'module', // Allows for the use of imports
  },
  rules: {},
};
