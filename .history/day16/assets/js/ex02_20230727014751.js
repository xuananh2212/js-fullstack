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
       
        var numberS = numberX + numberY + ((numberZ ** numberM) / numberN);

        result.innerHTML = numberS;

    }else{
        result.innerHTML = "nhập giá trị n hoặc z  , giá trị n hoặc z phải khác 0";
    }

   

   

  


    
}