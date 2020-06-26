<template>
  <table class="responsive-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Миссии</th>
        <th>Дней в космосе</th>
        <th class>
          Дата первого полета
          <i class="material-icons">date_range</i>
        </th>
        <th>Повторные полеты</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(person, idx) of table" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.mission }}</td>
        <td>{{ person.days }}</td>
        <td>{{ person.date | date() }}</td>
        <td>{{ person.isMultiple }}</td>
        <td>
          <a class="btn" v-bind:data-id="idx" @click.prevent="deleteById"
            >del</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "AstronautTable",
  data: () => ({
    loading: true,
  }),
  props: {
    table: Array,
  },
  watch: {
    astronauts: function(val) {
      console.log(val);
    },
  },
  methods: {
    deleteById(id) {
      console.log(id);
    },
  },
};
</script>
