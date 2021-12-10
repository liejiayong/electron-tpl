import { createApp } from 'vue';
import ipcRenderer from './icpRender';
import 'vue-global-api';

/**
 * @description 加载全局变量
 * @param  {ReturnType<typeof createApp>} app 获取函数返回值的类型
 * @returns void
 */
export default function loadGlobal(app: ReturnType<typeof createApp>): void {
  /* icpRender */
  app.config.globalProperties.$uIpc = ipcRenderer;
}
