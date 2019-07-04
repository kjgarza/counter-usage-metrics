<template>
  <div class="metrics">
      <div class="row center">
    <ChartTimeDistribution v-bind:data-input={dataInputApi} v-bind:doi={doi} />
  </div>

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
      <div class="fa fa-quote-right"></div>
      {{citations}} Citations
    </a>

  </div>
  </div>
</template>

<script>

import ChartTimeDistribution from './ChartTimeDistribution.vue'
import axios from 'axios';

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
      // validator: function (value) {
      //   return value.match(/^[A-Za-z0-9][-._;()/:A-Za-z0-9]+$/) !== -1

      // }
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
      citations: 0,
      sourceId: [],
      relationTypeId: [],
      metrics: [],
      viewsDistribution: [],

    }
  },
  computed: {
    link(){
      return "https://search.datacite.org/works/"+this.doi+"#views-tab"
    },
    url(){
      return "https://api.datacite.org/events"
    },
    dataInputApi(){
      return this.viewsDistribution
    }
  },
  methods:{
    getMetrics: function(){
      axios
        .get(this.url,
          {
          params: {
            sourceId: this.sourceId,
            relationTypeId: this.relationTypeId,
            doi: this.doi,
            extra: true,
            size: 0,
            email: "counter-usage-metrics-component"
          },
          headers: {'Accept': 'application/vnd.api+json; version=2'}
        } )
        .then(response => {
          this.metrics = response.data.meta
          this.reduceMetrics()
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    },
    reduceMetrics: function(){
      this.views = this.metrics.doisUsageTypes[0].relationTypes[1].sum
      this.downloads = this.metrics.doisUsageTypes[0].relationTypes[2].sum
      this.viewsDistribution = this.metrics.relationTypes[0].yearMonths
    }
  },
  mounted () {
    this.getMetrics()
    // console.log(this.metrics)
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
