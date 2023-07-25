<template>
	<div class="layout-cont">
		<el-container>
			<sidebar></sidebar>
			<el-container>
				<el-header>
					<headers></headers>
				</el-header>
				<el-main>
					<router-tab></router-tab>
					<div class="main-cont">
						<router-view></router-view>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import sidebar from "./sidebar/index.vue";
import headers from "./header/index.vue";
import routerTab from "./router-tab/index.vue";
</script>
<style lang="scss" scoped>
.layout-cont {
	height: 100vh;
	overflow: hidden;
	.el-header,
	.el-main {
		padding: 0;
	}
	.main-cont {
		padding: 20px;
		background: #f6f6f6;
		box-sizing: border-box;
		height: calc(100vh - 62px - var(--base-main-tabs-height));
		overflow: auto;
		& > [class*="-cont"] {
			padding: 20px;
			min-height: 100%;
			box-sizing: border-box;
			background: #fff;
		}
	}
}
</style>
