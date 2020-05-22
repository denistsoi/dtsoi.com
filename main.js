import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import routes from "./routes";

import Home from "./views/Home.vue"
import CV from "./views/CV.vue"
import Generic from "./views/Generic.vue"

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [{
    path: "/",    
    component: Home, 
  }, {
    path: "/cv",
    components: { default: CV, other: Generic }
  }]
})

const app = createApp(App)
app.use(router)
app.mount("#app")