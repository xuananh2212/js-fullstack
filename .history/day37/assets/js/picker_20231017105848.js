export function handlePicker(className) {
  $(className).datetimepicker({
    autoclose: true,
    timepicker: false,
    datepicker: true,
    format: "d/m/Y",
    weeks: true,
    step: 30,
    minDate: new Date(),
  });
}
