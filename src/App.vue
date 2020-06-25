<template>
  <div id="app">
    <AstonautTable />
  </div>
</template>

<script>
import AstonautTable from "./components/AstronautTable";

export default {
  name: "App",
  components: {
    AstonautTable,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
