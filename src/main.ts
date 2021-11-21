import { createApp } from 'vue'
import loadGlobal from '@/utils/global'
import loadPlugins from '@/plugins'
import App from './App.vue'

const app =createApp(App)

loadGlobal(app)
loadPlugins(app)

app.mount('#app')
