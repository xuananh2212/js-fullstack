console.log(
  "===================================================================bai1====================================================="
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
  "===================================================================bai2====================================================="
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
  "===================================================================bai3====================================================="
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
