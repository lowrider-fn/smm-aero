<template>
    <Field v-bind="$props"
           :isShowPwd="isShowPwd"
           @input="$emit('input',$event)"
    >
        <Icon
            :id="'eye'"
            class="field__icon"
            @click.native="changeType()"
        />
    </Field>
</template>

<script>
import Icon from '@/components/ui/icon';
import Field from './Field';

export default {
    name      : 'FieldPwd',
    components: {
        Icon, Field,
    },
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
        id: String,
    },
    data() {
        return {
            isShowPwd: false,
        };
    },
    beforeDestroy() {
        this.isShowPwd = false;
    },
    methods: {
        changeType() {
            this.isShowPwd = !this.isShowPwd;
        },
    },
};
</script>

<style lang="scss" scoped
>
</style>

