<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImage :pokeId="59" :show="true"/>
  <PokemonOptions/>


</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokeIdFacade from '../helpers/PokemonHelper'
getPokeIdFacade()
export default {
  components: { PokemonImage, PokemonOptions },
}
</script>

<style>

</style>