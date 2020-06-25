import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    astronauts: [],
  },
  mutations: {
    setAstronautToStore: (state, astronauts) => {
      state.astronauts = astronauts;
    },
  },
  actions: {
    async fetchAstronauts({ commit, dispatch }) {
      try {
        const res = await axios("http://localhost:3000/astronauts", {
          method: "GET",
        });
        return await res.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
  getters: {
    astronauts: (s) => s.astronauts,
  },
});
