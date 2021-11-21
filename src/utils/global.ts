import {createApp}from 'vue'
import ipcRenderer from './icpRender';


export default function loadGlobal(app:ReturnType<typeof createApp>):void{
    /* icpRender */
    app.config.globalProperties.$uIpc = ipcRenderer;

}
