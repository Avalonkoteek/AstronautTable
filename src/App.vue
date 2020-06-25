<template>
  <div id="app">
    <AstonautTable />
    <Paginate
      :page-count="20"
      :click-handler="listChangeHandler"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'pagination'"
      :page-class="'waves-effect'"
    />
  </div>
</template>

<script>
import AstonautTable from "./components/AstronautTable";

export default {
  name: "App",
  components: {
    AstonautTable,
  },
  methods: {
    listChangeHandler() {},
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
