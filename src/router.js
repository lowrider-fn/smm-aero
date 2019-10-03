import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Profile from './views/Profile';
import NotFound from './views/Not_found';

import store from '@/store';

Vue.use(Router);

const router = new Router({
    mode  : 'hash',
    routes: [
        {
            path    : '/',
            redirect: {
                name: 'Home',
            },
        },
        {
            path    : '*',
            redirect: {
                name: 'NotFound',
            },
        },
        {
            path     : '/profile',
            component: Profile,
            name     : 'Profile',
            meta     : {
                auth : true,
                title: 'Профиль',
            },
        },
        {
            path     : '/home',
            name     : 'Home',
            component: Home,
            meta     : {
                title: 'Главная',
            },
        },
        {
            path     : '/not-found',
            name     : 'NotFound',
            component: NotFound,
            meta     : {
                title: 'Страница не найденна',
            },
        },
    ],

});
const isAuth = () => store.getters.isAuth;

const checkAuth = (to, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (isAuth()) {
            next();
        } else {
            next({ name: 'Home' });
        }
    } else {
        next();
    }
};

router.beforeEach(async (to, from, next) => {
    if (!from.name) {
        await store.dispatch('checkLogin');
    }
    checkAuth(to, next);
});

router.afterEach(to => document.title = to.meta.title);

export default router;

