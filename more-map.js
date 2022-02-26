const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// 
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
        name: 'mog', price: 120, color: 'green'
    }


]

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.color);
// console.log(productPrice);

/* extra short without variable declare */
products.map(x => console.log(x.color));

/* forEach() akta bisoy ache seta pray map er moto but aktu difference ache. */

// products.forEach(product => console.log(product))

