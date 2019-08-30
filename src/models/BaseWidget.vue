
<script>

import axios from 'axios';
import gql from 'graphql-tag'

import viewIcon from '@/assets/viewIcon.svg';
import downloadIcon from '@/assets/downloadIcon.svg';
import citationIcon from '@/assets/citationIcon.svg';
import smallBadge from '@/assets/smallBadge.svg';
import mediumBadge from '@/assets/mediumBadge.svg';


export default {
  name: 'BaseWidget',
  components:{
    viewIcon,
    downloadIcon,
    smallBadge,
    mediumBadge,
    citationIcon
  },
  props: {
    dataInput: {
      type: Object,
      required: false,
      validator: function (value) {
        let keys = Object.keys(value)
        return ["citations","views","downloads"].some(r=>keys.includes(r))
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
      // aggregations: "query_aggregations,metrics_aggregations",
      // sourceId: "datacite-related,datacite-usage,datacite-crossref,crossref",
      // crossref: "",
      // datacite: "",
      counts: {},
      // relationTypeId: [],
      // metrics: [],
      // viewsDistribution: []
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
      let message = ""
      message += this.datacite ? this.datacite + " from DataCite " : ""  
      message += this.crossref ? this.crossref + " from Crossref" : ""  
      return  message
    }
  },
  apollo: {
    counts: { 
      query: gql` query CountsQuery($doi: ID!) 
        {
            counts: dataset(id: $doi) {
              id
              views: viewCount
              downloads: downloadCount
              citations: citationCount
            } 
        }
      `,
      variables() {
        return {doi: this.doi}
      },
      result ({ data, loading, networkStatus }) {
        if(this.isLocal() == true){
          this.grabMetrics(this.dataInput);
        }else{
          this.grabMetrics(data.counts) 
        }  
      },
      // Error handling
      error (error) {
        // eslint-disable-next-line
        console.error('We\'ve got an error!', error)
      },
      // update: data => data.dataset
    }
  },
  methods:{
    isLocal: function(){
      if(this.dataInput == null && typeof this.doi != "undefined"){
        return false
      }
      return true
    },
    // getMetrics: function(){
    //   if(this.dataInput == null && typeof this.doi != "undefined"){
    //     // this.grabMetrics(this.graphQlReponse);
    //   }else{
    //     this.grabMetrics(this.dataInput);
    //   }
    // },
    grabMetrics: function(data){
      this.views = data.views || ""
      this.downloads = data.downloads || ""
      this.citations = data.citations || ""
      this.crossref = data.crossref || ""
      this.datacite = data.datacite || ""
    // },
    // requestMetrics: function(){
    //   axios
    //     .get(this.url,
    //       {
    //       params: {
    //         sourceId: this.sourceId,
    //         relationTypeId: this.relationTypeId,
    //         aggregations: this.aggregations,
    //         doi: this.doi,
    //         extra: true,
    //         'page[size]': 0,
    //         agent: "datacite-widget"
    //       },
    //       headers: {'Accept': 'application/vnd.api+json; version=2'}
    //     } )
    //     .then(response => {
    //       this.metrics = response.data.meta
    //       this.reduceMetrics()
    //     })
    //     .catch(error => {
    //       // eslint-disable-next-line
    //       console.log(error)
    //       this.errored = true
    //     })
    //     .finally(() => this.loading = false)
    // },
    // reduceMetrics: function(){
    //   this.views = this.metrics.viewsHistogram.count
    //   this.downloads = this.metrics.downloadsHistogram.count
    //   // eslint-disable-next-line
    //   console.log(this.metrics)
    //   this.viewsDistribution = this.metrics.relationTypes[0].yearMonths
    //   this.citations = this.metrics.doisCitations.count
    //   // this.citations = this.metrics.uniqueCitations.citations
    }
  // },
  // watch: {
  //   getEvents: {
  //     handler: 'getMetrics',
  //     // immediate: true
  //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* https://stackoverflow.com/questions/12675622/script1028-expected-identifier-string-or-number */
.icon-metrics {
  width: 17px;
  height: 17px;
  /* margin-right: 3px; */
  
  display:inline-block;
}




a{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:'Cairo', "Helvetica", Arial, sans-serif;vertical-align:top;}
a{color:#222222;-webkit-transition:all 150ms linear;-moz-transition:all 150ms linear;-o-transition:all 150ms linear;-ms-transition:all 150ms linear;transition:all 150ms linear;text-decoration:none;}
a:hover,a:focus{color:#222222;text-decoration:none;}
a:focus,a:active{outline:0;}
a,a:visited{text-decoration:none;}

</style>
