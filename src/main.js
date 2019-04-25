import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
import HandleDataPlugin from './mixins/handleData'

Vue.use(MpvueRouterPatch)
Vue.use(HandleDataPlugin)

Vue.config.productionTip = false
const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
