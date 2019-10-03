<template>
    <div id="app">
        <Header :isAuth="isAuth"
                @logout="logoutHanler()"
                @registration="registrationHanler()"
                @login="loginHanler()"
        />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>

import Header from '@/components/blocks/Header';
import { mapGetters, mapActions } from 'vuex';

export default {
    name      : 'App',
    components: {
        Header,
    },
    computed: {
        ...mapGetters([
            'isAuth',
        ]),
    },
    methods: {
        ...mapActions([
            'logout',
            'registration',
            'login',
        ]),
        async logoutHanler() {
            await this.logout();
            this.$router.push({ name: 'Home' });
        },
        async registrationHanler() {
            await this.registration();
            this.$router.push({ name: 'Profile' });
        },
        async loginHanler() {
            await this.registration();
            this.$router.push({ name: 'Profile' });
        },
    },
};
</script>
