import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import dateFilter from "./filters/date.filter";

import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
