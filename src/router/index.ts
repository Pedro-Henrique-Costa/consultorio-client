import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/convenio/convenio-list.vue')
  },
  {
    path: '/cadastrar-convenio',
    name: 'cadastrar-convenio',
    component: () => import('../views/convenio/cadastrar-list.vue')
  },
  {
    path: '/detalhar-convenio',
    name: 'detalhar-convenio',
    component: () => import('../views/convenio/detalhar-list.vue')
  },
  {
    path: '/agendamento',
    name: 'agendamento',
    component: () => import('../views/agendamento/agendamento-list.vue')
  },
  {
    path: '/cadastrar-agendamento',
    name: 'cadastrar-agendamento',
    component: () => import('../views/agendamento/cadastrar-list.vue')
  },
  {
    path: '/detalhar-agendamento',
    name: 'detalhar-agendamento',
    component: () => import('../views/agendamento/detalhar-list.vue')
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import('../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/cadastrar-especialidade',
    name: 'cadastrar-especialidade',
    component: () => import('../views/especialidade/cadastrar-list.vue')
  },
  {
    path: '/detalhar-especialidade',
    name: 'detalhar-especialidade',
    component: () => import('../views/especialidade/detalhar-list.vue')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import('../views/historico/historico-list.vue')
  },
  {
    path: '/cadastrar-historico',
    name: 'cadastrar-historico',
    component: () => import('../views/historico/cadastrar-list.vue')
  },
  {
    path: '/detalhar-historico',
    name: 'detalhar-historico',
    component: () => import('../views/historico/detalhar-list.vue')
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import('../views/medico/medico-list.vue')
  },
  {
    path: '/cadastrar-medico',
    name: 'cadastrar-medico',
    component: () => import('../views/medico/cadastrar-list.vue')
  },
  {
    path: '/detalhar-medico',
    name: 'detalhar-medico',
    component: () => import('../views/medico/detalhar-list.vue')
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import('../views/paciente/paciente-list.vue')
  },
  {
    path: '/cadastrar-paciente',
    name: 'cadastrar-paciente',
    component: () => import('../views/paciente/cadastrar-list.vue')
  },
  {
    path: '/detalhar-paciente',
    name: 'detalhar-paciente',
    component: () => import('../views/paciente/detalhar-list.vue')
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import('../views/secretaria/secretaria-list.vue')
  },
  {
    path: '/cadastrar-secretaria',
    name: 'cadastrar-secretaria',
    component: () => import('../views/secretaria/cadastrar-list.vue')
  },
  {
    path: '/detalhar-secretaria',
    name: 'detalhar-secretaria',
    component: () => import('../views/secretaria/detalhar-list.vue')
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
