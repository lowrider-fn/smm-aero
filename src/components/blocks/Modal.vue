<template>
    <div class="modal__mask">
        <div class="modal__wrapper">
            <div v-on-clickaway="away"
                 class="modal__container"
            >
                <Icon
                    :id="'close'"
                    class="modal__close"
                    @click.native="away()"
                />
                <div class="modal__inner">
                    <slot>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from '@/components/ui/icon';
import { directive as onClickaway } from 'vue-clickaway';

export default {
    directives: {
        onClickaway,
    },
    components: {
        Icon,
    },
    mounted() {
        document.onkeydown = (e) => {
            if (e.keyCode === 27) {
                this.away();
            }
        };
    },
    methods: {
        away() {
            this.$emit('close');
        },
    },
};
</script>
<style lang="scss" scoped>
.modal__close {
    position : absolute;
    top : 21px;
    right : 23px;
}

</style>
