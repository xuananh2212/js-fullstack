function conversion() {
  var a = document.getElementById("values-a");

  var b = document.getElementById("values-b");

  var preFixa = Number(a.value);

  var preFixb = Number(b.value);

  console.log(preFixa);

  console.log(preFixb);

  preFixa = preFixa + perFixb;

  preFixb = preFixa - perFixb;

  preFixa = perFixa - perFixb;

  a.innerHTML = preFixa;

  b.innerHTML = perFixb;

}
