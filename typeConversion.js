ConvertToNumber = (inp) =>
{
try {
if(isNaN(inp))
{
    throw new Error("Invalid number")
}
else {
console.log(inp);
}
}
catch(error) {
    console.log(error.message);
}
}

let num="123";
let str="abc";
ConvertToNumber(num);
ConvertToNumber(str);

// Output:
// 123
// Invalid number