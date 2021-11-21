import {createApp}from 'vue'
import i18n from '@/i18n'

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 * @returns void
 */
export default function loadPlugins(app: ReturnType<typeof createApp>):void{
    const files = require.context('.',true,/'.ts$/)
    files.keys().forEach(key=>{
        if (typeof files(key).default==='function'){
            if (key!=='index.ts') files(key).default(app)
        }
    })

    /* 国际化 */
    app.use(i18n)
}
