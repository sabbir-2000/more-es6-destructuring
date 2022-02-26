class TeamMember {
    name;

    address = 'bd'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'support web dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }

    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class studenCare extends TeamMember {
    buildARoutine() {
        console.log(this.name, 'build a routine', student)
    }
}


class NeptuneDev extends TeamMember {
    ditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app kore de', version)
    }
}


const aamir = new Support('amir khan', 'bd', 11);
const salman = new Support('solaiman ustad', 'dubai', 10);
const ritthik = new Support('rittik ustad', 'dubai', 5);
const allurjun = new Support('allurjun ustad', 'dubai', 3);

const alia = new studenCare('alia bhaatt', " mumbai");
const ash = new NeptuneDev('ash', 'mumbai', 'android studio')
ash.releaseApp('1.4.6')


// console.log(aamir);
// console.log(salman);

/* javascript class likhle MDn er article porle half bujhe jaba */