console.log(
  `=======================Bai 1 Lấy kết quả giao giữa 2 mảng ========================================`
);

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1, 3];

if (Array.isArray(arrA) && Array.isArray(arrB)) {
  const result = arrA.reduce((prev, current) => {
    return arrB.includes(current) && prev.push, prev;
  }, []);
  console.log(result);
} else {
  console.log("arrA hoặc arrB không phải mảng");
}
