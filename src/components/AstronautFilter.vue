<template>
  <ul class="FilterBox collapsible" ref="collapsible">
    <li>
      <!-- *************************************** header *************************************** -->

      <div class="FilterBox__header collapsible-header">
        <h4 class="FilterBox__title">Фильтры</h4>
        <i class="small material-icons">arrow_drop_down</i>
      </div>

      <!-- *************************************** body ***************************************-->

      <div class="FilterBox__body collapsible-body row">
        <!-- column -->
        <div class="col s6">
          <!-------------------------------------------------
            -------------------- RANGE Дни --------------------
          -------------------------------------------------->

          <div>
            <p>От {{ range.days }} дней в космосе</p>
            <div class="range-field">
              <input
                @change="filteringData"
                type="range"
                v-model="range.days"
                id="test5"
                min="0"
                max="100"
              />
            </div>
          </div>

          <!-------------------------------------------------
            ------------ SELECT повторные полеты --------------
          -------------------------------------------------->

          <div class="select">
            <select ref="select" @change="filteringData" v-model="selected">
              <option value="2">Все</option>
              <option value="0">С одним полетом</option>
              <option value="1">Больше одного полета</option>
            </select>
            <label>Повторные полеты</label>
          </div>
          <!-- /column -->
        </div>

        <!-------------------------------------------------
          ------------ SEARCH поиск по именам и миссиям -----
        -------------------------------------------------->

        <div class="col s6 right-col">
          <div class="input-field input-search">
            <i class="small material-icons">search</i>
            <input id="search" v-model="search" @input="searching" type="text" />
            <label for="search" class="search">Поиск по имени или миссии</label>
          </div>
          <!-------------------------------------------------
          ------------ BUTTON обновить данные ---------------
          -------------------------------------------------->
          <div class="button-wrapper">
            <a class="waves-effect waves-light btn" @click="reboot">
              <i class="material-icons right">refresh</i>Сбросить фильтры
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "AstronautFilters",

  data: () => ({
    range: {
      allDays: 100,
      minDays: 0,
      days: 0
    },
    selected: "2",
    search: ""
  }),

  mounted() {
    this.initCollapsible();
    this.initSelect();
  },

  methods: {
    // =============================  Функции для инициализации компонентов =============================== //

    initCollapsible() {
      M.Collapsible.init(this.$refs.collapsible, {});
    },
    initSelect() {
      M.FormSelect.init(this.$refs.select, {});
    },

    // =============================  Filter | по измененным данным ================================================ //

    filteringData() {
      const filterData = {
        days: this.range.days,

        selected: this.selected
      };
      this.$store.dispatch("filtering", filterData);
      this.search = "";
    },

    // ============================= Search | по именам и миссиям =================================== //
    searching() {
      this.$store.dispatch("searchByNameAndMissions", this.search);
    },
    // ============================= Кнопка сброса =================================== //

    reboot() {
      this.$store.commit("rebootFilter");
      this.$message("Станица обновлена");
      this.range.days = 0;
      this.selected = "2";
      this.search = "";
    }
  }
};
</script>

<style scoped>
/* GENERAL */
input[type="range"] {
  --bg: #26a69a;
  border: 1px solid var(--bg);
  border-radius: 5px;
}
.FilterBox {
  background-color: #e8f3fb;
  box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.45);
  border-radius: 5px;
  margin-top: 60px;
  animation: fade-left 0.3s ease-in-out;
}
/* Header */
.FilterBox__header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
  background-color: #e8f3fb;
  box-shadow: 0px 2px 4px rgba(63, 70, 77, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  height: 70px;
}
.FilterBox__title {
  color: #334669;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  margin: 0;
}
/* Body */

.select {
}
.button-wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: row-reverse;
}

.input-search {
  display: flex;
  min-width: 100%;
  align-items: center;
}
.input-search i {
  margin-right: 10px;
  color: #9e9e9e;
}
.input-search label {
  margin-left: 50px;
}

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@keyframes fade-left {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
