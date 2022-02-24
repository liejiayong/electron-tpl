/**
 * @description: 国际化初始化
 * @author: liejiayong(809206619@qq.com)
 * @Date: 2021-12-09 15:55:43
 */
import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
import localLanguages from './languages';

interface LangType {
  label: string;
  value: string;
}
export interface LangMap {
  en: LangType;
  zh: LangType;
}

const i18n = createI18n({
  /* 暂测添加下面几个字段后不能使用 i18n.global.locale 切换语言 */
  // useScope: 'global',
  // fallbackLocale: 'ch',
  // globalInjection: true,
  // legacy: false, // you must specify 'legacy: false' option
  locale: 'zh',
  messages: localLanguages(),
});

/**
 * 语言名称映射
 */
export const langMap: LangMap = {
  zh: { label: '中文', value: 'zh' },
  en: { label: '英文', value: 'en' },
};

/**
 *
 * @param lang 语言名称 langMap[key][value]
 */
export const changeLang = (key: keyof LangMap): LangType => {
  i18n.global.locale = key;
  return langMap[key];
};

export default i18n;
