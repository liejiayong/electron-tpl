import { RouteRecordRaw } from 'vue-router';
import Layout from '@/Layouts/index.vue';
import Empty from '@/Layouts/empty.vue';

export const asyncRouter: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('@/views/index/index.vue'),
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'home',
      affix: true,
    },
  },
  {
    path: '/news',
    redirect: 'noRedirect',
    name: 'NewsManagement',
    meta: { title: '新闻管理', icon: 'users-cog', permissions: ['admin'], alwaysShow: true },
    component: Empty,
    children: [
      {
        path: 'notice',
        name: 'NewsNotices',
        component: { template: `() => import('@/views/news/notices')` },
        meta: { title: '公告管理' },
      },
    ],
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'AdminIndex',
    meta: {
      title: '首页',
      icon: 'home',
      affix: true,
    },
    children: asyncRouter,
  },
  {
    path: '/login',
    component: () => import('@/views/auth/login.vue'),
    name: 'LoginIndex',
    meta: {
      title: '登录页',
    },
  },
];

export default routes;
