// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDob4EnAd2VtipSbZ4yC04DshywjilbIvs",
  authDomain: "tiendacomfama-1e381.firebaseapp.com",
  projectId: "tiendacomfama-1e381",
  storageBucket: "tiendacomfama-1e381.appspot.com",
  messagingSenderId: "373730484875",
  appId: "1:373730484875:web:31570323042f48cd972a8e",
  measurementId: "G-Z2H873RCCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);