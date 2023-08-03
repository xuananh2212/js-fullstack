var str = document.getElementById("desc");

var strSub = "Lorem ipsum dolor sit amet, consectetur adip";
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
  if (i >= 0) {
    childElements[i - 1].style.color = "black";
  }
  childElements[i].style.color = "red";
  i++;
}, 1000);
