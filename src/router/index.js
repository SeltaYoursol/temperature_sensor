import { createRouter, createWebHistory } from 'vue-router';
import AddRecordView from '../views/AddRecordView.vue';
import RecordsListView from '../views/RecordsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RecordsListView,
    },
    {
      path: '/edit',
      name: 'edit',
      component: AddRecordView,
    },
  ],
});

export default router;
