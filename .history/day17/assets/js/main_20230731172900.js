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

let n = 3;

function totalSum(n) {
  var sumS = 0;
  for (let i = 1; i <= n; i++) {
    sumS += i * (i + 1);
  }
  return sumS;
}

if (n % 1 === 0) {
  totalSum(n);
  console.log(`S = ${totalSum(n)}`);
} else {
  console.log("n không phải số nguyên");
}

//b4

let element = 1;
function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2 || n === 3) {
    return true;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }
}

if (isPrime(element)) {
  console.log(`số  ${element} là số nguyên tố`);
} else {
  console.log(`số  ${element} không phải số nguyên tố`);
}

//b5
document.write("***************** Bài 5 ***************************** <br/>");
var row = 5;

function drawTriangles(r) {
  var count = 0;

  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(`${++count} `);
    }
    document.write("<br/>");
  }
}

if (row % 1 == 0 && row > 0) {
  drawTriangles(row);
} else {
  console.log("vui lòng nhập lại số dòng , dòng phải là số nguyên hoặc > 0");
}

//b6
document.write("***************** Bài 6 ***************************** <br/>");
var rowChess = 8;
function drawChess(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
        document.write(
          `<span style ="display: inline-block; width: 50px; height: 50px; border: 1px solid #000; background: #000"></span>`
        );
      } else {
        document.write(
          `<span style ="display: inline-block; width: 50px; height: 50px; border: 1px solid #000;"></span>`
        );
      }
    }
    document.writeln("<br/>");
  }
}

drawChess(8);
