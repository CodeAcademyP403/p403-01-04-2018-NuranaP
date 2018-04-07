var NumberInput = document.querySelector('#array');
var submitButton = document.querySelector('#submit');
var array = [];
submitButton.onclick = function(){
    var NumberValue = Number(NumberInput.value);
    array.push(NumberValue);
    console.log(array);
    for(var i=0; i<array.length; i++){
        if(array[i]<array[i+1]){
            console.log(array[i+1]);
            var max = array[0];
            if(array[i]>max){
                max = array[i];
            }
        }
        else{
            console.log(array.join("*"));
        }
    }
}