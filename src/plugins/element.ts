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
import {
  UserFilled,
  Lock,
  View,
  Operation,
  HomeFilled,
  FullScreen,
  Refresh,
  RefreshLeft,
  RefreshRight,
  MagicStick,
  ArrowDown,
  DArrowLeft,
  DArrowRight,
} from '@element-plus/icons-vue';
import {
  ElCol,
  ElRow,
  ElIcon,
  ElButton,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElInput,
  ElSelect,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElColorPicker,
  ElAffix,
  ElDrawer,
  ElLoading,
  ElDialog,
  ElNotification,
  ElMessage,
  ElMessageBox,
} from 'element-plus';
import 'element-plus/theme-chalk/display.css';

/**
 * @description 手动注册 ElementPlus 组件,达到按需加载目的
 * @description Automatically register components under Button, such as Button.Group
 * @param {ReturnType<typeof createApp>} app 整个应用的实例
 * @returns void
 */
export default function loadComponents(app: ReturnType<typeof createApp>): void {
  // element icon
  app.config.globalProperties.$icon = {
    UserFilled,
    Lock,
    View,
    Operation,
    HomeFilled,
    FullScreen,
    Refresh,
    RefreshLeft,
    RefreshRight,
    MagicStick,
    ArrowDown,
    DArrowLeft,
    DArrowRight,
  };

  /* element components */
  app
    .use(ElCol)
    .use(ElRow)
    .use(ElButton)
    .use(ElDropdown)
    .use(ElDropdownItem)
    .use(ElDropdownMenu)
    .use(ElIcon)
    .use(ElForm)
    .use(ElInput)
    .use(ElSelect)
    .use(ElRadio)
    .use(ElRadioButton)
    .use(ElRadioGroup)
    .use(ElColorPicker)
    .use(ElAffix)
    .use(ElDrawer)
    .use(ElLoading)
    .use(ElDialog)
    .use(ElNotification)
    .use(ElMessage)
    .use(ElMessageBox);
  // app.config.globalProperties.$notify({
  //   title: 'Info',
  //   message: 'This is an info message',
  //   type: 'info',
  // });
  console.log(app.config.globalProperties);
}
