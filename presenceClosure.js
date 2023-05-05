function checkNum(arr)
{
    return function (num) {
       return arr.includes(num);
    }
}


const arr =[1,2,3,4,5];
num=checkNum(arr);
console.log(num(3));
console.log(num(6));


// Output:
// true
// false