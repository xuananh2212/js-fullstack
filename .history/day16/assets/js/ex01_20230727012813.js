function conversion() {
  var a = document.getElementById("values-a");

  var b = document.getElementById("values-b");

  var numberA = Number(a.value);

  var numberB = Number(b.value);

  console.log(numberA);

  console.log(numberB);

  numberA = numberA + numberB;

  numberB = numberA - numberB;

  numberA = numberA - numberB;

  var conversionA = document.getElementById("conversion-a");

  var conversionB = document.getElementById("conversion-b");
  conversionA.innerHTML = numberA;

  conversionB.innerHTML = numberB;

}
