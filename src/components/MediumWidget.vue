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
          <div class="fa fa-eye"></div>
          {{views}} Views
        </a>
        <a v-if="downloads > 0" class="usage-counts usage-downloads" v-bind:href=link>
          <div class="fa fa-download"></div>
          {{downloads}} Downloads
        </a>
        <a v-if="citations > 0" class="usage-counts usage-downloads" v-bind:href=link>
          <div class="fa fa-quote-right"></div>
          <font-awesome-icon icon="user-secret" />

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
