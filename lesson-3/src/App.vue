<template>
  <div id="app">
    <nav class="payment">
    <router-link :to="{name: 'Dashboard', params: {page: '1'} }">Dashboard</router-link> |
    <router-link to="/paymentsTemplate">Payments Template</router-link> |
    <router-link to="/error">ERROR</router-link>
    </nav>
    <router-view />

    <transition name="fade">
      <ModalWindowAddPaymentForm :settings="settings" v-if="modalShow"/>
    </transition>

    <transition name="fade">
      <ContextMenu />
    </transition>
    
  </div>
</template>

<script>
// import ContextMenu from './components/ContextMenu.vue';

export default {
  data () {
    return {
      modalShow: false,
      settings: {},
    };
  },

  methods: {
    goToAboutPage() {
      this.$router.push({
        name: "Dashboard"
      });
    },

    onShow(data) {
      this.modalShow = true
      this.settings = data
    },

    onHide(){
      this.settings = {}
      this.modalShow = false 
    },
  },

  components: { 
    ModalWindowAddPaymentForm: () => import('./components/ModalWindowAddPaymentForm.vue'), 
    ContextMenu: () => import('./components/ContextMenu.vue'),
  },

  mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('hide', this.onHide)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
