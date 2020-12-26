import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {store} from './store/index'
import firebase from "firebase";


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBNLAzUVfW7k3vy9EY1xrWtARRnmZEkG8g",
      authDomain: "customer-support-management.firebaseapp.com",
      projectId: "customer-support-management",
      storageBucket: "customer-support-management.appspot.com",
      messagingSenderId: "546602189377",
      appId: "1:546602189377:web:4b5d4f2602eff086c27cc0",
      measurementId: "G-S31JPHRS8B"
    });

    this.$store.dispatch("loadedTicet")
    this.$store.dispatch("loadedMessage")

  }
}).$mount('#app')
