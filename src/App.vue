<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DoiMetricsComponent doi="10.7272/q6g15xs4" display="small"/>
    <br/>
    <DoiMetricsComponent doi="10.7272/q6g15xs4" display="medium"/>
    <br/>

    <DoiMetricsComponent doi="10.7272/q6g15xs4" display="datacite"/>
    <br/>

    <DoiMetricsComponent doi="10.7272/q6g15xs4"/>

    <br/>

    <DoiMetricsComponent doi="10.7272/q6g15xs4" display="medium" data-input='{"views": 77, "downloads":8, "citations":244324, "crossref":500}'/>

    <br/>

    <DoiMetricsComponent doi="" display="small" data-input='{"views": 77, "downloads":8, "citations":244324, "crossref":500}'/>

  </div>
</template>

<script>

import DoiMetricsComponent from './components/DoiMetricsComponent.vue'

export default {
  name: 'app',
  components: {
    DoiMetricsComponent
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
