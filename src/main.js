import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCwtkJNq3--LrrWAlgYvicTkfTkAHOinr8",
    authDomain: "card-7465e.firebaseapp.com",
    projectId: "card-7465e",
    storageBucket: "card-7465e.appspot.com",
    messagingSenderId: "213306761815",
    appId: "1:213306761815:web:1b86bd1f1946a45d8bf912"
  };

firebase.initializeApp(firebaseConfig)

createApp(App).mount('#app')
