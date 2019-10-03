<template>
    <div class="field">
        <label class="field__label">
            {{ label }}
        </label>
        <div :id="id"
             class="field__input-wrapper js-field"
        >
            <input :class="`field__input ${isError ? 'error': ''} `"
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
            if (this.validate) {
                return this.validate.$invalid;
            }
            return false;
        },
        setErrorText() {
            if (this.isError) {
                const { required, $params } = this.validate;

                if (!required) {
                    return $params.err.required;
                }
                let text;
                this.keys.forEach((key) => {
                    if (!this.validate[key]) {
                        text = $params.err[key];
                    }
                });
                return text;
            }
            return '';
        },
    },
    mounted() {
        if (this.isError) {
            const isHave = (el, substr) => !el.includes(substr);
            this.keys = Object.keys(this.validate).filter(el => isHave(el, '$') && isHave(el, 'err') && isHave(el, 'required'));
        }
    },
};
</script>

<style lang="scss" scoped
>
</style>

