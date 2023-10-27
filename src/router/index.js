import * as VueRouter from "vue-router";
import { constantRoutes } from "./routes";
import useStore from "@/store";

const routesWhiteList = ["/login", "/register", "/404", "/401"];
const isDev = ["dev", "development"].includes(import.meta.env.MODE);
const routes = [...constantRoutes];

const createRouter = () =>
	new VueRouter.createRouter({
		history: isDev ? VueRouter.createWebHashHistory() : VueRouter.createWebHistory(), // require service support
		scrollBehavior: () => ({ y: 0 }),
		routes,
	});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher; // reset router
}

const router = createRouter();

router.beforeResolve(async (to, from, next) => {
	const store = useStore();
	const hasToken = store.user.token;
	console.log("router before", store, to);
	if (hasToken) {
		if (to.name === "AuthLogin") {
			next({ path: "/" });
		} else {
			next();
		}
	} else {
		if (routesWhiteList.includes(to.path)) {
			next();
		} else {
			next({ name: "AuthLogin", query: { redirect: to.path } });
		}
	}
	next();
});

export default router;
