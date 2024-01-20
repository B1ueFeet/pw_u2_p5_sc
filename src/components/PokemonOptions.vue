<template>
  <div class="container">
    <ul>
      <!--cada vez que haga click se emite una señal debido al $emit -->
      <li v-for="n in pokemons" :key="n.id" @click="$emit('slected',n.id)">
        {{ n.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
}

li:hover {
  background: rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: center;
}
</style>