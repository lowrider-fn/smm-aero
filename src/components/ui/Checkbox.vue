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
            {{ setErrorText }}
        </p>
    </div>
</template>

<script>
import Icon from '@/components/ui/icon';

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

    computed: {
        isError() {
            const { $invalid, $dirty } = this.validate;
            if (this.validate) {
                return $invalid && $dirty;
            }
            return false;
        },
        setErrorText() {
            if (this.isError) {
                return this.validate.$params.err.text;
            }
            return '';
        },
    },
};
</script>
