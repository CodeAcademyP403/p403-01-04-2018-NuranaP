var submitButton = document.querySelector('#submit');
var NumberInput = document.querySelector('#number');

var a=1;
var result = ' ';
function multiplication_table (a)
{
    var j = Number(prompt("ededi daxil edin: "));    
    for(var i=1; i<11; i++)
    {
        result += j + "*" + i + "="+ j*i + '\n';        
    }
    return result;
}
submitButton.onclick = function()
{
    var NumberValue = Number(NumberInput.value);
    if(NumberValue)
    {
        console.log(multiplication_table (a));
    }
    else
    {
        alert("Bosluq daxil etmeyin.");
    }
}