module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'vue-global-api',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'plugin:@typescript-eslint/recommended', // 使用@ typescript-eslint / eslint-plugin中的推荐规则
    'prettier/@typescript-eslint', // 使用eslint-config-prettier禁用一些与Prettier冲突的ESLint规则
    'plugin:prettier/recommended', // 启用eslint-plugin-prettier和eslint-config-prettier，使编辑器显示错误提示，确保这项是扩展数组中的最后一个配置
  ],
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parser: 'vue-eslint-parser',
  parserOptions: {
    // https://stackoverflow.com/questions/66518163/vue3-typescript-and-eslint-raise-parsing-error-expected
    // parser: require.resolve('@typescript-eslint/parser'),
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    // cmaFeatures: {
    //   jsx: true,
    // },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // https://eslint.vuejs.org/user-guide/#faq
    // Enable vue/script-setup-uses-vars rule
    'vue/script-setup-uses-vars': 'error',
    // 放置ESLint规则的位置。可用于覆盖从扩展配置中指定的规则
    // 例如 "@typescript-eslint/explicit-function-return-type": "off",
  },
};
