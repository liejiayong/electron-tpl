/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const testPing = async () => {
	const information = document.getElementById("info");
	information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;

	// 将发送器与接收器设置完成之后，现在你可以将信息通过刚刚定义的 'ping' 通道从渲染器发送至主进程当中。
	const response = await window.versions.ping();
	console.log(response); // 打印 'pong'
};
testPing();

const testSetTitle = () => {
	const setButton = document.getElementById("btn");
	const titleInput = document.getElementById("title");
	setButton.addEventListener("click", () => {
		const title = titleInput.value;
		window.electronAPI.setTitle(title);
	});
};
testSetTitle();

const testDialogFile = () => {
	const btn = document.getElementById("btnOpenFile");
	const filePathElement = document.getElementById("dialogFilePath");

	btn.addEventListener("click", async () => {
		const filePath = await window.electronAPI.openFile();
		filePathElement.innerText = filePath;
	});
};
testDialogFile();

const testUpdateCounter = () => {
	var counter = document.querySelector("#counter");
	window.electronAPI.handleCounter(function (event, value) {
		const oldValue = +counter.innerText;
		const newValue = oldValue + value;
		counter.innerText = newValue;

		event.sender.send("counter-value", newValue);
		console.log("testUpdateCounter", event);
	});
};
testUpdateCounter();
