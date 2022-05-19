<template>
    <div class="home">
        <header>
            <div class="title">My personal costs</div>
        </header>
        <main>
            <button @click="openModalForm">add payments</button>
            <PaymentsDisplay :items="currentElements" />
            <div>Total Sum = {{ getFullPaymentValue }}</div>
            <LittlePagination :cur="cur" :length="getPaymentsList.length" :n="n" @changePage="changePage"/>
        </main>
    </div>
</template>

<script>

import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import { mapGetters, mapMutations } from "vuex";
import LittlePagination from '@/components/LittlePagination.vue';

export default {
    name: "mainView",
    components: {
        PaymentsDisplay,
        LittlePagination,
    },

    data() {
        return {
            cur: 1,
            n: 5,
        };
        
    },

    computed: {
        ...mapGetters(['getFullPaymentValue', 'getPaymentsList']),

        currentElements(){
            return this.getPaymentsList.slice(this.n * (this.cur - 1), this.n * (this.cur -1) + this.n)
        }
    },

    methods: {
        ...mapMutations([
            'setPaymentsListData'
        ]),

        addPaymentData(data) {
            this.paymentsList.push(data)
        },

        changePage(p){
            this.cur = p
            // this.$store.dispatch('fetchData', p)
        },

        openModalForm() {
        this.$modal.show ('addForm', {title: "Add new payment", component: 'AddPaymentForm'})
        },
    },

    created() {
        this.$store.dispatch('fetchData')
        // this.paymentsList = this.fetchData()
        // this.setPaymentsListData(this.fetchData())
        // this.$store.commit('setPaymentsListData', this.fetchData())
    },

    mounted() {
        if(!this.$route.params?.page || isNaN(this.$route.params.page)) return
        this.cur = Number(this.$route.params.page)
    },
};
</script>

<style scoped>
.title {
    font-size: 24px;
}
</style>
