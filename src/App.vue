<template>
  <img alt="Vue logo" src="https://media.giphy.com/media/CXg3EY5GyUPlGIgEjX/giphy.gif">
  <Contador titulo="Contador 01" :valor="5"/>
  <Contador titulo="Contador 02" :valor="getVal()"/>
  <Contador titulo="Contador 03"/>
</template>

<script>
import Contador from './components/Contador.vue';

export default {
  name: 'App',
  components: {
    Contador
  },
  methods:{
    getVal(){
      return 5+5*100
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
