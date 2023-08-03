var str = document.getElementById("desc");

setInterval(() => {
  for (let i = 0; i < str.innerHTML.length; i++) {
    str.innerHTML[i].style.color = "black";
  }
}, 1000);
