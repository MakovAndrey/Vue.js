<template>
  <div id="app">
    <nav class="payment">
    <router-link :to="{name: 'Dashboard', params: {page: '1'} }">Dashboard</router-link> |
    <router-link to="/paymentsTemplate">Payments Template</router-link> |
    <router-link to="/error">ERROR</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import mainView from './views/mainView.vue';
// import paymentsTemplateView from './views/paymentsTemplateView.vue';
// import errorView from './views/errorView.vue'

export default {
  methods: {
    goToAboutPage() {
      this.$router.push({
        name: "Dashboard"
      });
    },
  }
  // name: 'App',
  // components: {
  //   mainView,
  //   paymentsTemplateView,
  //   errorView,
  // }
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
</style>
