<template>
    <div class="home">
        <header>
            <div class="title">My personal costs</div>
        </header>
        <main>
            <AddPaymentForm @addNewPayment="addPaymentData" />
            <PaymentsDisplay :items="paymentsList"/>
        </main>
    </div>
</template>

<script>

import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";

export default {
    name: "mainComp",
    components: {
        PaymentsDisplay,
        AddPaymentForm
    },

    data() {
        return {
            paymentsList: [],
        };
    },

    methods: {
        addPaymentData(data) {
            this.paymentsList.push(data)
        },

        fetchData() {
            return [
                {
                    date: "28.04.2022",
                    category: "Food",
                    value: 169,
                },
                {
                    date: "24.04.2022",
                    category: "Transport",
                    value: 360,
                },
                {
                    date: "24.04.2022",
                    category: "gas",
                    value: 532,
                },
                {
                    date: "28.04.2022",
                    category: "boil",
                    value: 169,
                },
                {
                    date: "24.04.2022",
                    category: "butter",
                    value: 360,
                },
                {
                    date: "24.04.2022",
                    category: "chunk",
                    value: 532,
                },
                {
                    date: "28.04.2022",
                    category: "Food",
                    value: 169,
                },
                {
                    date: "24.04.2022",
                    category: "Transport",
                    value: 360,
                },
                {
                    date: "24.04.2022",
                    category: "grease",
                    value: 532,
                },
                {
                    date: "28.04.2022",
                    category: "bucket",
                    value: 169,
                },
                {
                    date: "24.04.2022",
                    category: "Transport",
                    value: 360,
                },
                {
                    date: "24.04.2022",
                    category: "Food",
                    value: 532,
                },
                {
                    date: "28.04.2022",
                    category: "oil",
                    value: 169,
                },
                {
                    date: "24.04.2022",
                    category: "gasoline",
                    value: 360,
                },
                {
                    date: "24.04.2022",
                    category: "Food",
                    value: 532,
                },
                {
                    date: "28.04.2022",
                    category: "costs",
                    value: 169,
                },
                {
                    date: "24.04.2022",
                    category: "Transport",
                    value: 360,
                },
                {
                    date: "24.04.2022",
                    category: "benchmark",
                    value: 532,
                },
                {
                    date: "28.04.2022",
                    category: "caracal",
                    value: 169,
                },
            ];
        },
    },

    created() {
        this.paymentsList = this.fetchData()
    },

    mounted() {
    },
};

</script>

<style scoped>
    .title {
        font-size: 24px;
    }
</style>
