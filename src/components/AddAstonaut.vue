<template>
  <div class="addForm">
    <h4 class="addForm__title">Добавить нового челика</h4>
    <form class="row">
      <div class="input-field col s4">
        <input id="name" type="text" />
        <label for="name">Имя</label>
      </div>
      <div class="input-field col s4">
        <input id="name" type="text" />
        <label for="name">Миссии</label>
      </div>
      <div class="input-field col s4">
        <input id="name" type="text" />
        <label for="name">Дней в космосе</label>
      </div>
      <div class="row">
        <p class="col s4">
          <label>
            <input name="group1" type="radio" />
            <span>Yellow</span>
          </label>
          <label>
            <input name="group1" type="radio" />
            <span>Red</span>
          </label>
        </p>
        <datetime
          type="date"
          v-model="date"
          input-class="col s4"
          value-zone="Russia/Moscow"
          zone="Asia/Shanghai"
          :format="{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }"
          :phrases="{ ok: 'Продолжить', cancel: 'Выйти' }"
          :week-start="7"
          use12-hour
          auto
        ></datetime>
      </div>
      <button class="btn button waves-effect waves-light" type="submit">
        Отрвавить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<style scoped>
.addForm {
  background-color: #e8f3fb;
  box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.45);
  border-radius: 5px;
  padding: 40px 0;
}
.addForm__title {
  color: #334669;
  margin: 10px;
  text-align: center;
}
</style>
