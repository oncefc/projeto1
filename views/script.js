function acenderLed (){
    $.post('/on',function(returnedData,statusRequest,xhr){
        alert("status: " + statusRequest + "data: " + returnedData);
    });
}
function apagarLed (){
    $.post('/off',function(returnedData,statusRequest,xhr){
        alert("status: " + statusRequest + "data: " + returnedData);
    });
}