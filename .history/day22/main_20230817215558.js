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
  "=================================================================== bai3 Chuyển đổi mảng 1 chiều thành dạng lồng (nested) ====================================================="
);

// var array = [
//   {
//     id: 1,
//     name: "Chuyên mục 1",
//     parent: 0,
//   },
//   {
//     id: 2,
//     name: "Chuyên mục 2",
//     parent: 0,
//   },

//   {
//     id: 4,
//     name: "Chuyên mục 2.1",
//     parent: 2,
//   },
//   {
//     id: 5,
//     name: "Chuyên mục 2.2",
//     parent: 2,
//   },

//   {
//     id: 10,
//     name: "Chuyên mục 2.2.1",
//     parent: 5,
//   },
//   {
//     id: 7,
//     name: "Chuyên mục 3.1",
//     parent: 3,
//   },
//   {
//     id: 6,
//     name: "Chuyên mục 2.3",
//     parent: 2,
//   },
//   {
//     id: 3,
//     name: "Chuyên mục 3",
//     parent: 0,
//   },
//   {
//     id: 8,
//     name: "Chuyên mục 3.2",
//     parent: 3,
//   },
//   {
//     id: 9,
//     name: "Chuyên mục 3.3",
//     parent: 3,
//   },

//   {
//     id: 11,
//     name: "Chuyên mục 2.2.2",
//     parent: 5,
//   },
// ];

// array.sort(function (a, b) {
//   if (a.parent < b.parent) {
//     return -1;
//   } else if (a.parent === b.parent) {
//     if (
//       Number(a.name.split(" ")[a.name.split(" ").length - 1]) <
//       Number(b.name.split(" ")[b.name.split(" ").length - 1])
//     ) {
//       return -1;
//     }
//   }
// });
// console.log(array);

const inputCategories = [
  {
    id: 1,
    name: "Category 1",
    parent: 0,
  },
  {
    id: 11,
    name: "Category 2.2.2",
    parent: 5,
  },
  {
    id: 2,
    name: "Category 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Category 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Category 2.1",
    parent: 2,
  },
  {
    id: 10,
    name: "Category 2.2.1",
    parent: 5,
  },
  {
    id: 5,
    name: "Category 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Category 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Category 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Category 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Category 3.3",
    parent: 3,
  },
];

const categoriesMap = {};
const result = [];

inputCategories.forEach((category) => {
  console.log(category);
  categoriesMap[category.id] = { ...category, children: [] };
});

console.log(inputCategories);
console.log(categoriesMap);

inputCategories.forEach((category) => {
  if (category.parent === 0) {
    result.push(categoriesMap[category.id]);
  } else {
    categoriesMap[category.parent].children.push(categoriesMap[category.id]);
  }
});

console.log(result);

console.log(
  "===================================================================bai4 Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript====================================================="
);

Array.prototype.reduce2 = function (fn, value) {
  var prev = value;
  var index = 0;
  if (prev === undefined) {
    index = 1;
    prev = this[0];
  }
  if (typeof fn === "function") {
    for (index; index < this.length; index++) {
      var current = fn(prev, this[index], index, this);
      prev = current;
    }
    return prev;
  } else {
    return "number 1 is not a function";
  }
};

// test

const numbers = [10, 15, 20, 54, 60];

var total = numbers.reduce(function (total, currentValue, index, number) {
  console.log(total, currentValue, index, number);
  return total + currentValue;
}, 0);

console.log(total);
var total = numbers.reduce2(function (total, currentValue, index, number) {
  console.log(total, currentValue, index, number);
  return total + currentValue;
}, 0);

console.log(total);
