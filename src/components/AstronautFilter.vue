<template>
  <ul class="AstronautFilters collapsible" ref="collapsible">
    <li>
      <!-- header -->
      <div class="AstronautFilters__top collapsible-header">
        <h4>Фильтры</h4>
        <i class="small material-icons">arrow_drop_down</i>
      </div>
      <!-- body -->
      <div class="AstronautFilters__wrapper collapsible-body">
        <form action="#" class="row">
          <div class="col s6">
            <!-- Количество дней в космосе -->
            <div>
              <p>Количество дней в космосе</p>
              <p class="range-field">
                <input type="range" id="test5" min="0" max="100" />
              </p>
            </div>
            <!-- дата первого полета -->
            <div>
              <p>дата первого полета</p>
              <p class="range-field">
                <input type="range" id="test5" min="0" max="100" />
              </p>
            </div>
            <div>
              <label>
                <input type="checkbox" />
                <span>Показывать только с повторными полетами</span>
              </label>
            </div>
          </div>
          <div class="col s6">
            <!-- поиск по ключевому слову -->
            <div class="input-field input-search col s4">
              <i class="small material-icons">search</i>
              <input id="search" type="text" />
              <label for="search" class="search">Поиск</label>
            </div>
            <!-- Только с повторными полетами -->
          </div>
        </form>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "AstronautFilters",
  mounted() {
    this.coll();
  },
  methods: {
    coll() {
      const options = {};
      const elem = this.$refs.collapsible;
      var instances = M.Collapsible.init(elem, options);
    }
  }
};
</script>
<style scoped>
h4 {
  margin: 0;
}
.AstronautFilters {
  background-color: #e8f3fb;
  box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.45);
  border-radius: 5px;
  margin-top: 60px;
}
.AstronautFilters__wrapper {
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
.AstronautFilters__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background-color: #e8f3fb;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
