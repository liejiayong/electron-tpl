<script>
import { h } from "vue";
import SvgIcon from "@/components/icon/svg-icon.vue";
export default {
	name: "MenuItem",
	props: {
		icon: {
			type: String,
			default: "",
		},
		title: {
			type: String,
			default: "",
		},
	},
	render(props) {
		const { icon, title } = props;
		const vnodes = [];
		console.log("props", icon, title);
		if (icon) {
			if (icon.includes("el-icon")) {
				vnodes.push(h("i", { className: [icon, "el-icon"] }));
			} else {
				vnodes.push(h(SvgIcon, { name: icon, className: "el-icon" }));
			}
		}

		if (title) {
			// vnodes.push(`<span v-slot="title">${title}</span>`);
			vnodes.push(h("span", null, { default: () => [title] }));
		}
		// console.log(vnodes, "vnodes");
		return vnodes;
	},
};
</script>

<style scoped>
.sub-el-icon {
	margin-right: 5px;
	width: 1em;
	height: 1em;
	color: currentColor;
}
</style>
