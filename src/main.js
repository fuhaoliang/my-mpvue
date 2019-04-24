import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
const Fly = require('flyio/dist/npm/wx')
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$fly = new Fly()
const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
