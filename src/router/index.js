import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/mainPage.vue'; 
import ProductDetail from '../views/headerSingle.vue'; 

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage, 
  },
  {
    path: '/product/:id',
    name: 'headerSingle',
    component: ProductDetail, 
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
