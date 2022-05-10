<template>
    <div class="form-wrapper">
        <button class="costs-btn" @click="costsInputShow=!costsInputShow"> ADD NEW COSTS +</button>
        <div v-if="costsInputShow">
        <input class="costs__input" v-model="date" placeholder="date" />
        <CategoryForm />
        <!-- <select v-model="category" v-if="categoryList">
            <option v-for="(value, idx) in categoryList" :key="idx">{{value}}</option>
        </select> -->
        <input class="costs__input" v-model.number="value" placeholder="value" />
        <button class="save__btn" @click="onClickSave">Save</button>
        </div>
    </div>
</template>

<script>

import CategoryForm from '@/components/CategoryForm.vue';

export default {
    name: "AddPaymentForm",

    components: {
        CategoryForm
    },
    
    data() {
        return {
            date: "",
            category: "",
            value: "",
            costsInputShow: false,
        };
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            // const options = {timeZone: 'Europe/Moscow', year: 'numeric', month: 'long', day: 'numeric' };
            // console.log (new Intl.DateTimeFormat('ru-RU', options).format(today));
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
};
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