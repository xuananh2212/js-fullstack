var str = document.getElementById("desc");

setInterval(() => {
  for (let i = 0; i < str.innerHTML.length; i++) {
    console.log(str.innerHTML[i]);
  }
}, 1000);
