<template>
  <div class="paymentsList">
    <div class="paymmentItem" v-for="(item, index) in items" :key="index">
      <span>{{ item }}</span> 
      <button class="cursor" @click="onContextMenuClick($event,item)">...</button>
      <hr />
    </div>
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

  methods: {
    editItem(item) {
      this.$modal.show('addform', {title: "Add New Payment", component: 'AddPaymentForm', props: {item}})
      this.$contextMenu.hide()
      let editObj = {
        date: this.date,
        category: this.category,
        value: this.value,
      };
      this.$store.commit("editPaymentsList", [this.item, editObj]);
    },

    deleteItem() {
      this.$store.commit("removeItemFromPaymentsList", this.item);
      this.$contextMenu.hide()
    },

    onContextMenuClick(event, item){
      const items =[
        { text: "Edit", action: ()=> { this.editItem(item)} },
        { text: "Delete item", action: ()=>{ this.deleteItem(item.id)} }
      ]
      this.$contextMenu.show({event,items})
    },
  },
};
</script>

<style scoped>
body {
  position: absolute;
}

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

.cursor {
  cursor: pointer;
}
</style>
