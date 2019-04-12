<template>
  <div>
    <div id="nav">
      <a class="active" href="./home.html"><i class="material-icons">home</i></a>
      <a href="./home.html"><i class="material-icons">show_chart</i></a>
      <a href="./home.html">Ipsum</a>
      <a href="./home.html">Dolor</a>
      <a href="./home.html"><i class="material-icons">person</i></a>
    </div>
      
    <div id="welcome student">
      <h4>Welcome <!--This will be replaced with the student's name -->Student,</h4>
    </div>
    <div id="piechart">
    </div>
  </div>
</template>

<script>

import { initializeApp } from "firebase";
import { studentRecordsref } from "./firebase";
import { google} from "google-charts";

export default {
  props: [],
  //this is ES6 syntax, otherwise I would have to say data: function() {}
  data() {
    return {
      options: {'title':'My Average Day', 'width':550, 'height':400},
      chart: new google.visualization.PieChart(document.getElementById('piechart'))

    };
  },
  firebase: {
    studentrecords: studentRecordsref
  },
  methods: {
    submitData: function() {
      studentRecordsref.push({
        name: this.name,
        hours: this.hour,
        organization: this.organization
      })
    },
      drawChart: function() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Hours_Worked', 2],
          ['Hours_notworked', 2]
        ]);
      }
    }
  }

</script>

<style>
</style>
