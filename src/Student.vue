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
      <h4>Welcome!</h4>
    </div>
    <div id="piechart">
      <GChart 
        type = "BarChart"
        :data =  "studentHour"
        :options = "hoursChartOptions"
        />
    </div>

    <ul>
      <li 
        v-for="i of studentrecords" :key="i['.key']">
          {{i.hour}}
        </li>
    </ul>   

  </div>
</template>

<script>

import { initializeApp } from "firebase";
import { studentRecordsNewref , studentRecordsdata } from "./firebase";
import { GChart } from 'vue-google-charts'

export default {
  props: [],
  components: { 
    GChart
  },
  firestore: {
    studentrecords: studentRecordsdata
    
  },

  data() {
    return {
      
      studentHour: [
        ["Student Hour Bar", "Hours"],
        ["Hours",this.totalHours]
      ],
      hoursChartOptions: {
        hAxis:{
          minValue:0,
          maxValue: 100
        },
        chart: {
          title: 'Overall Community Service Progress',
          height: 500,
          width: 500
        }
      }
    }
  },
  computed: {
    totalHours: function() {
        let hours = 0;
        for (i of this.$firestore.studentrecords) {
          hours += i.hours
        }
        console.log(hours)
        return hours
      }

  },


  beforeMount() {

  }
}
</script>

<style>
</style>