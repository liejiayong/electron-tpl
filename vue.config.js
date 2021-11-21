const Components =require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true /* 开启electron的node支持 */
        }
    },
    configureWebpack:config=>{
        config.plugins.push(
            Components({resolvers:[ElementPlusResolver()]})
        )
    }
}
