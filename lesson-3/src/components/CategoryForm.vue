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

    mounted() {
        const {category, section} = this.$route.params
        if(!category || !section) {
            return 
        }
        this.category = category
        if(this.category) {
            this.$emit('onClickSave')
        }
    },
};
</script>

<style scoped>
.category-select {
    padding: 5px;
}
</style>