import { createApp } from 'vue';

/* 全局引入 */
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
// import * as ElIconAll from '@element-plus/icons';
// /* icon components */
// for (const iconName in ElIconAll) {
//   app.component(iconName, ElIconAll[iconName]);
// }

/* 按需引入 */
import { UserFilled, Lock, View } from '@element-plus/icons-vue';
import { ElIcon, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu, ElForm, ElInput, ElSelect } from 'element-plus';

/**
 * @description 手动注册 ElementPlus 组件,达到按需加载目的
 * @description Automatically register components under Button, such as Button.Group
 * @param {ReturnType<typeof createApp>} app 整个应用的实例
 * @returns void
 */
export default function loadComponents(app: ReturnType<typeof createApp>): void {
  // element icon
  app.config.globalProperties.$icon = { UserFilled, Lock, View };

  /* element components */
  app
    .use(ElButton)
    .use(ElDropdown)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElIcon)
    .use(ElForm)
    .use(ElInput)
    .use(ElSelect);
}
