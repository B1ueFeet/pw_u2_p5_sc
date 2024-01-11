<template>
  <div class="container">
    <input v-model="id" v-on:keypress.ENTER="consumirApi" type="text" />
    <p>Ingresa el numero en la POKEdex. Luego Presiona ENTER</p>

    <div>
        <form action="">
            <label for="name">Nombre</label>
            <label type="text" id="name" style="background: white;">{{ name }}</label>
            <label for="weight">Peso</label>
            <label type="text" id="weight" style="background: white;">{{ weight }}</label>
            <label for="baseXp">Experiencia Base</label>
            <label type="text" id="baseXp" style="background: white;">{{ baseXp }}</label>
        </form>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      weight: null,
      baseXp: null,
      id: null,
      respuesta: null,
      image: null,
      enterVal: false,
    };
  },
  methods: {
    construirUrl(){
      return "https://pokeapi.co/api/v2/pokemon/" + id
    },

    async consumirAPI(id) {
      const { name, weight, base_experience } = await fetch(
        this.construirUrl()
      ).then((respuesta) => respuesta.json());
      this.name = name;
      this.weight = weight;
      this.experience = base_experience;
    }
  },
  watch: {
    pregunta(value, oldValue) {
      this.enterVal = false;
      console.log(value);
      console.log(oldValue);
      //Consumo del API:
      this.consumirApi();
      this.enterVal = true;
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