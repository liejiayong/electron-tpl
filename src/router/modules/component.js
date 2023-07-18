export default [
	{
		path: "/component",
		component: Layout,
		name: "Component",
		meta: { title: "常用组件", icon: "example" },
		children: [
			{
				path: "base",
				name: "Base",
				component: () => import("@/layout/template.vue"),
				meta: { title: "基础组件", icon: "table" },
			},
			{
				path: "advance",
				name: "Advance",
				component: () => import("@/layout/template.vue"),
				meta: { title: "进阶组件", icon: "tree" },
			},
			{
				path: "model",
				name: "Model",
				component: () => import("@/layout/template.vue"),
				meta: { title: "弹层组件", icon: "tree" },
			},
			{
				path: "advanced",
				name: "Advanced",
				component: () => import("@/layout/template.vue"),
				meta: { title: "高级组件", icon: "tree" },
			},
			{
				path: "other",
				name: "Other",
				component: () => import("@/layout/template.vue"),
				meta: { title: "其他组件", icon: "tree" },
			},
		],
	},
];
