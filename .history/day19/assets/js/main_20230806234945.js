// bai 1 Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

function isArrayInteger(array) {
  return array.every((items) => items % 1 === 0);
}

var array = [];

var max;
var min;

if (Array.isArray(array)) {
  if (isArrayInteger(array)) {
    if (array.length > 0) {
      max = array[0];
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
        }
        if (min > array[i]) {
          min = array[i];
        }
      }
    } else {
      console.log("danh sách rỗng");
    }
  } else {
    console.log("Không phải mảng số nguyên.");
  }
} else {
  console.log("không phải mảng. vui lòng xem lại biến");
}
