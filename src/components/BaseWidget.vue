
<script>

import axios from 'axios';
import viewIcon from '@/assets/viewIcon.svg';
import downloadIcon from '@/assets/downloadIcon.svg';
import citationIcon from '@/assets/citationIcon.svg';


export default {
  name: 'BaseWidget',
  components:{
    viewIcon,
    downloadIcon,
    citationIcon
  },
  props: {
    dataInput: {
      type: Object,
      required: false,
      validator: function (value) {
        let keys = Object.keys(value)
        return ["citations","views","downloads","crossref","datacite"].includes(keys)
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
      aggregations: "query_aggregations",
      sourceId: "datacite-related,datacite-usage,datacite-crossref,crossref",
      crossref: "",
      datacite: "",
      relationTypeId: [],
      metrics: [],
      viewsDistribution: []
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
      if(typeof this.dataInput == "undefined"){
        this.requestMetrics();
      }else{
        this.grabMetrics();
      }
    },
    grabMetrics: function(){
      this.views = this.dataInput.views
      this.downloads = this.dataInput.downloads
      this.citations = this.dataInput.citations
      this.crossref = this.dataInput.crossref
      this.datacite = this.dataInput.datacite
    },
    requestMetrics: function(){
      axios
        .get(this.url,
          {
          params: {
            sourceId: this.sourceId,
            relationTypeId: this.relationTypeId,
            aggregations: this.aggregations,
            doi: this.doi,
            extra: true,
            'page[size]': 0,
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
      // eslint-disable-next-line
      console.log(this.metrics)
      this.viewsDistribution = this.metrics.relationTypes[0].yearMonths
      this.citations = this.metrics.doisCitations.count
    }
  },
  watch: {
    getEvents: {
      handler: 'getMetrics',
      immediate: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.icon {
  width: 17px;
  height: 17px;
  /* margin-right: 3px; */
  display:inline-block;
}
</style>
