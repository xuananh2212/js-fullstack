// bai 1 Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

function isArrayInteger(array) {
  return array.every((items) => items % 1 === 0);
}

var array = [1, 2, 3, 4.1, 5, 6, 7, 4];

if (Array.isArray(array)) {
  if (isArrayInteger(array)) {
  } else {
    console.log("Không phải mảng số nguyên.");
  }
} else {
  console.log("không phải mảng. vui lòng xem lại biến");
}
