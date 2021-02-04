// function doubleIt(number){
//     return number * 2;
// }
// const doubleIt = function myFun(number){
//     return number * 2;
// }
// ES6
const doubleIt = number => number *2;
const add = (x, y) => x + y;
const give5 = () => 5;
const big = (x, y) => {
    const sum = x + y;
    const diff = x  - y;
    const result = sum * diff;
    console.log(result);
    return result;
} 

const result = big(7, 5);
const result2 = give5();
console.log(result);