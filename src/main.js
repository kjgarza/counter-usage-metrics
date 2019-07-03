// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueVega from 'vue-vega'

Vue.use(VueVega)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
