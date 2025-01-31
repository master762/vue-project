import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import Ourservice from '@/pages/OurservicePage.vue'
import Detailservice from '../pages/DetailservicePage.vue'
import Pricing from '../pages/PricingPage.vue'
import Blog from '../pages/BlogPage.vue'
import DetailBlog from '../pages/DetailblogPage.vue'
import Ourteam from '../pages/Ourteampage.vue'
import ContactusPage from '@/pages/ContactusPage.vue'

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
  {
    path: '/PricingPlan',
    name: 'PricingPlan',
    component: Pricing,
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/DetailBlog',
    name: 'DetailBlog',
    component: DetailBlog,
  },
  {
    path: '/Ourteam',
    name: 'Ourteam',
    component: Ourteam,
  },
  {
    path: '/Contactus',
    name: 'Contactus',
    component: ContactusPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
