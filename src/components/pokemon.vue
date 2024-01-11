<template>
  <div class="container">
    <h1>Ingrese el número del pokemon</h1>
    <input v-model="id" v-on:keypress.enter="consumirApi" type="text" id="id" />
    <div v-if="consulta" class="formulario">
      <h2>POKEMON</h2>
      <div>
        <img v-if="normal" v-bind:src="normal" alt="No se puede visualizar la imagen" />
        <img v-if="shiny" v-bind:src="shiny" alt="No se puede visualizar la imagen" />
      </div>
      
      <p type="Name:">
        <input v-model="name" type="text" />
      </p>
      <p type="Weight:">
        <input v-model="weight" type="text" />
      </p>
      <p type="Experiencia base:">
        <input v-model="base_experience" type="text" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      weight: null,
      base_experience: null,
      normal: null,
      shiny: null,
      consulta: false,
    };
  },
  methods: {
    async consumirApi() {
      const { name, weight, base_experience, sprites } = await fetch(
        this.contruirURLAPI(this.id)
      ).then((respuesta) => respuesta.json());
      this.name = name;
      this.weight = weight;
      this.base_experience = base_experience;
      this.normal = sprites.front_default;
      this.shiny = sprites.front_shiny;
      this.consulta = true;
    },
    contruirURLAPI(id) {
      return "https://pokeapi.co/api/v2/pokemon/" + id;
    },
  },
  watch: {
    id(value, oldValue) {
      if (value === "" || value !== oldValue) {
        this.consulta = false;
        this.img = null;
      }
    },
  },
};
</script>

<style scoped>
body{
  background: aquamarine;
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;

}

#id {
  margin: 0px auto;
}

p:before {
  content: attr(type);
  display: block;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 5px 2px;
  font-size: 16px;
  color: #5a5a5a;
}
img{
  height: 250px;
  width: 250px;
}
</style>
