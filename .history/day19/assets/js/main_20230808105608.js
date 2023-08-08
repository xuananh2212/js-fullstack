// bai 1 Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

function isArrayInteger(array) {
  return array.every((items) => items % 1 === 0);
}
console.log(
  "=================================bai 1 ==========================================="
);
var array = [1, 4, -3, 4, 5, 6];

var max;
var min;
var indexMax = 0;
var indexMin = 0;

if (Array.isArray(array)) {
  if (isArrayInteger(array)) {
    if (array.length > 0) {
      max = array[0];
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
          indexMax = i;
        }
        if (min > array[i]) {
          min = array[i];
          indexMin = i;
        }
      }
      console.log(`giá trị max là : ${max} vị trí index ${indexMax}`);
      console.log(`giá trị min là : ${min} vị trí index ${indexMin}`);
    } else {
      console.log("danh sách rỗng");
    }
  } else {
    console.log("Không phải mảng số nguyên.");
  }
} else {
  console.log("không phải mảng. vui lòng xem lại biến");
}

console.log(
  "=================================bai 2 ==========================================="
);
var array = [1, 2, 3, 4, 5, 6, 7, 8, 6, 4];
var count = 0;
var sum = 0;

function isPrime(number) {
  if (number % 1 !== 0 || number < 2 || (number % 2 === 0 && number !== 2))
    return false;
  for (let i = 5; i <= Math.sqrt(number); i += 2)
    if (number % i === 0) return false;
  return true;
}

if (Array.isArray(array)) {
  if (isArrayInteger(array)) {
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
          sum += array[i];
          count++;
        }
      }
      if (count === 0) {
        console.log(" không có số nguyên tố ");
      } else {
        console.log(`Trung bình các số nguyên tố là : ${sum / count}`);
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

console.log(
  "=================================bai 3 ==========================================="
);

var array = [
  1,
  null,
  null,
  2,
  1,
  3,
  "tuan",
  "nam",
  "tung",
  "ha",
  "tung",
  undefined,
  undefined,
  undefined,
];

function uniqueArray(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    var flag = true;
    for (var j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result[result.length] = array[i];
    }
  }

  return result;
}

if (Array.isArray(array)) {
  if (array.length > 0) {
    var total = uniqueArray(array);
    console.log(total);
  } else {
    console.log("mảng rỗng");
  }
} else {
  console.log("không phải mảng");
}

console.log(
  "=================================bai 4 ==========================================="
);

var array = [5, 1, 9, 8, 10];
var element = 4;
if (Array.isArray(array)) {
  if (isArrayInteger(array)) {
    if (array.length > 0) {
      array.sort((a, b) => a - b);
      for (var i in array) {
        if (element < array[i]) {
          break;
        }
        console.log(i);
        array.splice(i, 0, element);
      }
      console.log(array);
    } else {
      console.log("danh sách rỗng");
    }
  } else {
    console.log("Không phải mảng số nguyên.");
  }
} else {
  console.log("không phải mảng. vui lòng xem lại biến");
}
