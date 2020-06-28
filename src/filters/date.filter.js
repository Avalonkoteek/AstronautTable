export default function dateFilter(value) {
  let newValue = +(value + "000");
  let options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(newValue));
}
