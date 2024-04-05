import { createRouter, createWebHistory } from 'vue-router'
import View from './components/View/View.vue'
import Home from './components/Home/Home.vue'
import Profile from './components/Profile/Profile.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'View',
        component: View,
        path: '/view/:id'
    },
    {
        name: 'Profile',
        component: Profile,
        path: '/profile'
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router

