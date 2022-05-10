<template>
    <select class="category-select" v-model="category" v-if="categoryList">
        <option v-for="(value, idx) in categoryList" :key="idx">{{value}}</option>
    </select>
</template>

<script>
export default {
    name: "CategoryForm",
    data() {
        return {
            category: "",
            value: "",
        };
    },
    computed: {
        categoryList(){
            return this.$store.getters.getCategoryList
        }
    },
    methods: {
    },

    async created() {
        await this.$store.dispatch('fetchCategoryList')
    },
};
</script>

<style scoped>
.category-select {
    padding: 5px;
}
</style>