import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDm-ZxznU5cHd6CfN9lWpKPnrO-wi58psc",
  authDomain: "geo-ninja-11fd0.firebaseapp.com",
  databaseURL: "https://geo-ninja-11fd0.firebaseio.com",
  projectId: "geo-ninja-11fd0",
  storageBucket: "geo-ninja-11fd0.appspot.com",
  messagingSenderId: "170136064299",
  appId: "1:170136064299:web:db330c2a6383c376d4f56e"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
