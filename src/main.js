import Vue from 'vue'
import App from './App.vue'
import Student from './Student.vue'

Vue.component('app-student', Student); //registers my component so now I can use app-message selector

new Vue({
  el: '#app',
  render: h => h(App)
})
