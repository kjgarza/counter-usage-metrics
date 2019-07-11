// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueVega from 'vue-vega'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueVega)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
