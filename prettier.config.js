/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2021-05-01 22:59:37
 * @LastEditors: liejiayong(809206619@qq.com)
 * @LastEditTime: 2023-07-17 22:41:44
 * @FilePath: \electron-tpl\prettier.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const INLINE_ELEMENTS = ["img", "span", "small", "select", "strong", "sub", "sup", "textarea", "var", "b", "a", "code", "abbr", "big", "dfn"];
// docs options url: https://prettier.io/docs/en/options.html
module.exports = {
	printWidth: 150,
	tabWidth: 4 /* Specify the number of spaces per indentation-level. */,
	useTabs: true /* Indent lines with tabs instead of spaces. */,
	// Print semicolons at the ends of statements.
	semi: true,
	singleQuote: false,
	// such as, as-needed: {true: 0,0: 0,'qux-lorem': true};"consistent": 强制执行一致的引用风格需要引用对象字面值属性名称;preserve:保留用户输入
	quoteProps: "as-needed",
	jsxSingleQuote: true,
	// es5: Trailing commas where valid in ES5 (objects, arrays, etc.)
	trailingComma: "es5",
	// Print spaces between brackets in object literals. true Example: { foo: bar }.
	bracketSpacing: true,
	bracketSameLine: false,
	// This option has been deprecated in v2.4.0, use --bracket-same-line instead
	// Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
	jsxBracketSameLine: false,
	// "always" - Always include parens. Example: (x) => x
	// "avoid" - Omit parens when possible. Example: x => x
	arrowParens: "always",
	/* Range start */
	rangeStart: 0,
	rangeEnd: Infinity,
	/* Range end */
	// parser:'babylon', /* 默认不打开 */
	/*
  Specify which parser to use.
	parser: 'None'|'babel',
	Specify the file name to use to infer which parser to use.
	filepath: 'None'|<string>,
	指定某片段格式化。Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
  */
	requirePragma: false,
	// 指定某个文件已被格式化，配合requirePragma使用。Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier.
	insertPragma: false,
	// 	"always" - Wrap prose if it exceeds the print width.
	// "never" - Do not wrap prose.
	// "preserve" - Wrap prose as-is. First available in v1.9.0
	proseWrap: "preserve",
	// "css" - Respect the default value of CSS display property.
	htmlWhitespaceSensitivity: "css",
	vueIndentScriptAndStyle: false,
	endOfLine: "lf",
	// Format embedded code if Prettier can automatically identify it.
	embeddedLanguageFormatting: "auto",
	// for IDE attriubte start
	wrap_attributes: "force-aligned",
	end_with_newline: true,
	// for IDE attriubte end
	// for vue format start
	"vue/multiline-html-element-content-newline": [
		"error",
		{
			ignoreWhenEmpty: true,
			ignores: ["pre", ...INLINE_ELEMENTS],
			allowEmptyLines: false,
		},
	],
	// for vue format end
};
