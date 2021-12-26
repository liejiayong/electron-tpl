module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript',
    'vue-global-api',
    '@vue/typescript/recommended',

    '@vue/prettier/@typescript-eslint',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    // sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // https://eslint.vuejs.org/user-guide/#faq
    // Enable vue/script-setup-uses-vars rule
    'vue/script-setup-uses-vars': 'error',
  },
};
