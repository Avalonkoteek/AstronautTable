<template>
  <div id="app" class="container">
    <AstonautFilter />
    <AstonautTable :table="items" :key="getItems" />
    <Paginate
      :page-count="pageCount"
      :click-handler="listChangeHandler"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'pagination'"
      :page-class="'waves-effect'"
    />
    <AddAstonaut />
  </div>
</template>

<script>
import AstonautFilter from "./components/AstronautFilter";
import AstonautTable from "./components/AstronautTable";
import paginationMixin from "./mixins/pagination.mixin";
import AddAstonaut from "./components/AddAstonaut";

export default {
  name: "App",
  components: {
    AstonautTable,
    AddAstonaut,
    AstonautFilter
  },
  computed: {
    getItems() {
      const astronauts = this.$store.getters.astronauts;
      this.setupPagination(astronauts);
      console.log(this.page);
      return 1;
    }
  },
  mixins: [paginationMixin],
  async mounted() {
    await this.$store.dispatch("fetchAstronauts");
    const astronauts = this.$store.getters.astronauts;
    this.setupPagination(astronauts);
    console.log(this.items);
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
body {
  background: #e8f3fb;
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>
