console.log(
  "===================================================================bai1====================================================="
);

const isNumber = function (...arr) {
  return arr.every((items) => {
    return !Number.isNaN(items) && items !== Infinity;
  });
};

function sum(...argsNumber) {
  let total = 0;
  if (isNumber(argsNumber)) {
    argsNumber.forEach((item) => (total += Number(item)));
    return total;
  } else {
    return "Invalid input data";
  }
}

console.log(sum(10, "10", "5", 20, 50));

console.log(
  "===================================================================bai2====================================================="
);

Object.prototype.getCurrency = function () {
  return this.toLocaleString("vi", { style: "currency", currency: "đ" });
};

var price = 12000;

if (!Number.isNaN(price) && price !== Infinity) {
  console.log(typeof price);
  console.log(price.getCurrency());
} else {
  console.log("this is not number");
}
