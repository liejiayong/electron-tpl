const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const path = require('path');

module.exports = {
  // runtimeCompiler: true /* 解决App出现白屏，没有出现vue的页面 */
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
  chainWebpack: (config) => {
    /* alias */
    config.resolve.alias.set('@', path.join(__dirname, 'src'));
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        /*sass-loader 9.0写法，感谢github用户 shaonialife*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);
          if (relativePath.replace(/\\/g, '/') !== 'src/styles/variables.scss') {
            return '@import "~@/styles/variables.scss";' + content;
          }
          return content;
        },
      },
    },
  },
};
