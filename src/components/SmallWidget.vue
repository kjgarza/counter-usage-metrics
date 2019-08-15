<template>
  <div >
     <img src="../assets/small_widget.png" v-bind:alt="this.alt"> 
      <a v-if="views > 0"  v-bind:href=link>
        {{views}} Views
      </a>
      <a v-if="downloads > 0" v-bind:href=link>
        {{downloads}} Downloads
      </a>
      <a v-if="citations > 0"  v-bind:href=link> 
        {{citations}} Citations
      </a>
  </div>
</template>

<script>

import BaseWidget from './BaseWidget.vue'

export default {
  name: 'SmallWidget',
  extends: BaseWidget
}
</script>

<style scoped>

</style>
