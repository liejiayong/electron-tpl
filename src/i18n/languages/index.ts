/**
 * @description: 加载所有语言文件
 * @author: liejiayong(809206619@qq.com)
 * @Date: 2021-11-29 16:15:29
 */

interface langObj {
    [key:string]:any
}

const lang:langObj={}
export default function localLanguages(){
    const files = require.context("./", false, /([a-z_]+)\.ts$/i)
    
    const language = files.keys().filter(key=>{
        if (!key.includes('index.ts')){return key}
    }).reduce((acc,key)=>{
        const name:string = key.replace(/(.*\/)*([_-\w]+)(\.ts)*$/,'$2') ||'',
        message:Object = files(key).default
        acc[name]=message
        return acc
    },lang)

return language
}
