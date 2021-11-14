import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue'
import NFT from "./components/NFT.vue";
import Offcial from './components/Offcial.vue'
import Home from './components/Home.vue'
import Coming from './components/Coming.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: '/Offcial' },
        { path: "/NFT", component: NFT },
        { path: "/Offcial", component: Offcial },
        { path: "/Home", component: Home },
        { path: "/Coming", component: Coming },

    ], // short for `routes: routes`
});
let app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
