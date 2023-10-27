<template>
	<div :class="[miniCls]" class="sidebar-cont">
		<el-aside>
			<!-- <div class="logo"><img src="@/assets/logo.png" alt="" /></div> -->
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				:collapse="isCollapse"
				background-color="#28333e"
				text-color="#858b92"
				active-text-color="#fff"
				@open="handleOpen"
				@close="handleClose"
			>
				<sidebar-item v-for="route in menuRoutes" :key="route.path" :item="route" :base-path="route.path" />
			</el-menu>
		</el-aside>
	</div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { constantRoutes as menuRoutes } from "@/router/routes.js";
import SidebarItem from "./SidebarItem.vue";
import useStore from "@/store";
const store = useStore();
const isCollapse = computed(() => !store.app.sidebar.opened);
const miniCls = computed(() => {
	return isCollapse.value ? "is__mini" : "";
});
console.log("menuRoutes", menuRoutes);
function handleOpen() {}
function handleClose() {}
</script>
<style lang="scss" scoped>
.sidebar-cont {
	position: relative;
	width: var(--el-aside-width, 300px);
	flex: none;
	height: 100vh;
	overflow: hidden;
	transition: width 0.3s ease-in-out;
	&.is__mini {
		width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
		:deep(.el-menu-item) {
			span {
				opacity: 0;
				visibility: hidden;
			}
		}
	}
	:deep(.el-aside) {
		height: 100%;
	}
	:deep(.el-menu) {
		min-height: 100%;
		.el-sub-menu {
			&.is-opened {
				.el-sub-menu__title {
					color: #fff;
				}
			}
			&.is-active {
			}
		}
		.el-menu-item {
			&.is-active {
				background-color: var(--el-menu-hover-bg-color);
			}
		}
		.el-sub-menu__title {
			padding-right: 0;
		}
	}
	.logo {
		margin: 0 auto;
		width: 60px;
		img {
			display: block;
			width: 100%;
		}
	}
}
</style>
