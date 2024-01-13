<template>
  <PokemonPage/>
</template>

<script>

import PokemonPage from './pages/PokemonPage.vue';

export default {
  name: "App",
  components: {
    PokemonPage,
  },
  methods: {
    calcularValor() {
      return 5 + 5 + 10;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
