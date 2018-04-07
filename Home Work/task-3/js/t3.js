var array = [5,12,6,3,9,13,24,11];
function pair(array) 
{
    var total = 0;
    for(var i=0; i<array.length; i++)
    {
        if(array[i] % 2 == 0)
        {
            total += array[i];
        }
    }
    return total;
}
console.log(pair(array));