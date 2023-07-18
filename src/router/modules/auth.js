export default [
	{
		path: "/login",
		name: "AuthLogin",
		component: () => import("@/views/auth/login.vue"),
		hidden: true,
		meta: { title: "登录页", icon: "" },
	},

	{
		path: "/404",
		name: "Auth404",
		component: () => import("@/views/auth/404.vue"),
		hidden: true,
		meta: { title: "404", icon: "" },
	},
];
