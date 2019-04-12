<template>
  <app-student></app-student>
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
