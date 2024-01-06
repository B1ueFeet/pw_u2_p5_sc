<template>
  <calculator/>
</template>

<script>
import Calculator from './components/Calculator.vue';

export default {
  name: 'App',
  components: {
    Calculator
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
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
