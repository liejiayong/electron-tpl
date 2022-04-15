import axios from 'axios';

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $http: typeof axios;
//   }
// }

declare module '@element-plus/icons';

// declare module 'vue-router' {
//   interface RouteMeta {
//     // 是可选的
//     isAdmin?: boolean;
//     // 每个路由都必须声明
//     requiresAuth?: boolean;
//     icon?: string;
//     affix?: boolean;
//     // 标题
//     title: string;
//   }
// }
