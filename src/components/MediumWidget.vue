<template>
  <div class="container-fluid metrics">

    <div class="panel-footer">
      <img src="../assets/medium_widget.png" v-bind:alt="this.alt">
      <a v-if="views > 0" class="usage-counts usage-views" v-bind:href=link>
        <div class="fa fa-eye"></div>
        {{views}} Views
      </a>
      <a v-if="downloads > 0" class="usage-counts usage-downloads" v-bind:href=link>
        <div class="fa fa-download"></div>
        {{downloads}} Downloads
      </a>
      <a v-if="citations > 0"  class="usage-counts usage-downloads" v-bind:href=link>
        <div class="fa fa-quote-right"></div>
        <font-awesome-icon icon="user-secret" />

        {{citations}} Citations
      </a>
    </div>
  </div>
</template>

<script>

import BaseWidget from './BaseWidget.vue'

export default {
  name: 'MediumWidget',
  extends: BaseWidget
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,400italic,600italic');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');
@import url('https://assets.datacite.org/stylesheets/datacite.css');

</style>
