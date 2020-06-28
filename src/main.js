import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import store from "./store";
// Components
import Paginate from "vuejs-paginate";
// Filters
import dateFilter from "./filters/date.filter";
import messagePlugin from "./utils/message.plugin";
// Css
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);
Vue.component("Paginate", Paginate);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
