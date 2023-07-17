# 解决使用 pnpm 运行 Vite 时出现 Error: The URL must be of scheme file

## 问题描述：

最近在使用 pnpm create vite 创建 Vue 项目时，用 pnpm install 安装依赖后运行 pnpm dev 就会出现报错：

```bash
failed to load config from D:\JyLie_Info\Git_Data\electron-tpl\vite.config.js
error when starting dev server:
Error: The URL must be of scheme file at D:\JyLie_Info\Git_Data\electron-tpl\vite.config.js
    at loadConfigFromBundledFile (file:///D:/JyLie_Info/Git_Data/electron-tpl/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.0/node_modules/vite/dist/node/chunks/dep-1d3a4915.js:66082:19)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async loadConfigFromFile (file:///D:/JyLie_Info/Git_Data/electron-tpl/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.0/node_modules/vite/dist/node/chunks/dep-1d3a4915.js:65931:28)
    at async resolveConfig (file:///D:/JyLie_Info/Git_Data/electron-tpl/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.0/node_modules/vite/dist/node/chunks/dep-1d3a4915.js:65535:28)
    at async _createServer (file:///D:/JyLie_Info/Git_Data/electron-tpl/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.0/node_modules/vite/dist/node/chunks/dep-1d3a4915.js:64805:20)
    at async CAC.<anonymous> (file:///D:/JyLie_Info/Git_Data/electron-tpl/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.0/node_modules/vite/dist/node/cli.js:743:24)
 ELIFECYCLE  Command failed with exit code 1.
```

但是用 yarn 或是 npm 创建就没有问题

在 Vite 的 GitHub Issues 上有相关的讨论

[Vite cannot load vite.config.ts with Node 17 and vite@4.4.0-beta.3 · Issue #13631 · vitejs/vite (github.com)](https://github.com/vitejs/vite/issues/13631)

[The URL must be of scheme file · Issue #13760 · vitejs/vite (github.com)](https://github.com/vitejs/vite/issues/13760)

## 解决办法：

在使用 pnpm create vite 创建 Vue 项目时，项目内默认的 Vite 版本还是 4.4.0，这个问题在 4.4.2 中被解决，因此：

- Node 版本切换到 LTS 版本，如果版本是 16 还需执行第二步
- 项目中的 vite 版本更新到最新版本，pnpm up vite
