<template>
  <div class="addForm">
    <h4 class="addForm__title">Добавить нового космонавта</h4>

    <!-- ------------------- Форма ------------------------ -->

    <form @submit.prevent="submitHandler">
      <div class="row">
        <!-- --------------- Имя -------------------------- -->

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

        <!-- --------------- Миссии ------------------------- -->

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

        <!-- --------------- Дни ---------------------------- -->

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
        <!-- --------------- Селектор: повторные полеты ------ -->

        <div class="input-field col s4">
          <select v-model="isMultiple">
            <option value="1">Да</option>
            <option value="0">Нет</option>
          </select>
          <label>Повторные полеты</label>
        </div>

        <!-- --------------- Дата первого полета ------------ -->

        <div class="date col s4">
          <label>Дата первого полета</label>
          <input
            placeholder="dd-mm-yyyy"
            type="text"
            @click="changeDateValid"
            class="datepicker"
            :class="{invalid: !isDateValid}"
          />
        </div>

        <!-- --------------- Кнопка -------------------------- -->

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
    isDateValid: true,
    formData: {}
  }),

  // правила для алидации полей

  validations: {
    name: { required },
    mission: { required },
    days: { minValue: minValue(1) },
    isMultiple: { required }
  },

  mixins: [datepickerMixin],

  mounted() {
    // Инициализирум календарь и селектор
    this.initDatePicker();
    this.initSelect();
    // обновляем поля для избегания бага перекрытия label и значения input
    M.updateTextFields();
  },

  methods: {
    async submitHandler() {
      this.updateSelectInputClass();
      const datepickerValue = this.getDatepickerValue();
      this.isDateValid = !!datepickerValue;

      if (this.$v.$invalid || !this.isDateValid) {
        this.$v.$touch();
        return;
      }
      const formatDate = Date.parse(datepickerValue.split("-").reverse());
      const formatIsMultiple = !!+this.isMultiple;

      this.formData = {
        name: this.name,
        date: formatDate,
        days: this.days,
        mission: this.mission,
        isMultiple: formatIsMultiple
      };
      await this.$store.dispatch("addAstronaut", this.formData);

      this.name = "";
      this.mission = "";
      this.days = 1;
      this.isMultiple = null;
      this.isDateValid = true;
      this.formData = {};
      const datepicker = document.querySelector(".datepicker");
      let instance = M.Datepicker.getInstance(datepicker);
      instance.destroy();
      this.$v.$reset();
      this.$message("Космонавт успешно добавлен в таблицу!");
    },

    initSelect() {
      const select = document.querySelectorAll("select");
      M.FormSelect.init(select, {});
    },

    changeDateValid() {
      this.isDateValid = true;
    },

    updateSelectInputClass() {
      const selectInput = document.querySelector(".select-dropdown");
      if (!this.$v.isMultiple.required) selectInput.classList.add("invalid");
      else selectInput.classList.remove("invalid");
    },

    getDatepickerValue() {
      const datepicker = document.querySelector(".datepicker");
      let instance = M.Datepicker.getInstance(datepicker);
      return instance.toString();
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
