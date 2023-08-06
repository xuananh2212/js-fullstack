var content =
  "lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non lorem ipsum dolor tuananh sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur tuananh adip non";

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

var position = str.toLowerCase().indexOf(keyword.toLowerCase());

content =
  content.slice(0, position) +
  `<span>${content.slice(position, position + keyword)}</span>` +
  content.slice(position + keyword.length);

console.log(content);
