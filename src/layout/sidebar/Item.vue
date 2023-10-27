<script>
import { h } from "vue";
import SvgIcon from "@/components/Icon/svg-icon.vue";
import { ElIcon } from "element-plus";
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
		if (icon) {
			let ico = null;
			if (icon.includes("el-icon")) {
				ico = h("i", { className: [icon, "el-icon"] });
			} else {
				ico = h(SvgIcon, { name: icon, className: "el-icon" });
			}
			const menuIco = h(ElIcon, { className: "menu__icon" }, ico);
			vnodes.push(menuIco);
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

<style>
.sub-el-icon {
	margin-right: 5px;
	width: 1em;
	height: 1em;
	color: currentColor;
}
.menu__icon {
	margin-right: 1em;
	min-width: 1.25em;
	.el-icon {
		margin: 0;
		font-size: inherit;
	}
}
</style>
