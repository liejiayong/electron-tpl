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
					<router-view></router-view>
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
}
</style>
