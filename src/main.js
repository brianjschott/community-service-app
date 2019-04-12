import Vue from "vue";
import App from "./App.vue";
import "./firebase";
import Student from "./Student.vue";
import VueFire from "vuefire";
import { initializeApp } from "firebase";
import { studentRecordsref } from "./firebase";


Vue.use(VueFire);

Vue.component("app-student", Student); //registers my component so now I can use app-message selector

new Vue({
  el: "#app",
  render: h => h(App)
});
