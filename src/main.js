import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import TextareaAutosize from 'vue-textarea-autosize'
 
Vue.use(TextareaAutosize)

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCRaJie9NyiJfGCqKVeIU2PTo8fY5V5fI",
  authDomain: "calendario-55afa.firebaseapp.com",
  databaseURL: "https://calendario-55afa.firebaseio.com",
  projectId: "calendario-55afa",
  storageBucket: "calendario-55afa.appspot.com",
  messagingSenderId: "611119583038",
  appId: "1:611119583038:web:8c81beb30fd9d06ee2a66f"
};
// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


