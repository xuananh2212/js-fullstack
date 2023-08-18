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
var array = [1, 2, 3, 4, 5, 6];

Array.prototype.reduce2 = function (fn, value) {
  var prev = value;
  var index = 0;
  if (prev === undefined) {
    index = 1;
    prev = this[0];
  }
  if (typeof fn === "function") {
    for (index; index < this.length; index++) {
      var current = fn(prev, this[index]);
      prev = current;
    }
    return prev;
  } else {
    return "number 1 is not a function";
  }
};

// console.log(
//   array.reduce(function (prev, currency) {
//     console.log(prev, currency);
//     prev.push(currency);
//     return prev;
//   }, [])
// );
// console.log(
//   array.reduce2(function (prev, currency) {
//     console.log(prev, currency);
//     prev.push(currency);
//     return prev;
//   }, [])
// );

// const numbers = [10, 15, 20, 54, 60];

// var total = numbers.reduce(function (total, currentValue) {
//   if (currentValue % 2 == 0) {
//     return total + currentValue;
//   } else {
//     return total;
//   }
// });

// console.log(total);
// var total = numbers.reduce2(function (total, currentValue) {
//   if (currentValue % 2 == 0) {
//     return total + currentValue;
//   } else {
//     return total;
//   }
// });

// console.log(total);
