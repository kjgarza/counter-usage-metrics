<template>
  <div class="container-fluid metrics">

    <div class="panel-footer">
      <a v-if="views > 0" class="usage-counts usage-views" v-bind:href=link>
        <div class="fa fa-eye"></div>
        {{views}} Views
      </a>
      <a v-if="downloads > 0" class="usage-counts usage-downloads" v-bind:href=link>
        <div class="fa fa-download"></div>
        {{downloads}} Downloads
      </a>
      <a v-if="citations > 0"  class="usage-counts usage-downloads" v-bind:href=link>
        <div class="fa fa-quote-right"></div>
        <font-awesome-icon icon="user-secret" />

        {{citations}} Citations
      </a>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'BaseWidget',
  components:{
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
  data: function(){
    return{
      views: "",
      downloads: "",
      citations: "",
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
            agent: "datacite-widget"
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
  created () {
    this.getMetrics()
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
