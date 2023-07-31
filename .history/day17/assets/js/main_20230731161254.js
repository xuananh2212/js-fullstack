// bai 1
var numberKm = 10;
var sum;

if (!isNaN(numberKm) && numberKm >= 0) {
  if (numberKm <= 1) sum = numberKm * 15000;
  else if (numberKm > 1 && numberKm <= 5) sum = numberKm * 13500;
  else if (numberKm > 5) {
    sum = numberKm * 11000;
    let discount = 0;
    if (numberKm > 120) {
      discount = 0.1 * sum;
    }
    sum -= discount;
  }

  console.log(`tiền cước taxi phải trả là: ${sum}`);
} else {
  console.log("vui lòng nhập giá trị số hoặc nhập giá trị >= 0");
}
