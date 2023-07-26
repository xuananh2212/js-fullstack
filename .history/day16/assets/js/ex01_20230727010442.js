function conversion() {
  var a = document.getElementById("values-a").value;
  var b = document.getElementById("values-b").value;
  var preFixa = Number(a);

  var perFixb = Number(b);
  preFixa = preFixa + perFixb;
  preFixb = preFixa - perFixb;
  preFixa = perFixa - perFixb;

  console.log(typeof a);
}
