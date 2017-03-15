import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'
import store from './app/store/main'
import router from './app/routes'
import Axios from 'axios'

// Vuex-router-sync
VuexRouterSync.sync(store, router)
Vue.router = router

// Axios
Axios.defaults.baseURL = process.env.API_LOCATION
Axios.defaults.headers.common.Accept = 'application/json'
Vue.$http = Axios

// Filters
import filters from './app/filters'
Vue.prototype.filters = filters

// Plugins
import velocity from 'velocity-animate'
window.velocity = velocity

// Page style
import 'bootstrap/dist/css/bootstrap.css'
import './assets/app.styl'

// App
import App from './app/main'
/* eslint-disable no-new */
new Vue(App).$mount('#app')