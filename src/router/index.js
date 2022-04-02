import { createRouter, createWebHistory } from "vue-router";
import EditIndicationsListView from "../views/EditIndicationsListView.vue";
import IndicationsListView from "../views/IndicationsListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndicationsListView,
    },
    {
      path: "/edit",
      name: "edit",
      component: EditIndicationsListView,
    },
  ],
});

export default router;
