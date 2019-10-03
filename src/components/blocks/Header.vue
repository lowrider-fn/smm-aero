<template>
    <header class="header">
        <div class="header__inner">
            <div v-if="!isAuth" class="header__auth-box">
                <button type="button"
                        class="btn-green btn-green--s"
                        title="Войти в личный кабинет"
                        @click="showLoginForm()"
                >
                    <Icon :id="'user'"
                          :class="'left'"
                    />
                    Войти
                </button>
                <button type="button"
                        class="btn-link btn-link--dots"
                        title="Зарегистрироваться в SMM Aero"
                        @click="showRegForm()"
                >
                    Зарегистрироваться
                </button>
            </div>
            <div v-else class="header__auth-box">
                <button type="button"
                        class="btn-green btn-green--s"
                        title="Войти в личный кабинет"
                        @click="$emit('logout', $event)"
                >
                    Выйти
                </button>
            </div>
        </div>
        <RegForm :isShow="isReg"
                 :isHide.sync="isReg"
                 @registration="$emit('registration', $event)"
                 @showLogin="showLoginForm()"
        />
        <LoginForm :isShow="isLogin"
                   :isHide.sync="isLogin"
                   @login="$emit('login', $event)"
                   @showReg="showRegForm()"
        />
    </header>
</template>

<script>
import Icon from '@/components/ui/icon';
import RegForm from '@/components/blocks/Reg_form';
import LoginForm from '@/components/blocks/Login_form';

export default {
    name      : 'Header',
    components: {
        Icon,
        RegForm,
        LoginForm,
    },
    props: {
        isAuth: {
            type: Boolean,
        },
    },
    data() {
        return {
            isReg  : false,
            isLogin: false,
        };
    },
    methods: {
        showRegForm() {
            this.isReg = true;
        },
        showLoginForm() {
            this.isLogin = true;
        },
    },
};
</script>
