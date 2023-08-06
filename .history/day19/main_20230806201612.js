var content =
  "lorem tuan anh ipsum dolor tuan anh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuan anh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuan anh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non";

var count = 0;
var keyword = "tuan anh";
var strwords = "";

// var arrayStr = str.split(" ");

// for (var i = 0; i < arrayStr.length; i++) {
//   if (arrayStr[i] === "tuananh") {
//     strwords += `<span> tuan anh </span> `;
//     count++;
//   } else {
//     strwords += arrayStr[i] + " ";
//   }
// }

// document.write(strwords);

// document.write("<br>so lan xuat hien: " + count);
console.log(content.length);
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
document.write(content);
while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>` +
    content.slice(position + keyword.length);
  console.log(result);

  content = content.slice(position + keyword.length);
  console.log(content);

  //   console.log(content);

  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  console.log(position);

  if (position !== -1) {
    content = count++;
  }
}

result += content;

document.write(result);
