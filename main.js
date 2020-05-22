// import { createApp } from "vue";
// import App from "./App.vue";
// import "./index.css";
// createApp(App).mount("#app");


import { createRouter } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import routes from "./routes";

const router = createRouter({
  routes: [{
    path: "/",
    component: { template: "<div>Home</div>"}, 

  }, {
    path: "/cv",
    component: { template: "<div>CV</div>"}
  }]
})

const app = createApp(App)
app.use(router)
app.mount("#app")