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

Object.prototype.getCurrency = function (currency) {
  if (currency) {
    return +this.valueOf.toLocaleString + " currency ";
  }
  return +this.valueOf.toLocaleString();
};

var price = "12000";

if (!isNaN(price) && price !== Infinity) {
  console.log(price.getCurrency(currency));
} else {
  console.log("this is not number");
}

console.log(
  "=================================================================== bai3 Chuyển đổi mảng 1 chiều thành dạng lồng (nested) ====================================================="
);

var array = [
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },

  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 15,
    name: "Chuyên mục 2.2.1.1",
    parent: 10,
  },
  {
    id: 16,
    name: "Chuyên mục 2.2.1.2",
    parent: 10,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 12,
    name: "Chuyên mục 3.1.1",
    parent: 7,
  },
  {
    id: 13,
    name: "Chuyên mục 3.1.2",
    parent: 7,
  },
  {
    id: 14,
    name: "Chuyên mục 3.1.3",
    parent: 7,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
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
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

if (Array.isArray(array)) {
  array.sort((a, b) => {
    if (
      a.name.split(" ")[a.name.split(" ").length - 1] <
      b.name.split(" ")[b.name.split(" ").length - 1]
    )
      return -1;
  });
  function nestedArray(array, parentId) {
    var result = [];
    array.forEach(function (item) {
      if (item.parent === parentId) {
        result[result.length] = { ...item };
        if (nestedArray(array, item.id).length !== 0) {
          result[result.length - 1] = {
            ...result[result.length - 1],
            children: nestedArray(array, item.id),
          };
        }
      }
    });
    return result;
  }

  console.log(nestedArray(array, 0));
} else {
  console.log("this is not a array");
}

console.log(
  "=================================================================== bai4 Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript ====================================================="
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
