<template>
	<component :is="type" v-bind="linkProps(props.to)">
		<slot />
	</component>
</template>

<script setup>
import { computed } from "vue";
import { isExternal } from "@/utils/validate";

const props = defineProps({
	to: {
		type: String,
		required: true,
	},
});
const isExternalURL = computed(() => isExternal(props.to));
const type = computed(() => {
	if (isExternalURL.value) {
		return "a";
	}
	return "router-link";
});
function linkProps(to) {
	if (isExternalURL.value) {
		return {
			href: to,
			target: "_blank",
			rel: "noopener",
		};
	}
	return {
		to: to,
	};
}
</script>
<style></style>
