<template>
  <div class="metrics">
  <div class="panel-footer">
    <a class="usage-counts usage-views" v-bind:href=link>
      <div class="fa fa-eye"></div>
      {{views}} Views
    </a>
    <a class="usage-counts usage-downloads" v-bind:href=link>
      <div class="fa fa-download"></div>
      {{downloads}} Downloads
    </a>
    <a class="usage-counts usage-downloads" v-bind:href=link>
      <div class="fa fa-download"></div>
      {{citations}} Citations
    </a>

  </div>
  <ChartTimeDistribution />
  </div>
</template>

<script>

import ChartTimeDistribution from './ChartTimeDistribution.vue'

export default {
  name: 'CounterUsageMetrics',
  components:{
    ChartTimeDistribution
  },
  props: {
    dataInput: {
      type: Array,
      required: false,
      validator: function (value) {
        return value.match(/^[A-Za-z0-9][-._;()/:A-Za-z0-9]+$/) !== -1
      }
    },
    doi: {
      type: String,
      required: true,
      validator: function (value) {
        return value.match(/^[A-Za-z0-9][-._;()/:A-Za-z0-9]+$/) !== -1

      }
    },
    display: {
      type: String,
      required: false,
      validator: function (value) {
        return value.match(/^[A-Za-z0-9][-._;()/:A-Za-z0-9]+$/) !== -1
      }
    }
  },
  data: function(){
    return{
      views: 30,
      downloads: 20,
      citations: 0
    }
  },
  computed: {
    link(){
      return "https://search.datacite.org/works/"+this.doi+"#views-tab"
    }
  },
  methods: {
    getMetrics(){

    }
  },
  mounted(){
    // if(this.dataInput.size == 0){
      // getMetrics()
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,400italic,600italic');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');
@import url('https://assets.datacite.org/stylesheets/datacite.css');

</style>
