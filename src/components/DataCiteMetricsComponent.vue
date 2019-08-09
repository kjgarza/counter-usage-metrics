<template>
  <div class="container-fluid metrics">
    <div class="panel-footer">
      <div v-if="display == 'small'">
        <SmallWidget v-bind:doi="doi" v-bind:display="display"/>
      </div>
      <div v-if="display == 'medium'">
        <MediumWidget v-bind:doi="doi" v-bind:display="display"/>
      </div>
      <div v-if="display == 'datacite'">
        <CounterUsageMetrics v-bind:doi="doi" v-bind:display="display"/>
      </div>
    </div>
  </div>
</template>

<script>

// import BaseWidget from './components/BaseWidget.vue'
import SmallWidget from './SmallWidget.vue'
import MediumWidget from './MediumWidget.vue'
import CounterUsageMetrics from './CounterUsageMetrics.vue'

export default {
  name: 'DataCiteMetricsComponent',
  components:{
    CounterUsageMetrics,
    MediumWidget,
    SmallWidget
  },
  props: {
    dataInput: {
      type: Object,
      required: false,
      validator: function (value) {
        return value.indexOf('views') > -1
      }
    },
    doi: {
      type: String,
      required: true,
      validator: function (value) {
        return value.match(/^10\.\d{4,5}\/[-\._;()\/:a-zA-Z0-9\*~\$\=]+/)
      }
    },
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
