import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home';
import Login from '@/views/login';
Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/login'
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/home',
            name: 'home',
            component: Home
        }]
})

export default router;