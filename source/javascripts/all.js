import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Search from './components/Search.vue'

Vue.use(VueRouter)
let router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/search': {
    component: Search
  },
  "*": {
    component: Home
  }
})

router.start(App, '#main')
