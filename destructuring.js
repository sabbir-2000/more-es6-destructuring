const fish = {
    id: 58, name: 'king  Hilsha', price: 9000, phone: '0175564546', adress: 'chandpur', dress: 'silver'
};
// const phone = fish.phone;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id, } = fish;
console.log(phone);
console.log(phone, dress);
console.log(phone, id);

const company = {
    name: 'gp', CEO: { id: 1, name: 'ajmol', food: 'fuska' }, web: {
        work: 'website development', employe: 11, framework: 'react', tech: {
            first: 'html', second: 'css'
        }
    },
};
// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.CEO;
const { first } = company.web.tech;
console.log(work, framework, food, first);

