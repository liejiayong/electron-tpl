import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './languages'

console.log('i18n message',messages())

const i18n = createI18n({
  fallbackLocale: 'ch',
  globalInjection:true,
  legacy: false, // you must specify 'legacy: false' option
  locale: 'zh',
  messages:messages(),
});

export default i18n
