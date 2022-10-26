import { createRouter, createWebHistory } from "vue-router";
import GenerosView from "../views/GenerosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/generos",
      name: "generos",
      component: GenerosView,
    },
  ],
});

export default router;
