function conversion() {
  var a = document.getElementById("values-a");

  var b = document.getElementById("values-b");

  var preFixa = Number(a.value);

  var preFixb = Number(b.value);

  console.log(preFixa);

  console.log(preFixb);

  preFixa = preFixa + preFixb;

  preFixb = preFixa - preFixb;

  preFixa = preFixa - preFixb;

  var conversionA = document.getElementById("conversion-a");
  var conversionB = document.getElementById("conversion-b");
  conversionA.innerHTML = preFixa;
  conversionB.innerHTML = preFixb;

}
