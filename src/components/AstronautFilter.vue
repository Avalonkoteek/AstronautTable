<template>
  <ul class="AstronautFilters collapsible" ref="collapsible">
    <li>
      <div class="AstronautFilters__top collapsible-header">
        <h4>Фильтры</h4>
        <i class="small material-icons">arrow_drop_down</i>
      </div>
      <div class=" AstronautFilters__wrapper collapsible-body">
        <form action="#">
          <!-- Количество дней в космосе -->
          <p class="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
          <!-- Количество дней в космосе -->
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
    },
  },
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
</style>
