import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'

Vue.component('app-message', Message); //registers my component so now I can use app-message selector

new Vue({
  el: '#app',
  render: h => h(App)
})
