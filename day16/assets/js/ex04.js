function sameSign(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");


    var span = document.getElementById("result");

    var numberX = Number(x.value);

    var numberY = Number(y.value);

    if(numberX * numberY > 0){
        span.innerHTML = "cùng dấu";

    }else{
        span.innerHTML = "ngược dấu";
    }


   
}