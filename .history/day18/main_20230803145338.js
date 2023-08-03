var str = document.getElementById("desc");

setInterval(() => {
  for (let i = 0; i < str.innerHTML.length; i++) {
    str.innerHTML[i].style.color = `red`;
  }
}, 1000);
