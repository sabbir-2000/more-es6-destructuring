// let and const
const hubby = 'omor sani';
let phone = 'iphone 13maxpro'
phone = 'motowala';
// templete string
const myNotes = `i am mojnu of ${hubby}.and i don't have any lali`;
console.log(myNotes);
// default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
// console.log(biggest);

// arrow function
const square = x => x * x;
console.log(square(9));
// function square(x){
//     return x*x;
// }


