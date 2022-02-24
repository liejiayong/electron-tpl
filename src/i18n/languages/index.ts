/**
 * @description: 加载所有语言文件
 * @author: liejiayong(809206619@qq.com)
 * @Date: 2021-11-29 16:15:29
 */

interface KV {
  [key: string]: string | number;
}
interface langMsg {
  message: KV;
}
export interface langObj {
  [key: string]: langMsg;
}

export default function localLanguages(): any {
  const files = require.context('./', true, /(?<!index)\.ts$/);
  const language = files.keys().reduce<langObj>((acc, key) => {
    const name: string = key.replace(/(.*\/)*([_-\w]+)(\.ts)*$/, '$2') || '',
      message: langMsg = files(key).default;
    acc[name] = message;
    return acc;
  }, {});

  return language;
}
