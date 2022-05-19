<template>
    <div class="wrp">
        <div class="header">
            {{settings.title}}
        </div>
        <div class="content">
            <component  
                :is="settings.component"
                :values="settings.props"/>
        </div>
        <div class="footer">
            <button @click="onCloseClick">Close</button>
        </div>
    </div>
</template>

<script>
export default{
    name: "ModalWindowAddPaymentForm",
    props: {
        settings: Object
    },
    components: {
        AddPaymentForm: () => import ("./AddPaymentForm.vue"),
        AuthForm: () => import("./AuthForm.vue"),
    },
    methods: {
        onCloseClick() {
            this.$modal.hide();
        },
    },
}
</script>

<style scoped>
    .wrp {
        padding: 20px;
        position: absolute;
        top: 10%;
        left: 20%;
        background: #67f0e4;
    }
</style>