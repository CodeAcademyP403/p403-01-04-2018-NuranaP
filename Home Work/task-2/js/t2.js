var array = [2,5,9,7,3];
function total(array) 
{
    var total = 0;
    for(var i=0; i<array.length; i++)
    {
        total += Math.pow(array[i], 2);
    }
    return total;
}
console.log(total(array));