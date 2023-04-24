import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  IconsPlugin,
  render: (h) => h(App)
}).$mount('#app')
