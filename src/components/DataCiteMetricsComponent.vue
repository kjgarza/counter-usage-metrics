<template>
<div>
      <div v-if="display == 'small'">
        <SmallWidget v-bind:doi="doi" v-bind:display="display" v-bind:data-input="dataInput"/>
      </div>
      <div v-if="display == 'medium'">
        <MediumWidget v-bind:doi="doi" v-bind:display="display" v-bind:data-input="dataInput"/>
      </div>
      <div v-if="display == 'datacite'">
        <CounterUsageMetrics v-bind:doi="doi" v-bind:display="display" v-bind:data-input="dataInput"/>
      </div>
    </div>
</template>

<script>

import SmallWidget from './SmallWidget.vue'
import MediumWidget from './MediumWidget.vue'
import CounterUsageMetrics from './CounterUsageMetrics.vue'

export default {
  name: 'DataCiteMetricsComponent',
  funtional: true,
  components:{
    CounterUsageMetrics,
    MediumWidget,
    SmallWidget
  },
  props: {
    dataInput: Object,
    doi: String,
    display: {
      type: String,
      required: false,
      validator: function (value) {
        return ["small","medium","datacite"].indexOf(value) > -1
      },
      default: "small"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
