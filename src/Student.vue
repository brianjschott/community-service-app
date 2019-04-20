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
      <GChart 
        type = "PieChart"
        :data =  "hoursData"
        :options = "hoursChartOptions"
        />
    </div>
  </div>
</template>

<script>

import { initializeApp } from "firebase";
import { studentRecordsref } from "./firebase";
import { GChart } from 'vue-google-charts'

export default {
  props: [],
  components: {
    GChart
  },
  data() {
    return {
      options: {'title':'My Average Day', 'width':550, 'height':400},
      hoursData: [
          ['Hours', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ],
      hoursChartOptions: {
        chart: {
          title: 'Overall Community Service Progress'
        }
      }
    };
  },
  firebase: {
    studentrecords: studentRecordsref
  },
  methods: {
    
  },
    beforeMount() {
      this.drawChart();
      console.dir(studentRecordsref)
    }
  }

</script>

<style>
</style>