import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue'
import HelloWorld from "./components/HelloWorld.vue";
import Home from './components/Home.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: HelloWorld },
        { path: "/home", component: Home }
    ], // short for `routes: routes`
});
let app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
