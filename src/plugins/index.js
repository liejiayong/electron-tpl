import ElementPlus from "./element-ui.js";
import SvgIcon from "@/components/Icon/svg-icon.vue";

export default function createPlugin(app) {
	ElementPlus(app);
	app.component("SvgIcon", SvgIcon);
}
