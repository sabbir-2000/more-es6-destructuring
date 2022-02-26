const numbers = [5, 13, 10, 54, 86, 75, 3, 2, 42];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10)
// console.log(smallNumbers);

const products = [
    {
        name: 'water bottle', price: 50, color: 'yellow'
    },

    {
        name: 'phone', price: 15000, color: 'black'
    },
    {
        name: 'wacth', price: 1200, color: 'black'
    },
    {
        name: 'mog', price: 20, color: 'green'
    }];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'blue')
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'black');
// console.log(whiteItem);



