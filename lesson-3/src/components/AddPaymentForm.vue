<template>
    <div class="form-wrapper">
        <button class="costs-btn" @click="costsInputShow=!costsInputShow"> ADD NEW COSTS +</button>
        <div v-if="costsInputShow">
        <input class="costs__input" v-model="date" placeholder="date" />
        <input class="costs__input" v-model="category" placeholder="category" />
        <input class="costs__input" v-model="value" placeholder="value" />
        <button class="save__btn" @click="onClickSave">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
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
            this.$emit("addNewPayment", data);
            console.log(data);
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