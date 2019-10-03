<template>
    <Modal v-if="isShow"
           @close="close()"
    >
        <form class="form">
            <h2 class="h2">
                Регистрация
            </h2>
            <p class="text">
                Регистрация занимает 30 секунд.<br>
                После регистрации вы получите<br>
                <span class="text text--green">
                    7 дней бесплатного доступа.
                </span>
            </p>
            <Field v-model.trim="$v.form.email.$model"
                   :id="'email'"
                   :value="$v.form.email.$model"
                   :validate="$v.form.email"
                   :type="'email'"
                   :label="'Email'"
                   :placeholder="'pochtagmail.com'"
            />
            <FieldPwd v-model.trim="$v.form.pwd.$model"
                      :id="'pwd'"

                      :value="$v.form.pwd.$model"
                      :type="'password'"
                      :validate="$v.form.pwd"
                      :label="'Пароль'"
                      :placeholder="'●●●●●●●●●●●'"
            />
            <Checkbox v-model="$v.form.chb.$model"
                      :id="'police'"
                      :checked="$v.form.chb.$model"
                      :validate="$v.form.chb"
            >
                <label class="text"
                       for="police"
                >Я принимаю условия
                    <a href="#"
                       target="_blank"
                       class="link "
                    >
                        Соглашения
                    </a>
                </label>
            </Checkbox>
            <div class="auth__btn">
                <button class="btn-blue btn-blue--l"
                        type="button"
                        title="Зарегистрироваться в SMM Aero"
                        @click="emitHandler()"
                >
                    Регистрация
                </button>
            </div>
        </form>
        <div class="actions">
            <div class="actions__box">
                <p class="text">
                    Уже есть аккаунт?
                </p>
                <button class="btn-link btn-link--dashed"
                        type="button"
                        title="Войти в личный кабинет"
                        @click="showLogin()"
                >
                    Войти в личный кабинет
                </button>
            </div>
        </div>
    </Modal>
</template>

<script>
import { Field, FieldPwd } from '@/components/ui/field';
import Checkbox from '@/components/ui/Checkbox';
import Modal from '@/components/blocks/Modal';
import { addClass, removeClass } from '@/lib/class_operation';
import {
    required, email, minLength, maxLength,
} from 'vuelidate/lib/validators';

import vErr from '@/lib/vuelidate_error';

export default {
    name      : 'RegForm',
    components: {
        Field,
        FieldPwd,
        Modal,
        Checkbox,
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
                chb  : false,
            },
            form: {
                email: '',
                pwd  : '',
                chb  : false,
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
            chb: {
                checked: val => val === true,
                err    : vErr.transport(vErr.errChb),

            },
        },
    },
    methods: {
        emitHandler() {
            if (!this.$v.form.$invalid) {
                this.$emit('registration', this.form);
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
        showLogin() {
            this.$emit('showLogin');
            this.$emit('update:isHide', false);
        },
    },
};
</script>
<style lang="scss" scoped>
.actions {
    display : flex;

    justify-content : center;
}
.actions__box {
    text-align : center;
    .text {
        margin-bottom : 0;
    }
}
.auth__btn {
    margin-bottom : 20px;
}

</style>
