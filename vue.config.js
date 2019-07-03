// vue.config.js
module.exports = {
  devServer: {
    proxy: 'https://data.datacite.org/',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }  
}