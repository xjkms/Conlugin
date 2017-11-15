import Vue from 'vue'
import App from './App.vue'
import Conlugin from 'Conlugin'
import Loading from '../components/loading/index'
Vue.use(Conlugin);
Vue.use(Loading);

new Vue({
  el: '#app',
  render: h => h(App)
})
