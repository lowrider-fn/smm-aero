<template>
    <div :class="`icon-box ${setClass}`" v-html="currentIcon"></div>
</template>

<script>
import sprite from './sprite';

export default {
    name : 'Icon',
    props: {
        id: {
            type    : String,
            required: true,
        },
        className: {
            type: String,
        },
    },
    data() {
        return {
            sprite,
        };
    },
    computed: {
        currentIcon() {
            return this.sprite[this.id];
        },
        setClass() {
            return this.className || '';
        },
    },
};
</script>
<style lang="scss">
.icon-box {
    display : inline-block;
}
</style>
