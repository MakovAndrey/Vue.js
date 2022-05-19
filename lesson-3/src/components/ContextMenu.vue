<template>
    <div class="context" v-if="show" :style="styles">
        <div v-for="item in items" :key="item.text" @click="onClick(item)">
            {{item.text}}
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false,
            items: [],
            xPos: 0,
            yPos: 0,
        }
    },

    methods: {
        onClick (item) {
            item.action()
        },

        onShow ({items, caller}) {
            this.items = items
            this.show = true;
            this.setPostion(caller)
        },

        onHide () {
            this.show = false;
            this.items = []
        },

        setPostion(caller){
            const pos = caller.getBoundingClientRect()
            this.xPos = pos.left
            this.yPos = pos.top
        },
    },

    computed: {
        styles(){
            return {
                top: `${this.yPos + 30}px`,
                left: `${this.xPos + 20}px`
            }     
        }
    },

    mounted() {
        this.$contextMenu.EventBus.$on('show', this.onShow)
        this.$contextMenu.EventBus.$on('hide', this.onHide)
    },

    beforeDestroy () {
        this.$contextMenu.EventBus.$off('show', this.onShow)
        this.$contextMenu.EventBus.$off('hide', this.onHide)
    },
}
</script>

<style scoped>
.context {
    padding: 5px;
    position: absolute;
    cursor: pointer;
    background: rgb(183, 247, 99);
}

.edit-btn {
    padding: 5px;
    margin: 10px;
}
</style>