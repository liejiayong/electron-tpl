interface langObj {
    [key:string]:any
}

const lang:langObj={}

export default function localLanguages(){
    const files = require.context("./", false, /([a-z_]+)\.ts$/i)
    console.log('language files', files.keys())
    
    const language = files.keys().filter(key=>{
        if (!key.includes('index.ts')){return key}
    }).reduce((acc,key)=>{
        const name:string = key.replace(/([-_1-9a-zA-Z])\.ts$/,'$1') ||'',
        message:Object = files(key).default
        acc[name]=message
        return acc
    },lang)
    console.log('language files', language)

return language
}
