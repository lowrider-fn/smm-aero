<template>
    <Modal v-if="isShow"
           class="reg"
           @close="close()"
    >
        <form class="form">
            <h2 class="h2">
                Личный кабинет
            </h2>
            <Field v-model.trim="$v.form.email.$model"
                   :id="'email'"
                   :value="$v.form.email.$model"
                   :validate="$v.form.email"
                   :type="'email'"
                   :label="'Email'"
                   :placeholder="'pochtagmail.com'"
            />
            <FieldPwd v-model.trim="$v.form.pwd.$model"
                      :value="$v.form.pwd.$model"
                      :type="'password'"
                      :validate="$v.form.pwd"
                      :label="'Пароль'"
                      :placeholder="'●●●●●●●●●●●'"
            />
            <div class="auth__btn">
                <button class="btn-blue btn-blue--l"
                        type="button"
                        title="Войти в личный кабинет"
                        @click="emitHandler()"
                >
                    Вход
                </button>
            </div>
        </form>
        <div class="actions">
            <div class="actions__box">
                <p class="text">
                    Еще нет аккаунта?
                </p>
                <button class="btn-link btn-link--dashed"
                        type="button"
                        title="Зарегистрироваться в SMM Aero"
                        @click="showReg()"
                >
                    Зарегистрироваться
                </button>
            </div>
            <div class="actions__box actions__box--right">
                <p class="text">
                    Забыли пароль?
                </p>
                <button class="btn-link btn-link--dashed"
                        type="button"
                        title="Востановить пароль"
                >
                    Восстановить
                </button>
            </div>
        </div>
    </Modal>
</template>

<script>
import { Field, FieldPwd } from '@/components/ui/field';

import Modal from '@/components/blocks/Modal';
import {
    required, email, minLength, maxLength,
} from 'vuelidate/lib/validators';
import vErr from '@/lib/vuelidate_error';
import { addClass, removeClass } from '@/lib/class_operation';

export default {
    name      : 'RegForm',
    components: {
        Field,
        FieldPwd,
        Modal,
    },
    props: {
        err: {
            type   : String,
            default: '',
        },
        isShow: {
            type    : Boolean,
            required: true,
        },
    },
    data() {
        return {
            default: {
                email: '',
                pwd  : '',
            },
            form: {
                email: '',
                pwd  : '',
            },
        };
    },
    validations: {
        form: {
            required,
            email: {
                required,
                maxLength: maxLength(60),
                email,
                err      : vErr.transport(vErr.errEmail),
            },
            pwd: {
                required,
                maxLength: maxLength(32),
                minLength: minLength(6),
                err      : vErr.transport(vErr.errPwd),
            },
        },
    },
    methods: {
        emitHandler() {
            if (!this.$v.form.$invalid) {
                this.$emit('login', this.form);
                this.close();
            } else {
                const fields = this.$el.querySelectorAll('.js-field');
                fields.forEach((el) => {
                    addClass(el, 'snake');
                    setTimeout(() => {
                        removeClass(el, 'snake');
                    }, 500);
                });
            }
        },
        close() {
            this.form = { ...this.default };

            this.$emit('update:isHide', false);
        },
        showReg() {
            this.$emit('showReg');
            this.$emit('update:isHide', false);
        },
    },
};
</script>
<style lang="scss" scoped>
.actions {
    display : flex;

    justify-content : space-between;
}
.actions__box {
    .text {
        margin-bottom : 0;
    }
    &--right {
        text-align : right;
    }
}
.auth__btn {
    margin : 25px 0 30px;
}

</style>
