<template>
  <div class="container-fluid metrics">


    <div class="row">
      <div class="col-sm-2">
        <img src="../assets/medium_widget.png" v-bind:alt="this.alt">
      </div>
      <div class="col-sm-1">
      </div>
      <div class="col-sm-2">
        <a v-if="views > 0" class="usage-counts usage-views" v-bind:href=link>
          <viewIcon class="icon" /> 
          {{views}} Views
        </a>
        <a v-if="downloads > 0" class="usage-counts usage-downloads" v-bind:href=link>
          <downloadIcon class="icon" />
          {{downloads}} Downloads
        </a>
        <a v-if="citations > 0" class="usage-counts usage-downloads" v-bind:href=link>
          <citationIcon class="icon" />  

          {{citations}} Citations
        </a>
      </div>
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



<style scoped>
 /* https://vue-svg-loader.js.org/#example */

</style>
