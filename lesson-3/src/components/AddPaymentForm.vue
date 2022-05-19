<template>
    <div class="form-wrapper">
        <!-- <button class="costs-btn" @click="costsInputShow=!costsInputShow"> ADD NEW COSTS +</button> -->
        <div>
        <input class="costs__input" v-model="date" placeholder="date" />
        <CategoryForm :section='section' />
        <input class="costs__input" v-model.number="value" placeholder="value" />
        <button class="save__btn" @click="onClickSave">Save</button>
        </div>
    </div>
</template>

<script>

import CategoryForm from '@/components/CategoryForm.vue';

export default {
    name: "AddPaymentForm",
    props: {
        values: Object
    },

    components: {
        CategoryForm
    },
    
    data() {
        return {
            date: "",
            category: "",
            value: "",
            costsInputShow: false,
            section: "",
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            return new Intl.DateTimeFormat('ru-RU', {dateStyle: "short"}).format(today);
        },

    },
    methods: {
        onClickSave() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: this.value,
            };
            this.$store.commit('addDataToPaymentsList', data)
            // this.$emit("addNewPayment", data);
            // console.log(data);
        },
    },

    created() {
        this.$store.dispatch('fetchCategoryList')
    },

    mounted() {
        if(this.values?.item) {
            const {category, date, value} = this.values.item
            this.value = value
            this.date = date
            this.category = category
            return 
        }
        
        const {value} = this.$route.query
        if (!value) return
        this.value = value
        if (this.value){
            this.onClickSave()
        }
    },
}
</script>

<style  scoped>
    .costs__input {
        margin: 15px;
        padding: 5px;
    }

    .save__btn {
        padding: 5px;
        cursor: pointer;
    }

    .form-wrapper {
        margin-top: 15px;
    }

    .costs-btn {
        padding: 10px;
        background-color: green;
        border-radius: 5px;
        color: white;
    }
</style>