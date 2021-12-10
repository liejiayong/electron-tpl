const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true /* 开启electron的node支持 */,
    },
  },
  configureWebpack: (config) => {
    /* fixed: `vue-global-api` 全局引入报错 Can’t import the named export xxx from non EcmaScript module (only default export is available) */
    config.module.rules.push({ test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' });
    /* 支持 ElementPlus */
    config.plugins.push(Components({ resolvers: [ElementPlusResolver()] }));
  },
};
