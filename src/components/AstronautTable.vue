<template>
  <div class="astronautTable">
    <table class="responsive-table">
      <thead>
        <tr>
          <th>#</th>

          <th class="sortRow" @click="sortByName">
            <div class="test">
              Имя
              <i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th class="sortRow" @click="sortByMissions">
            <div class="test">
              Миссии
              <i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th class="sortRow" @click="sortByDay">
            <div class="test">
              Дней в космосе
              <i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th class="sortRow" @click="sortByDate">
            <div class="test">
              Первый полет
              <i class="small material-icons">arrow_drop_down</i>
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
          <td>{{ person.isMultiple?"Да":"Нет" }}</td>
          <td>
            <a
              class="btn waves-effect waves-light red lighten-2"
              v-bind:data-id="person.name"
              @click.prevent="deleteById"
            >
              <i class="small material-icons">delete</i>
            </a>
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
    tableHeader: [
      { text: "Имя", attr: "name" },
      { text: "Миссии", attr: "mission" },
      { text: "Дней в космосе", attr: "days" },
      { text: "Первый полет", attr: "date" }
    ]
  }),
  props: {
    table: Array
  },
  methods: {
    deleteById(event) {
      let $delButton = event.target;
      if (event.target.tagName === "I") $delButton = event.target.parentNode;
      const name = $delButton.dataset.id;

      this.$store.commit("deleteAstronautById", name);
    },
    sortByName(event) {
      this.updateArrowClass(event);
      const astronauts = this.$store.state.astronauts;
      const type = "name";
      this.$store.dispatch("sortingAstronautsList", { astronauts, type });
    },
    sortByMissions() {
      this.updateArrowClass(event);
      const astronauts = this.$store.state.astronauts;
      const type = "missions";
      this.$store.dispatch("sortingAstronautsList", { astronauts, type });
    },
    sortByDay(event) {
      this.updateArrowClass(event);
      const astronauts = this.$store.state.astronauts;
      const type = "days";
      this.$store.dispatch("sortingAstronautsList", { astronauts, type });
    },
    sortByDate(event) {
      this.updateArrowClass(event);
      const astronauts = this.$store.state.astronauts;
      const type = "date";
      this.$store.dispatch("sortingAstronautsList", { astronauts, type });
    },
    updateArrowClass(event) {
      let arrowParent = event.target;
      if (event.target.tagName === "I") arrowParent = event.target.parentNode;
      arrowParent.classList.toggle("up");
    }
  }
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
