import { ipcMain, ipcRenderer } from "electron";

export const ipcEmit = {
	/* 模式 1：渲染器进程到主进程（单向） */
	on(evt, callback) {
		ipcMain.on(evt, callback);
	},
	send(evt, ...params) {
		ipcRenderer.send(evt, params);
	},
	/* 模式 2：渲染器进程到主进程（双向） */
	// 双向 IPC 的一个常见应用是从渲染器进程代码调用主进程模块并等待结果。 这可以通过将 ipcRenderer.invoke 与 ipcMain.handle 搭配使用来完成。
	handle(evt, callback) {
		ipcMain.handle(evt, callback);
	},
	invoke(evt, ...params) {
		ipcRenderer.invoke(evt, params);
	},
	/* 模式 3：主进程到渲染器进程 */
	m2rSend(mainWindow, evt, params) {
		//  mainWindow 为 new BrowserWindow()实列
		mainWindow.webContents.send(evt, params);
	},
	m2rOn(evt, callback) {
		ipcRenderer.on(evt, callback);
	},
};
