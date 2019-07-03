<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CounterUsageMetrics doi="10.25677/10968/570"/>
  </div>
</template>

<script>

import CounterUsageMetrics from './components/CounterUsageMetrics.vue'

export default {
  name: 'app',
  components: {
    CounterUsageMetrics
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
