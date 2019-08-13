<template>
  <div >
     <img src="../assets/small_widget.png" alt="1 citation on Dimensions."> {{views}} Views  {{downloads}} Downloads  {{citations}} Citations
  </div>

    <!-- <div >
     <img src="../assets/small_widget.png" alt="1 citation on Dimensions.">
    <p>
        {{views}} Views
  </p> <p>
        {{downloads}} Downloads
   </p> <p>
        {{citations}} Citations
    </p>
  </div> -->
</template>

<script>

import BaseWidget from './BaseWidget.vue'

export default {
  name: 'SmallWidget',
  extends: BaseWidget
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
