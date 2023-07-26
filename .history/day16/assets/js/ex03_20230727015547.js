function max(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");

    var z = document.getElementById("values-z");

    var result = document.getElementById("max-s");

    var numberX = Number(x.value);

    var numberY = Number(y.value);

    var numberZ = Number(z.value);

    if(numberX >= numberY && numberX >= numberZ){
        result.innerHTML = numberX;
    }else if( numberY >= numberX && numberY >= numberZ){
        result.innerHTML = numberY;
    }else{
        result.innerHTML = numberZ;
    }

}