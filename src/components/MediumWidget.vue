<template>
  <div class="metrics">


    <div class="wrapper">
      <div>
        <img src="../assets/medium_widget.png" v-bind:alt="this.alt">
      </div>

      <div>
        <a v-if="views > 0" class="usage-counts usage-views" v-bind:href=link>
          <viewIcon class="icon" /> 
          {{views}} Views
        </a>
        <br/>
        <a v-if="downloads > 0" class="usage-counts usage-downloads" v-bind:href=link>
          <downloadIcon class="icon" />
          {{downloads}} Downloads
        </a>
        <br/>
        <a v-if="citations > 0" class="usage-counts usage-downloads" v-bind:href=link>
          <citationIcon class="icon" />  

          {{citations}} Citations
        </a>
        <br/>
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
.wrapper {
  display: grid;
  text-align: left;
  grid-template-columns: max-content max-content 5px;
}

</style>
