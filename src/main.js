// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import VueSession from 'vue-session'
Vue.component('icon', Icon)
export default {
  components: {
    Icon
  }
}
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueSession)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
