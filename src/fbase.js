import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD1WYapSb3fCybXN5anUgbbuyDP-fQjEaA",
  authDomain: "adventcalendar-d50fc.firebaseapp.com",
  projectId: "adventcalendar-d50fc",
  storageBucket: "adventcalendar-d50fc.appspot.com",
  messagingSenderId: "983622613978",
  appId: "1:983622613978:web:85cc4971a5f7feb5241ee3",
  measurementId: "G-XSVJK6MGJW"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();