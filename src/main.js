import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueNoty from 'vuejs-noty';
Vue.use(VueNoty);
import 'vuejs-noty/dist/vuejs-noty.css';
import "vue-wysiwyg/dist/vueWysiwyg.css";

import VueDisqus from 'vue-disqus';
import wysiwyg from "vue-wysiwyg";
Vue.use(VueDisqus);
Vue.use(wysiwyg, {});

Vue.config.productionTip = false;
const authData=localStorage.getItem("auth");

new Vue({
  router,
  data:{
    auth:authData?JSON.parse(authData):{}
  },
  render: h => h(App)
}).$mount("#app");
