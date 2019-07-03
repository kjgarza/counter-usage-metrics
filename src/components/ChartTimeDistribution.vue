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
  "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json",	
  "description": "A simple bar chart with embedded data.",	
  "selection": {	
    "grid": {	
      "type": "interval", "bind": "scales"	
    }	
  },	
  "data": {	
        "values": [
      {"id": "2018-01","sum": 208}, {"id": "2018-02","sum": 232},
      {"id": "2018-04","sum": 208}, {"id": "2018-05","sum": 400},
      {"id": "2018-06","sum": 208}, {"id": "2018-09","sum": 235}
    ]
  },	
  "axes": [	
    { "orient": "bottom", "scale": "xscale", "tickCount": 5},	
    { "orient": "left", "scale": "yscale", "tickCount": 5, "labelFont":"'Raleway', 'Helvetica', Arial, sans-serif"}	
  ],  	
  "mark": 	
    {	
      "type": "bar",	
      "color":"#68B3C8"	
    }	
  ,	
  "width": 500,	
  "encoding": {	
    "x": {"field": "id","type": "temporal", "timeUnit":"yearmonth","title": "", "scale": {"domain": ["2017-12", "2019-05"]}, "axis":{"grid":false}},	
    "y": {"field": "sum", "type": "quantitative", "title": "","scale": {"domain": [0, 500]}},	
    "tooltip": {"field": "sum", "type": "quantitative"}	
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
    if(this.dataInput.size == 0){
      getMetrics()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
