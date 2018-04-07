var array = [2,4,6,9,3];
function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++)
    {
        sum *= array[i];
    }
    return sum;
}
console.log(multiply(array));

