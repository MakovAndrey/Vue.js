<template>
  <div class="paymentsList">
    <div class="paymmentItem" v-for="(item, index) in paginatedData" :key="index">
      {{ item }}
      <hr>
    </div>
    <div class="btn-group">
      <button class="pagin" v-for="p in pageCount" @click.prevent="setPage(p)" :key="p"> {{p}}</button>
      <!-- <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",

  data() {
    return {
      pageNumber: 0,
    }
  },

  props: {
    items: {
      type: Array,
      default: ()=>[]
    },

    size:{
      type:Number,
      required:false,
      default: 5
    }
  },

  methods: {
    setPage(p) {
      this.pageNumber = (p-1);
    },

  //   nextPage(){
  //     if (this.pageNumber < this.pageCount) {
  //       this.pageNumber++;
  //       } else {
  //         this.pageNumber
  //       }
  //   },

  //   prevPage(){
  //     this.pageNumber--;
  //   }
  },

  computed: {
    pageCount() {
      let l = this.items.length;
      let s = this.size;
      return Math.ceil(l/s);
    },

    paginatedData() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.items.slice(start, end);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.paymmentItem{
  margin: 15px;
}
</style>
