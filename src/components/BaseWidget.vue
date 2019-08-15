
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
        return value.match(/^10\.\d{4,5}\/[-._;()/:a-zA-Z0-9*~$=]+/)
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
      return "https://search.datacite.org/works/"+this.doi
    },
    url(){
      return "https://api.datacite.org/events"
    },
    dataInputApi(){
      return this.viewsDistribution
    },
    alt(){
      return Number(this.views) + " Views " + Number(this.downloads) + " Downloads " +  Number(this.citations) + " Citations from DataCite"
    },
    tooltip(){
      return this.evets.datacite + " from DataCite" + this.evets.crossref + " from Crossref"
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
  watch: {
    searchText: {
      handler: 'getMetrics',
      immediate: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
