const numbers = [4, 6, 8, 12];
const outPut2 = [];
// function doubleOld(number){
//     return number *2;

// }

const doubleIt = number => number * 2;

// for (const number of numbers) {
//     const result = doubleIt(number);
//     outPut2.push(result);

// }

// console.log(outPut2);

// 1.loop through each element
// 2. for each element call the provided function
// 3.result for eaach element will be stored in an arry 


// const outPut = numbers.map(number => number * 2);
/* short version */
const outPut = numbers.map(p => p * 2)
console.log(outPut);

const squares = numbers.map(x => x * x);
console.log(squares);




/* short version */
const num = [4, 6, 8, 12];

// const sum = num => num * 2;
const total = num.map(x => x + 5);
console.log(total);