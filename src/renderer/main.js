import Vue from 'vue'
import axios from 'axios'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import locale from 'iview/src/locale/lang/en-US'

import App from './App'
import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(iView, { locale })

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
