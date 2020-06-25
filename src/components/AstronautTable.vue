<template>
  <table class="responsive-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Миссии</th>
        <th>Дней в космосе</th>
        <th>Дата первого полета</th>
        <th>Повторные плеты</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(person, idx) of astronautsList" :key="person.name">
        <td>{{ idx + 1 }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.mission }}</td>
        <td>{{ person.days }}</td>
        <td>
          <i class="material-icons">date_range</i>

          {{ person.date | date() }}
        </td>
        <td>
          {{ person.isMultiple }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    astronautsList: [],
  }),
  name: "AstronautTable",
  async mounted() {
    this.astronautsList = await this.$store.dispatch("fetchAstronauts");
  },
};
</script>
