// const fPromies = import.meta.glob("@/store/modules/*.js");

// const mod = {};
// for (const url in fPromies) {
// 	const key = url.match(/\\?([-_a-zA-Z]+)\.js$/)[1];
// 	const _module = await fPromies[url]();
// 	mod[key] = _module.default();
// }

import useUserStore from "./modules/user.js";
import useAppStore from "./modules/app.js";

const useStore = () => ({
	user: useUserStore(),
	app: useAppStore(),
});

export default useStore;
