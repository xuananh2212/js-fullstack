function sortASC(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");

    var z = document.getElementById("values-z");

    var str ="";

    var mySpan = document.getElementById("result");

    var numberX = Number(x.value);

    var numberY = Number(y.value);

    var numberZ = Number(z.value);

    if(numberX <= nubmerY && numberX  <= numberZ){
        str += numberX +" ";
    }
    if(numberY <= nubmerX && numberY  <= numberZ){
        str += numberY +" ";
    }
    if(numberZ <= nubmerY && numberZ  <= numberX){
        str += numberZ +" ";
    }
    mySpan.innerHTML = str;



}