import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
	state: () => ({
		token: "",
	}),
});

export default useUserStore;
