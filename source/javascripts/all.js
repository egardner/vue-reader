import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Search from './components/Search.vue'

Vue.use(VueRouter)
Vue.config.debug = true

let router = new VueRouter({
  // history: true
})

router.map({
  '/': {
    component: Search
  },
  "*": {
    component: Search
  }
})

router.start(App, '#main')
