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

setInterval((childElements) => {
  if (i >= n) {
    i = 0;
  }
  console.log(n);
  console.log(childElements[i].innerText);
}, 1000);
