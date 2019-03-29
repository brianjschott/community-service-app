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
export default {
  props: [],
  //this is ES6 syntax, otherwise I would have to say data: function() {}
  data() {
    return {
      message: "hi"
    };
  },
  methods: {}
};
</script>

<style>
</style>
