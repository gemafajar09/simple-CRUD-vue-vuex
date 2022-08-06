import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/Home.vue'
import EditView from '../view/Edit.vue'
import SimpanView from '../view/Simpan.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditView
    },
    {
        path: '/add',
        name: 'add',
        component: SimpanView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router