import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Paginate from "vuejs-paginate";
import { Datetime } from "vue-datetime";
import dateFilter from "./filters/date.filter";

import "materialize-css/dist/js/materialize.min";
import "vue-datetime/dist/vue-datetime.css";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);
Vue.component("Paginate", Paginate);
Vue.component("Datetime", Datetime);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
