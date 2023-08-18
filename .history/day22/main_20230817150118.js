console.log(
  "===================================================================bai1====================================================="
);

const isNumber = function (arr) {
  return arr.every((items) => {
    return !Number.isNaN(items) && items !== Infinity;
  });
};

function sum(...argsNumber) {
  let total = 0;
  console.log(argsNumber);
  if (isNumber(argsNumber)) {
    argsNumber.forEach((item) => (total += Number(item)));
    return total;
  } else {
    return "dữ liệu truyền vào không hợp lệ";
  }
}

console.log(sum(10));
