<template>
  <div class="paymentsList">
    <div class="paymmentItem" v-for="(item, index) in items" :key="index">
        {{ item }}
        <hr />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  margin: 20px;
  padding: 10px;
  border-radius: 7px;
}

.pagin {
  margin: 5px;
}

input {
  margin: 20px;
}

.paymmentItem {
  margin: 15px;
}
</style>
