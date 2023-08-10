console.log(
  `=======================Bai 1 Lấy kết quả giao giữa 2 mảng ========================================`
);

var arrA = [1, 4, 3, 2, 5];
var arrB = [5, 2, 6, 7, 1, 3];

if (Array.isArray(arrA) && Array.isArray(arrB)) {
  const result = arrA.reduce((prev, current) => {
    return arrB.includes(current) && prev.push(current), prev;
  }, []);
  console.log(result);
} else {
  console.log("arrA hoặc arrB không phải mảng");
}

console.log(
  `=======================Bai2 Làm phẳng array sau (Chuyển về mảng 1 chiều) ========================================`
);

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var result = [];
if (Array.isArray(arr)) {
  arrayDimesional(arr);
  console.log(result);
} else {
  console.log("arr không phải mảng");
}

function arrayDimesional(array) {
  for (var element of array) {
    if (Array.isArray(element)) {
      arrayDimesional(element);
    } else {
      result.push(element);
    }
  }
}

console.log(
  `=======================Bai3 Tách phần tử trong mảng theo đúng kiểu dữ liệu ========================================`
);

// var arr = [
//   [
//     "a",
//     1,
//     true,
//     {
//       userName: "nga",
//       email: "nga@gmail.com",
//     },
//   ],
//   [
//     "b",
//     2,
//     false,
//     {
//       userName: "tuan",
//       email: "tuan@gmail.com",
//     },
//   ],
//   [
//     "c",
//     3,
//     true,
//     {
//       userName: "hung",
//       email: "hung@gmail.com",
//     },
//   ],
// ];
// if (Array.isArray(arr)) {
//     var result = [];
//     var arrayStr = [];
//     var arrayNumber = [];
//     var arrayBoolean = [];
//     var arrayObject = [];
//     arrayDimesional(arr);
//     result.forEach((element) => {
//         if (typeof element === 'string') {

//         }
//         if (typeof element === 'number') {

//         }
//         if (typeof element === 'object') {

//         }
//         if (typeof element === 'boolean') {

//         }
//     })

// } else {
//   console.log("không phải mảng.");
// }

var arr = [
  [
    "a",
    1,
    true,
    {
      userName: "nga",
      email: "nga@gmail.com",
    },
  ],
  [
    "b",
    2,
    false,
    {
      userName: "tuan",
      email: "tuan@gmail.com",
    },
  ],
  [
    "c",
    true,
    {
      userName: "hung",
      email: "hung@gmail.com",
    },
  ],
];

// Tách các phần tử có kiểu dữ liệu là string
var strings = arr.filter((item) =>
  item.every((subItem) => typeof subItem === "string")
);

// Tách các phần tử có kiểu dữ liệu là number
var numbers = arr.filter((item) =>
  item.every((subItem) => typeof subItem === "number")
);

// Tách các phần tử có kiểu dữ liệu là boolean
var booleans = arr.filter((item) =>
  item.every((subItem) => typeof subItem === "boolean")
);

// Tách các phần tử có kiểu dữ liệu là object
var objects = arr.filter((item) =>
  item.every(
    (subItem) =>
      typeof subItem === "object" && subItem !== null && !Array.isArray(subItem)
  )
);

console.log("Strings:", strings);
console.log("Numbers:", numbers);
console.log("Booleans:", booleans);
console.log("Objects:", objects);
