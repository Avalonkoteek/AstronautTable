import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sorting from "./sorting";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    astronauts: [],
  },
  mutations: {
    setAstronautToState: (state, newAstronautsList) => {
      state.astronauts = newAstronautsList;
    },
    deleteAstronautById: (state, name) => {
      state.astronauts = state.astronauts.filter(
        (el, index) => el.name !== name
      );
    },
  },
  actions: {
    // deleteAstronaut({commit,dispatch},data){
    //   state.astronauts = state.astronauts.filter(
    //     (el, index) => el.name !== name
    //   );
    // },
    async fetchAstronauts({ commit, dispatch }) {
      try {
        const res = await axios("http://localhost:3000/astronauts", {
          method: "GET",
        });
        commit("setAstronautToState", res.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: { sorting },
  getters: {
    astronauts: (s) => s.astronauts,
  },
});
