import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Feedbacks from '../views/Feedbacks/index.vue'
import Credencials from '../views/Credencials/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/feedbacks',
        name: 'Feedbacks',
        component: Feedbacks,
        meta: {
            hasAuth: true
        }
    },
    {
        path: '/credencials',
        name: 'Credencials',
        component: Credencials,
        meta: {
            hasAuth: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Home' }

    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router
