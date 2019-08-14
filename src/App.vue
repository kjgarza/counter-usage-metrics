<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DataCiteMetricsComponent doi="10.7272/q6g15xs4" display="small"/>
    <br/>
    <DataCiteMetricsComponent doi="10.7272/q6g15xs4" display="medium"/>
    <br/>

    <DataCiteMetricsComponent doi="10.7272/q6g15xs4" display="datacite"/>
    <br/>

    <DataCiteMetricsComponent doi="10.7272/q6g15xs4"/>

  </div>
</template>

<script>

import DataCiteMetricsComponent from './components/DataCiteMetricsComponent.vue'

export default {
  name: 'app',
  components: {
    DataCiteMetricsComponent
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
