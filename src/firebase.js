import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdbPpq-EafhHH7x7-XPhMmIzSqhuxq9kY",
  authDomain: "community-service-45b09.firebaseapp.com",
  databaseURL: "https://community-service-45b09.firebaseio.com",
  projectId: "community-service-45b09",
  storageBucket: "community-service-45b09.appspot.com",
  messagingSenderId: "126445941357"
});

export const db = firebaseApp.firestore();
//export const studentRecordsref = db.ref("studentrecords"); //will be deprecated shortly, kept for legacy code

//three collections on firebase
export const communityServiceEventsref = db.collection("community-service-events")
export const studentRecordsNewref = db.collection("students") //named this one "new" to differentiate it from the other one
export const organizationsRecordsref = db.collection("organizations")