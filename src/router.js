import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue'
import AppIndex from './pages/AppIndex.vue'
import AppShow from './pages/AppShow.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/portfolio',
            name: 'portfolio.index',
            component: AppIndex
        },
        {
            path: '/projects/:id',
            name: 'projects.show',
            component: AppShow,
            props: true,
        }
    ]
});


export { router };