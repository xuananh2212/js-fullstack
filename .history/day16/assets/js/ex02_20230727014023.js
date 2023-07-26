function sumS(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");

    var z = document.getElementById("values-z");

    var m = document.getElementById("values-m");

    var n = document.getElementById("values-n");

    var result = document.getElementById("sum");

    var numberS;

    if(n !== 0 && z !== 0){
        var numberX = Number(x.value);

        var numberY = Number(y.value);
    
        var numberZ = Number(z.value);
    
        var numberM = Number(m.value);
    
        var numberN = Number(n.value);
    
        var numberS = numberX + numberY + ((numberZ ** numberM)/2);

        result.innerHTML = numberS;

    }else{
        result.innerHTML = "nhập giá trị n , z  , giá trị n, z phải khác 0";
    }

   

   

  


    
}