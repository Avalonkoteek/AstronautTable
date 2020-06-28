export default {
  actions: {
    sortingAstronautsList({ commit }, { astronauts, type }) {
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
          console.log(prev[`"${type}"`], type);
          if (prev[type] > next[type]) return 1;
          if (prev[type] < next[type]) return -1;
          return 0;
        });
      }

      commit("setAstronautToState", newData);
    },
  },
};
