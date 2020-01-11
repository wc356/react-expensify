import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
  // measurementId: "G-QDHN7T031H"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_ changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then(snapshot => {
// //     const expenses = [];

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref("expenses").on("value", snapshot => {
// //   const expenses = [];

// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database.ref("expenses").push({
// //   description: "Laundry",
// //   note: "Laundry expense",
// //   amount: 350,
// //   createdAt: 2300
// // });

// // database.ref("notes").push({
// //   title: "Course Topics",
// //   body: "React Native, Python"
// // });

// // database.ref().on("value", snapshot => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // database
// //   .ref()
// //   .set({
// //     name: "Woo Choi",
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software Developer",
// //       company: "Goggle"
// //     },
// //     location: {
// //       city: "New York",
// //       country: "United States"
// //     }
// //   })
// //   .then(() => {
// //     console.log("Data is saved!");
// //   })
// //   .catch(error => {
// //     console.log("This failed.", error);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle"
// // });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("Data was removed");
// //   })
// //   .catch(error => {
// //     console.log("Did not remove data", error);
// //   });
