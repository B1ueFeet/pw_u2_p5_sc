<template>
  <img v-if="img" v-bind:src="img" alt="No se puede visualizar la imagen" />
  <div class="dark"></div>
  <div class="container">
    <input v-model="pregunta" type="text" />
    <p>Recuerda que debes terminar con el signo de interrogación (?)</p>
    <div v-if=preguntaVal>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      image: null,
      preguntaVal: false,
    };
  },
  methods: {
    async consumirApi() {
      this.think()
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (respuesta) => respuesta.json()
      );
      console.log(answer);
      console.log(image);
      this.respuesta = answer === 'yes' ? 'SI¡' : 'NO';
      this.img = image;
    },
    async think() {
      this.respuesta = "pensando."

      this.respuesta = "pensando.."
      this.respuesta = "pensando..."
      this.respuesta = "pensando...."
    }
  },
  watch: {
    pregunta(value, oldValue) {
      this.preguntaVal = false;
      console.log(value);
      console.log(oldValue);
      if (!value.includes("?")) return;
      //Consumo del API:
      this.consumirApi();
      this.preguntaVal = true;
    },
  },
};
</script>

<style scoped>
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.dark {
  background: rgba(0, 0, 0, 0.3);
}

input:focus {
  outline: none;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  text-align: center;
}

.container {
  position: relative;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 100px;
}
</style>