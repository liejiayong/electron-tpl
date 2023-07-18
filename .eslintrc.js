module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:prettier/recommended", // eslint-config-prettier
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"vue",
		"prettier", // eslint-plugin-prettier
	],
	rules: {
		"prettier/prettier": "error", // 开启规则
	},
};
