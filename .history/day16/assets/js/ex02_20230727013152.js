function sumS(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");

    var z = document.getElementById("values-z");

    var m = document.getElementById("values-m");

    var n = document.getElementById("values-n");

    var numberX = Number(x.value);

    var numberY = Number(y.value);

    var numberZ = Number(z.value);

    var numberM = Number(m.value);

    var numberN = Number(n.value);

    var sum = numberX + numberY + ((numberZ ** numberM)/2);

    var sumS = document.getElementById("sumS");

    sumS.innerHTML = sum;


    
}