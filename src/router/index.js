import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Error from "../pages/Error.vue";

const routes = [
  {
    meta: {
      title: "Home",
      fullScreen: false,
    },
    path: "/",
    name: "home",
    component: Home,
  },
  {
    meta: {
      title: "Error",
      fullScreen: true,
    },
    path: "/:catchAll(.*)",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
export default router;
