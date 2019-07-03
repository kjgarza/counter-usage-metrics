<template>
  <div class="chart">
     <vega-lite :spec="spec"></vega-lite>
  </div>
</template>

<script>
export default {
  name: 'ChartTimeDistribution',
  props: {
  },
  data: function(){
    return{
    spec:     
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v3.json",	
          "description": "A simple bar chart with embedded data.",	
          "selection": {	
            "grid": {	
              "type": "interval", "bind": "scales"	
            }	
          },	  
          "data": {	
                "values": [
              {"id": "2018-01-01","sum": 208}, {"id": "2018-02-01","sum": 232},
              {"id": "2017-04-01","sum": 250}, {"id": "2018-05-01","sum": 400},
              {"id": "2016-06-01","sum": 38}, {"id": "2018-09-01","sum": 235}
            ]
          },	
          "axes": [	
            { "orient": "bottom", "scale": "xscale", "tickCount": 5},	
            { "orient": "left", "scale": "yscale", "tickCount": 5, "labelFont":"'Raleway', 'Helvetica', Arial, sans-serif"}	
          ],  	
          "mark": 	
            {	
              "type": "bar",	
              "color":"#68B3C8",
              "tooltip": {"content": "data"}	
            }	
          ,	
          "width": 500,	
          "encoding": {	
            "x": {"field": "id","type": "ordinal", "timeUnit":"yearmonth","title": "ddddss", "axis":{"grid":false}},	
            "y": {"field": "sum", "type": "quantitative", "title": "ddd"}
            // "tooltip": {"field": "sum", "type": "quantitative"}	
          }	
        }	
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

</style>


