import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sorting from "./sorting";
// import filter from "./filter";
Vue.use(Vuex);

export default new Vuex.Store({
  // =============================
  // STATE
  // =============================

  state: {
    filteredAstronauts: [],
    astronauts: [],
    serverError: null,
  },

  // =============================
  // MUTATION
  // =============================

  mutations: {
    //
    setAstronautToState: (state, newAstronautsList) => {
      state.astronauts = newAstronautsList;
    },
    addAstronaut: (state, astronaut) => {
      state.astronauts = [...state.astronauts, astronaut];
      state.filteredAstronauts = [...state.filteredAstronauts, astronaut];
    },
    deleteAstronautById: (state, name) => {
      state.astronauts = state.astronauts.filter((el) => el.name !== name);
      state.filteredAstronauts = state.filteredAstronauts.filter(
        (el) => el.name !== name
      );
    },
    setArrFilter: (state, filteredAstronauts) => {
      state.filteredAstronauts = filteredAstronauts;
    },
    rebootFilter: (state) => {
      state.filteredAstronauts = state.astronauts;
    },
  },

  // =============================
  // ACTION
  // =============================

  actions: {
    // =============================
    // Запрос на сервер
    // =============================
    async fetchAstronauts({ commit }) {
      try {
        const res = await axios("http://localhost:3000/astronauts", {
          method: "GET",
        });
        commit("setAstronautToState", res.data);
        commit("setArrFilter", res.data);
      } catch (e) {
        console.log("Для запуска сервера введите команду json");
        console.log(e);
      }
    },

    // =============================
    // Добавление космонавта
    // =============================

    async addAstronaut({ commit }, formData) {
      commit("addAstronaut", formData);
    },

    // =============================
    // Удаление космонавта
    // =============================

    delAstronaut({ commit }, name) {
      commit("deleteAstronautById", name);
    },

    // =============================
    // Фильтрация
    // =============================
    filtering({ commit, state }, papams) {
      const NewFiltredArray = state.astronauts.filter((item) => {
        const isFilteredDay = item.days > papams.days;

        let isFilteredMultiple = true;
        if (papams.selected === "1" || papams.selected === "0")
          isFilteredMultiple = item.isMultiple === !!+papams.selected;

        return isFilteredDay && isFilteredMultiple;
      });
      commit("setArrFilter", NewFiltredArray);
    },

    // =============================
    // Поиск по именам и миссиям
    // =============================

    searchByNameAndMissions({ commit, state }, search) {
      const NewFiltredArray = state.astronauts.filter((item) => {
        return (
          item.name.toLowerCase().match(search.toLowerCase()) ||
          item.mission.toLowerCase().match(search.toLowerCase())
        );
      });
      commit("setArrFilter", NewFiltredArray);
    },
  },
  modules: { sorting },
  getters: {
    astronauts: (s) => s.astronauts,
    filteredAstronauts: (s) => s.filteredAstronauts,
  },
});
