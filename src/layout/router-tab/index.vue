<template>
	<div class="lie__tab">
		<div class="lie__tab__title">
			<el-tabs v-model="curTab" type="card" class="demo-tabs" closable @tab-remove="onRemoveTab">
				<el-tab-pane v-for="item in menus" :key="item.name" :label="item.name" :name="item.path"> </el-tab-pane
			></el-tabs>
		</div>
		<div class="lie__tab__extra">
			<el-dropdown @command="onTabCommand">
				<span class="el-dropdown-link">
					<el-icon><arrow-down /></el-icon>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="cur">关 闭 当 前</el-dropdown-item>
						<el-dropdown-item command="other">关 闭 其 他</el-dropdown-item>
						<el-dropdown-item command="all">关 闭 全 部</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const curMenu = ref({});
const menus = ref([]);
// test
menus.value = Array(30)
	.fill({
		path: "n",
		name: "n1",
		meta: { title: "n" },
	})
	.map((v, i) => ({
		path: v.path + i,
		name: v.name + i,
		meta: { title: v.meta.title + i },
	}));

const curTab = ref();
function onRemoveTab() {}
function onTabCommand(type) {
	switch (type) {
		case "cur":
			break;
		case "other":
			break;
		case "all":
			break;

		default:
			break;
	}
}

onMounted(() => {});
</script>
<style lang="scss" scoped>
.lie__tab {
	position: relative;
	margin: 0 auto;
	background-color: white;

	// title
	&__title {
		padding: 0 40px 0 0;
		position: relative;
		left: 0;
		height: var(--base-main-tabs-height);
		white-space: nowrap;
		font-size: 0;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		transition: all 0.2s;
		-webkit-transition: all 0.2s;
		border: 1px solid whitesmoke;
	}
	&__extra {
		position: absolute;
		top: 0px;
		right: 0;
		height: 40px;
		line-height: 40px;
		width: 40px;
		text-align: center;
	}
	.el-dropdown-link {
		display: block;
		height: 40px;
		line-height: 40px;
		width: 40px;
		cursor: pointer;
	}
}
</style>
