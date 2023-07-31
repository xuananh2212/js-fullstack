function sortASC(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");

    var z = document.getElementById("values-z");

    var temp; //temporary

    var mySpan = document.getElementById("result");

    var numberX = Number(x.value);

    var numberY = Number(y.value);

    var numberZ = Number(z.value);

    if(numberX > numberY){
        temp = numberX;
        numberX = numberY;
        numberY  = temp;
    }
    if(numberX  > numberZ){
        temp = numberX;
        numberX = numberZ;
        numberZ  = temp;
    }
    if(numberY  > numberZ){
        temp = numberZ;
        numberZ = numberY;
        numberY  = temp;
    }
    mySpan.innerHTML = numberX + " ," + numberY +", " + numberZ ;



}