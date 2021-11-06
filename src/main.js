import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import bucketList from './todos-data.js'

Vue.config.productionTip = false

let data = {
  bucketListShares: mock,
  todos: bucketList,
  currentItem: {},
  planMenuOn: false,
  message: "",
  show: 'all',
  drag: {}
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
