class Support {
    name;
    designation = 'support web dev';
    address = 'bd'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('amir khan', 'bd');
const salman = new Support('solaiman ustad', 'dubai');
const ritthik = new Support('rittik ustad', 'dubai');
const allurjun = new Support('allurjun ustad', 'dubai');
aamir.startSession();
salman.startSession();
ritthik.startSession();
allurjun.startSession();
console.log(aamir, salman, ritthik, allurjun);
// console.log(aamir);
// console.log(salman);