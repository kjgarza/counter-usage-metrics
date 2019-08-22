<template>
  <div class="container-fluid metrics" v-bind:title=tooltip>
      <a v-if="views > 0" class="usage-counts usage-views" v-bind:href="link+'#views-tab'">
        <viewIcon class="icon-metrics" />  
        {{views}} Views
      </a>
      <a v-if="downloads > 0" class="usage-counts usage-downloads" v-bind:href="link+'#downloads-tab'">
        <downloadIcon class="icon-metrics" />
        {{downloads}} Downloads
      </a>
      <a v-if="citations > 0"  class="usage-counts usage-downloads" v-bind:href="link+'#citations-tab'">
        <citationIcon class="icon-metrics" />  
        {{citations}} Citations
      </a>
  </div>
</template>

<script>

import ChartTimeDistribution from './ChartTimeDistribution.vue'
import BaseWidget from './BaseWidget.vue'

export default {
  name: 'DataCiteWidget',
  extends: BaseWidget,
  components:{
  }
}
</script>


<style scoped>

a.usage-counts{margin-right:1.5em}.nav-tabs.usage{border-bottom:1px solid #dddddd}.nav-tabs.usage>li{float:left;margin-bottom:-1px}.nav-tabs.usage>li>a{margin-right:2px;line-height:1.42857143;border:1px solid #dddddd;border-radius:4px 4px 0 0;border-bottom-color:#dddddd}.nav-tabs.usage>li>a:hover{background-color:#dddddd;border-color:#dddddd #dddddd #dddddd}.nav-tabs.usage>li.active>a,.nav-tabs.usage>li.active>a:hover,.nav-tabs.usage>li.active>a:focus{color:#555555;cursor:default;background-color:#ffffffff;border:1px solid #dddddd;border-bottom-color:#ffffffff}.nav-tabs.usage>li.active :before{border-bottom:11px solid #ffffffff}rect.bar.relations-alt{fill:#68B3C8}rect.bar.relations-high{fill:#66615B}.panel-body.usage-charts{border-left:1px solid #dddddd;border-right:1px solid #dddddd}


@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,400italic,600italic');



/*! CSS Used from: Embedded */
/*! @import https://assets.datacite.org/stylesheets/datacite.css */
svg:not(:root){overflow:hidden;}
@media print{
*,*:before,*:after{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important;}
}
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
.chart div{background-color:white;text-align:right;padding:3px;margin:1px;color:white;}

/*! CSS Used from: Embedded */
/*! @import https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css */
.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.fa-download:before{content:"\f019";}
.fa-eye:before{content:"\f06e";}
/*! end @import */
/*! CSS Used from: Embedded */
/*! @import https://assets.datacite.org/stylesheets/datacite.css */
a{background-color:transparent;}
a:active,a:hover{outline:0;}
img{border:0;}
@media print{
*,*:before,*:after{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important;}
a,a:visited{text-decoration:underline;}
a[href]:after{content:" (" attr(href) ")";}
img{page-break-inside:avoid;}
img{max-width:100%!important;}
}
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
a{color:#337ab7;text-decoration:none;}
a:hover,a:focus{color:#23527c;text-decoration:underline;}
a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
img{vertical-align:middle;}
.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;}
.container-fluid:before,.container-fluid:after{content:" ";display:table;}
.container-fluid:after{clear:both;}
.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px;}
a{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:'Raleway', "Helvetica", Arial, sans-serif;}
a{color:#68B3C8;-webkit-transition:all 150ms linear;-moz-transition:all 150ms linear;-o-transition:all 150ms linear;-ms-transition:all 150ms linear;transition:all 150ms linear;}
a:hover,a:focus{color:#3091B2;text-decoration:none;}
a:focus,a:active{outline:0;}
.fa{width:18px;text-align:center;}
.container-fluid{max-width:1420px;padding:0 1em;}
.panel-footer{margin-top:0;line-height:1.4em;background-color:#FFFFFF;color:#777777;}
.panel-footer img{margin-top:-0.33em;}
.panel-footer a{color:#222222;}
/*! end @import */
/*! CSS Used from: Embedded */
@media print{
*[data-v-bb59872a],*[data-v-bb59872a]:before,*[data-v-bb59872a]:after{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important;}
}
*[data-v-bb59872a]{-webkit-box-sizing:border-box;box-sizing:border-box;}
*[data-v-bb59872a]:before,*[data-v-bb59872a]:after{-webkit-box-sizing:border-box;box-sizing:border-box;}
/*! CSS Used fontfaces */
@font-face{font-family:'FontAwesome';src:url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.eot?v=4.6.1');src:url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.eot#iefix&v=4.6.1') format('embedded-opentype'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.woff2?v=4.6.1') format('woff2'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.woff?v=4.6.1') format('woff'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.ttf?v=4.6.1') format('truetype'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.svg?v=4.6.1#fontawesomeregular') format('svg');font-weight:normal;font-style:normal;}
@font-face{font-family:'FontAwesome';src:url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.eot?v=4.6.1);src:url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.eot#iefix&v=4.6.1) format('embedded-opentype'),url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.woff2?v=4.6.1) format('woff2'),url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.woff?v=4.6.1) format('woff'),url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.ttf?v=4.6.1) format('truetype'),url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.svg?v=4.6.1#fontawesomeregular) format('svg');font-weight:normal;font-style:normal;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:400;src:local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNyCg4Q4FqL_KWxWMT.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:400;src:local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNyCg4TYFqL_KWxQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:600;src:local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptpg8zYS_SKggPNyCgwkqV_DNCb71ka4ZiO.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:600;src:local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptpg8zYS_SKggPNyCgwkqV_AtCb71ka4Q.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:400;src:local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:400;src:local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:600;src:local('Raleway SemiBold'), local('Raleway-SemiBold'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwPIsWqhPANqczVsq4A.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:600;src:local('Raleway SemiBold'), local('Raleway-SemiBold'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwPIsWqZPANqczVs.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}

/*! CSS Used from: Embedded */
/*! @import https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css */
.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.fa-download:before{content:"\f019";}
.fa-eye:before{content:"\f06e";}
/*! end @import */
/*! CSS Used from: Embedded */
/*! @import https://assets.datacite.org/stylesheets/datacite.css */
a{background-color:transparent;}
a:active,a:hover{outline:0;}
img{border:0;}
@media print{
*,*:before,*:after{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important;}
a,a:visited{text-decoration:underline;}
a[href]:after{content:" (" attr(href) ")";}
img{page-break-inside:avoid;}
img{max-width:100%!important;}
}
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
a{color:#222222;text-decoration:none;}
a:hover,a:focus{color:#23527c;text-decoration:underline;}
a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
img{vertical-align:middle;}
.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px;}
a{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:'Raleway', "Helvetica", Arial, sans-serif;}
a{color:#222222;-webkit-transition:all 150ms linear;-moz-transition:all 150ms linear;-o-transition:all 150ms linear;-ms-transition:all 150ms linear;transition:all 150ms linear;}
a:hover,a:focus{color:#222222;text-decoration:none;}
a:focus,a:active{outline:0;}
.fa{width:18px;text-align:center;}
.panel-footer{margin-top:0;line-height:1.4em;background-color:#FFFFFF;color:#777777;}
.panel-footer img{margin-top:-0.33em;}
.panel-footer a{color:#222222;}
/*! CSS Used fontfaces */
@font-face{font-family:'FontAwesome';src:url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.eot?v=4.6.1');src:url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.eot#iefix&v=4.6.1') format('embedded-opentype'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.woff2?v=4.6.1') format('woff2'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.woff?v=4.6.1') format('woff'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.ttf?v=4.6.1') format('truetype'),url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/fonts/fontawesome-webfont.svg?v=4.6.1#fontawesomeregular') format('svg');font-weight:normal;font-style:normal;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:400;src:local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNyCg4Q4FqL_KWxWMT.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:400;src:local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNyCg4TYFqL_KWxQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:600;src:local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptpg8zYS_SKggPNyCgwkqV_DNCb71ka4ZiO.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:italic;font-weight:600;src:local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptpg8zYS_SKggPNyCgwkqV_AtCb71ka4Q.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:400;src:local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:400;src:local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:600;src:local('Raleway SemiBold'), local('Raleway-SemiBold'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwPIsWqhPANqczVsq4A.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
@font-face{font-family:'Raleway';font-style:normal;font-weight:600;src:local('Raleway SemiBold'), local('Raleway-SemiBold'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwPIsWqZPANqczVs.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}

</style>
