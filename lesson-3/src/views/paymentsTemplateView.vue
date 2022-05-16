<template>
    <div >
        <h1>Your most frequent payments</h1>
        <p>Here you can quickly add your most frequent payments</p>
        <div class="paymentsTemplate">
            <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Food'}, query: {value: 200}}">Food 200</router-link>
            <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Transport'}, query: {value: 50}}">Transport 50</router-link>
            <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Entertainment'}, query: {value: 2000}}">Entertainment 2000</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "paymentsTemplateView",
}
</script>

<style scoped>
.paymentsTemplate{
    display: flex;
    justify-content: space-around;
}
</style>