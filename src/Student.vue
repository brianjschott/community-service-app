<template>
  <div>

    <h1>Student View</h1>

  </div>

</template>

<script>
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "community-service-app-f1dd3.firebaseapp.com",
    databaseURL: "https://community-service-app-f1dd3.firebaseio.com",
    projectId: "community-service-app-f1dd3",
    storageBucket: "community-service-app-f1dd3.appspot.com",
    messagingSenderId: "280800271469"
  };
  firebase.initializeApp(config);

  export default {
    props: [],
    //this is ES6 syntax, otherwise I would have to say data: function() {}
    data() {
      return {
        message: ''
      }
    },
    methods: {

    }
  }
</script>

<style>


</style>
