<template >
    <div class="btn-group">
        <button @click="onClick(cur - 1)" v-if="cur > 1">Previous</button>
        <button v-for="i in amount" :key="i" @click="onClick(i)">{{ i }}</button>
        <button @click="onClick(cur + 1)" v-if="cur < amount">Next</button>
    </div>
</template>

<script>
export default {
    name: "LittlePagination",

    props: {
        length: Number,
        n: Number,
        cur: Number,
    },

    methods: {
        onClick(p) {
            if (p < 1 || p > this.amount) {
            return;
        }
        this.$emit("changePage", p);
        },
    },
    computed: {
        amount() {
            return Math.ceil(this.length / this.n);
        },
    },
};
</script>

<style scoped>
button {
    margin: 20px;
    padding: 10px;
    border-radius: 7px;
}

.btn-group {
    margin: 5px;
}
</style>