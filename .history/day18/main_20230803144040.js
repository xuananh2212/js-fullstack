var str = document.getElementById("desc").innerHTML;

setInterval(() => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}, 1000);
