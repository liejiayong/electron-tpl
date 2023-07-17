import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import electron from "vite-plugin-electron";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
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
	],
	build: {
		emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
	},
});
