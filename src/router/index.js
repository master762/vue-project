import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import Ourservice from '@/views/OurservicePage.vue';
import Detailservice from '../views/Detailservice.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/About',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/OurService',
    name: 'OurService',
    component: Ourservice,
  },
  {
    path: '/Detailservice',
    name: 'Detailservice',
    component: Detailservice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return {top: 0}
  }
});

export default router;
