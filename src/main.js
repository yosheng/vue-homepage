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
import 'fullpage.js/dist/fullpage.css'
import VueFullPage from 'vue-fullpage.js'

// External Library
import './assets/css/lineIcons-1.1/LineIcons.min.css'
import './assets/css/main.scss'
import './assets/css/movement.scss'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faBook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub, faSlideshare } from '@fortawesome/free-brands-svg-icons'

// animation
import Animated from 'animate.css'

library.add(faChevronDown, faBook)
library.add(faFacebook, faLinkedin, faGithub, faSlideshare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueFullPage)
Vue.use(Animated)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
