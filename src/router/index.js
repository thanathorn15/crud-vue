import { createRouter, createWebHistory } from 'vue-router'
import Add from '../components/student/Add.vue'
import Edit from '../components/student/Edit.vue'
import View from '../components/student/View.vue'
import List from '../components/student/List.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/view/:id',
      name: 'view',
      component: View
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
     
    }
  ]
})

export default router
