import App from './App'


import i18n from './locale/index.js' // 国际化
import store from "./store/index.js"
// #ifndef VUE3
import Vue from 'vue'

import './uni.promisify.adaptor'
Vue.config.productionTip = false

Vue.prototype.getSrc = function(img){
	return "http://107.173.35.113/statics/uploads/" + img;
}
uni.$store = store
App.mpType = 'app'

import uView from '@/uni_modules/uview-ui'

Vue.use(uView)

const app = new Vue({
	i18n,
	store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
	// i18n,
    app
  }
}
// #endif