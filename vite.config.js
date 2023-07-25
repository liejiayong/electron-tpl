import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// import basicSsl from "@vitejs/plugin-basic-ssl";
import electron from "vite-plugin-electron";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		hmr: true,
		// host: false,
		// https: true,
		proxy: {
			"/api": {
				target: "http://jsonplaceholder.typicode.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	plugins: [
		vue(),
		// basicSsl(),
		electron([
			{
				// Main-Process entry file of the Electron App.
				entry: "electron/main.js",
			},
			{
				entry: "electron/preload.js",
				onstart(options) {
					// Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
					// instead of restarting the entire Electron App.
					options.reload();
				},
			},
		]),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
			// 指定symbolId格式
			symbolId: "icon-[dir]-[name]",
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	build: {
		emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
	},
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./"),
			"@": path.resolve(__dirname, "src"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `$injectedColor: orange;`,
			},
		},
	},
});
