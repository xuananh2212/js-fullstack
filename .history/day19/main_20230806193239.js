var content =
  "lorem tuananh ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non";

var count = 0;
var keyword = "tuananh";
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

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
console.log(position);

content =
  content.slice(0, position) +
  `<span>${content.slice(position, position + keyword)}</span>` +
  content.slice(position + keyword.length);

document.write(content);
