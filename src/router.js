import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('./pages/Index.vue')
        },
        {
            path: '/github',
            beforeEnter() {
                window.location.replace("https://github.com/matheuuus")
            }
        }
    ]
})

export default router