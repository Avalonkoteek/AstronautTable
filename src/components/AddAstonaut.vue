<template>
  <div class="addForm">
    <h4 class="addForm__title">Добавить нового астронавта</h4>
    <form @submit.prevent="submitHandler">
      <div class="row">
        <!-- ИМЯ -->
        <div class="input-field col s4">
          <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid:($v.name.$dirty && !$v.name.required)}"
          />
          <label for="name">Имя</label>
          <small v-if="$v.name.$dirty && !$v.name.required">Введите имя космонавта</small>
        </div>
        <!-- Миссии -->
        <div class="input-field col s4">
          <input
            id="mission"
            type="text"
            v-model.trim="mission"
            :class="{invalid:$v.mission.$dirty && !$v.mission.required}"
          />
          <label for="mission">Миссии</label>
          <small v-if="$v.mission.$dirty && !$v.mission.required">Введите название миссии/миссий</small>
        </div>
        <!-- Дни -->
        <div class="input-field col s4">
          <input
            id="days"
            type="number"
            v-model.trim="days"
            :class="{invalid:$v.days.$dirty && !$v.days.minValue}"
          />
          <label for="days">Дней в космосе</label>
          <small
            v-if="$v.days.$dirty && !$v.days.minValue"
          >Минимальное значение: {{$v.days.$params.minValue.min}}, сейчас: {{$v.days.$model}}</small>
        </div>
      </div>

      <div class="row flex-bottom">
        <!-- Повторные полеты -->
        <div class="input-field col s4">
          <select
            v-model="isMultiple"
            :class="{invalid:($v.isMultiple.$dirty && !$v.isMultiple.required)}"
          >
            <option value disabled selected>Были повторные полеты?</option>
            <option value="1" selected>Да</option>
            <option value="2">Нет</option>
          </select>
          <label>Повторные полеты</label>
        </div>
        <!-- Дата первого полета -->
        <div class="date col s4">
          <label>Дата первого полета</label>
          <input
            placeholder="dd-mm-yyyy"
            type="text"
            class="datepicker"
            v-model="date"
            :class="{invalid:($v.date.$dirty && !$v.date.required)}"
          />
        </div>
        <div class="col s4 button">
          <button class="btn waves-effect waves-light" type="submit">
            Отправить
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { required, minValue } from "vuelidate/lib/validators";
import datepickerMixin from "../mixins/datepicker.mixin";
export default {
  name: "AddAstronaut",
  data: () => ({
    name: "",
    mission: "",
    days: 1,
    isMultiple: null,
    date: ""
  }),
  validations: {
    name: { required },
    mission: { required },
    days: { minValue: minValue(1) },
    isMultiple: { required },
    date: { required }
  },
  mixins: [datepickerMixin],
  mounted() {
    this.initDatePicker();
    M.updateTextFields();
    const select = document.querySelectorAll("select");
    const selectInstance = M.FormSelect.init(select, {});
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        const elem = document.querySelectorAll(".datepicker");
        let instance = M.Datepicker.getInstance(elem);
        console.log(instance);
        return;
      }
      console.log("submit");
    }
  }
};
</script>
<style scoped>
.addForm {
  margin-top: 60px;
  background-color: #e8f3fb;
  box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.45);
  border-radius: 5px;
  padding: 40px 0;
  margin-bottom: 100px;
  animation: fade-up 0.4s ease-in-out;
}
.addForm__title {
  color: #334669;
  margin: 10px 10px 30px;
  text-align: center;
}
.helper-text.invalid {
  color: #f44336;
}
.flex-bottom {
  display: flex;
  align-items: flex-end;
}
.date {
  margin: 15px 0;
}
.date input {
  cursor: pointer;
}
.button {
  margin-bottom: 23px;
}
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
