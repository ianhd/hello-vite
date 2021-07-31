<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <button @click.prevent="signInGoogle">Google Sign In</button>
  <button @click.prevent="signInFacebook">Facebook Sign In</button>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";

//import * as firebase from "firebase/app"
//import "firebase/auth"
import firebase from 'firebase'

const msg1 = "my message"

const signInGoogle = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(data => {
            const picture = data.additionalUserInfo.profile.picture
            const email = data.user.email
            console.log(data)

            document.body.insertAdjacentHTML('beforebegin',`<img src="${picture}" />`)
        })
}

const signInFacebook = () => {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(data => console.table(data))
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
