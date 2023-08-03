var str = document.getElementById("desc");

var strSub = "Lorem ipsum";
var array = strSub.trim().split(/\s+/);

for (let i = 0; i < array.length; i++) {
  var element = document.createElement("span");
  element.innerText = array[i] + " ";
  element.className = "child";
  str.appendChild(element);

  console.log(array[i]);
}

const childElements = str.getElementsByClassName("child");
let n = childElements.length;
let i = 0;

setInterval(() => {
  if (i >= n) {
    i = 0;
  }
  if (i > 0) {
    childElements[i - 1].style.color = "black";
  }
  childElements[i].style.color = "red";
  if (i === n - 1) {
    childElements[i].style.color = "black";
  }
  i++;
}, 1000);

console.log(i);
