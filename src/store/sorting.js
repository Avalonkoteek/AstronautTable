export default {
  state: {
    counters: {
      name: 0,
      missions: 0,
      days: 0,
      date: 0,
    },
  },
  mutations: {
    counterAdd: (state, counterName) => {
      state.counters[counterName]++;
    },
  },
  actions: {
    sortingAstronautsList({ commit }, { astronauts, type, counters }) {
      commit("counterAdd", type);
      let counter = counters[type];
      let newData = astronauts;
      if (type === "missions") {
        newData.sort((a, b) => {
          const aa = a.mission.split("").reduce((acc, currentVal) => {
            if (currentVal === "/") acc++;
            return acc;
          }, 0);
          const bb = b.mission.split("").reduce((acc, currentVal) => {
            if (currentVal === "/") acc++;
            return acc;
          }, 0);
          if (aa > bb) return 1;
          if (aa < bb) return -1;
          return 0;
        });
      } else {
        newData.sort((prev, next) => {
          if (prev[type] > next[type]) return 1;
          if (prev[type] < next[type]) return -1;
          return 0;
        });
      }

      if (counter % 2 === 0) newData = newData.reverse();
      commit("setArrFilter", newData);
    },
  },
};
