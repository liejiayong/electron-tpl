import { createApp } from "vue";
import router from "@/router/index.js";
import { createPinia } from "pinia";
import createPlugin from "@/plugins/index.js";
import App from "./App.vue";
import "@/styles/index.scss";
import "virtual:svg-icons-register";

const app = createApp(App);
app.use(router).use(createPinia());
createPlugin(app);
app.mount("#app");
