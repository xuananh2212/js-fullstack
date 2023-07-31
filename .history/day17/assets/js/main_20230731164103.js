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

let numberKwh = 19;
var sumElectricity;
const kwh401 = 2.927;
const kwh301 = 2.834;
const kwh201 = 2.536;
const kwh101 = 2.014;
const kwh51 = 1.734;
const kwh0 = 1.678;

function electricityBill(numberKwh) {
  if (!isNaN(numberKwh) && numberKwh >= 0) {
    if (numberKwh >= 401) return (sumElectricity = kwh401 * numberKwh);
    else if (numberKwh >= 301) return (sumElectricity = kwh301 * numberKwh);
    else if (numberKwh >= 201) return (sumElectricity = kwh201 * numberKwh);
    else if (numberKwh >= 101) return (sumElectricity = kwh101 * numberKwh);
    else if (numberKwh >= 51) return (sumElectricity = kwh51 * numberKwh);
    else return (sumElectricity = kwh0 * numberKwh);
  } else {
    return null;
  }
}

sumElectricity = electricityBill(numberKwh);
if (sumElectricity !== null) {
  console.log(`số tiền phải đóng ${sumElectricity} vnd`);
} else {
  console.log("vui lòng nhập giá trị số hoặc nhập giá trị >= 0");
}

// bai 3

let n = 5;
var sumS = 0;
function totalSum(n) {
  for (let i = 1; i <= n; i++) {
    sumS += i * (i + 1);
  }
}

if (n % 1 === 0) {
  console.log(`S = ${sumS}`);
} else {
  console.log("n không phải số nguyên");
}
