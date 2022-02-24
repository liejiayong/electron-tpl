import { createApp } from 'vue';
import i18n from '@/i18n';

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeof createApp>} app 获取函数返回值的类型
 * @returns void
 */
export default function loadPlugins(app: ReturnType<typeof createApp>): void {
  const files = require.context('./', true, /(?<!index)\.ts$/);
  files.keys().forEach((key) => {
    if (typeof files(key).default === 'function') {
      files(key).default(app);
    }
  });

  /* 国际化 */
  app.use(i18n);
}
