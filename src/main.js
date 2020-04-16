import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import TextareaAutosize from 'vue-textarea-autosize'
 
Vue.use(TextareaAutosize)

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  
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


