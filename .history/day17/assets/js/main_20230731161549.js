// bai 1
var numberKm = 140;
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
