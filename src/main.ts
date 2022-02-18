import { createApp } from 'vue';
import loadGlobal from '@/utils/global';
import loadPlugins from '@/plugins';
import router from '@/router/index';
import App from './App.vue';

/** 将全局静态配置注入到应用中,可以通过 this.a读取,比 provide 和 inject 手动注入更方便  */
const app: ReturnType<typeof createApp> = createApp(App);

loadGlobal(app);
loadPlugins(app);

app.use(router).mount('#app');
