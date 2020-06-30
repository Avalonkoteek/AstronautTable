<template>
  <div id="app" class="container">
    <AstonautFilter />
    <AstonautTable :table="this.items" :key="updateItems" :counter="(page - 1) * pageSize" />
    <div v-if="this.items.length===0" class="nothing-message">
      <p>Ой-ой! Похоже мы не нашли космонавтов :(</p>
    </div>
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
    updateItems() {
      const astronauts = this.$store.getters.astronauts;
      this.filter = this.$store.getters.filteredAstronauts;
      this.setupPagination(this.$store.getters.filteredAstronauts);
      return 1;
    }
  },
  mixins: [paginationMixin],
  async mounted() {
    await this.$store.dispatch("fetchAstronauts");
    const astronauts = await this.$store.getters.filteredAstronauts;

    this.setupPagination(astronauts);
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
body {
  background: #e8f3fb;
  min-width: 800px;
}
.nothing-message {
  margin-top: 15px;
  padding-top: 80px;
  background: url("./img/06.png") no-repeat;
  background-size: contain;
  background-position: center;
  height: 300px;
  min-width: 100%;
  animation: space 0.6s ease;

  position: relative;
}
.nothing-message p {
  text-align: center;
  color: #000;
  font-size: 1.5rem;
}
.pagination {
  display: flex;
  justify-content: center;
}
@keyframes space {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
