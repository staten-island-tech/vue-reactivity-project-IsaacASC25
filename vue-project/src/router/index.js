import { createRouter, createWebHistory } from 'vue-router'
import IngredientsPage from './pages/IngredientsPage.vue'
import RamenBowl from './pages/RamenBowl.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/IngredientsPage',
      name:'home',
      component: IngredientsPage,
    },
    {
      path:'/RamenBowl',
      name:'home',
      component: RamenBowl,
    },
  ],
})

export default router