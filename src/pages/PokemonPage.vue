<template>
<h1 v-if="!winner">Consultando la PokéDex.....</h1>
<div v-else>
  <h1>¿Quíen es este Pokémon?</h1>
  <PokemonImage :pokeId="winner.id" :show="showWinner" />
  <PokemonOptions @slected="comprobarClick($event)" :pokemons="pokeArr" />
</div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
//AL MOMENTO DE EMITIR EL COMPONENTE HIJO CREA UN NUEVO EVENTO COMO EL CLICK
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokeIdFacade from "../helpers/PokemonHelper";

export default {
  components: { PokemonImage, PokemonOptions },

//esta es una de las fases del ciclo de vidad de un componente
//BEFORE CREATE SE EJECUTA ANTES DE QUE SE CREE EL COMPONENTE
  beforeCreate(){
    console.log("Antes de que se cree el componente")
  },
  //CREATED SE EJECUTA CUANDO SE CREA EL COMPONENTE PERO NO ES MONTADO TODAVIA
  created(){
    console.log("Se ha Creado el componente")
  },
  //BEFORE MOUNT SE EJECUTA UNOS INSTANTES ANTES DE QUE SE MONTE EL COMPONENTE
  beforeMount(){  
    console.log("el componente esta listo para ser montado")
  },
  //MOUNTED SE EJECUTA CADA VEZ QUE ES MNONTADO EL COMPONENTE
  mounted() {
    console.log("Se monto el componente ");
    this.cargaInicial()
  },
  //BEFORE UPDATE SIRVE PARA INTERCEPTAR EL CICLO DE VIDA DE UN COMPONENTE 
  // SE EJECUTA ANTES DE QUEW SE ACTUALICE EL COMPONENTE
  beforeUpdate(){
    console.log("Antes de que se actualice el componete");
  },
  //UPDATE SE EJECUTA CUANDO SE HA ACTUALIZADO EL COMPONENTE
  updated(){
      console.log("Se ha actualizado el componete");
  },
  //BEFORE DESTROY YA SE ENCUENTRA DEPRECADO
  //SE EJECUTA ANTES DE DESTRUIR EL COMPONENTE
  beforeDestroy(){
    console.log("Antes de destruir el componete");
  },
    // DESTROY YA SE ENCUENTRA DEPRECADO
  //SE EJECUTA CUANDO SE DESTRUYA EL COMPONENTE
  beforeDestroy(){
    console.log("destruir el componete");
  },
  data(){
    return{
      pokeArr: [],
      winner: null,
      showWinner : false,
    }
  },
  methods: {
    async cargaInicial() {
     var pokemons = await getPokeIdFacade();
      console.log("desde componente");
      console.log(pokemons);
      this.pokeArr =pokemons;
      this.winner = this.pokeArr[Math.floor(Math.random()*4)]
    },
    comprobarClick(e){
      console.log("se selecciono el:" + e)
      this.showWinner = true
      if (this.winner.id === e) console.log("GANADOR")
    }
  },
};
</script>

<style>
</style>