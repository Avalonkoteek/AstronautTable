<template>
  <div class="astronautTable">
    <table class="responsive-table ">
      <thead>
        <tr>
          <th>#</th>
          <th class="sortRow" @click="sortByName">
            <div class="test">
              Имя<i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th class="sortRow" @click="sortByMissions">
            <div class="test">
              Миссии<i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th class="sortRow" @click="sortByDay">
            <div class="test">
              Дней в космосе<i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th class="sortRow" @click="sortByDate">
            <div class="test">
              Первый полет<i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>

          <th>Повторные полеты</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(person, idx) of table" :key="idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.mission }}</td>
          <td>{{ person.days }}</td>
          <td>{{ person.date | date() }}</td>
          <td>{{ person.isMultiple }}</td>
          <td>
            <a class="btn" v-bind:data-id="idx" @click.prevent="deleteById"
              >del</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "AstronautTable",
  data: () => ({
    loading: true,
  }),
  props: {
    table: Array,
  },

  methods: {
    deleteById(id) {
      console.log(id);
    },
    sortByName(event) {
      this.updateArrowClass(event);
      const astronauts = this.$store.state.astronauts;
      astronauts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      console.log(astronauts);
    },
    sortByMissions() {
      const astronauts = this.$store.state.astronauts;
      astronauts.sort((a, b) => {
        const aa = a.mission.split("").reduce((acc, currentVal, index) => {
          if (currentVal === "/") acc++;
          return acc;
        }, 0);

        const bb = b.mission.split("").reduce((acc, currentVal, index) => {
          if (currentVal === "/") acc++;
          return acc;
        }, 0);

        if (aa > bb) {
          return 1;
        }

        if (aa < bb) {
          return -1;
        }
        return 0;
      });
      console.log("sortByMissions");
      console.log(astronauts.reverse());
      this.updateArrowClass(event);
    },
    sortByDay() {
      const astronauts = this.$store.state.astronauts;
      astronauts.sort((a, b) => {
        if (a.days > b.days) {
          return 1;
        }
        if (a.days < b.days) {
          return -1;
        }
        return 0;
      });
      this.updateArrowClass(event);
      console.log("sortByDay");
      console.log(astronauts);
    },
    sortByDate() {
      const astronauts = this.$store.state.astronauts;
      astronauts.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
      this.updateArrowClass(event);
      console.log("sortByDate");
      console.log(astronauts);
    },
    updateArrowClass(event) {
      let arrowParent = event.target;
      if (event.target.tagName === "I") arrowParent = event.target.parentNode;
      arrowParent.classList.toggle("up");
    },
  },
};
</script>
<style scoped>
.test {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.test i {
  transform: rotateZ(0deg);
  transition: all 0.3s ease;
}
.test.up i {
  transform: rotateZ(540deg);
}

.astronautTable {
  background-color: #e8f3fb;
  box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.45);
  border-radius: 5px;
  padding: 0px 10px;
  margin-top: 60px;
}
.btn {
  user-select: none;
}
</style>
