<template>
    <div class="home">
        <header>
            <div class="title">My personal costs</div>
        </header>
        <main>
            <AddPaymentForm  />
            <PaymentsDisplay :items="currentElements" />
            <div>Total Sum = {{ getFullPaymentValue }}</div>
            <LittlePagination :cur="cur" :length="12" :n="n" @changePage="changePage"/>
        </main>
    </div>
</template>

<script>

import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import { mapGetters, mapMutations } from "vuex";
import LittlePagination from '@/components/LittlePagination.vue';

export default {
    name: "mainComp",
    components: {
        PaymentsDisplay,
        AddPaymentForm,
        LittlePagination
    },

    data() {
        return {
            cur: 1,
            n: 3,
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
            this.$store.dispatch('fetchData', p)
        }
    },

    created() {
        this.$store.dispatch('fetchData', this.cur)
        // this.paymentsList = this.fetchData()
        // this.setPaymentsListData(this.fetchData())
        // this.$store.commit('setPaymentsListData', this.fetchData())
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
