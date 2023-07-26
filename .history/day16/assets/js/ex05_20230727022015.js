function sortASC(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");

    var z = document.getElementById("values-z");

    var str ="";

    var mySpan = document.getElementById("result");

    var numberX = Number(x.value);

    var numberY = Number(y.value);

    var numberZ = Number(z.value);

    if(numberX <= numberY && numberX  <= numberZ){
        str += numberX +" ";
    }
    if(numberY <= numberX && numberY  <= numberZ){
        str += numberY +" ";
    }
    if(numberZ <= numberY && numberZ  <= numberX){
        str += numberZ +" ";
    }
    mySpan.innerHTML = str;



}