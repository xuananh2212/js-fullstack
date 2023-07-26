function sumS(){
    var x = document.getElementById("values-x");

    var y = document.getElementById("values-y");

    var z = document.getElementById("values-z");

    var m = document.getElementById("values-m");

    var n = document.getElementById("values-n");

    var result = document.getElementById("sum");

    var numberX = Number(x.value);

    var numberY = Number(y.value);

    var numberZ = Number(z.value);

    var numberM = Number(m.value);

    var numberN = Number(n.value);


    var numberS;

    if(numberN !== 0 && numberZ !== 0){
       
        var numberS = numberX + numberY + ((numberZ ** numberM)/2);

        result.innerHTML = numberS;

    }else{
        result.innerHTML = "nhập giá trị n , z  , giá trị n, z phải khác 0";
    }

   

   

  


    
}