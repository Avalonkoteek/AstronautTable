export default {
  methods: {
    initDatePicker() {
      const RULocale = {
        cancel: "Отмена",
        clear: "Очистить",
        done: "Готово",
        months: [
          "Январь",
          "Фервраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ],
        monthsShort: [
          "Янв",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Июнь",
          "Июль",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек",
        ],
        weekdays: [
          "Воскресенье",
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота",
        ],
        weekdaysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekdaysAbbrev: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      };

      const options = {
        format: "dd-mm-yyyy",
        maxDate: new Date(),
        i18n: RULocale,
      };

      const datePicker = document.querySelectorAll(".datepicker");
      M.Datepicker.init(datePicker, options);
    },
  },
};
