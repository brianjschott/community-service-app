import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyDdbPpq-EafhHH7x7-XPhMmIzSqhuxq9kY",
  authDomain: "community-service-45b09.firebaseapp.com",
  databaseURL: "https://community-service-45b09.firebaseio.com",
  projectId: "community-service-45b09",
  storageBucket: "community-service-45b09.appspot.com",
  messagingSenderId: "126445941357"
});

export const db = app.database();
export const studentRecordsref = db.ref("studentrecords");