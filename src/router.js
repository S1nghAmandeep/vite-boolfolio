import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue'
import AppIndex from './pages/AppIndex.vue'
import AppShow from './pages/AppShow.vue'
import PageError from './pages/PageError.vue'
import AddProject from './pages/AppAddProject.vue'

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
            path: '/add.project',
            name: 'new.project',
            component: AddProject
        },
        {
            // path: '/projects/:id',
            path: '/projects/:slug',
            name: 'projects.show',
            component: AppShow,
            props: true,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not.found',
            component: PageError
        }
    ]
});


export { router };