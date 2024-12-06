import { createRouter, createWebHistory } from 'vue-router';

import Tiendaview from '../views/Tiendaview.vue'; 
import Homeview from '../views/Homeview.vue';
import CarritoView from '../views/CarritoView.vue'; 


const routes = [
  {
    path: '/',
    name: 'home',
    component: Homeview,
  },
  {
    path: '/tienda',
    name: 'tienda',
    component: Tiendaview,
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoView,  
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
