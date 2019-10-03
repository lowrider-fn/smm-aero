<template>
    <div class="field">
        <label class="field__label">
            {{ label }}
        </label>
        <div :id="id"
             class="field__input-wrapper js-field"
             :class="`${isError ? 'error': ''}` "
        >
            <input class="field__input "
                   :type="`${isShowPwd ? 'text' :type}`"
                   :placeholder="placeholder"
                   :value="value"
                   @input="$emit('input',$event.target.value)"
            >
            <slot>
            </slot>
        </div>
        <p v-if="isError"
           class="field__error"
        >
            {{ setErrorText }}
        </p>
    </div>
</template>

<script>
import vuelidate from '@/lib/vuelidate';

export default {
    name : 'Field',
    props: {
        type: {
            type   : [Number, String],
            default: 'text',
        },
        validate: {
            type   : Object,
            default: null,
        },
        label: {
            type: [Number, String],
        },
        value: {
            type: [Number, String],
        },
        placeholder: {
            type: String,
        },
        id       : String,
        isShowPwd: Boolean,
    },
    data() {
        return {
            keys: [],
        };
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
                return vuelidate.errText(this.validate);
            }
            return '';
        },
    },
};
</script>
