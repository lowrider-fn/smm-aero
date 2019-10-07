<template>
    <div class="checkbox">
        <div class="checkbox__container">
            <span class="checkbox__wrap">
                <input :id="id" class="checkbox__inp" type="checkbox"
                       :checked="checked"
                       @input="$emit('input', $event.target.checked)"
                >
                <span class="checkbox__icon-wrap">
                    <Icon :id="'accept'" class="checkbox__icon" />
                </span>

            </span>
            <slot></slot>
        </div>
        <p v-if="isError"
           class="field__error"
        >
            {{ vuelidate.errText(validate) }}
        </p>
    </div>
</template>

<script>
import Icon from '@/components/ui/icon';
import vuelidate from '@/lib/vuelidate';

export default {
    components: {
        Icon,
    },
    props: {
        checked : Boolean,
        validate: {
            type   : Object,
            default: null,
        },
        id: String,
    },
    data() {
        return {
            vuelidate,
        };
    },
    computed: {
        isError() {
            return this.vuelidate.isError(this.validate);
        },
    },
};
</script>
