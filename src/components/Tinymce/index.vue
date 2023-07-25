<template>
	<div :class="{ fullscreen: fullscreen }" class="tinymce-container" :style="{ width: containerWidth }">
		<textarea :id="tinymceId" class="tinymce-textarea" />
		<div class="editor-custom-btn-container">
			<editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK" />
		</div>
	</div>
</template>

<script setup>
import { onBeforeMount, onMounted, onActivated, onDeactivated, reactive, computed, watch, $nextTick } from "vue";
import plugins from "./plugins";
import toolbar from "./toolbar";
import load from "./dynamicLoadScript";

// why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
const tinymceCDN = "./tinymce/js/tinymce/tinymce.min.js";

const props = defineProps({
	id: {
		type: String,
		default: function () {
			return "vue-tinymce-" + +new Date() + ((Math.random() * 1000).toFixed(0) + "");
		},
	},
	value: {
		type: String,
		default: "",
	},
	toolbar: {
		type: Array,
		required: false,
		default() {
			return [];
		},
	},
	menubar: {
		type: String,
		default: "file edit insert view format table",
	},
	height: {
		type: [Number, String],
		required: false,
		default: 360,
	},
	width: {
		type: [Number, String],
		required: false,
		default: "auto",
	},
});
const state = reactive({
	hasChange: false,
	hasInit: false,
	tinymceId: props.id,
	fullscreen: false,
	languageTypeList: {
		en: "en",
		zh: "zh_CN",
		es: "es_MX",
		ja: "ja",
	},
});
const containerWidth = computed(() => {
	const width = props.width;
	if (/^[\d]+(\.[\d]+)?$/.test(width)) {
		// matches `100`, `'100'`
		return `${width}px`;
	}
	return width;
});
watch(
	() => props.value,
	() => {
		if (!state.hasChange && state.hasInit) {
			$nextTick(() => window.tinymce.get(state.tinymceId).setContent(val || ""));
		}
	}
);

onMounted(() => {
	this.init();
});
onActivated(() => {
	if (window.tinymce) {
		initTinymce();
	}
});
onDeactivated(() => {
	destroyTinymce();
});
onBeforeMount(() => {
	destroyTinymce();
});

function init() {
	// dynamic load tinymce from cdn
	load(tinymceCDN, (err) => {
		if (err) {
			this.$message.error(err.message);
			return;
		}
		initTinymce();
	});
}
function initTinymce() {
	window.tinymce.init({
		selector: `#${state.tinymceId}`,
		language: state.languageTypeList["en"],
		height: props.height,
		body_class: "panel-body ",
		object_resizing: false,
		toolbar: props.toolbar.length > 0 ? props.toolbar : toolbar,
		menubar: props.menubar,
		plugins: plugins,
		end_container_on_empty_block: true,
		powerpaste_word_import: "clean",
		code_dialog_height: 450,
		code_dialog_width: 1000,
		advlist_bullet_styles: "square",
		advlist_number_styles: "default",
		imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
		default_link_target: "_blank",
		link_title: false,
		nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
		init_instance_callback: (editor) => {
			if (props.value) {
				editor.setContent(props.value);
			}
			state.hasInit = true;
			editor.on("NodeChange Change KeyUp SetContent", () => {
				this.hasChange = true;
				this.$emit("input", editor.getContent());
			});
		},
		setup(editor) {
			editor.on("FullscreenStateChanged", (e) => {
				state.fullscreen = e.state;
			});
		},
		// it will try to keep these URLs intact
		// https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/
		// https://stackoverflow.com/questions/5196205/disable-tinymce-absolute-to-relative-url-conversions
		convert_urls: false,
		// 整合七牛上传
		// images_dataimg_filter(img) {
		//   setTimeout(() => {
		//     const $image = $(img);
		//     $image.removeAttr('width');
		//     $image.removeAttr('height');
		//     if ($image[0].height && $image[0].width) {
		//       $image.attr('data-wscntype', 'image');
		//       $image.attr('data-wscnh', $image[0].height);
		//       $image.attr('data-wscnw', $image[0].width);
		//       $image.addClass('wscnph');
		//     }
		//   }, 0);
		//   return img
		// },
		// images_upload_handler(blobInfo, success, failure, progress) {
		//   progress(0);
		//   const token = _this.$store.getters.token;
		//   getToken(token).then(response => {
		//     const url = response.data.qiniu_url;
		//     const formData = new FormData();
		//     formData.append('token', response.data.qiniu_token);
		//     formData.append('key', response.data.qiniu_key);
		//     formData.append('file', blobInfo.blob(), url);
		//     upload(formData).then(() => {
		//       success(url);
		//       progress(100);
		//     })
		//   }).catch(err => {
		//     failure('出现未知问题，刷新页面，或者联系程序员')
		//     console.log(err);
		//   });
		// },
	});
}
function destroyTinymce() {
	const tinymce = window.tinymce.get(state.tinymceId);
	if (state.fullscreen) {
		tinymce.execCommand("mceFullScreen");
	}

	if (tinymce) {
		tinymce.destroy();
	}
}
function setContent(value) {
	window.tinymce.get(state.tinymceId).setContent(value);
}
function getContent() {
	window.tinymce.get(state.tinymceId).getContent();
}
function imageSuccessCBK(arr) {
	arr.forEach((v) => window.tinymce.get(state.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`));
}
</script>

<style lang="scss" scoped>
.tinymce-container {
	position: relative;
	line-height: normal;
}

.tinymce-container {
	:deep(.mce-fullscreen) {
		z-index: 10000;
	}
}

.tinymce-textarea {
	visibility: hidden;
	z-index: -1;
}

.editor-custom-btn-container {
	position: absolute;
	right: 4px;
	top: 4px;
	/*z-index: 2005;*/
}

.fullscreen .editor-custom-btn-container {
	z-index: 10000;
	position: fixed;
}

.editor-upload-btn {
	display: inline-block;
}
</style>
