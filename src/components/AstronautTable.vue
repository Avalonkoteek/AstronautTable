<template>
  <div class="astronautTable">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th @click="sort('name')">
            <div class="header-cell">
              Имя
              <i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th @click="sort('missions')">
            <div class="header-cell">
              Миссии
              <i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th @click="sort('days')">
            <div class="header-cell">
              Дней в космосе
              <i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>
          <th @click="sort('date')">
            <div class="header-cell">
              Первый полет
              <i class="small material-icons">arrow_drop_down</i>
            </div>
          </th>

          <th>Повторные полеты</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(person, idx) of table" :key="idx">
          <td>{{ counter + idx + 1 }}</td>
          <td class="shortText">
            <div class="shortText__inner">{{ person.name }}</div>
          </td>
          <td class="shortText">
            <div class="shortText__inner">{{ person.mission }}</div>
          </td>
          <td class="shortText">
            <div class="shortText__inner">{{ person.days }}</div>
          </td>
          <td>{{ person.date | date() }}</td>
          <td>{{ person.isMultiple ? "Да" : "Нет" }}</td>
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

  props: {
    table: Array,
    counter: Number
  },
  methods: {
    deleteById(event) {
      let $delButton = event.target;
      if (event.target.tagName === "I") $delButton = event.target.parentNode;
      const name = $delButton.dataset.id;
      this.$message("Космонавт по имени: " + name + " был удален из таблицы");
      this.$store.dispatch("delAstronaut", name);
    },

    sort(type) {
      this.updateArrowClass(event);
      const astronauts = this.$store.state.filteredAstronauts;
      const counters = this.$store.state.sorting.counters;
      this.$store.dispatch("sortingAstronautsList", {
        astronauts,
        type,
        counters
      });
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
.header-cell {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: 100%;
  height: 100%;
}

.header-cell i {
  transform: rotateZ(0deg);
  transition: all 0.3s ease;
}
.header-cell.up i {
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
.table {
  transition: all 0.4s ease;
}
.shortText {
  max-width: 150px;
}
.shortText:last-of-type {
  max-width: 130px;
}
.shortText__inner {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.astronautTable {
  animation: fade-left 0.3s ease-in-out;
}
@keyframes fade-left {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
