/* 全局引入 */
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

/* 按需引入 */
import {ElButton} from 'element-plus'

/**
 * @description 手动注册 ElementPlus 组件,达到按需加载目的
 * @description Automatically register components under Button, such as Button.Group
 * @param {ReturnType<typeof createApp>} app 整个应用的实例
 * @returns void
 */
export default function loadComponents(app:any) {
    app.use(ElButton)
}
