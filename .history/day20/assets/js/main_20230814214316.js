console.log(
  `=======================Bai 1 Lấy kết quả giao giữa 2 mảng ========================================`
);

var arrA = [1, 4, 3, 2, 5, 1];
var arrB = [5, 2, 6, 7, 1, 3];

if (Array.isArray(arrA) && Array.isArray(arrB)) {
  const result = Array.from(new Set(arrA)).reduce((prev, current) => {
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

var arr = [
  [
    ["a", "d", "e"],
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
    3,
    true,
    {
      userName: "hung",
      email: "hung@gmail.com",
    },
  ],
];
if (Array.isArray(arr)) {
  var result = arr.flat(Infinity).reduce((prev, current) => {
    if (!Object.keys(result).includes(typeof current)) {
      result[typeof current] = [...current];
    }
  }, {});
  console.log(result);
} else {
  console.log("không phải mảng.");
}

console.log(
  `=======================Bai4 Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện ========================================`
);

var array = [
  {
    img: "./assets/imgs/img-1.jpg",
    heading: "Tiêu đề bài viết 1",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    img: "./assets/imgs/img-2.jpg",
    heading: "Tiêu đề bài viết 2",
    desc: "lorem ipsum dolor sit amet",
  },
  {
    img: "./assets/imgs/img-3.jpg",
    heading: "Tiêu đề bài viết 3",
    desc: "lorem ipsum dolor sit amet",
  },
];

for (var index in array) {
  var str;
  if (index % 2 === 0) {
    str = `
    <div class="products_items">
             <div class="products__imgs">
                 <img src="${array[index]["img"]}" alt="">
             </div>
             <div class="products__content">
                 <h2 class="heading-lv2">
                     ${array[index]["heading"]}
                 </h2>
                 <p class="desc">${array[index]["desc"]}</p>
     </div>
    `;
  } else {
    str = `
    <div class="products_items">
             <div class="products__imgs order">
                 <img src="${array[index]["img"]}" alt="">
             </div>
             <div class="products__content">
                 <h2 class="heading-lv2">
                     ${array[index]["heading"]}
                 </h2>
                 <p class="desc">${array[index]["desc"]}</p>
     </div>
    `;
  }

  document.body.insertAdjacentHTML("beforeBegin", str);
}
