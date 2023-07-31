// bai 1
var numberKm = 2;
var sumTaxi;

if (!isNaN(numberKm) && numberKm >= 0) {
  if (numberKm <= 1) sumTaxi = numberKm * 15000;
  else if (numberKm > 1 && numberKm <= 5) sumTaxi = numberKm * 13500;
  else if (numberKm > 5) {
    sumTaxi = numberKm * 11000;
    let discount = 0;
    if (numberKm > 120) {
      discount = 0.1 * sumTaxi;
    }
    sumTaxi -= discount;
  }

  console.log(`tiền cước taxi phải trả là: ${sumTaxi} vnd`);
} else {
  console.log("vui lòng nhập giá trị số hoặc nhập giá trị >= 0");
}

//bai2.

var numberKwh = 10;
var sumElectricity;
const kwh401 = 2.927;
const kwh301 = 2.834;
const kwh201 = 2.536;
const kwh101 = 2.014;
const kwh51 = 1.734;
const kwh0 = 1.678;

if (!isNaN(numberKwh) && numberKwh >= 0) {
  if (numberKwh >= 401) sumElectricity = kwh401 * numberKm;
  else if (numberKwh >= 301) sumElectricity = kwh301 * numberKm;
  else if (numberKwh >= 201) sumElectricity = kwh201 * numberKm;
  else if (numberKm >= 101) sumElectricity = kwh101 * numberKm;
  else if (numberKm >= 51) sumElectricity = kwh51 * numberKm;
  else sumElectricity = kwh0 * numberKm;
} else {
  console.log("vui lòng nhập giá trị số hoặc nhập giá trị >= 0");
}
