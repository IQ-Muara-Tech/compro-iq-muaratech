import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import scrollAnimate from "./directives/scrollAnimate";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/about",
      component: () => import("./views/About.vue"),
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App).use(router);
app.directive("scroll-animate", scrollAnimate);
app.mount("#app");

// createApp(App).use(router).mount("#app");
