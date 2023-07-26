<template>
	<div class="container">
		<Editor></Editor>
	</div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Editor from "@/components/Tinymce/index.vue";
</script>
<style lang="scss" scoped>
.container {
}
</style>
