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
console.log(content.length);

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
console.log(position);
console.log(content.length);
content =
  content.slice(0, position) +
  `<span>${content.slice(position, position + keyword.length)}</span>` +
  content.slice(position + keyword.length);
console.log(content);
console.log(position);

var result = "";
document.write(content);

while (position !== -1) {
  result += content.slice(0, position + keyword.length);

  content = content.slice(position + keyword.length);

  console.log(content);

  position = content.toLowerCase().indexOf(keyword.toLowerCase());

  if (position !== -1) {
    content =
      content.slice(0, position) +
      `<span>${content.slice(position, position + keyword.length)}</span>` +
      content.slice(position + keyword.length);

    count++;
  }
}

result += content;

document.write(result);
