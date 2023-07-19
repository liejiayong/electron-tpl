import { app, BrowserWindow, session } from "electron";
import path from "path";

// The built directory structure
//
// ├─┬ dist
// │ ├─┬ electron
// │ │ ├── main.js
// │ │ └── preload.js
// │ ├── index.html
// │ ├── ...other-static-files-from-public
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, "../public");

// 本地启动的vue项目路径
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

const createWindow = () => {
	const win = new BrowserWindow({
		icon: path.join(process.env.PUBLIC, "./vite.svg"),
		webPreferences: {
			contextIsolation: true, // 是否开启隔离上下文
			nodeIntegration: true, // 渲染进程使用Node API
			preload: path.join(__dirname, "./preload.js"), // 需要引用js文件
		},
	});

	// Test active push message to Renderer-process.
	win.webContents.on("did-finish-load", () => {
		win?.webContents.send("main-process-message", new Date().toLocaleString());
	});

	// 如果打包了，渲染index.html
	console.log("process.env.DIST", process.env.DIST, "-", VITE_DEV_SERVER_URL);
	if (app.isPackaged) {
		win.loadFile(path.join(process.env.DIST, "./index.html"));
	} else {
		win.loadURL(VITE_DEV_SERVER_URL);
	}

	if (process.env.NODE_ENV === "development") {
		// Open the DevTools.
		winMain.webContents.openDevTools();
		console.log('path.resolve(process.cwd(), "./plugins/vue3devtool")', path.resolve(process.cwd(), "./plugins/vue3devtool"));
	}
};

/*eslint no-unused-vars: "error"*/
let winMain = null;
app.whenReady().then(async () => {
	// vue3 devtool
	if (process.env.NODE_ENV === "development") {
		session.defaultSession.loadExtension(path.resolve(process.cwd(), "./plugins/vue3devtool"));
	}

	winMain = createWindow(); // 创建窗口
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) winMain = createWindow();
	});
});

// 关闭窗口
app.on("window-all-closed", () => {
	winMain = null;
	if (process.platform !== "darwin") {
		app.quit();
	}
});

// require("electron").app.on("ready", () => {
// 	session.defaultSession.loadExtension(path.resolve(process.cwd(), "../plugins/vue3devtool"));
// });
