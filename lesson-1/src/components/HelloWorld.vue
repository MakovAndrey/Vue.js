<template>
  <div class="wrp">
    <div>
    <input v-model.number="number1" />
    <input v-model.number="number2" />
    </div>
    <hr>
    <button @click="sum"> sum </button>
    <button @click="sub"> sub </button>
    <button @click="multiply"> multiply </button>
    <button @click="division" @v-if="number2 > 0"> division </button>
    <button @click="divisionWithRem" @v-if="number2 > 0"> division with remainder </button>
    <button @click="exponentiation"> exponentiation </button>
    <hr>

    результат вычислений : {{ result }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
      number1: '',
      number2: '',
      result: '',
    };
  },

  methods: {
    sum() {
      this.result = this.number1 + this.number2
    },

    sub(){
      this.result = this.number1 - this.number2
    },

    multiply() {
      this.result = this.number1 * this.number2
    },

    division() {
      if (this.number2 <= 0){
        this.result = "вы ввели неправильный делитель"
      } else {
        this.result = this.number1 / this.number2
      }
      
    },

    divisionWithRem() {
      let integer = Math.floor(this.number1/this.number2);
      let remainder = this.number1 % this.number2;
      this.result = "Целое число = "+integer + " Остаток от деления = "+remainder
    },

    exponentiation() {
      this.result = Math.pow(this.number1, this.number2)
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
}

input {
  margin: 20px;
}
</style>
