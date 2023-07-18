import Layout from "@/layout/index.vue";
// import routesAuth from "./modules/auth.js";
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    groupName: 'groupName'       group name for children
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    elIcon: @element-plus/icons-vue plugins icon first
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
	// ...routesAuth,
	{
		path: "/",
		component: Layout,
		redirect: { name: "Dashboard" },
		meta: { title: "工作空间", icon: "dashboard", _elIcon: "location" },
		children: [
			{
				path: "dashboard",
				name: "Dashboard",
				component: () => import("@/views/dashboard/index.vue"),
				meta: { title: "控制后台", icon: "dashboard", elIcon: "location" },
			},
		],
	},
	// {
	// 	path: "/page",
	// 	component: Layout,
	// 	meta: { title: "常用页面", icon: "form" },
	// 	children: [
	// 		{
	// 			path: "login",
	// 			name: "login",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "登录页面", icon: "form" },
	// 		},
	// 		{
	// 			path: "space",
	// 			name: "Space",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "空白页面", icon: "form" },
	// 		},
	// 		{
	// 			path: "success",
	// 			name: "Success",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "成功页面", icon: "form" },
	// 		},
	// 		{
	// 			path: "fail",
	// 			name: "Fail",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "失败页面", icon: "form" },
	// 		},
	// 	],
	// },
	// {
	// 	path: "/form",
	// 	component: Layout,
	// 	meta: { title: "系统管理", icon: "form" },
	// 	children: [
	// 		{
	// 			path: "account",
	// 			name: "SysAccount",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "用户管理", icon: "form" },
	// 		},
	// 		{
	// 			path: "role",
	// 			name: "SysRole",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "角色管理", icon: "form" },
	// 		},
	// 		{
	// 			path: "authority",
	// 			name: "SysAuthority",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "权限管理", icon: "form" },
	// 		},
	// 		{
	// 			path: "dep",
	// 			name: "SysDep",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "部门管理", icon: "form" },
	// 		},
	// 		{
	// 			path: "behavior",
	// 			name: "SysBehavior",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "行为管理", icon: "form" },
	// 		},
	// 		{
	// 			path: "dict",
	// 			name: "SysDict",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "数据字典", icon: "form" },
	// 		},
	// 	],
	// },
	// {
	// 	path: "/form",
	// 	component: Layout,
	// 	meta: { title: "表单管理", icon: "form" },
	// 	children: [
	// 		{
	// 			path: "index",
	// 			name: "Form",
	// 			component: () => import("@/layout/template.vue"),
	// 			meta: { title: "Form", icon: "form" },
	// 		},
	// 	],
	// },
	// {
	// 	path: "/nested",
	// 	component: Layout,
	// 	redirect: "/nested/menu1",
	// 	name: "Nested",
	// 	meta: {
	// 		title: "Nested",
	// 		icon: "nested",
	// 	},
	// 	children: [
	// 		{
	// 			path: "menu1",
	// 			component: () => import("@/layout/template.vue"),
	// 			name: "Menu1",
	// 			meta: { title: "Menu1" },
	// 		},
	// 		{
	// 			path: "menu2",
	// 			component: () => import("@/layout/template.vue"),
	// 			name: "Menu2",
	// 			meta: { title: "menu2" },
	// 		},
	// 		{
	// 			path: "cycsub1",
	// 			name: "Cycsub1",
	// 			component: () => import("@/views/dashboard/index.vue"),
	// 			meta: { title: "循环子菜单1", icon: "dashboard" },
	// 			children: [
	// 				{
	// 					path: "cycsub2",
	// 					name: "Cycsub2",
	// 					component: () => import("@/views/dashboard/index.vue"),
	// 					meta: { title: "循环子菜单2", icon: "dashboard" },
	// 					children: [
	// 						{
	// 							path: "cycsub3",
	// 							name: "Cycsub3",
	// 							component: () => import("@/views/dashboard/index.vue"),
	// 							meta: { title: "循环子菜单3", groupName: "group1", icon: "dashboard" },
	// 						},
	// 					],
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	// {
	// 	path: "/external-link",
	// 	component: Layout,
	// 	meta: { title: "外链管理", icon: "link" },
	// 	children: [
	// 		{
	// 			path: "https://panjiachen.github.io/vue-element-admin-site/#/",
	// 			meta: { title: "External Link", icon: "link" },
	// 		},
	// 	],
	// },
	// // 404 page must be placed at the end !!!
	// { path: "/*", redirect: "/404", hidden: true },
];
