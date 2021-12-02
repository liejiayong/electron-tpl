import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import loadLanguages from './languages'

const langMessages = loadLanguages()
const langMap = Object.keys(langMessages).reduce((ret,acc)=>{
  return ret[acc]=acc
},{})

const i18n = createI18n({
  fallbackLocale: 'ch',
  globalInjection:true,
  legacy: false, // you must specify 'legacy: false' option
  locale: 'zh',
  messages:langMessages,
});

console.log('i18n message Obj',langMessages,i18n)

// export const changeLang = (lang:string)=>{
//   i18n.locale=langMap[lang]
// }

export default i18n
