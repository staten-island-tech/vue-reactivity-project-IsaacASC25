import { createRouter, createWebHistory } from 'vue-router'
import IngredientsPage from './pages/IngredientsPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/IngredientsPage',
      name:'home',
      component: IngredientsPage,
    },
  ],
})

export default router