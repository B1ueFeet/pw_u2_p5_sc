<template>
  <div class="container">
    <h2>{{ titulo }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ getSquare }}</p>
    <button @click="sumar()">+</button>
    <button @click="restar()">-</button>
  </div>
</template>

<script>
export default {
  /* props:["titulo", "valor"], */
  props: {
    titulo: String,
    valor: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        return value > 0;
      },
    },
  },
  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {
    getNum() {
      console.log("Se calcula el cuadrado");
      return 5 + 5 + 10;
    },
    sumar() {
      this.counter += 1;
    },
    restar() {
      this.counter -= 1;
    },
  },
  computed: {
    getSquare() {
      console.log("Se calcula el cuadrado computado ");
      return this.counter * this.counter;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&family=Yanone+Kaffeesatz&display=swap");
button {
  border-radius: 10px;
  background: #86b6f6;
  border: 1px solid white;
  padding: 5px 20px;
  color: white;
  margin: 0px 5px;
  font-size: 20px;
}
button:hover {
  background: #eef5ff;
  color: black;
}
button:active {
  background: #176b87;
}
h2,
p {
  font-family: 'Righteous', sans-serif;
}
p {
  font-size: 20px;
}
h2{
  font-size: 35px;
}
.container {
  width: 200px;
  background: cadetblue;
  border-radius: 15px;
  padding: 15px;
  margin: 10px 400px;
  color: white;
}
* {
  align-content: center;
}
</style>