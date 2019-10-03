<template>
    <div class="auth">
        <div class="auth__inner">
            <h1 class="h1">
                {{ $route.meta.title }}
            </h1>

            <keep-alive>
                <component
                    :err="err"
                    @send="send($event)"
                    :is="$route.meta.component"
                />
            </keep-alive>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
import Login from './components/Auth_login';
import Registration from './components/Auth_registration';

export default {
    name      : 'Auth',
    components: {
        Registration,
        Login,
        AdminLogin: Login,
    },
    data() {
        return {
            isLogin: true,
            err    : '',
        };
    },
    methods: {
        ...mapActions([
            'login',
            'registration',
            'adminLogin',
        ]),

        send(form) {
            this[this.$route.meta.action](form)
                .then((data) => {
                    this.err = '';
                    this.$router.push({ name: 'Profile' });
                })
                .catch((err) => {
                    this.err = err;
                    console.error(`${err}`);
                });
        },
    },
};
</script>
