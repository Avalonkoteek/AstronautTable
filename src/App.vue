<template>
  <div id="app" class="container">
    <AstonautTable :table="items" />
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
import AstonautTable from "./components/AstronautTable";
import paginationMixin from "./mixins/pagination.mixin";
import AddAstonaut from "./components/AddAstonaut";
export default {
  name: "App",
  components: {
    AstonautTable,
    AddAstonaut,
  },
  mixins: [paginationMixin],
  async mounted() {
    const astronauts = await this.$store.dispatch("fetchAstronauts");
    this.setupPagination(astronauts);
    console.log(this.items);
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
body {
  background: #e8f3fb;
}
</style>
