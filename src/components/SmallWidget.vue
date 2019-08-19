<template>
  <div v-bind:title=tooltip>
     <!-- <img src="../assets/small_widget.png" v-bind:alt="this.alt">  -->
     <smallBadge class="small-badge" v-bind:alt="this.alt" />  
      <a v-if="views > 0"  v-bind:href="link+'#views-tab'">
        {{views}} Views
      </a>
      <a v-if="downloads > 0" v-bind:href="link+'#downloads-tab'">
        {{downloads}} Downloads
      </a>
      <a v-if="citations > 0"  v-bind:href="link+'#citations-tab'"> 
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
  a{font-size: 13px} 
</style>
