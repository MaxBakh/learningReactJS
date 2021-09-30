import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyCxgiIcSs2nSO60CzMf_VAdEfiKei26p-A",
    authDomain: "testing-268e4.firebaseapp.com",
    databaseURL: "https://testing-268e4-default-rtdb.firebaseio.com",
    projectId: "testing-268e4",
    storageBucket: "testing-268e4.appspot.com",
    messagingSenderId: "130712041600",
    appId: "1:130712041600:web:330225b641fe885e748e65",
    measurementId: "G-0M3GMGQ1MG"
};


firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);