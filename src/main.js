import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue'
import Home from "./components/HelloWorld.vue";
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: [{ path: "/", component: Home }], // short for `routes: routes`
});
let app = createApp(App)
app.use(router)
app.mount('#app')
