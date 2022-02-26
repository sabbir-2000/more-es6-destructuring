// declare variable based on the name of an object property..
const myObject = { x: 2, y: 20, z: 600, a: 54, b: 65 };
const { x, b } = myObject;
// console.log(x, b);
// destructuring array..
const [p, q] = [15, 31];
// console.log(p, q);

const company = {
    name: 'gp', CEO: { id: 1, name: 'ajmol', food: 'fuska' }, web: {
        work: 'website development', employe: 11, framework: 'react', tech: {
            first: 'html', second: 'css'
        }
    },
};
// question mark dei hocce jokhon kono property thakbe na object e othoco amra akata property declare kore dilam tai egula k read kore kore vitore jay ? mark cinho..and kono property na thakle and ? mark cinho dile sei jaygy stop hoie jay
console.log(company?.bakend?.bite);