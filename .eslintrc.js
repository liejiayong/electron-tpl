module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript',
    'vue-global-api',
    // '@vue/eslint-config-prettier', // ESLint: Error while loading rule 'prettier/prettier': context.getPhysicalFilename is not a function Occurred while linting E:\tanwan-file\electron-tpl\vue.config.js. Please see the 'ESLint' output channel for details.
    '@vue/typescript/recommended',

    // '@vue/prettier/@typescript-eslint',
    // '@vue/prettier',

    // 'plugin:@typescript-eslint/recommended', // 使用@ typescript-eslint / eslint-plugin中的推荐规则
    // 'prettier/@typescript-eslint', // 使用eslint-config-prettier禁用一些与Prettier冲突的ESLint规则
    // 'plugin:prettier/recommended', // 启用eslint-plugin-prettier和eslint-config-prettier，使编辑器显示错误提示，确保这项是扩展数组中的最后一个配置
  ],
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  // parser: 'vue-eslint-parser',
  parserOptions: {
    // https://stackoverflow.com/questions/66518163/vue3-typescript-and-eslint-raise-parsing-error-expected
    parser: require.resolve('@typescript-eslint/parser'),
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    // sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // https://eslint.vuejs.org/user-guide/#faq
    // Enable vue/script-setup-uses-vars rule
    'vue/script-setup-uses-vars': 'error',
    // 放置ESLint规则的位置。可用于覆盖从扩展配置中指定的规则
    // 例如 "@typescript-eslint/explicit-function-return-type": "off",
  },
};
