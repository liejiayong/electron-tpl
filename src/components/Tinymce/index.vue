<template>
	<editor
		ref="editorRef"
		:api-key="apiKey"
		:inline="inline"
		:init="tinyMCEOptions"
		:tag-name="tagName"
		:initial-value="initialValue"
		v-model="content"
	></editor>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { API_KEY } from "./apikey.js";
import plugins from "./plugins.js";
import toolbar from "./toolbar.js";

const languageTypeList = {
	en: "en",
	zh: "zh-Hans",
	es: "es_MX",
	ja: "ja",
};
const zhHans = new URL("./tinymce/langs/zh-Hans.js", import.meta.url).href;
const useDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isSmallScreen = window.matchMedia("(max-width: 1023.5px)").matches;

export default {
	name: "TinyMCE_Editor",
	props: {
		value: {
			type: String,
			default: `
			<h2 style="text-align: center;">
				TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.
			</h2>
			<p style="text-align: center;">
				<strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you're building, TinyMCE has got you covered.</span></span></strong>
			</p>`,
		},
		initialValue: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			tagName: "",
			apiKey: API_KEY,
			content: this.value,
			inline: false,
			tinyMCEOptions: {
				branding: false,
				language: languageTypeList["zh"],
				language_url: zhHans,
				plugins: plugins,
				toolbar: toolbar,
				menubar: "file edit view insert format tools table help",
				fontsize_formats: "10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px",
				setup: (editor) => {
					editor.ui.registry.addMenuButton("selectTags", {
						text: this.tagName.toString().toLocaleUpperCase(),
						fetch: (callback) => {
							let tags = ["h1", "h2", "h3"];
							let items = [];

							//Tag changing
							tags.forEach((tag) => {
								items.push({
									type: "menuitem",
									text: tag.toString().toLocaleUpperCase(),
									onAction: () => {
										this.tagName = tag;
									},
								});
							});
							callback(items);
						},
					});
				},
				editimage_cors_hosts: ["picsum.photos"],
				toolbar_sticky: true,
				toolbar_sticky_offset: isSmallScreen ? 102 : 108,
				autosave_ask_before_unload: true,
				autosave_interval: "30s",
				autosave_prefix: "{path}{query}-{id}-",
				autosave_restore_when_empty: false,
				autosave_retention: "2m",
				image_advtab: true,
				link_list: [
					{ title: "My page 1", value: "https://www.tiny.cloud" },
					{ title: "My page 2", value: "http://www.moxiecode.com" },
				],
				image_list: [
					{ title: "My page 1", value: "https://www.tiny.cloud" },
					{ title: "My page 2", value: "http://www.moxiecode.com" },
				],
				image_class_list: [
					{ title: "None", value: "" },
					{ title: "Some class", value: "class-name" },
				],
				importcss_append: true,
				file_picker_callback: (callback, value, meta) => {
					/* Provide file and text for the link dialog */
					if (meta.filetype === "file") {
						callback("https://www.google.com/logos/google.jpg", { text: "My text" });
					}

					/* Provide image and alt text for the image dialog */
					if (meta.filetype === "image") {
						callback("https://www.google.com/logos/google.jpg", { alt: "My alt text" });
					}

					/* Provide alternative source and posted for the media dialog */
					if (meta.filetype === "media") {
						callback("movie.mp4", { source2: "alt.ogg", poster: "https://www.google.com/logos/google.jpg" });
					}
				},
				templates: [
					{
						title: "New Table",
						description: "creates a new table",
						content:
							'<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
					},
					{ title: "Starting my story", description: "A cure for writers block", content: "Once upon a time..." },
					{
						title: "New list with dates",
						description: "New List with dates",
						content:
							'<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
					},
				],
				template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
				template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
				height: 600,
				image_caption: true,
				quickbars_selection_toolbar: "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
				noneditable_class: "mceNonEditable",
				toolbar_mode: "sliding",
				contextmenu: "link image table",
				skin: useDarkMode ? "oxide-dark" : "oxide",
				content_css: useDarkMode ? "dark" : "default",
				content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
			},
		};
	},
	watch: {
		value(newVal) {
			this.content = newVal;
		},
	},
	methods: {
		getEditor() {
			this.$refs.editorRef.getEditor();
		},
	},
	components: {
		Editor,
	},
};
</script>
