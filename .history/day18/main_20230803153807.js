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

setInterval((str) => {
    for (let i = 0; i < str.)

}, 1000);
