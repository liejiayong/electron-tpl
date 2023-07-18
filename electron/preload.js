/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 *
  预加载可以访问window和document
 */

const { contextBridge, ipcRenderer, ipcMain } = require("electron");

contextBridge.exposeInMainWorld("versions", {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
	ping: () => ipcRenderer.invoke("ping"),
	// 除函数之外，我们也可以暴露变量
});

contextBridge.exposeInMainWorld("electronAPI", {
	setTitle: (title) => ipcRenderer.send("set-title", title),
	openFile: () => ipcRenderer.invoke("dialog:openFile"),
	handleCounter: (callback) => ipcRenderer.on("update-counter", callback),
});
