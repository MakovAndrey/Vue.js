<template>
  <div class="wrp">
    <div>
    <input v-model.number="number1" name="number1"  />
    <input v-model.number="number2" name="number2"  />
    </div>

    <hr />
    
    <button
      :title="operand"
      v-for="operand in operands"
      @click="calculate(operand)"
      :key="operand"
      type="screenOperand">
      {{ operand }}
    </button>
    <hr />

    результат вычислений : {{ result }}

    <br>

    <input
      type="checkbox"
      @change="(e) => (checked = e.target.checked)"
    />
    <label for="checkbox">Показать экранную клавиатуру</label>
    <br />

    <div v-show="checked">
      <button
        :title="number"
        v-for="number in numbers"
        @click="add(number)"
        :key="number"
        type="screenKeyboard"
      >
        {{ number }}
      </button>
      <button name="removeBtn" @click="del"> backspace </button>
    </div>

    <br />

    <form id="inputToggleForm">
      <input
        type="radio"
        id="firstInputToggle"
        value="first"
        v-model="picked"
      />
      <label for="first">number1</label>
      <input
        type="radio"
        id="secondInputToggle"
        value="second"
        v-model="picked"
      />
      <label for="second">number2</label>
    </form>

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
      checked: false,
      picked: false,
      number1: '',
      number2: '',
      result: '',
      operands: ["+", "-", "/", "*", "exp"],
      numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    };
  },

  methods: {
    add (char){
      if (this.picked === 'first') {
        this.number1 += char;
      } else if (this.picked === 'second'){
        this.number2 += char;
      } else {
        return this.result = "Нужно выбрать инпут для ввода данных";
      }
    },

    del() {
      if (this.picked === 'first') {
        this.number1 = this.number1.slice (0, -1);
      } else if (this.picked === 'second'){
        this.number2 = this.number2.slice(0, -1);
      } else {
        return this.result = "Нужно выбрать инпут для удаления данных";
      }
    },

    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.division();
          break;
        // case "i/r":
        //   this.divisionWithRem();
        //   break;
        case "exp":
          this.exponentiation();
          break;
      }
    },

    sum() {
      this.result = parseInt(this.number1) + parseInt(this.number2);
    },

    sub(){
    this.result = parseInt(this.number1) - parseInt(this.number2);
    },

    multiply() {
      this.result = parseInt(this.number1) * parseInt(this.number2);
    },

    division() {
      if (this.number2 <= 0){
        this.result = "вы ввели неправильный делитель";
      } else {
        this.result = parseInt(this.number1) / parseInt(this.number2);
      }
      
    },

    // divisionWithRem() {
    //   if (this.number2 <= 0){
    //     this.result = "вы ввели неправильный делитель";
    //   } else {
    //   let integer = Math.floor(this.number1/this.number2);
    //   let remainder = this.number1 % this.number2;
    //   this.result = "Целое число = "+integer + " Остаток от деления = "+remainder;
    //   }
    // },

    exponentiation() {
      this.result = Math.pow(this.number1, this.number2);
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

input {
  margin: 20px;
}
</style>
