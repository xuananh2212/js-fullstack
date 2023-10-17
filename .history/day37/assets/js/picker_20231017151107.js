export function handlePicker(className) {
  $(className).datetimepicker({
    autoclose: true,
    timepicker: false,
    datepicker: true,
    format: "Y-m-d h:m:s",
    weeks: true,
    step: 30,
    minDate: new Date(),
  });
}
