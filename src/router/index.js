import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import MealsByIngredient from '../views/MealsByIngredients'
import MealsByLetter from '../views/MealsByLetter'
import MealsByName from '../views/MealsByName'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/by-name/:name?',
      name: 'byName',
      component: MealsByName,
    },
    {
      path: '/by-letter/:letter?',
      name: 'byLetter',
      component: MealsByLetter,
    },
    {
      path: '/by-ingredient/:ingredient?',
      name: 'byIngredient',
      component: MealsByIngredient,
    }
  ]
})

export default router
