import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/view/layout/MainView.vue';
import pageOneRoutes from '@/view/pageone/router';
import authRoutes from '@/view/auth/router';
import homeRoutes from '@/view/home/router';

const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      ...pageOneRoutes,
      ...authRoutes,
      ...homeRoutes
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
