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

if (Array.isArray(arr)) {
} else {
}
