<template>
  <div id="app">
    <label>Name:</label>
    <input type="text" v-model="name">
    <br>
    <label>Hour:</label>
    <input type="text" v-model="hour">
    <br>
    <label>Organization:</label>
    <input type="text" v-model="organization">
    <br>
    <button @click="submitData()">Submit</button>
    <br>
    <br>
    <h6>In Database:</h6>
    <ul>
      <li
        v-for="i of studentrecords"
        v-bind:key="i['.key']"
      >{{i.name +" has a total of "+ i.hours + " for " + i.organization}}</li>
    </ul>
  </div>
</template>


<script>
import { initializeApp } from "firebase";
import { studentRecordsref } from "./firebase";

export default {
  data() {
    return {};
  },
  firebase: {
    studentrecords: studentRecordsref
  },
  methods: {
    submitData() {
      studentRecordsref.push({
        name: this.name,
        hours: this.hour,
        organization: this.organization
      });
    }
  }
};
</script>

<style lang="scss">
</style>
