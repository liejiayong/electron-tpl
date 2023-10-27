import { defineStore } from "pinia";
import { getUserInfo } from "@/api/user";
import toAwait from "@/utils/to-await";
import localStorage from "@/utils/storage";
import { useRouter, useRoute } from "vue-router";

const useUserStore = defineStore("user", {
	state: () => ({
		token: localStorage.getItem("token") || "",
		user: {},
	}),
	actions: {
		async login() {
			const routes = useRoute();
			const router = useRouter();

			const [err, res] = await toAwait(getUserInfo());

			if (err) {
				return;
			}

			this.token = res.data.token;
			this.user = res.data.user;
			localStorage.setItem("token", this.token);
			console.log("login res", res);

			const redirect = routes.query.redirect || "";
			const routerPath = ["/404", "/401", "/login"].includes(redirect) ? "/" : redirect || "/";
			console.log("login nav to page:", redirect, routerPath);
			await router.push(routerPath);
		},
		logout() {
			this.token = "";
			this.user = "";
			localStorage.removeItem("token");
		},
	},
});

export default useUserStore;
