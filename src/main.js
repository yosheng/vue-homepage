// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Fullpage
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

// External Library
import './assets/css/lineIcons-1.1/LineIcons.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueFullPage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
