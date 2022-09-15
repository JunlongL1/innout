import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/test',
        component: () => import('../views/main/test.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router