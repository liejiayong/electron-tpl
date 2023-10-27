import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// import basicSsl from "@vitejs/plugin-basic-ssl";
import electron from "vite-plugin-electron";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";

const isProduction = process.env.NODE_ENV === "production";

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
		viteMockServe({
			ignore: /^_/,
			mockPath: "mock", // 解析根目录下的mock文件夹
			watchFiles: true, // 监视文件更改
			enabled: !isProduction, // 开发打包开关
			//supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
			// // 这样可以控制关闭mock的时候不让mock打包到最终代码内
			// injectCode: `
			//   import { setupProdMockServer } from '../mock/_createProductionServer'
			//   setupProdMockServer()
			//   `,
			logger: false, // 是否在控制台显示请求日志
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
				// additionalData: `@use "@/styles/index.scss" as *; `,
			},
		},
	},
});
