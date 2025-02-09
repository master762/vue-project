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
import FaqPage from '@/pages/FaqPage.vue'
import NotFoundPage from '@/pages/NotfoundPage.vue'
import ConditionsPage from '../pages/ConditionsPage.vue'
import PolicyPage from '../pages/PolicyPage.vue'
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
  {
    path: '/Faq',
    name: 'Faq',
    component: FaqPage,
  },
  {
    path: '/Conditions',
    name: 'Conditions',
    component: ConditionsPage,
  },
  {
    path: '/Policy',
    name: 'Policy',
    component: PolicyPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundPage,
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
