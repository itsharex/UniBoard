// router
// 仅声明Landing页面和UniBoard页面
import { createRouter, createWebHistory } from 'vue-router'
const Landing = () => import('@/views/LandingView.vue')
const UniBoard = () => import('@/views/UniBoardView.vue')
const FileShare = () => import('@/views/FileShareView.vue')
const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: UniBoard
    },
    {
        path: '/f/:fileShareCode',
        name: 'FileShare',
        component: FileShare
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
