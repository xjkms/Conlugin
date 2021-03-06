import Vue from 'vue'
import App from './App.vue'
import {install as Conlugin} from '../components/index'
import 'components/'

Vue.use(Conlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
