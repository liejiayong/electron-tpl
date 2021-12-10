/**
 * @description: 国际化初始化
 * @author: liejiayong(809206619@qq.com)
 * @Date: 2021-12-09 15:55:43
 */
import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
import loadLanguages from './languages';

interface langType {
  [key: string]: { label: string; value: string };
}

const langMessages = loadLanguages();
const i18n = createI18n({
  /* 暂测添加下面几个字段后不能使用 i18n.global.locale 切换语言 */
  // useScope: 'global',
  // fallbackLocale: 'ch',
  // globalInjection: true,
  // legacy: false, // you must specify 'legacy: false' option
  locale: 'zh',
  messages: langMessages,
});

/**
 * 语言名称映射
 */
export const langMap: langType = {
  zh: { label: '中文', value: 'zh' },
  en: { label: '英文', value: 'en' },
};

/**
 *
 * @param lang 语言名称 langMap[key][value]
 */
export const changeLang = (key: string) => {
  const lang: { label: string; value: string } = langMap[key];
  i18n.global.locale = lang.value;
};

export default i18n;
