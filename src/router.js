import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },{
    path:'/about',
    name: 'about',
    component: () => import ('@/views/About.vue')
  },{
    path:'/experience',
    name: 'Experience',
    component: () => import ('@/views/Experience.vue')
  },{
    path:'/project',
    name: 'Project',
    component: () => import ('@/views/Project.vue')
  },{
    path:'/skills',
    name: 'Skills',
    component: () => import ('@/views/Skills.vue')
  }]
})
