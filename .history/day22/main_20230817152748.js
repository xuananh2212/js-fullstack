console.log(
  "===================================================================bai1 Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter====================================================="
);

const isNumber = function (...arr) {
  return arr.every((items) => {
    return !isNaN(items) && items !== Infinity;
  });
};

function sum(...argsNumber) {
  let total = 0;
  if (isNumber(...argsNumber)) {
    argsNumber.forEach((item) => (total += Number(item)));
    return total;
  } else {
    return "Invalid input data";
  }
}

console.log(sum(10, "10", "5", 20, 50, 1, 10));

console.log(
  "===================================================================bai2 Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị====================================================="
);

Object.prototype.getCurrency = function () {
  return Number(this).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

var price = "12000";

if (!isNaN(price) && price !== Infinity) {
  console.log(price.getCurrency());
} else {
  console.log("this is not number");
}

console.log(
  "===================================================================bai3 Chuyển đổi mảng 1 chiều thành dạng lồng (nested)====================================================="
);

var array = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

console.log(
  "===================================================================bai4 Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript====================================================="
);

console.log([Array]);
const array = [1, 2, 3, 4, 5, 6];
console.log(array.reduce(, 12));

Array.prototype.reduce2 = function (fn, value) {
  if (typeof fn === "function") {
  } else {
    return "this";
  }
};
