import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CompleteTask from '../views/CompleteTask'
import CreateTask from '../views/CreateTask'
import EditTask from '../views/EditTask'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/complete-task',
    name: 'CompleteTask',
    component: CompleteTask
  },
  {
    path: '/register-task',
    name: 'CreateTask',
    component: CreateTask
  },
  {
    path: '/edit-task',
    name: 'EditTask',
    component: EditTask,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
